import React from "react";
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";

import AppBreadcrumb from "@/components/layout/AppBreadcrumb";
import PostMeta from "@/components/features/blog-detail/PostMeta";
import AuthorInfo from "@/components/features/blog-detail/AuthorInfo"; 4
import { QuickContact } from "@/components/layout/QuickContact";
import Image from "next/image";

import { mockBlogDetail } from "@/mock/blog";
const BLOGS = mockBlogDetail;

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetail({ params }: Props) {
  const resolvedParams = await params;
  const blog = BLOGS.find((b) => b.slug === resolvedParams.slug)
  if (!blog) {
    return <div className="container mx-auto bg-background mt-20 p-5">Blog not found</div>
  }

  return (
    <div className="container mx-auto bg-background mt-20 p-5">
      {/* Breadcrumb */}
      <div className="py-2">
        <AppBreadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Blogs", href: "/blogs" },
            { label: blog.title },
          ]}
        />
      </div>

      {/* Post Meta */}
      <div className="py-10 flex align-center justify-center">
        <PostMeta
          date={blog.publishedAt}
          readTime={blog.readingTime}
          tags={blog.tags}
        />
      </div>

      {/* Post Title */}
      <h1 className="py-2 text-5xl font-bold text-center">{blog.title}</h1>

      {/* Author Info */}
      <div className="py-10 flex align-center justify-center">
        <AuthorInfo
          name={blog.author.name}
          avatar={blog.author.avatar}
        />
      </div>

      {/* Cover Image */}
      <div className="relative w-full h-[700px]">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      {/* Post Content */}
      <div className="
            prose prose-lg max-w-none py-10 w-[80%] m-auto 
            
            text-zinc-800 
            dark:text-zinc-200

            /* HEADINGS */
            prose-headings:text-blue-600
            dark:prose-headings:text-blue-400

            /* PARAGRAPH */
            prose-p:text-zinc-700
            dark:prose-p:text-zinc-300

            /* INLINE CODE: useState */
            prose-code:text-pink-600
            dark:prose-code:text-pink-400
            prose-code:bg-zinc-100
            dark:prose-code:bg-zinc-800
            prose-code:px-1 prose-code:rounded

            /* LINK */
            prose-a:text-blue-600
            dark:prose-a:text-blue-400
            prose-a:font-medium
            hover:prose-a:underline

            /* BLOCKQUOTE */
            prose-blockquote:text-zinc-600
            dark:prose-blockquote:text-zinc-400
            prose-blockquote:border-l-blue-500
      ">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {blog.content}
        </ReactMarkdown>
      </div>

      {/* Quick Contact */}
      <QuickContact />
    </div>
  )
}
