import { StaticImageData } from "next/image";
import gpt_for_health_img_url from "../../public/gpt_for_health.png"
import gpt_for_health_login_img_url from "../../public/gpt_for_health_login.png"
import creator_img_url from "../../public/creator.png"
import cretor_tcs_img_url from "../../public/creator_tcs.jpg"
import roster_img_url from "../../public/roster.png"
import zoom_summariser_img_url from "../../public/zoom_summariser.png"
import pass_img_url from "../../public/pass.png"
import pass_promo_img_url from "../../public/pass_promo.png"
import shdrlu_1_img_url from "../../public/shdrlu_1.png"
import shdrlu_2_img_url from "../../public/shdrlu_2.png"
// Define types
export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
  icon: string; // Change icon type to string
  skills: string[];
  images: string[] | StaticImageData[] | null;
  videos: string[] | null;
  link?: string; // Add link variable
}

export interface Project {
  title: string;
  date: string;
  description: string[];
  icon: string; // Change icon type to string
  skills: string[];
  images: string[] | StaticImageData[] | null;
  videos: string[] | null;
  link?: string; // Add link variable
}

export type Skill = string;

// Export variables
export const experiences: Experience[] = [
  {
    title: "Software Engineer, Project Manager",
    company: "Western Sydney University, School of Medicine - GPT for Health",
    date: "July 2024 - Present",
    description: [
      "Developed a scalable, AI-powered system to simulate realistic family scenarios for medical students.",
      "Implemented a user-friendly chat interface for students to interact with simulated patients and track their progress.",
      "Researching students' responses to LLMs and comparing those with real interactions."
    ],
    icon: "Beaker", // Use string for icon
    skills: ["Next.js", "React.js", "TypeScript", "SQlite", "AI", "Project Management"],
    images: [gpt_for_health_login_img_url, gpt_for_health_img_url],
    videos: [],
    // link: "https://example.com/gpt-for-health" // Example link
  },
  {
    title: "Software Engineer, Mentor",
    company: "Creators Club",
    date: "March 2024 - Present",
    description: [
      "Working on Chrome Extension project in partnership with Tata Consultancy Services to deliver customised AI functionalities using different models and RAG techniques.",
      "Developed SkillPies GitHub course, and mentoring new members on web-related technologies.",
      "Currently serving as forefront full-stack web developer and team leader for club projects."
    ],
    icon: "Code", // Use string for icon
    skills: ["Chrome Extension", "AI", "RAG", "Full-stack", "Mentoring"],
    images: [creator_img_url, cretor_tcs_img_url, ],
    videos: null,
  },
  {
    title: "Full-stack Developer Intern",
    company: "Western Sydney University - SSTaRs Staff Roster, Zoom Summariser (dev..)",
    date: "Feb 2024 - Present",
    description: [
      "Migrated the existing file-based process to an interactive web application that involves shift planning and presentation using React.js, Node.js, and MongoDB.",
      "Dynamically account for staff preferences: sick leaves, shift preferences; public and university holidays, etc.",
      "Allow users to add their shifts to different calendar apps, and export to csv and PDF formats."
    ],
    icon: "Briefcase", // Use string for icon
    skills: ["React.js", "Node.js", "MongoDB", "Web Development"],
    images: [roster_img_url, zoom_summariser_img_url],
    videos: null,
    link: "https://class-connect-wrv3.vercel.app/" // Example link
  },
  {
    title: "Maths Facilitator",
    company: "Western Sydney University - Peer Assisted Study Sessions",
    date: "Feb 2023 - June 2023",
    description: [
      "Helped peers in understanding statistics using RStudio and Python.",
      "Hosted weekly in-class and remote sessions, analysed students' results and prepared tailored materials.",
      "On average 30% improvement compared to previous semesters and 75% achieved Distinction and above."
    ],
    icon: "BookOpen", // Use string for icon
    skills: ["RStudio", "Python", "Statistics", "Teaching"],
    images: [pass_promo_img_url, pass_img_url],
    videos: [],
  }
]

export const projects: Project[] = [
  {
    title: "Mini-SHRDLU",
    date: "Feb 2023 - Jun 2023",
    description: [
      "Developed a solver for a simplified version of the SHRDLU board game, which involves moving blocks to achieve specified goals on a grid.",
      "Utilised C++ for its performance and standard library support for data structures like vectors, priority queues, and unordered sets."
    ],
    icon: "Cpu", // Use string for icon
    skills: ["C++", "Algorithms", "Data Structures"],
    images: [shdrlu_1_img_url, shdrlu_2_img_url],
    videos: null,
    link: "https://github.com/Phat0101/DSA-Project-Mini-SHDRLU"
  },
  {
    title: "Book Catalog",
    date: "Jan 2021 - May 2021",
    description: [
      "Categorising books based on genres, favourites, comments, etc.",
      "Used NodeJS, Express and JWT for the Backend, and MongoDB for the database.",
      "Used Bootstrap, JS and JQuery for Frontend.",
      "Heroku for deployment, Electron for cross-platform apps."
    ],
    icon: "BookMarked", // Use string for icon
    skills: ["NodeJS", "Express", "JWT", "MongoDB", "Bootstrap", "JQuery", "Heroku", "Electron"],
    images: [],
    videos: ["https://youtu.be/xgnlAQizc9U?si=t78PkNsKHJ3ibEG_"],
    link: "https://youtu.be/xgnlAQizc9U?si=t78PkNsKHJ3ibEG_"
  }
]

export const skills: Skill[] = [
  "C/C++", "Python", "JavaScript/TypeScript", "Java", "PHP", "SQL", "AWS",
  "React.js", "Next.js", "Node.js", "Express", "JQuery", "TailwindCSS",
  "Team-working", "Communication", "Problem-solving"
]
