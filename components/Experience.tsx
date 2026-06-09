"use client";

import { Calendar, MapPin } from "lucide-react";
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
        padding: "14px 16px",
      }}
    >
      <p
        style={{
          fontSize: "0.78rem",
          fontWeight: 600,
          color: accent,
          margin: "0 0 8px 0",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.02em",
        }}
      >
        {name}
      </p>
      <ul
        style={{
          margin: 0,
          padding: "0 0 0 14px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        {bullets.map((b, i) => (
          <li
            key={i}
            style={{
              fontSize: "0.84rem",
              color: "var(--text-muted)",
              lineHeight: 1.65,
              paddingLeft: "2px",
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
    <div className="exp-row">
      {/* Card */}
      <div
        className={`exp-card${isLast ? " exp-card--last" : ""}`}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#6366f140")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = "var(--border)")
        }
      >
        {/* Header: role + company / badges */}
        <div className="exp-header">
          <div style={{ minWidth: 0, flex: 1 }}>
            <h3 className="exp-role">{exp.role}</h3>
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

          <div className="exp-badges">
            {exp.current && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "20px",
                  padding: "0 5px",
                  borderRadius: "999px",
                  background: "#4ade8015",
                  border: "1px solid #4ade8030",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#4ade80",
                  fontFamily: "var(--font-mono)",
                  flexShrink: 0,
                  marginRight: "4px",
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
                display: "flex",
                alignItems: "center",
                marginTop: "6px",
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                color: "var(--text-dim)",
                flexShrink: 0,
              }}
            >
              <Calendar size={11} strokeWidth={1.5} />
              {exp.period}
            </span>
          </div>
        </div>

        {/* Location */}
        {exp.location && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "8px",
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

        {/* Bullets */}
        {exp.bullets.length > 0 && (
          <ul className="exp-bullets">
            {exp.bullets.map((b, i) => (
              <li key={i} className="exp-bullet">
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* Projects — name + bullets only, no extra wrapper chrome */}
        {exp.projects && exp.projects.length > 0 && (
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
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
            marginBottom: "32px",
            paddingTop: "14px",
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
    <section id="experience" className="exp-section">
      <div className="exp-section-inner">
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(36px, 6vw, 56px)",
          }}
        >
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
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
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
              fontSize: "clamp(0.875rem, 2vw, 0.925rem)",
              color: "var(--text-muted)",
              marginTop: "10px",
            }}
          >
            Building products people actually use.
          </p>
        </div>

        {/* Timeline list */}
        <div className="timeline-list">
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
        /* ── keyframes ───────────────────────────────────── */
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

        /* ── Section wrapper ─────────────────────────────── */
        .exp-section {
          background: var(--bg-primary);
          padding: clamp(48px, 8vw, 80px) 0;
          border-top: 1px solid var(--border-subtle);
        }
        .exp-section-inner {
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* ── Timeline list container ─────────────────────── */
        .timeline-list {
          max-width: 760px;
          margin: 0 auto;
        }

        /* ── Each row: dot-column + card ─────────────────── */
        .exp-row {
          display: flex;
          gap: 0;
          position: relative;
        }
        .timeline-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 28px;
          padding-top: 6px;
        }

        /* ── Card ────────────────────────────────────────── */
        .exp-card {
          flex: 1;
          min-width: 0;
          margin-left: 14px;
          margin-bottom: 28px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 16px 14px;
          transition: border-color 0.2s;
        }
        .exp-card--last {
          margin-bottom: 0;
        }

        /* ── Card header ─────────────────────────────────── */
        .exp-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }

        /* ── Role title ──────────────────────────────────── */
        .exp-role {
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
        }

        /* ── Bullet list ─────────────────────────────────── */
        .exp-bullets {
          margin: 14px 0 0 0;
          padding: 0 0 0 16px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .exp-bullet {
          font-size: clamp(0.8rem, 2vw, 0.875rem);
          color: var(--text-muted);
          line-height: 1.7;
          padding-left: 4px;
        }

        /* ── sm (≥ 480px) ────────────────────────────────── */
        @media (min-width: 480px) {
          .exp-section-inner {
            padding: 0 20px;
          }
          .exp-card {
            margin-left: 16px;
            padding: 18px 16px;
          }
        }

        /* ── md (≥ 640px) ────────────────────────────────── */
        @media (min-width: 640px) {
          .exp-section-inner {
            padding: 0 24px;
          }
          .timeline-col {
            width: 32px;
          }
          .exp-card {
            margin-left: 20px;
            margin-bottom: 36px;
            border-radius: 16px;
            padding: 22px 20px;
          }
        }

        /* ── lg (≥ 1024px) ───────────────────────────────── */
        @media (min-width: 1024px) {
          .exp-card {
            margin-bottom: 40px;
            padding: 28px;
          }
        }

        /* ── Tiny phones: stack header badges below title ── */
        @media (max-width: 400px) {
          .exp-header {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
