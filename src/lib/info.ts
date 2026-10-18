import type { StaticImageData } from "next/image";
import gptForHealth from "../../public/gpt_for_health.png";
import zoomSummariser from "../../public/zoom_summariser_result.png";
import navifi from "../../public/creator_tcs.jpg";

export const profile = {
  name: "Patrick Nguyen",
  role: "Software Engineer at Clear.ai",
  location: "Sydney, Australia",
  email: "Patrick.Nguyen01@outlook.com",
  github: "https://github.com/Phat0101",
  linkedin: "https://www.linkedin.com/in/patrick-nguyen-44766a188/",
  youtube: "https://www.youtube.com/@patricknguyen-0101",
  resume: "/Patrick_Resume.pdf",
};

export interface Experience {
  company: string;
  role: string;
  date: string;
  location: string;
  highlights: string[];
  skills: string[];
  link?: string;
}

export interface Project {
  title: string;
  year: string;
  summary: string;
  stack: string[];
  link?: string;
  image?: StaticImageData;
  label?: string;
}

export const experiences: Experience[] = [
  {
    company: "Clear.ai",
    role: "Software Engineer",
    date: "Nov 2025 – Present",
    location: "Sydney · On-site",
    highlights: [
      "Build full-stack features across Clear.ai's freight forwarding, customs and transport management products.",
      "Work on TariffChat™, an AI tariff classification assistant used by 400+ customs brokers at 100+ organisations across APAC, with 35,000+ classifications.",
      "Build LLM-powered classification and document workflows that help brokers work faster and more accurately.",
      "Lead features from customer conversations through design and delivery.",
    ],
    skills: ["Full-stack", "AI agents", "LLMs", "Project management", "Leadership"],
    link: "https://clear.ai",
  },
  {
    company: "Clear.ai",
    role: "Junior Software Engineer",
    date: "May 2025 – Oct 2025",
    location: "Sydney · On-site",
    highlights: [
      "Engineered software and AI solutions for customs brokerage.",
    ],
    skills: ["Generative AI", "LLMs", "Full-stack"],
  },
  {
    company: "QRisk",
    role: "Junior Full-stack Developer",
    date: "Feb 2025 – May 2025",
    location: "Queensland · Remote contract",
    highlights: ["Maintained and extended cyber-risk quantification software based on Open FAIR."],
    skills: ["Next.js", "FastAPI", "Prisma", "AWS"],
  },
  {
    company: "Tata Consultancy Services × Creators Club",
    role: "Full-stack Developer Intern",
    date: "Oct 2024 – Feb 2025",
    location: "North Sydney · Hybrid",
    highlights: [
      "Co-founded NaviFi, an AI investment research and community platform, built with TCS for their Shark Tank competition.",
      "Mentored club members and wrote the SkillPies GitHub course.",
    ],
    skills: ["Agentic RAG", "Prisma", "Pitching"],
  },
  {
    company: "Western Sydney University",
    role: "Software Engineer, GPT for Health",
    date: "Jul 2024 – Dec 2024",
    location: "School of Medicine · Research",
    highlights: ["Built an LLM system that simulates family scenarios for medical students, and studied how students respond to it."],
    skills: ["Next.js", "TypeScript", "SQLite", "AWS"],
  },
  {
    company: "Western Sydney University",
    role: "Full-stack Developer Intern",
    date: "Mar 2024 – Nov 2024",
    location: "Kingswood · Hybrid",
    highlights: ["Replaced a file-based staff roster with a web app handling preferences, leave, holidays and calendar export."],
    skills: ["React", "Node.js", "MongoDB"],
  },
];

export const projects: Project[] = [
  {
    title: "TariffChat™",
    year: "2025",
    summary: "Free AI assistant for Australian customs brokers: tariff classification, concession orders and duty rates in one searchable chat.",
    stack: [],
    label: "Clear.ai · production",
  },
  {
    title: "Transport management system",
    year: "2025–26",
    summary: "Driver, fleet and dispatch tooling for a transport management product at Clear.ai.",
    stack: [],
    label: "Clear.ai · production",
  },
  {
    title: "Claude Code Diff Review",
    year: "2026",
    summary: "VS Code and Cursor extension that lets Claude Code edit at full speed, then shows every change as a diff to keep or revert in one batch.",
    stack: ["Claude Code hooks", "Bun", "VS Code API"],
    label: "Open source",
    link: "https://github.com/Phat0101/claude-diff-review",
  },
  {
    title: "GPT for Health",
    year: "2024",
    summary: "Simulated patients and families for medical students in WSU's Health Across the Lifespan workshops.",
    stack: ["Next.js", "LLMs", "SQLite", "AWS"],
    image: gptForHealth,
  },
  {
    title: "Zoom Summariser",
    year: "2024",
    summary: "Splits a multi-speaker transcript by speaker and timeframe, then summarises each part with custom LLM prompts.",
    stack: ["Next.js", "Gemini", "TypeScript"],
    link: "https://zoom-summariser.vercel.app/",
    image: zoomSummariser,
  },
  {
    title: "NaviFi",
    year: "2024",
    summary: "AI investment research and community platform, co-founded with Tata Consultancy Services mentorship.",
    stack: ["Agentic RAG", "Next.js", "Chrome extension"],
    image: navifi,
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "AI & LLMs", items: ["AI SDK", "LangGraph", "RAG", "Document extraction", "Claude", "Gemini", "OpenAI"] },
  { label: "Backend", items: ["Python", "Django", "FastAPI", "Node.js", "Convex", "Hono", "Bun", "Rust"] },
  { label: "Frontend", items: ["TypeScript", "React", "Next.js", "TanStack", "Tailwind CSS", "shadcn/ui", "Expo"] },
  { label: "Data & infra", items: ["PostgreSQL", "Redis", "Prisma", "Drizzle", "AWS", "Docker", "Vercel", "GitHub Actions"] },
];

export const skills = skillGroups.flatMap((g) => g.items);
