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
    accent: "#6366f1",
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
    accent: "#22d3ee",
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
    accent: "#f97316",
  },
  {
    id: 4,
    github: "https://github.com/amgowda42/portfolio.git",
    title: "Personal Portfolio",
    subtitle: "This site",
    points: ["Modern dark-themed portfolio showcasing projects and skills"],
    tags: ["Next.js", "Vercel"],
    accent: "#4ade80",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "var(--bg-primary)",
        padding: "80px 0",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 24px" }}>
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
            Work
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
            Featured Projects
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
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "28px",
                borderRadius: "16px",
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                textDecoration: "none",
                transition:
                  "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.borderColor = project.accent + "50";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 20px 48px ${project.accent}18`;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, ${project.accent}, transparent)`,
                  opacity: 0.6,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowUpRight
                  size={16}
                  color="var(--text-dim)"
                  strokeWidth={2}
                />
              </div>

              <div style={{ marginBottom: "16px", paddingRight: "40px" }}>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: "0 0 4px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    color: project.accent,
                    margin: 0,
                    opacity: 0.8,
                  }}
                >
                  {project.subtitle}
                </p>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  flex: 1,
                }}
              >
                {project.points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.845rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: project.accent,
                        flexShrink: 0,
                        marginTop: "1px",
                        fontSize: "10px",
                      }}
                    >
                      ▸
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 500,
                      padding: "3px 10px",
                      borderRadius: "999px",
                      background: project.accent + "15",
                      color: project.accent,
                      border: `1px solid ${project.accent}30`,
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

      <style jsx>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
