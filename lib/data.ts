export type Project = {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  year: string;
  tint: string;
};

export type LogEntry = {
  id: string;
  title: string;
  category: string;
  description: string;
  status: string;
  url?: string;
};

export type Skill = {
  name: string;
  category: string;
  status: "using" | "learning";
};

export const projects: Project[] = [
  {
    id: "josaa-atlas",
    slug: "josaa-atlas",
    number: "01",
    name: "JoSAA Atlas",
    shortDescription:
      "Making JoSAA choices a little less like staring into the void.",
    longDescription:
      "A college predictor built to help JEE students explore institutes and branches using JoSAA opening and closing rank data.",
    status: "Built",
    technologies: ["React", "TypeScript", "Supabase"],
    githubUrl: "https://github.com/Aaravbuilds/josaaatlas",
    liveUrl: "https://josaaatlas.vercel.app",
    featured: true,
    year: "2026",
    tint: "#8b5cf6",
  },
  {
    id: "capitalflow",
    slug: "capitalflow",
    number: "02",
    name: "CapitalFlow",
    shortDescription:
      "A business money system built because spreadsheets eventually start fighting back.",
    longDescription:
      "A private finance and operations tool for managing business cash, expenses, bills, receipts, receivables and partner-held money.",
    status: "Building",
    technologies: [],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    year: "2026",
    tint: "#3b82f6",
  },
];

export const explorerLog: LogEntry[] = [
  {
    id: "cpp",
    title: "C++",
    category: "Learning",
    description: "Understanding what happens after the code actually runs.",
    status: "learning",
  },
  {
    id: "web",
    title: "Web",
    category: "Building",
    description: "Turning ideas into things people can click.",
    status: "building",
  },
  {
    id: "something-new",
    title: "Something new",
    category: "Inevitable",
    description: "Probably hasn't discovered it yet.",
    status: "inevitable",
  },
];

export const skills: Skill[] = [
  { name: "C++", category: "Languages", status: "learning" },
  { name: "JavaScript", category: "Languages", status: "using" },
  { name: "Python", category: "Languages", status: "learning" },
  { name: "HTML", category: "Web", status: "using" },
  { name: "CSS", category: "Web", status: "using" },
  { name: "Git", category: "Tools", status: "using" },
  { name: "GitHub", category: "Tools", status: "using" },
];

export const GH_USERNAME = "Aaravbuilds";
export const GH_URL = `https://github.com/${GH_USERNAME}`;

export const EMAIL = "aravpatel3301@gmail.com";
export const MAILTO = `mailto:${EMAIL}`;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Log", href: "#log" },
  { label: "About", href: "#about" },
];

export const socials = {
  github: GH_URL,
  email: EMAIL,
};

export type ExplorerMarkerState = {
  index: string;
  label: string;
};

export const explorerMarkerStates: ExplorerMarkerState[] = [
  { index: "00", label: "ARAV" },
  { index: "01", label: "BUILDS" },
  { index: "02", label: "MYSELF" },
  { index: "03", label: "LOG" },
  { index: "04", label: "TOOLS" },
  { index: "05", label: "FIELD" },
  { index: "06", label: "ABOUT" },
  { index: "07", label: "CONTACT" },
];
