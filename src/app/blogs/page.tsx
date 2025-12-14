"use client";

import React, { useState } from "react";
import { Pagination } from "@/components/ui/pagination";
import { mockBlogDetail } from "@/mock/blog";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/ui/blog-card";

const TOTAL_BLOGS = mockBlogDetail.length;
const PAGE_SIZE = 6;

export default function BlogsPage() {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(TOTAL_BLOGS / PAGE_SIZE);

  return (
    <div className="bg-background mt-20 p-5 max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold text-center pt-5 pb-3">
        Trang Blog
      </h1>
      <p className="text-lg text-center pb-10">
        Chia sẻ kiến thức về phát triển web, công nghệ và con đường sự nghiệp.
      </p>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {mockBlogDetail.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination (CHỈ 1 DÒNG) */}
      <div className="mt-10">
        <Pagination
          page={page}
          pageCount={pageCount}
          onPageChange={setPage}
        />
      </div>

      {/* Button Contact */}
      <Button className="fixed bottom-6 right-6 z-50 rounded-full px-6 py-4 shadow-lg">
        Liên hệ nhanh
      </Button>
    </div>
  );
}
