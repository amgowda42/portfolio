"use client";

import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  github: string;
  title: string;
  subtitle: string;
  points: string[];
  tags: string[];
  accent: string;
}

const projects: Project[] = [
  {
    id: 1,
    github: "https://github.com/amgowda42/vehiclete.git",
    title: "Vehiclete",
    subtitle: "Complete Vehicle Platform",
    points: [
      "Unified platform for bikes, cars, and cycles with detailed specifications",
      "View pre-calculated EMI details for all vehicles",
      "Book test drive demos directly through the platform",
      "Comprehensive vehicle details, mileage, and pricing overview",
    ],
    tags: ["React.js", "Node.js", "MongoDB"],
    accent: "#6ee7b7",
  },
  {
    id: 2,
    github: "https://github.com/amgowda42/Goal_Setter.git",
    title: "Goal Setter",
    subtitle: "Progress Tracking App",
    points: [
      "MERN stack application to set, edit, and delete goals with ease",
      "Track progress visually and stay on top of milestones",
    ],
    tags: ["React.js", "Node.js", "MongoDB"],
    accent: "#4ade80",
  },
  {
    id: 3,
    github: "https://github.com/amgowda42/Hey-Food.git",
    title: "Hey-Food",
    subtitle: "Food Ordering Platform",
    points: [
      "Food ordering platform using live Swiggy GraphQL APIs",
      "Redux Toolkit for efficient cart state management",
      "Dynamic restaurant and menu data fetching",
      "Seamless add-to-cart with persistent store",
    ],
    tags: ["React.js", "Redux Toolkit"],
    accent: "#86efac",
  },
  {
    id: 4,
    github: "https://github.com/amgowda42/portfolio.git",
    title: "Personal Portfolio",
    subtitle: "This site",
    points: ["Modern dark-themed portfolio showcasing projects and skills"],
    tags: ["Next.js", "Vercel"],
    accent: "#34d399",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-(--border-subtle) bg-background py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mx-auto mb-10 text-center sm:mb-12">
          <span className="mb-4 inline-block rounded-full border border-(--border) bg-(--accent-dim) px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-(--accent-light)">
            Work
          </span>
          <h2 className="mb-4 text-balance text-[clamp(1.6rem,7vw,2.1rem)] font-bold tracking-[-0.02em] text-foreground">
            Featured Projects
          </h2>
          <div className="mx-auto h-0.75 w-10 rounded-full bg-linear-to-r from-(--accent) to-(--cyan)" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--bg-surface) p-5 no-underline transition duration-300 hover:-translate-y-1 hover:border-(--accent)/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7"
              style={{ boxShadow: `0 0 0 1px ${project.accent}10` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-60"
                style={{
                  background: `linear-gradient(90deg, ${project.accent}, transparent)`,
                }}
              />

              <div className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-lg border border-(--border) bg-(--bg-elevated) transition-colors duration-300 group-hover:border-(--accent)/50 group-hover:bg-(--accent-dim)">
                <ArrowUpRight className="size-4 text-(--text-dim) transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="mb-4 min-w-0 pr-10">
                <h3 className="mb-1 text-[1.05rem] font-bold tracking-[-0.01em] text-foreground">
                  {project.title}
                </h3>
                <p
                  className="m-0 text-xs opacity-80"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: project.accent,
                  }}
                >
                  {project.subtitle}
                </p>
              </div>

              <ul className="mb-5 flex flex-1 list-none flex-col gap-2 p-0">
                {project.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[0.845rem] leading-6 text-(--text-muted)"
                  >
                    <span
                      className="mt-px shrink-0 text-[10px]"
                      style={{ color: project.accent }}
                    >
                      ▸
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border px-2.5 py-1 text-[0.7rem] font-medium"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: `${project.accent}15`,
                      borderColor: `${project.accent}30`,
                      color: project.accent,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
