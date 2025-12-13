"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { mockBlogDetail } from "@/mock/blog";
import { Button } from "@/components/ui/button";

const {
  title,
  coverImage,
  content,
  publishedAt,
} = mockBlogDetail;

const TOTAL_BLOGS = 6;

function getPaginationPages(current: number, total: number) {
  const pages = new Set<number>();

  for (let i = 1; i <= 3 && i <= total; i++) {
    pages.add(i);
  }

  for (let i = current - 1; i <= current + 1; i++) {
    if (i > 0 && i <= total) {
      pages.add(i);
    }
  }

  for (let i = total - 2; i <= total; i++) {
    if (i > 0) {
      pages.add(i);
    }
  }

  return Array.from(pages).sort((a, b) => a - b);
}

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = 10;

  const pages = getPaginationPages(currentPage, totalPages);
  return (
    <div className="bg-background mt-20 p-5 w-[1440px] m-auto">
      <h1 className="text-4xl font-bold text-center pt-5 pb-3">Trang Blog</h1>
      <p className="text-lg text-center pb-10">Chia sẽ kiến thức về phát triển web, công nghệ và con đường sự nghiệp.</p>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: TOTAL_BLOGS }).map((_, index) => (
          <Card className="overflow-hidden">
            <img
              src={coverImage}
              alt={title}
              className="h-48 w-full object-cover"
            />

            <CardHeader>
              <CardTitle className="text-xl">
                {title}
              </CardTitle>
              <CardDescription>
                {content.substring(0, 150)}...
              </CardDescription>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
              {publishedAt}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Pagination className="mt-10">
        <PaginationContent>
          {/* PREVIOUS */}
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            />
          </PaginationItem>

          {/* PAGE NUMBERS */}
          {pages.map((page, index) => {
            const prevPage = pages[index - 1];

            return (
              <React.Fragment key={page}>
                {prevPage && page - prevPage > 1 && (
                  <PaginationItem>
                    <span className="px-2 text-muted-foreground">...</span>
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              </React.Fragment>
            );
          })}

          {/* NEXT */}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Button Contact*/}
      <Button className="fixed bottom-6 right-6 z-50 rounded-full px-6 py-4 shadow-lg">
        Liên hệ nhanh
      </Button>
    </div>
  )
};
