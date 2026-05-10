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
    accent: "#facc15",
    glow: "#facc1520",
  },
  {
    name: "TypeScript",
    sub: "Strongly Typed",
    icon: Braces,
    accent: "#60a5fa",
    glow: "#60a5fa20",
  },
  {
    name: "React.js",
    sub: "UI Library",
    icon: Layers,
    accent: "#22d3ee",
    glow: "#22d3ee20",
  },
  {
    name: "Next.js",
    sub: "Full-stack Framework",
    icon: Zap,
    accent: "#f1f5f9",
    glow: "#f1f5f915",
  },
  {
    name: "Vite",
    sub: "Build Tool",
    icon: Sparkles,
    accent: "#a78bfa",
    glow: "#a78bfa20",
  },
  {
    name: "Redux",
    sub: "RTK Query",
    icon: Package,
    accent: "#c084fc",
    glow: "#c084fc20",
  },
  {
    name: "Node.js",
    sub: "Runtime",
    icon: Leaf,
    accent: "#4ade80",
    glow: "#4ade8020",
  },
  {
    name: "Express.js",
    sub: "Web Framework",
    icon: Server,
    accent: "#94a3b8",
    glow: "#94a3b815",
  },
  {
    name: "MongoDB",
    sub: "NoSQL Database",
    icon: Database,
    accent: "#34d399",
    glow: "#34d39920",
  },
  {
    name: "Git & GitHub",
    sub: "Version Control",
    icon: GitBranch,
    accent: "#fb923c",
    glow: "#fb923c20",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "var(--bg-primary)",
        padding: "80px 0",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              background: "var(--accent-dim)",
              padding: "4px 14px",
              borderRadius: "999px",
              border: "1px solid #6366f130",
              marginBottom: "16px",
            }}
          >
            What I work with
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Skills & Technologies
          </h2>
          <div
            style={{
              width: "40px",
              height: "3px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, var(--accent), var(--cyan))",
              margin: "0 auto",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "12px",
          }}
          className="skills-grid"
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  padding: "20px 12px",
                  borderRadius: "14px",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  textAlign: "center",
                  cursor: "default",
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
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: skill.glow,
                    border: `1px solid ${skill.accent}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} strokeWidth={1.8} color={skill.accent} />
                </div>

                <div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      margin: "0 0 2px",
                    }}
                  >
                    {skill.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-dim)",
                      margin: 0,
                    }}
                  >
                    {skill.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
