"use client";

import { Mail, Github, Twitter, Linkedin } from "lucide-react";

const links = [
  { label: "GitHub", icon: Github, href: "https://github.com/amgowda42" },
  { label: "Twitter", icon: Twitter, href: "https://x.com/AnnappaGowda7" },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/annappa-gowda",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-primary)",
        padding: "80px 0 64px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
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
            marginBottom: "20px",
          }}
        >
          Get in touch
        </span>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800,
            color: "var(--text-primary)",
            margin: "0 0 16px",
            letterSpacing: "-0.03em",
          }}
        >
          Let&apos;s Work Together
        </h2>

        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            lineHeight: 1.75,
            margin: "0 0 36px",
          }}
        >
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>
        <a
          href="mailto:annappag2020@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 28px",
            borderRadius: "12px",
            background: "var(--accent)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.925rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            transition: "opacity 0.2s, transform 0.2s",
            marginBottom: "40px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <Mail size={16} strokeWidth={2} />
          annappag2020@gmail.com
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {links.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-dim)",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e: {
                currentTarget: {
                  style: { color: string; borderColor: string };
                };
              }) => {
                e.currentTarget.style.color = "var(--accent-light)";
                e.currentTarget.style.borderColor = "#6366f150";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-dim)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <Icon size={17} strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
