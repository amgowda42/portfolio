"use client";

import { Github, Twitter, Linkedin, PenLine } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const socials = [
  {
    href: "https://github.com/amgowda42",
    label: "GitHub",
    icon: <Github size={16} strokeWidth={1.5} />,
    handle: "amgowda42",
  },
  {
    href: "https://x.com/AnnappaGowda7",
    label: "Twitter/X",
    icon: <Twitter size={16} strokeWidth={1.5} />,
    handle: "@AnnappaGowda7",
  },
  {
    href: "https://www.linkedin.com/in/annappa-gowda",
    label: "LinkedIn",
    icon: <Linkedin size={16} strokeWidth={1.5} />,
    handle: "annappa-gowda",
  },
  {
    href: "https://medium.com/@annappag2020",
    label: "Medium",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    handle: "@annappag2020",
  },
];

const floatingTokens = [
  "const",
  "async",
  "=>",
  "{}",
  "[]",
  "npm",
  "git",
  "ssh",
];

export default function Bio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg-primary)",
        paddingTop: "40px",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      {floatingTokens.map((text, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#6366f120",
            left: `${8 + i * 11}%`,
            top: `${18 + (i % 4) * 20}%`,
            animation: `floatCode ${6 + i * 0.6}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {text}
        </span>
      ))}

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "720px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        {/* ── SINGLE COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                background: "var(--accent-dim)",
                border: "1px solid #6366f128",
                padding: "4px 12px",
                borderRadius: "999px",
              }}
            >
              Full Stack Developer
            </span>

            <span style={{ color: "var(--border)", fontSize: "12px" }}>·</span>

            <span
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#a78bfa",
                background: "#a78bfa15",
                border: "1px solid #a78bfa28",
                padding: "4px 12px",
                borderRadius: "999px",
              }}
            >
              Wordsmith
            </span>
          </div>

          <div>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Annappa
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #818cf8 0%, #6366f1 40%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Gowda
              </span>
            </h1>
          </div>

          {/* ── BIO POINTS ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "560px",
            }}
          >
            {[
              <>
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  Full Stack Developer
                </span>{" "}
                focused on{" "}
                <span style={{ color: "var(--accent-light)", fontWeight: 500 }}>
                  TypeScript &amp; JavaScript
                </span>{" "}
                for front-end and{" "}
                <span style={{ color: "var(--accent-light)", fontWeight: 500 }}>
                  Node.js &amp; Python
                </span>{" "}
                for robust backends.
              </>,
              <>
                Specializes in{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  clean API design
                </span>
                , scalable architecture, and maintainable codebases.
              </>,
              <>
                Infrastructure across{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  AWS EC2, Vercel, Nginx, Docker &amp; GitHub Actions CI/CD
                </span>{" "}
                — with{" "}
                <span style={{ color: "var(--accent-light)", fontWeight: 500 }}>
                  Redis
                </span>{" "}
                for performance and scaling.
              </>,
              <>
                Actively exploring{" "}
                <span style={{ color: "var(--accent-light)", fontWeight: 500 }}>
                  AI-driven development
                </span>{" "}
                — agents, modern workflows, and{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  vibe coding
                </span>{" "}
                to build faster and smarter.
              </>,
            ].map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    marginTop: "8px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                    opacity: 0.7,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* ── SOCIALS ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "4px",
              padding: "8px",
              borderRadius: "12px",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              width: "fit-content",
            }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid transparent",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  color: "var(--text-dim)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--bg-primary)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--accent-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.color = "var(--text-dim)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* ── WRITING SECTION ── */}
          <div
            style={{
              padding: "20px 24px",
              borderRadius: "14px",
              border: "1px solid #a78bfa28",
              background: "#a78bfa08",
              maxWidth: "560px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <PenLine size={14} style={{ color: "#a78bfa" }} />
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#a78bfa",
                }}
              >
                Beyond the Code
              </span>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Also a{" "}
              <span style={{ color: "#a78bfa", fontWeight: 500 }}>
                hobbyist wordsmith
              </span>{" "}
              — I write short stories, articles, and theatre. Storytelling is
              how I make sense of the world when code can&apos;t.
            </p>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.3,
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontFamily: "var(--font-mono)",
            color: "var(--text-muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "32px",
            background:
              "linear-gradient(to bottom, var(--text-muted), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes floatCode {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-16px);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}
