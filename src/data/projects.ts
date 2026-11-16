export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
  status: "completed" | "in-development" | "planned";
  achievements?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "TaxPilot — Automated Tax Filing Assistant",
    description:
      "An automated tax filing assistant designed to simplify financial document processing and tax-related workflows for individuals and SMEs.",
    technologies: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Setu API"],
    image: "/images/projects/taxpilot.png",
    githubUrl: "https://github.com/janasouvik",
    liveUrl: "",
    category: "Full Stack",
    status: "in-development",
    achievements: [
      "Authentication system",
      "PAN verification integration",
      "Aadhaar–PAN linkage status workflow",
      "OCR-based financial document extraction",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "NASA CLPS Lunar Mission Browser",
    description:
      "An interactive lunar mission visualization and research workspace designed to explore NASA Commercial Lunar Payload Services missions, lunar landing regions and terrain information.",
    technologies: ["React", "TypeScript", "OpenLayers", "Proj4js", "NASA datasets", "Geospatial visualization"],
    image: "/images/projects/lunar-mission-browser.png",
    githubUrl: "https://github.com/janasouvik",
    liveUrl: "",
    category: "Research",
    status: "completed",
    achievements: [
      "Lunar terrain visualization",
      "Mission and landing-site exploration",
      "Scientific map interface",
      "Lunar surface data integration",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "AI-Driven Hyper-Local Business Advisory",
    description:
      "An AI-driven advisory platform designed to support rural micro-entrepreneurs through hyper-local business insights and financial structuring assistance.",
    technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "AI integration"],
    image: "/images/projects/rural-business-ai.png",
    githubUrl: "https://github.com/janasouvik",
    liveUrl: "",
    category: "AI",
    status: "completed",
    achievements: [
      "Selected as winning team — SIH internal round",
      "Team: Innovision",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Mifos Web App — Open Source",
    description:
      "Open-source contribution work involving the Mifos Web App ecosystem, collaborative development and codebase improvements.",
    technologies: ["Angular", "TypeScript", "Git", "GitHub", "GitHub Actions"],
    image: "/images/projects/mifos-web-app.png",
    githubUrl: "https://github.com/openMF/web-app",
    liveUrl: "",
    category: "Open Source",
    status: "in-development",
    achievements: [
      "Open-source contribution and collaborative software development",
    ],
  },
];
