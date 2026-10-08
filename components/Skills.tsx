"use client";

import {
  FileJson,
  Database,
  GitBranch,
  Layers,
  Zap,
  Package,
  Server,
  Sparkles,
  Leaf,
  Braces,
} from "lucide-react";

const skills = [
  {
    name: "JavaScript",
    sub: "ES6+",
    icon: FileJson,
    accent: "#86efac",
    glow: "rgba(134, 239, 172, 0.14)",
  },
  {
    name: "TypeScript",
    sub: "Strongly Typed",
    icon: Braces,
    accent: "#4ade80",
    glow: "rgba(74, 222, 128, 0.14)",
  },
  {
    name: "React.js",
    sub: "UI Library",
    icon: Layers,
    accent: "#6ee7b7",
    glow: "rgba(110, 231, 183, 0.14)",
  },
  {
    name: "Next.js",
    sub: "Full-stack Framework",
    icon: Zap,
    accent: "#a7f3bf",
    glow: "rgba(167, 243, 191, 0.14)",
  },
  {
    name: "Vite",
    sub: "Build Tool",
    icon: Sparkles,
    accent: "#34d399",
    glow: "rgba(52, 211, 153, 0.14)",
  },
  {
    name: "Redux",
    sub: "RTK Query",
    icon: Package,
    accent: "#86efac",
    glow: "rgba(134, 239, 172, 0.14)",
  },
  {
    name: "Node.js",
    sub: "Runtime",
    icon: Leaf,
    accent: "#4ade80",
    glow: "rgba(74, 222, 128, 0.14)",
  },
  {
    name: "Express.js",
    sub: "Web Framework",
    icon: Server,
    accent: "#a7f3bf",
    glow: "rgba(167, 243, 191, 0.14)",
  },
  {
    name: "MongoDB",
    sub: "NoSQL Database",
    icon: Database,
    accent: "#6ee7b7",
    glow: "rgba(110, 231, 183, 0.14)",
  },
  {
    name: "Git & GitHub",
    sub: "Version Control",
    icon: GitBranch,
    accent: "#34d399",
    glow: "rgba(52, 211, 153, 0.14)",
  },
  {
    name: "FastAPI",
    sub: "Python Framework",
    icon: Zap,
    accent: "#86efac",
    glow: "rgba(134, 239, 172, 0.14)",
  },
  {
    name: "Docker",
    sub: "Containerization",
    icon: Package,
    accent: "#4ade80",
    glow: "rgba(74, 222, 128, 0.14)",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-(--border-subtle) bg-background py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mx-auto mb-10 text-center sm:mb-13">
          <span className="mb-4 inline-block rounded-full border border-(--border) bg-(--accent-dim) px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-(--accent-light) sm:px-3.5 sm:text-[11px]">
            What I work with
          </span>
          <h2 className="mb-4 text-balance text-[clamp(1.6rem,7vw,2.1rem)] font-bold tracking-[-0.02em] text-foreground">
            Skills & Technologies
          </h2>
          <div className="mx-auto h-0.75 w-10 rounded-full bg-linear-to-r from-(--accent) to-(--cyan)" />
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex min-w-0 cursor-default flex-col items-center gap-2 rounded-[14px] border border-(--border) bg-(--bg-surface) p-3 text-center transition duration-200 hover:-translate-y-1 sm:gap-2.5 sm:p-5"
                style={{
                  boxShadow: "none",
                  transition:
                    "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = skill.accent + "60";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 12px 32px ${skill.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl border sm:size-11"
                  style={{
                    background: skill.glow,
                    borderColor: `${skill.accent}25`,
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    color={skill.accent}
                    className="sm:size-5.5"
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-0.5 wrap-break-words text-xs font-semibold text-foreground sm:text-sm">
                    {skill.name}
                  </p>
                  <p className="m-0 wrap-break-words text-[10px] text-(--text-dim) sm:text-xs">
                    {skill.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
