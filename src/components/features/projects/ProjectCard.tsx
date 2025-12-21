import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Code } from "lucide-react";
import { ProjectDetail } from "@/mock/projects";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { webRoutes } from "@/constants/route";
import { Button } from "@/components/ui";

interface ProjectCardProps {
  project: ProjectDetail;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      key={project.slug}
      className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg relative"
    >
      <Link
        key={project.slug}
        href={webRoutes.projectDetail({ slug: project.slug })}
        className="inset-0 z-10"
        aria-label={project.title}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.images[0].url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>

        <CardHeader className="mt-2">
          <CardTitle className="text-xl line-clamp-2">
            {project.title}
          </CardTitle>

          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>

          <div className="flex items-center gap-4 mt-4 w-full overflow-hidden">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-(--color-primary-light) text-white px-2 py-1 rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
      </Link>

      <CardAction className="w-full grid grid-cols-2 gap-4 px-6 mt-auto">
        <Button asChild>
          <a href={project.demoUrl}>
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
        <Button variant={"secondary"} asChild>
          <a href={project.sourceUrl}>
            <Code size={16} />
            Mã nguồn
          </a>
        </Button>
      </CardAction>
    </Card>
  );
}
