export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "fullstack",
    number: "01",
    title: "Full Stack Web Development",
    description:
      "Building modern, responsive and scalable web applications using React, Next.js, Node.js and TypeScript.",
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend Development",
    description:
      "Creating responsive and interactive interfaces with modern frontend technologies, reusable components and clean design systems.",
  },
  {
    id: "backend",
    number: "03",
    title: "Backend & API Development",
    description:
      "Developing REST APIs, server-side logic, database integrations and authentication systems.",
  },
  {
    id: "ai",
    number: "04",
    title: "AI Integration & Automation",
    description:
      "Exploring practical AI-powered applications, intelligent workflows and integrations with modern web platforms.",
  },
];
