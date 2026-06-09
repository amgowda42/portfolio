"use client";

import { MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

function SkillChip({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: "22px",
        padding: "0 10px",
        borderRadius: "999px",
        background: "var(--accent-dim)",
        border: "1px solid #6366f128",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 500,
        color: "var(--accent-light)",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function ProjectBlock({
  name,
  bullets,
  accent,
}: {
  name: string;
  bullets: string[];
  accent: string;
}) {
  return (
    <div
      style={{
        background: "var(--bg-primary)",
        border: "1px solid var(--border-subtle)",
        borderLeft: `2px solid ${accent}`,
        borderRadius: "10px",
        padding: "16px 20px",
      }}
    >
      <p
        style={{
          fontSize: "0.8rem",
          fontWeight: 600,
          color: accent,
          margin: "0 0 10px 0",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.02em",
        }}
      >
        {name}
      </p>
      <ul
        style={{
          margin: 0,
          padding: "0 0 0 16px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        {bullets.map((b, i) => (
          <li
            key={i}
            style={{
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              paddingLeft: "4px",
            }}
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceCard({
  exp,
  isLast,
}: {
  exp: (typeof experiences)[number];
  isLast: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: "0", position: "relative" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: "44px",
          paddingTop: "6px",
        }}
      >
        <div style={{ position: "relative", flexShrink: 0 }}>
          {exp.current && (
            <span
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                background: "#4ade8040",
                animation: "ping 2s ease-in-out infinite",
              }}
            />
          )}
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: exp.current ? "#4ade80" : "var(--accent)",
              border: `2px solid ${exp.current ? "#4ade8060" : "var(--bg-primary)"}`,
              boxShadow: exp.current
                ? "0 0 8px #4ade8066"
                : "0 0 6px #6366f144",
              zIndex: 1,
              position: "relative",
            }}
          />
        </div>
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: "1px",
              marginTop: "8px",
              background:
                "linear-gradient(to bottom, var(--accent)40, transparent)",
              minHeight: "32px",
            }}
          />
        )}
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: "20px",
          marginBottom: isLast ? "0" : "40px",
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "28px",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#6366f140")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = "var(--border)")
        }
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "4px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "0 0 4px 0",
                letterSpacing: "-0.01em",
              }}
            >
              {exp.role}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--accent-light)",
                margin: 0,
                fontFamily: "var(--font-mono)",
              }}
            >
              {exp.company}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "6px",
              flexShrink: 0,
            }}
          >
            {exp.current && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  height: "20px",
                  padding: "0 10px",
                  borderRadius: "999px",
                  background: "#4ade8015",
                  border: "1px solid #4ade8030",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#4ade80",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    flexShrink: 0,
                  }}
                />
                Current
              </span>
            )}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                color: "var(--text-dim)",
              }}
            >
              <Calendar size={11} strokeWidth={1.5} />
              {exp.period}
            </span>
          </div>
        </div>
        {exp.location && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "8px",
              marginBottom: "20px",
            }}
          >
            <MapPin
              size={11}
              strokeWidth={1.5}
              style={{ color: "var(--text-dim)" }}
            />
            <span
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                color: "var(--text-dim)",
              }}
            >
              {exp.location}
            </span>
          </div>
        )}
        {exp.bullets.length > 0 && (
          <ul
            style={{
              margin: "16px 0 0 0",
              padding: "0 0 0 16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {exp.bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  paddingLeft: "4px",
                }}
              >
                {b}
              </li>
            ))}
          </ul>
        )}

        {exp.projects && (
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {exp.projects.map((p) => (
              <ProjectBlock
                key={p.name}
                name={p.name}
                bullets={p.bullets}
                accent={p.accent}
              />
            ))}
          </div>
        )}

        {/* Skills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {exp.skills.map((s) => (
            <SkillChip key={s} label={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
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
              fontFamily: "var(--font-mono)",
            }}
          >
            Career
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Work Experience
          </h2>
          <p
            style={{
              fontSize: "0.925rem",
              color: "var(--text-muted)",
              marginTop: "10px",
            }}
          >
            Building products people actually use.
          </p>
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {[...experiences].reverse().map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
