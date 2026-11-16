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

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}
