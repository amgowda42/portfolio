type Project = {
  name: string;
  accent: string;
  bullets: string[];
};

type Experience = {
  id: number;
  period: string;
  role: string;
  company: string;
  location: string | null;
  current: boolean;
  bullets: string[];
  skills: string[];
  projects: Project[] | null;
};

export const experiences: Experience[] = [
  {
    id: 1,
    period: "Jun 2022 – Aug 2022",
    role: "Full Stack Web Developer Intern",
    company: "Internship",
    location: null,
    current: false,
    bullets: [],
    skills: ["JavaScript"],
    projects: null,
  },
  {
    id: 2,
    period: "Jul 2024 – Jan 2025",
    role: "Software Developer",
    company: "Sticky HR",
    location: "Bangalore, India",
    current: false,
    bullets: [
      "Built the entire front-end of Sticky HR — a comprehensive HRMS — delivering up to 70% of the MVP from scratch.",
      "Established the front-end architecture, design system, and code structure from the ground up.",
      "Collaborated with UI/UX designers to deliver a seamless interface aligned with design specifications.",
      "Integrated APIs using RTK Query, centralizing state management and ensuring optimal performance.",
    ],
    skills: ["React.js", "Redux.js"],
    projects: null,
  },
  {
    id: 3,
    period: "Jan 2025 – Present",
    role: "Software Developer",
    company: "BlipSnip Group (CertValue)",
    location: "Bangalore, India",
    current: true,
    bullets: [
      "Developed the frontend for a multi-role CRMS powering day-to-day operations at an ISO certification and audit firm.",
      " Refactored a legacy React codebase into a modular, role-based architecture supporting multiple user types.",
      "Led the design and development of a compliance platform's UI, taking sole ownership from architecture to delivery and ensuring a seamless user experience.",
      "Designed and developed backend APIs and a secure, robust authentication system powering core business workflows with Node.js and Express.js.",
      "Set up automated CI/CD pipelines and a Docker-based monorepo, streamlining deployments across team.",
      "Implemented full-stack observability using OpenTelemetry, Jaeger, Prometheus, and Grafana for distributed tracing and monitoring to catch performance issues early and ensure system reliability.",
      "Optimized database queries and implemented caching strategies using Redis.",
    ],
    skills: [
      "Next.js",
      "React.js",
      "Node.js",
      "Redux",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
    ],
    projects: null,
  },
];
