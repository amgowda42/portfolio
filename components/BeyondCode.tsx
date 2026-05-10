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
    accent: "#818cf8",
  },
  {
    emoji: "🏃",
    text: "Professional athlete from 2011 to 2017 — still keep a close eye on fitness and maintaining an active lifestyle.",
    accent: "#fb923c",
  },
];

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      style={{
        background: "var(--bg-primary)",
        padding: "80px 0",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: "40px" }}>
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
              marginBottom: "16px",
            }}
          >
            Life outside the editor
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Beyond Code
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "20px 24px",
                borderRadius: "14px",
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderLeft: `3px solid ${item.accent}`,
                transition: "border-color 0.2s",
              }}
            >
              <span
                style={{ fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }}
              >
                {item.emoji}
              </span>
              <p
                style={{
                  fontSize: "0.925rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
