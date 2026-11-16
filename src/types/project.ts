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
