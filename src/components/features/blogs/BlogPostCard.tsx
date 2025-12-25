"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BlogDetail } from "@/mock/blog";
import Link from "next/link";
import { webRoutes } from "@/constants/route";

interface BlogCardProps {
  blog: BlogDetail;
}

export default function BlogPostCard({ blog }: BlogCardProps) {
  return (
    <Card
      key={blog.slug}
      className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg relative"
    >
      <Link
        key={blog.slug}
        href={webRoutes.blogDetail({ slug: blog.slug })}
        className="absolute inset-0 z-10"
        aria-label={blog.title}
      />

      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl line-clamp-2 group-hover:text-primary duration-300">
          {blog.title}
        </CardTitle>

        <CardDescription className="line-clamp-2">
          {blog.excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground mt-auto">
        {blog.publishedAt}
      </CardContent>
    </Card>
  );
}
