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
      className="border-t border-(--border-subtle) bg-background py-20 pb-16"
    >
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-8">
        <span className="mb-5 inline-block rounded-full border border-(--border) bg-(--accent-dim) px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-(--accent-light)">
          Get in touch
        </span>

        <h2 className="mb-4 text-balance text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-[-0.03em] text-foreground">
          Let&apos;s Work Together
        </h2>

        <p className="mx-auto mb-9 max-w-xl text-[0.95rem] leading-7 text-(--text-muted)">
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>

        <a
          href="mailto:annappag2020@gmail.com"
          className="mb-10 inline-flex items-center gap-2.5 rounded-xl bg-(--accent) px-7 py-3.5 text-sm font-semibold tracking-[-0.01em] text-[#031a0d] no-underline transition duration-200 hover:-translate-y-0.5 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Mail size={16} strokeWidth={2} />
          annappag2020@gmail.com
        </a>

        <div className="flex items-center justify-center gap-3">
          {links.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-xl border border-(--border) bg-(--bg-surface) text-(--text-dim) no-underline transition duration-200 hover:border-(--accent) hover:text-(--accent-light) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Icon size={17} strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
