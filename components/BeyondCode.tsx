"use client";

const items = [
  {
    emoji: "🌿",
    text: "A dendrophile with a deep passion for nature — the essence of trees, environmental sensitivity, and understanding ecological effects.",
    accent: "#4ade80",
  },
  {
    emoji: "✍️",
    text: "Written more than 10 articles on various topics, exploring ideas and sharing insights through writing.",
    accent: "#86efac",
  },
  {
    emoji: "🏃",
    text: "Professional athlete from 2011 to 2017 — still keep a close eye on fitness and maintaining an active lifestyle.",
    accent: "#34d399",
  },
];

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="border-t border-(--border-subtle) bg-background py-20"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="mb-10">
          <span className="mb-4 inline-block rounded-full border border-[#6366f130] bg-(--accent-dim) px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-(--accent-light)">
            Life outside the editor
          </span>
          <h2 className="m-0 text-[clamp(1.6rem,3vw,2.1rem)] font-bold tracking-[-0.02em] text-foreground">
            Beyond Code
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-[14px] border border-(--border) bg-(--bg-surface) p-5 pl-4 sm:px-6"
              style={{ borderLeftWidth: "3px", borderLeftColor: item.accent }}
            >
              <span className="shrink-0 text-[1.4rem] leading-none">
                {item.emoji}
              </span>
              <p className="m-0 text-[0.925rem] leading-7 text-(--text-muted)">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
