import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div>
      {/* Large outlined number */}
      <h2
        className="text-8xl font-bold font-mono leading-none mb-4"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #41404A",
        }}
      >
        {project.number}
      </h2>

      <h3 className="text-2xl font-bold font-mono text-primary mb-3">
        {project.title}
      </h3>

      <p className="text-sm font-mono text-secondary leading-relaxed mb-4">
        {project.description}
      </p>

      <p className="text-sm font-mono text-accent leading-relaxed mb-6">
        {project.technologies.join(", ")}
      </p>

      <div className="h-px bg-border w-full mb-6" />

      <div className="flex items-center gap-3 flex-wrap">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-200"
          >
            <ArrowUpRight size={18} />
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-200"
        >
          <FaGithub size={18} />
        </a>
        {project.status === "in-development" && (
          <span className="text-xs font-mono text-muted border border-border px-3 py-1 rounded-full">
            In Development
          </span>
        )}
      </div>

      {project.achievements && project.achievements.length > 0 && (
        <div className="mt-5 space-y-1">
          {project.achievements.map((a, i) => (
            <p key={i} className="text-xs font-mono text-muted">
              ✦ {a}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
