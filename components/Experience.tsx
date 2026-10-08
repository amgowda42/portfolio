"use client";

import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

function SkillChip({ label }: { label: string }) {
  return (
    <span className="inline-flex h-5.5 items-center whitespace-nowrap rounded-full border border-[#6366f128] bg-(--accent-dim) px-2.5 font-mono text-[11px] font-medium text-(--accent-light)">
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
      className="rounded-[10px] border border-(--border-subtle) bg-background px-4 py-3.5"
      style={{ borderLeft: `2px solid ${accent}` }}
    >
      <p
        className="mb-2 font-mono text-[0.78rem] font-semibold tracking-[0.02em]"
        style={{ color: accent }}
      >
        {name}
      </p>
      <ul className="flex list-outside list-disc flex-col gap-1.5 pl-5 text-[0.84rem] leading-[1.65] text-(--text-muted)">
        {bullets.map((b, i) => (
          <li key={i} className="pl-0.5">
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
    <div className="relative z-1 flex">
      <span
        className="sticky top-22 z-2 ml-2 mt-3 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-background bg-(--accent) shadow-[0_0_0_4px_var(--accent-dim)]"
        aria-hidden="true"
      />
      {/* Card */}
      <div
        className={`relative z-1 ml-3.5 min-w-0 flex-1 rounded-xl border border-(--border) bg-(--bg-surface) p-4 transition-colors duration-200 hover:border-(--accent) sm:ml-5 sm:p-5 lg:p-7 ${
          isLast ? "mb-0" : "mb-7 sm:mb-9 lg:mb-10"
        }`}
      >
        {/* Header: role + company / badges */}
        <div className="mb-1 flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 sm:flex-1">
            <h3 className="m-0 mb-1 text-[clamp(0.9rem,2.5vw,1.05rem)] font-bold tracking-[-0.01em] text-foreground">
              {exp.role}
            </h3>
            <p className="m-0 wrap-break-words font-mono text-sm font-semibold text-(--accent-light)">
              {exp.company}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
            {exp.current && (
              <span className="mr-1 inline-flex h-5 shrink-0 items-center gap-2.5 rounded-full border border-[#4ade8030] bg-[#4ade8015] px-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#4ade80]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ade80]" />
                Current
              </span>
            )}
            <span className="mt-1.5 flex shrink-0 items-center gap-1 font-mono text-[11px] text-(--text-dim)">
              <Calendar size={11} strokeWidth={1.5} />
              {exp.period}
            </span>
          </div>
        </div>

        {/* Location */}
        {exp.location && (
          <div className="mt-2 inline-flex items-center gap-1">
            <MapPin size={11} strokeWidth={1.5} className="text-(--text-dim)" />
            <span className="font-mono text-[11px] text-(--text-dim)">
              {exp.location}
            </span>
          </div>
        )}

        {/* Bullets */}
        {exp.bullets.length > 0 && (
          <ol className="mt-3.5 flex list-none flex-col gap-3 p-0">
            {exp.bullets.map((b, i) => (
              <li
                key={i}
                className="flex min-h-[1.7em] items-start text-[clamp(0.8rem,2vw,0.875rem)] leading-[1.7] text-(--text-muted)"
              >
                <span
                  className="mr-0.5 inline-flex min-w-[1.25em] shrink-0 justify-center font-mono font-bold text-(--accent-light)"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span
                  className="mr-1.5 font-mono font-bold text-(--text-dim)"
                  aria-hidden="true"
                >
                  .
                </span>
                <span>
                  {b.includes(":") ? (
                    <>
                      <strong className="font-bold text-foreground">
                        {b.slice(0, b.indexOf(":"))}:
                      </strong>
                      {b.slice(b.indexOf(":") + 1)}
                    </>
                  ) : (
                    b
                  )}
                </span>
              </li>
            ))}
          </ol>
        )}

        {/* Projects — name + bullets only, no extra wrapper chrome */}
        {exp.projects && exp.projects.length > 0 && (
          <div className="mt-4 flex flex-col gap-3">
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
        <div className="mb-8 flex flex-wrap gap-1.5 border-t border-(--border-subtle) pt-3.5">
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
      className="border-t border-(--border-subtle) bg-background py-[clamp(48px,8vw,80px)]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-[clamp(36px,6vw,56px)] text-center">
          <span className="mb-4 inline-block rounded-full border border-[#6366f130] bg-(--accent-dim) px-3.5 py-1 font-mono text-[12px] font-medium uppercase tracking-[0.15em] text-(--accent-light)">
            Career
          </span>
          <h2 className="m-0 text-[clamp(1.4rem,3vw,2.2rem)] font-semibold tracking-[-0.02em] text-foreground">
            Work Experience
          </h2>
          <p className="mt-2.5 text-[clamp(0.875rem,2vw,0.925rem)] text-(--text-muted)">
            Building products people actually use.
          </p>
        </div>

        {/* Timeline list */}
        <div className="relative mx-auto max-w-190">
          {[...experiences].reverse().map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>


    </section>
  );
}
