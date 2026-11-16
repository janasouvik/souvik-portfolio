export interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  organization?: string;
  description: string;
}

export interface EducationItem {
  id: string;
  date: string;
  degree: string;
  institution: string;
  location?: string;
  details?: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp1",
    date: "2025 – Present",
    role: "Full Stack Development & Project Engineering",
    description:
      "Building projects using JavaScript, TypeScript, React, Next.js, Node.js, PostgreSQL and related technologies.",
  },
  {
    id: "exp2",
    date: "2025 – Present",
    role: "Open Source Contributor",
    organization: "Mifos",
    description:
      "Exploring and contributing to the Mifos Web App ecosystem, working with Angular, GitHub and collaborative development workflows.",
  },
  {
    id: "exp3",
    date: "2025 – Present",
    role: "Hackathon & Research Projects",
    description:
      "Participating in software development competitions and developing projects in web engineering, AI and space technology.",
  },
];

export const education: EducationItem[] = [
  {
    id: "edu1",
    date: "2024 – 2028",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "AMC Engineering College",
    location: "Bengaluru, Karnataka, India",
    details: [
      "Current: 3rd Year, 5th Semester (as of November 2026)",
      "CGPA: 8.0",
    ],
  },
  {
    id: "edu2",
    date: "[YEAR]",
    degree: "School Education",
    institution: "[SCHOOL NAME]",
    location: "[LOCATION]",
    details: ["Board: [BOARD NAME]"],
  },
];
