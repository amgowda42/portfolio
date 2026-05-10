"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
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
        paddingTop: "80px",
      }}
    >
      {/* Grid background */}
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

      {/* Floating code tokens */}
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
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "64px",
            alignItems: "center",
          }}
          className="bio-grid"
        >
          {/* Left — text content */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            {/* Badge */}
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

              <span style={{ color: "var(--border)", fontSize: "12px" }}>
                ·
              </span>

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

            {/* Name */}
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

            {/* Description */}
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                maxWidth: "480px",
                margin: 0,
              }}
            >
              Crafting{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                elegant web applications
              </span>{" "}
              that blend form and function. I turn ideas into powerful,{" "}
              <span style={{ color: "var(--accent-light)", fontWeight: 500 }}>
                full-stack digital experiences
              </span>
              . Also a{" "}
              <span style={{ color: "#a78bfa", fontWeight: 500 }}>
                hobbyist wordsmith
              </span>{" "}
              — novels, articles, and theatre.
            </p>

            {/* Socials */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    border: "1px solid transparent",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--bg-surface)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  <span style={{ color: "var(--text-dim)" }}>{s.icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {s.handle}
                  </span>
                  <ArrowUpRight
                    size={12}
                    style={{ color: "var(--accent)", opacity: 0.6 }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            {/* Corner brackets */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "-12px",
                left: "-12px",
                width: "24px",
                height: "24px",
                borderTop: "2px solid var(--accent)",
                borderLeft: "2px solid var(--accent)",
                borderRadius: "2px 0 0 0",
                opacity: 0.6,
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                width: "24px",
                height: "24px",
                borderBottom: "2px solid var(--accent)",
                borderRight: "2px solid var(--accent)",
                borderRadius: "0 0 2px 0",
                opacity: 0.6,
              }}
            />

            {/* Glow */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-20px",
                background:
                  "radial-gradient(ellipse, #6366f122 0%, transparent 70%)",
                borderRadius: "20px",
                transform: `translate(${mousePos.x * 0.04}px, ${mousePos.y * 0.04}px)`,
                transition: "transform 0.4s ease-out",
                pointerEvents: "none",
              }}
            />

            {/* Image */}
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "340px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.012}deg) rotateX(${-mousePos.y * 0.012}deg)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <Image
                src="/image_1.jpg"
                alt="Annappa Gowda"
                fill
                priority
                style={{ objectFit: "cover" }}
              />

              {/* Bottom label */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "12px 16px",
                  background: "rgba(10, 10, 15, 0.75)",
                  backdropFilter: "blur(8px)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-dim)",
                    margin: 0,
                  }}
                >
                  <span style={{ color: "var(--accent-light)" }}>~/</span>{" "}
                  annappa-gowda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
        @media (max-width: 768px) {
          .bio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
