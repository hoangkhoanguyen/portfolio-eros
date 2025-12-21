import React from "react";
import PillFilter from "@/components/features/projects/PillFilter";
import ProjectCard from "@/components/features/projects/ProjectCard";
import { mockProjectDetail } from "@/mock/projects";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto bg-background mt-20 p-5">
      <h1 className="text-4xl font-bold pt-5 pb-3">Những dự án tâm huyết</h1>

      {/* Filter */}
      <PillFilter />

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        <ProjectCard project={mockProjectDetail} />
      </div>
    </div>
  )
}
