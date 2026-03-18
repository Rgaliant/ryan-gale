"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const LINKS = [
  {
    label: "email",
    handle: "ryan@ryangale.com",
    url: "mailto:ryan@ryangale.com",
    prefix: "",
  },
  {
    label: "github",
    handle: "rgaliant",
    url: "https://github.com/rgaliant",
    prefix: "github.com/",
  },
  {
    label: "linkedin",
    handle: "ryan-wendell-gale",
    url: "https://linkedin.com/in/ryan-wendell-gale",
    prefix: "linkedin.com/in/",
  },
];

const CONNECTION_LINES: { text: string; type: string; delay: number }[] = [
  {
    text: "> establishing secure connection...",
    type: "cmd",
    delay: 0,
  },
  {
    text: "> resolving host github.com/rgaliant",
    type: "normal",
    delay: 700,
  },
  {
    text: "> ping github.com/rgaliant ..................... 12ms",
    type: "ok",
    delay: 1400,
  },
  {
    text: "> resolving host linkedin.com/in/ryan-wendell-gale",
    type: "normal",
    delay: 2000,
  },
  {
    text: "> ping linkedin.com/in/ryan-wendell-gale ..... 18ms",
    type: "ok",
    delay: 2700,
  },
  { text: "", type: "blank", delay: 3200 },
  {
    text: "> connection established. ready.",
    type: "success",
    delay: 3300,
  },
];

function lineColor(type: string): string {
  switch (type) {
    case "cmd":
      return "var(--amber)";
    case "ok":
    case "success":
      return "var(--green)";
    default:
      return "var(--green-dim)";
  }
}

function lineGlow(type: string): string {
  switch (type) {
    case "cmd":
      return "0 0 6px var(--amber-glow)";
    case "success":
      return "0 0 6px var(--green-glow)";
    default:
      return "none";
  }
}

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    CONNECTION_LINES.forEach((line, i) => {
      timeouts.push(
        setTimeout(() => setVisibleLines(i + 1), line.delay)
      );
    });
    return () => timeouts.forEach(clearTimeout);
  }, [isInView]);

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "clamp(5rem, 9vw, 9rem) clamp(1.5rem, 4vw, 3rem)",
        maxWidth: "1140px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        style={{
          color: "var(--muted)",
          fontSize: "0.78rem",
          letterSpacing: "0.14em",
          marginBottom: "3rem",
          fontFamily: "var(--font-jetbrains), monospace",
        }}
      >
        <span style={{ color: "var(--amber)" }}>$</span> ./connect --all
        <span className="cursor-blink-amber" style={{ marginLeft: "4px" }} />
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(3rem, 5vw, 5rem)",
          alignItems: "start",
        }}
      >
        {/* Left: heading + links */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 700,
              color: "var(--green)",
              textShadow: "0 0 24px rgba(0,255,136,0.18)",
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s{" "}
            <span style={{ color: "var(--amber)", fontStyle: "italic" }}>
              connect.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              color: "var(--green-dim)",
              fontSize: "clamp(0.78rem, 1.5vw, 0.88rem)",
              lineHeight: "1.9",
              fontFamily: "var(--font-jetbrains), monospace",
              marginBottom: "2.25rem",
            }}
          >
            Open to new opportunities, collaborations, and interesting
            conversations. Reach out — I&apos;d love to connect.
          </motion.p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  textDecoration: "none",
                  color: "var(--green)",
                  transition: "all 0.25s ease",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--amber)";
                  el.style.color = "var(--amber)";
                  el.style.boxShadow = "0 0 18px var(--amber-glow)";
                  el.style.background = "rgba(255,184,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--green)";
                  el.style.boxShadow = "none";
                  el.style.background = "var(--bg-card)";
                }}
              >
                <span
                  style={{
                    color: "var(--amber)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    minWidth: "64px",
                    fontWeight: 600,
                  }}
                >
                  [{link.label}]
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.72rem" }}>
                    <span style={{ color: "var(--muted)" }}>{link.prefix}</span>
                    <span style={{ fontWeight: 600 }}>{link.handle}</span>
                  </div>
                </div>
                <span style={{ fontSize: "0.85rem", opacity: 0.55 }}>→</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right: terminal animation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          style={{
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            overflow: "hidden",
          }}
        >
          {/* Title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.65rem 1rem",
              borderBottom: "1px solid var(--border)",
              background: "rgba(0,255,136,0.03)",
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#ff5f57",
              }}
            />
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#febc2e",
              }}
            />
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#28c840",
              }}
            />
            <span
              style={{
                color: "var(--muted)",
                fontSize: "0.62rem",
                letterSpacing: "0.06em",
                marginLeft: "0.5rem",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              connect.sh
            </span>
          </div>

          {/* Terminal output */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "clamp(0.62rem, 1.15vw, 0.72rem)",
              lineHeight: "1.9",
              minHeight: "200px",
            }}
          >
            {CONNECTION_LINES.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                style={{
                  color: lineColor(line.type),
                  textShadow: lineGlow(line.type),
                  minHeight: line.type === "blank" ? "0.6rem" : undefined,
                  whiteSpace: "pre-wrap",
                }}
              >
                {line.type !== "blank" ? line.text : ""}
              </div>
            ))}
            {visibleLines >= CONNECTION_LINES.length && (
              <div style={{ marginTop: "0.5rem" }}>
                <span style={{ color: "var(--amber)" }}>~/ryan-gale $</span>
                <span className="cursor-blink" style={{ marginLeft: "4px" }} />
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        style={{
          marginTop: "clamp(4rem, 7vw, 7rem)",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          color: "var(--muted)",
          fontSize: "0.68rem",
          fontFamily: "var(--font-jetbrains), monospace",
          letterSpacing: "0.08em",
        }}
      >
        <span>
          ryan@ryangale.com · Salt Lake City, UT · github.com/rgaliant
        </span>
        <span style={{ opacity: 0.6 }}>© {new Date().getFullYear()} Ryan Gale</span>
      </motion.div>
    </section>
  );
}
