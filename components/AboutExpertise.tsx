"use client";

import { Code2, Server, Sparkles } from "lucide-react";

export default function AboutExpertise() {
  return (
    <section
      style={{
        background: "var(--bg-primary)",
        padding: "80px 0",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "12px",
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
            Expertise
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            Key Areas of Impact
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "32px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#6366f150")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Code2 size={20} color="#fff" strokeWidth={2} />
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                Front End
              </h3>
            </div>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.75,
                margin: 0,
                fontSize: "0.925rem",
              }}
            >
              Building robust solutions using{" "}
              <Highlight color="var(--accent-light)">TypeScript</Highlight> and{" "}
              <Highlight color="#facc15">JavaScript</Highlight>. Focused on{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                front-end architecture
              </strong>
              ,{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                clean UI design
              </strong>
              , and efficient API handling with{" "}
              <Highlight color="#a78bfa">Redux Toolkit</Highlight>.
            </p>
          </div>

          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "32px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#10b98150")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Server size={20} color="#fff" strokeWidth={2} />
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                Back End
              </h3>
            </div>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.75,
                margin: 0,
                fontSize: "0.925rem",
              }}
            >
              Working with <Highlight color="#4ade80">Node.js</Highlight>,{" "}
              <Highlight color="var(--text-muted)">Express.js</Highlight>, and{" "}
              <Highlight color="#4ade80">MongoDB</Highlight> — emphasizing{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                proper data modeling
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                maintainable architecture
              </strong>
              .
            </p>
          </div>
        </div>

        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderLeft: "3px solid var(--accent)",
            borderRadius: "12px",
            padding: "20px 24px",
            display: "flex",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "var(--accent-dim)",
              border: "1px solid #6366f130",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Sparkles size={16} color="var(--accent-light)" strokeWidth={2} />
          </div>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.75,
              margin: 0,
              fontSize: "0.925rem",
            }}
          >
            I stay updated with the latest technologies. Connect with me for any{" "}
            <span style={{ color: "var(--accent-light)", fontWeight: 500 }}>
              front-end solutions
            </span>{" "}
            — currently more specialized there while actively expanding into
            back-end development.
          </p>
        </div>
      </div>
    </section>
  );
}

function Highlight({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return <span style={{ color, fontWeight: 500 }}>{children}</span>;
}
