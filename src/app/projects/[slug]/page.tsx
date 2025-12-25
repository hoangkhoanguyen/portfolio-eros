import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import AppBreadcrumb from "@/components/layout/AppBreadcrumb";

import { mockProjectDetail } from "@/mock/projects";
import GaleryCard from "@/components/features/projects/GaleryCard";
import ProjectInfo from "@/components/features/projects/ProjectInfo";
import GallerySlider from "@/components/features/projects/GallerySlider";

export default async function ProjectDetail() {
  const project = mockProjectDetail;
  return (
    <div className="container mx-auto bg-background mt-20 p-5">
      {/* Breadcrumb */}
      <div className="py-2">
        <AppBreadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Dự án", href: "/projects" },
            { label: project.title },
          ]}
        />
      </div>

      {/* Post Title */}
      <h1 className="py-2 text-5xl font-bold hover:text-primary duration-300">
        {project.title}
      </h1>
      <p className="text-lg pb-10 text-muted-foreground">
        {project.description}
      </p>

      <div className="grid grid-cols-10 gap-6">
        {/* Left */}
        <div className="col-span-7 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 hover:text-primary duration-300">
            Thư viện ảnh
          </h2>
          <div className="mb-10">
            <GallerySlider>
              {project.images.map((galery) => (
                <GaleryCard galery={galery} key={galery.url} />
              ))}
            </GallerySlider>
          </div>
          <h2 className="text-3xl font-bold hover:text-primary duration-300">
            Mô tả dự án
          </h2>
          <div className="post-content">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {project.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-3 rounded-xl">
          <ProjectInfo project={project} />
        </div>
      </div>
    </div>
  );
}
