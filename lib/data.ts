export const experiences = [
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
    bullets: [],
    skills: ["Next.js", "React.js", "Node.js", "Redux", "MongoDB"],
    projects: [
      {
        name: "Customer Relationship Management System (CRMS)",
        accent: "#06b6d4",
        bullets: [
          "Modernized system now actively used by 120+ daily users — streamlined ISO operations, operative lead tracking, and improved internal workflows.",
          "Led complete restructuring of a legacy React 18 frontend, refactoring 700+ line monolithic components into a clean, modular, role-based architecture.",
          "Replaced outdated routing and traditional Redux with modern React Router (Data Mode) for large-scale routing structures.",
          "Implemented Role-Based Access Control (RBAC) for strict route protection and standardized the overarching UI design system.",
        ],
      },
      {
        name: "Digital Personal Data Protection Act (DPDPA) Platform",
        accent: "#a78bfa",
        bullets: [
          "Took sole ownership of building over 90% of the entire frontend architecture.",
          "Interfaced directly with clients to gather and analyze technical requirements, translating needs into high-quality deliverables.",
        ],
      },
      {
        name: "HRMS & Visitor Pass",
        accent: "#4ade80",
        bullets: [
          "Managed ongoing maintenance, real-time data updates, and issue resolution across both products.",
        ],
      },
    ],
  },
];
