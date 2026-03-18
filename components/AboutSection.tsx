"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const BIO_TEXT = `Engineering leader who bridges product and code.
I understand the full stack — from database schemas
to customer journeys — and use that context to ship
faster and make smarter decisions.

Currently Team Lead at Fluid, building infrastructure
tools at the intersection of AI, integrations, and
developer experience.

6+ years at product-driven startups. I've worn the
hats: senior engineer, tech lead, and product owner.`;

const SKILLS = [
  { name: "Ruby on Rails", pid: 1001, cpu: 95, status: "running" },
  { name: "TypeScript", pid: 1002, cpu: 90, status: "running" },
  { name: "React / Next.js", pid: 1003, cpu: 88, status: "running" },
  { name: "REST API Design", pid: 1004, cpu: 92, status: "running" },
  { name: "AI / Integrations", pid: 1005, cpu: 84, status: "running" },
  { name: "Product Thinking", pid: 1006, cpu: 91, status: "running" },
  { name: "PostgreSQL / SQL", pid: 1007, cpu: 78, status: "sleeping" },
  { name: "Team Leadership", pid: 1008, cpu: 86, status: "running" },
];

function ProcessBar({
  value,
  animated,
}: {
  value: number;
  animated: boolean;
}) {
  const filled = Math.round(value / 10);
  const color =
    value >= 85
      ? "var(--green)"
      : value >= 65
        ? "var(--amber)"
        : "var(--muted)";
  const glow =
    value >= 85
      ? "0 0 6px var(--green-glow)"
      : value >= 65
        ? "0 0 6px var(--amber-glow)"
        : "none";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-jetbrains), monospace",
      }}
    >
      <span
        style={{
          color,
          textShadow: animated ? glow : "none",
          fontSize: "0.72em",
          letterSpacing: "-0.05em",
          transition: "text-shadow 0.4s",
        }}
      >
        {animated
          ? "█".repeat(filled) + "░".repeat(10 - filled)
          : "░".repeat(10)}
      </span>
      <span
        style={{ color: "var(--muted)", fontSize: "0.65em", minWidth: "28px" }}
      >
        {animated ? `${value}%` : ""}
      </span>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayedText, setDisplayedText] = useState("");
  const [startedTyping, setStartedTyping] = useState(false);

  useEffect(() => {
    if (!isInView || startedTyping) return;
    setStartedTyping(true);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayedText(BIO_TEXT.slice(0, i));
      if (i >= BIO_TEXT.length) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [isInView, startedTyping]);

  return (
    <section
      id="about"
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
        <span style={{ color: "var(--amber)" }}>$</span> cat about.txt
        <span className="cursor-blink-amber" style={{ marginLeft: "4px" }} />
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "clamp(2.5rem, 5vw, 5rem)",
          alignItems: "start",
        }}
      >
        {/* Bio column */}
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
              marginBottom: "1.75rem",
              lineHeight: 1.1,
            }}
          >
            About{" "}
            <span style={{ color: "var(--amber)", fontStyle: "italic" }}>
              me.
            </span>
          </motion.h2>

          <div
            style={{
              color: "var(--green-dim)",
              lineHeight: "1.95",
              fontSize: "clamp(0.78rem, 1.5vw, 0.88rem)",
              fontFamily: "var(--font-jetbrains), monospace",
              whiteSpace: "pre-line",
              minHeight: "12rem",
            }}
          >
            {displayedText}
            {displayedText.length < BIO_TEXT.length && (
              <span className="cursor-blink" />
            )}
          </div>
        </div>

        {/* Process list column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              overflow: "hidden",
            }}
          >
            {/* Window bar */}
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
                  fontSize: "0.65rem",
                  letterSpacing: "0.06em",
                  marginLeft: "0.5rem",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
              >
                htop — skills
              </span>
            </div>

            <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
              {/* Table header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr 120px",
                  gap: "0.5rem",
                  color: "var(--amber)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  marginBottom: "0.6rem",
                  paddingBottom: "0.6rem",
                  borderBottom: "1px solid var(--border)",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
              >
                <span>PID</span>
                <span>PROCESS</span>
                <span>CPU%</span>
              </div>

              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.pid}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "44px 1fr 120px",
                    gap: "0.5rem",
                    alignItems: "center",
                    padding: "0.35rem 0",
                    borderBottom:
                      i < SKILLS.length - 1
                        ? "1px solid rgba(0,255,136,0.05)"
                        : "none",
                    fontSize: "clamp(0.62rem, 1.1vw, 0.72rem)",
                    fontFamily: "var(--font-jetbrains), monospace",
                  }}
                >
                  <span style={{ color: "var(--muted)", opacity: 0.7 }}>
                    {skill.pid}
                  </span>
                  <span
                    style={{
                      color:
                        skill.status === "running"
                          ? "var(--green-dim)"
                          : "var(--muted)",
                    }}
                  >
                    {skill.name}
                  </span>
                  <ProcessBar value={skill.cpu} animated={isInView} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div
            style={{
              color: "var(--muted)",
              fontSize: "0.62rem",
              marginTop: "0.5rem",
              textAlign: "right",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            ps aux | grep skills
          </div>
        </div>
      </div>
    </section>
  );
}
