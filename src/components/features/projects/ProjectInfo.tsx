import { Button } from "@/components/ui";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectDetail } from "@/mock/projects";
import { Code, ExternalLink } from "lucide-react";

interface Props {
  project: ProjectDetail;
}

export default function ProjectInfo({ project }: Props) {
  return (
    <Card
      key={project.slug}
      className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg relative"
    >
      <CardHeader className="mt-2">
        <CardTitle className="text-xl">Thông tin dự án</CardTitle>
          <p className="text-gray-500 mt-2">Vai trò</p>
          <p className="text-xl">{project.projectInfo.status}</p>
          <p className="text-gray-500 mt-2">Thời gian</p>
          <p className="text-xl">{project.projectInfo.timeline}</p>
          <p className="text-gray-500 mt-2">Công nghệ sử dụng</p>
          <div className="flex gap-4 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-(--color-primary-light) text-white px-3 py-2 rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
      </CardHeader>
      <CardAction className="w-full grid grid-cols-1 gap-4 px-6 mt-auto">
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
