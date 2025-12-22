import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ProjectImage } from "@/mock/projects";
import Image from "next/image";

interface Props {
  galery: ProjectImage;
}

export default function GaleryCard({ galery }: Props) {
  return (
    <Card className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg relative">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={galery.url}
          alt={galery.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <CardHeader className="mt-2">
        <CardTitle className="text-xl"> {galery.title} </CardTitle>
        <CardDescription> {galery.subtitle} </CardDescription>
      </CardHeader>
    </Card>
  );
}
