export interface SocialProfile {
  name: string;
  url: string;
  username: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'file-text' | 'globe';
  primary?: boolean;
  color?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
}

export interface ProjectCaseStudy {
  overview: string;
  challenge: string;
  solution: string;
  architecture: string[];
  results: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Distributed Systems' | 'Developer Tools' | 'Full-Stack SaaS' | 'Cloud & DevOps' | 'AI & Data';
  description: string;
  featured: boolean;
  metrics: MetricItem[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  caseStudy: ProjectCaseStudy;
  stars?: number;
  featuredBadge?: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'Databases' | 'Architecture';
  level: 'Expert' | 'Advanced' | 'Proficient';
  years: number;
  highlight?: boolean;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Advisory';
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  honors?: string;
  focus: string;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  subtitle: string;
  bioHeadline: string;
  bioParagraphs: string[];
  location: string;
  email: string;
  availability: string;
  yearsOfExperience: number;
  principles: {
    title: string;
    description: string;
  }[];
  socialProfiles: SocialProfile[];
  projects: Project[];
  skills: SkillItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
}
