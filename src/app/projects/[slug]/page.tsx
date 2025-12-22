import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import AppBreadcrumb from "@/components/layout/AppBreadcrumb";

import { mockProjectDetail } from "@/mock/projects";
import GaleryCard from "@/components/features/projects/GaleryCard";
import ProjectInfo from "@/components/features/projects/ProjectInfo";

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
      <h1 className="py-2 text-5xl font-bold">{project.title}</h1>
      <p className="text-lg pb-10">{project.description}</p>

      <div className="grid grid-cols-10 gap-6">
        {/* Left */}
        <div className="col-span-7 rounded-xl shadow">
          <h2 className="text-3xl">Thư viện ảnh</h2>
          <div className="flex items-center gap-4 mt-4 w-full overflow-hidden">
            {project.images.map((galery) => (
              <div className="w-[30%] shrink-0">
                <GaleryCard galery={galery} />
              </div>
            ))}
          </div>
          <div className="post-content m-1">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {project.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-3 rounded-xl shadow">
          <ProjectInfo project={project}/>
        </div>
      </div>
    </div>
  );
}
