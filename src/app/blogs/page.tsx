"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { mockBlogDetail } from "@/mock/blog";
import { Button } from "@/components/ui/button";

const { title, coverImage, content, publishedAt } = mockBlogDetail;

/**
 * TODO:
 * - mô tả blog chỉ hiển thị tối đa 2 dòng
 * - thử cho 2 mock blog khác nhau với excerpt có độ dài khác nhau (blog 2 ngắn, blog 1 dài) và kiểm tra xem giao diện có ổn không
 * - dùng next/image để hiển thị ảnh nhưng k fix cứng chiều rộng ảnh
 * - thêm hover effect cho card blog: khi hover vào card thì ảnh phóng to nhẹ (phóng bên trong box), có shadow nhẹ
 * - tách component BlogCard riêng
 * - dùng Link để bọc card blog, link tới trang chi tiết blog
 * - gắn link /blogs vào menu chính trên header
 */

const TOTAL_BLOGS = 50;
const PAGE_SIZE = 6;

export default function BlogsPage() {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(TOTAL_BLOGS / PAGE_SIZE);

  return (
    <div className="bg-background mt-20 p-5 max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold text-center pt-5 pb-3">Trang Blog</h1>
      <p className="text-lg text-center pb-10">
        Chia sẻ kiến thức về phát triển web, công nghệ và con đường sự nghiệp.
      </p>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: PAGE_SIZE }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <img
              src={coverImage}
              alt={title}
              className="h-48 w-full object-cover"
            />

            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{content.substring(0, 150)}...</CardDescription>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
              {publishedAt}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination (CHỈ 1 DÒNG) */}
      <div className="mt-10">
        <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
      </div>

      {/* Button Contact */}
      <Button className="fixed bottom-6 right-6 z-50 rounded-full px-6 py-4 shadow-lg">
        Liên hệ nhanh
      </Button>
    </div>
  );
}
