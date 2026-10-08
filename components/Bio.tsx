"use client";

import { Github, Twitter, Linkedin, PenLine } from "lucide-react";

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
  return (
    <section
      id="about"
      className="relative flex min-h-svh items-center overflow-hidden bg-background pt-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-size-[48px_48px]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      {floatingTokens.map((text, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute select-none font-mono text-[11px] text-(--accent-dim)"
          style={{
            left: `${8 + i * 11}%`,
            top: `${18 + (i % 4) * 20}%`,
            animation: `floatCode ${6 + i * 0.6}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {text}
        </span>
      ))}

      <div className="relative mx-auto w-full max-w-180 px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        {/* ── SINGLE COLUMN ── */}
        <div className="flex flex-col gap-6 sm:gap-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-(--border) bg-(--accent-dim) px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-(--accent-light) sm:px-3 sm:text-[11px]">
              Full Stack Developer
            </span>

            <span className="text-xs text-(--border)">·</span>

            <span className="rounded-full border border-(--border) bg-(--accent-dim) px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-(--accent-light) sm:px-3 sm:text-[11px]">
              Wordsmith
            </span>
          </div>

          <div>
            <h1 className="m-0 text-[clamp(2.6rem,12vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-foreground sm:leading-[1.05]">
              Annappa
              <br />
              <span className="bg-[linear-gradient(135deg,#a7f3bf_0%,#4ade80_40%,#34d399_100%)] bg-clip-text text-transparent">
                Gowda
              </span>
            </h1>
          </div>

          {/* ── BIO POINTS ── */}
          <div className="flex max-w-140 flex-col gap-3">
            {[
              <>
                <span className="font-medium text-foreground">
                  Full Stack Developer
                </span>{" "}
                focused on{" "}
                <span className="font-medium text-(--accent-light)">
                  TypeScript &amp; JavaScript
                </span>{" "}
                for front-end and{" "}
                <span className="font-medium text-(--accent-light)">
                  Node.js &amp; Python
                </span>{" "}
                for robust backends.
              </>,
              <>
                Specializes in{" "}
                <span className="font-medium text-foreground">
                  clean API design
                </span>
                , scalable architecture, and maintainable codebases.
              </>,
              <>
                Infrastructure across{" "}
                <span className="font-medium text-foreground">
                  AWS EC2, Vercel, Nginx, Docker &amp; GitHub Actions CI/CD
                </span>{" "}
                — with{" "}
                <span className="font-medium text-(--accent-light)">Redis</span>{" "}
                for performance and scaling.
              </>,
              <>
                Actively exploring{" "}
                <span className="font-medium text-(--accent-light)">
                  AI-driven development
                </span>{" "}
                — agents, modern workflows, and{" "}
                <span className="font-medium text-foreground">vibe coding</span>{" "}
                to build faster and smarter.
              </>,
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-(--accent) opacity-70" />
                <p className="m-0 text-sm leading-[1.75] text-(--text-muted) sm:text-[0.95rem]">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* ── SOCIALS ── */}
          <div className="flex w-fit max-w-full flex-wrap gap-1 rounded-xl border border-(--border) bg-(--bg-surface) p-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-transparent text-(--text-dim) no-underline transition-all duration-200 hover:border-(--border) hover:bg-background hover:text-(--accent-light)"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* ── WRITING SECTION ── */}
          <div className="flex max-w-140 flex-col gap-2.5 rounded-[14px] border border-(--border) bg-(--accent-dim) px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center gap-2">
              <PenLine size={14} className="text-(--accent-light)" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-(--accent-light) sm:text-[11px]">
                Beyond the Code
              </span>
            </div>
            <p className="m-0 text-sm leading-[1.75] text-(--text-muted) sm:text-[0.9rem]">
              Also a{" "}
              <span className="font-medium text-(--accent-light)">
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
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 opacity-30"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-(--text-muted)">
          scroll
        </span>
        <div className="h-8 w-px animate-[pulse_2s_ease-in-out_infinite] bg-linear-to-b from-(--text-muted) to-transparent" />
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
