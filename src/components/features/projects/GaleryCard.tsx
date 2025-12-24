import { ProjectImage } from "@/mock/projects";
import Image from "next/image";

interface Props {
  galery: ProjectImage;
}

export default function GaleryCard({ galery }: Props) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-md cursor-pointer group">
      <Image
        src={galery.url}
        alt={galery.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(min-width: 768px) 33vw, 100vw"
      />
    </div>
  );
}
