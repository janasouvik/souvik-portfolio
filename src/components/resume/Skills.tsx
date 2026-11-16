import { skillCategories } from "@/data/skills";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGit,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiFramer,
  SiOpencv,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGit,
  FaDocker,
  FaPython,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  TbBrandVscode,
  SiFramer,
  SiOpencv,
};

export default function Skills() {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  return (
    <div>
      <h3 className="text-2xl font-bold font-mono text-primary mb-2">My Skills</h3>
      <p className="text-sm font-mono text-secondary mb-6">
        Technologies and tools I use, practice and continue to explore.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {allSkills.map((skill) => {
          const Icon = iconMap[skill.icon];
          return (
            <div
              key={skill.name}
              title={skill.name}
              className="bg-secondary border border-border h-24 rounded-sm flex flex-col items-center justify-center gap-2 hover:border-accent transition-colors duration-200 group cursor-default"
            >
              {Icon ? (
                <Icon
                  size={32}
                  className="text-muted group-hover:text-accent transition-colors duration-200"
                />
              ) : (
                <span className="text-xs font-mono text-muted text-center px-1 group-hover:text-accent">
                  {skill.name.slice(0, 2)}
                </span>
              )}
              <span className="text-[11px] font-mono text-secondary group-hover:text-primary transition-colors duration-200">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
