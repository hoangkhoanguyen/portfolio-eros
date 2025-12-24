import { Button } from "@/components/ui";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectDetail } from "@/mock/projects";
import { Code, ExternalLink } from "lucide-react";
import TechTag from "./TechTag";

interface Props {
  project: ProjectDetail;
}

export default function ProjectInfo({ project }: Props) {
  return (
    <Card
      key={project.slug}
      className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg relative gap-2"
    >
      <CardHeader className="pt-4 px-4">
        <CardTitle className="text-xl">Thông tin dự án</CardTitle>
      </CardHeader>
      <CardContent className="px-4 mb-2">
        <p className="text-gray-500 mt-2">Vai trò</p>
        <p className="text-lg">{project.projectInfo.status}</p>
        <p className="text-gray-500 mt-4">Thời gian</p>
        <p className="text-lg">{project.projectInfo.timeline}</p>
        <p className="text-gray-500 my-2 mt-4">Công nghệ sử dụng</p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <TechTag key={tag}>{tag}</TechTag>
          ))}
        </div>
      </CardContent>
      <CardAction className="w-full grid grid-cols-1 gap-4 px-4 mt-auto">
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
