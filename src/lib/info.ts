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
      "Full-stack engineer on the customs and freight-forwarding platform: about 1,700 commits across the React + TanStack + Convex front end and the Django + Celery back end, covering declaration workflows, automation rules, shipment tracking, CRM and billing.",
      "Built TariffChat™, an AI tariff classification assistant (Next.js, AI SDK, pgvector search, web research tools) now used by 300+ customs brokers, with 35,000+ classifications across APAC.",
      "Core contributor to the transport management system for Qube: Convex realtime back end, an Expo driver app and a React fleet portal, including the customs integration module.",
      "Built LLM classification services for AU, NZ, UK, US, CA and SG tariffs with FastAPI and pydantic-ai, grounding answers in source text to cut unsupported citations.",
      "Run an internal AI engineering agent that starts Claude Code and Codex sessions from Slack, with automated PR review and a live session viewer.",
    ],
    skills: ["TanStack", "Convex", "Django", "AI SDK", "pydantic-ai", "AWS CDK", "Rust"],
    link: "https://clear.ai",
  },
  {
    company: "Clear.ai",
    role: "Junior Software Engineer",
    date: "May 2025 – Oct 2025",
    location: "Sydney · On-site",
    highlights: [
      "Shipped early AI prototypes for customs brokerage: a broker agent, AI document extraction for invoices and customs data, and a customs entry audit tool.",
    ],
    skills: ["Next.js", "FastAPI", "Gemini", "Prisma", "Convex"],
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
    stack: ["Next.js", "AI SDK", "pgvector", "Postgres"],
    label: "Clear.ai · production",
  },
  {
    title: "Transport management for Qube",
    year: "2025–26",
    summary: "Realtime TMS with a driver tablet app, a fleet portal and customs integration for a large Australian logistics operator.",
    stack: ["Convex", "Expo", "React", "TanStack Router"],
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
  { label: "AI & LLMs", items: ["AI SDK", "pydantic-ai", "LangGraph", "RAG & pgvector", "Document extraction", "Claude", "Gemini", "OpenAI"] },
  { label: "Backend", items: ["Python", "Django", "Celery", "FastAPI", "Convex", "Hono", "Bun", "Rust (Axum)"] },
  { label: "Frontend", items: ["TypeScript", "React", "Next.js", "TanStack", "Tailwind CSS", "shadcn/ui", "Expo"] },
  { label: "Data & infra", items: ["PostgreSQL", "Redis", "Prisma", "Drizzle", "AWS CDK", "Docker", "Vercel", "GitHub Actions"] },
];

export const skills = skillGroups.flatMap((g) => g.items);
