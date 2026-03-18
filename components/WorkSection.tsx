"use client";

import { motion } from "framer-motion";

const WORK = [
  {
    id: "direct",
    label: "DIRECT",
    company: "Direct",
    url: "https://directsoftware.com",
    role: "Software Engineer",
    period: "2022 — Present",
    hash: "a3f9c2b",
    description:
      "Building full-stack features for a property management and vacation rental platform. Led development of core booking flows, owner statement systems, and internal tooling that scaled to thousands of properties across multiple markets.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "fluid",
    label: "FLUID",
    company: "Fluid",
    url: "https://fluid.app",
    role: "Software Engineer",
    period: "2020 — 2022",
    hash: "b7e1d4a",
    description:
      "Contributed to a collaborative finance platform. Focused on real-time data sync, performance optimization across large datasets, and building a shared component library that unified the product's visual language.",
    tags: ["React", "TypeScript", "GraphQL", "AWS", "Design Systems"],
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
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
        <span style={{ color: "var(--amber)" }}>$</span> git log --oneline
        --work
        <span className="cursor-blink-amber" style={{ marginLeft: "4px" }} />
      </motion.div>

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
          marginBottom: "3.5rem",
        }}
      >
        Work{" "}
        <span style={{ color: "var(--amber)", fontStyle: "italic" }}>
          Experience.
        </span>
      </motion.h2>

      <div style={{ position: "relative" }}>
        {/* Vertical connector line */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "19px",
            top: "28px",
            bottom: "28px",
            width: "1px",
            background:
              "linear-gradient(to bottom, var(--green-border), transparent 90%)",
          }}
        />

        <div
          style={{
            paddingLeft: "60px",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {WORK.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ position: "relative" }}
            >
              {/* Git commit dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-48px",
                  top: "1.4rem",
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "var(--green)",
                  boxShadow: "0 0 10px var(--green-glow)",
                  border: "2px solid var(--bg)",
                  animation: "glowPulse 2.5s ease-in-out infinite",
                }}
              />

              {/* Job card */}
              <div
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  padding: "1.75rem 2rem",
                  transition: "border-color 0.3s, box-shadow 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--green-border)";
                  el.style.boxShadow =
                    "0 0 28px var(--green-faint), inset 0 0 28px rgba(0,255,136,0.018)";
                  el.style.background = "var(--bg-hover)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "none";
                  el.style.background = "var(--bg-card)";
                }}
              >
                {/* Commit meta row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.1rem",
                    fontFamily: "var(--font-jetbrains), monospace",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--amber)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        background: "rgba(255,184,0,0.08)",
                        padding: "0.15rem 0.5rem",
                        border: "1px solid rgba(255,184,0,0.22)",
                        fontWeight: 600,
                      }}
                    >
                      [{job.label}]
                    </span>
                    <span
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.68rem",
                        opacity: 0.8,
                      }}
                    >
                      commit {job.hash}
                    </span>
                  </div>
                  <span
                    style={{
                      color: "var(--green-dim)",
                      fontSize: "0.72rem",
                    }}
                  >
                    {job.period}
                  </span>
                </div>

                {/* Role */}
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(1.3rem, 2.8vw, 1.75rem)",
                    fontWeight: 700,
                    color: "var(--green)",
                    marginBottom: "0.45rem",
                  }}
                >
                  {job.role}
                </h3>

                {/* Company link */}
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--amber-dim)",
                    fontSize: "0.78rem",
                    textDecoration: "none",
                    fontFamily: "var(--font-jetbrains), monospace",
                    display: "block",
                    marginBottom: "1.1rem",
                    transition: "color 0.2s, text-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "var(--amber)";
                    el.style.textShadow = "0 0 8px var(--amber-glow)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "var(--amber-dim)";
                    el.style.textShadow = "none";
                  }}
                >
                  → {job.url.replace("https://", "")}
                </a>

                {/* Description */}
                <p
                  style={{
                    color: "var(--green-dim)",
                    fontSize: "clamp(0.78rem, 1.5vw, 0.875rem)",
                    lineHeight: "1.85",
                    fontFamily: "var(--font-jetbrains), monospace",
                    marginBottom: "1.4rem",
                  }}
                >
                  {job.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.08em",
                        border: "1px solid var(--border)",
                        padding: "0.2rem 0.5rem",
                        fontFamily: "var(--font-jetbrains), monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
