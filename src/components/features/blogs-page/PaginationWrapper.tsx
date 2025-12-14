'use client';
import { Pagination } from "@/components/ui/pagination";

interface PaginationWrapperProps {
  page: number;
  pageCount: number;
}

export function PaginationWrapper({ page, pageCount }: PaginationWrapperProps) {
  return (
    <Pagination
      page={page}
      pageCount={pageCount}
      onPageChange={(p) => {
        window.location.href = `/blogs?page=${p}`;
      }}
    />
  );
}