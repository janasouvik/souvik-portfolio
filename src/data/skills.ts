export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string; // react-icons component name or custom
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "FaHtml5" },
      { name: "CSS3", icon: "FaCss3Alt" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "React.js", icon: "FaReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "FaNodeJs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "Python", icon: "FaPython" },
      { name: "FastAPI", icon: "SiFastapi" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Prisma ORM", icon: "SiPrisma" },
      { name: "SQL", icon: "SiMysql" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "FaGit" },
      { name: "GitHub", icon: "FaGithub" },
      { name: "VS Code", icon: "TbBrandVscode" },
      { name: "Docker", icon: "FaDocker" },
    ],
  },
  {
    category: "Additional",
    skills: [
      { name: "Framer Motion", icon: "SiFramer" },
      { name: "OpenCV", icon: "SiOpencv" },
    ],
  },
];
