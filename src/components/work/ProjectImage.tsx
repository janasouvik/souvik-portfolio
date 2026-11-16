import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectImageProps {
  project: Project;
}

export default function ProjectImage({ project }: ProjectImageProps) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-sm overflow-hidden border border-border bg-secondary">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
