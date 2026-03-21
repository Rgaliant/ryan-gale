"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "deckbuilder-rag",
    name: "MTG Deck Builder (RAG)",
    filename: "deckbuilder-rag/",
    permissions: "-rwxr-xr-x",
    size: "8.1M",
    date: "Mar 2026",
    url: "https://tribal-radar-490716-k5-6707e.web.app/",
    description:
      "Production AI app that builds Magic: The Gathering Commander decks through natural language conversation. Uses RAG with pgvector + Claude to retrieve semantically relevant cards and return a validated, explained 99-card deck.",
    tags: ["Rails 8", "React", "TypeScript", "PostgreSQL", "pgvector", "Claude AI", "RAG"],
    status: "active",
  },
  {
    id: "opendeck",
    name: "OpenDeck TCG",
    filename: "opendecktcg/",
    permissions: "-rwxr-xr-x",
    size: "4.2M",
    date: "Jan 2024",
    url: "https://opendecktcg.com",
    description:
      "A trading card game platform for deck building, collection management, and community play. Built with a focus on performance and real-time interactions.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Realtime"],
    status: "active",
  },
  {
    id: "thespaceslc",
    name: "The Space SLC",
    filename: "thespaceslc/",
    permissions: "-rwxr-xr-x",
    size: "1.8M",
    date: "Nov 2023",
    url: "https://thespaceslc.com",
    description:
      "Digital presence and booking platform for a community space and venue in Salt Lake City. Clean, event-driven architecture with a custom CMS.",
    tags: ["React", "Node.js", "Design", "CMS"],
    status: "active",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
        <span style={{ color: "var(--amber)" }}>$</span> ls -la ~/projects/
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
          marginBottom: "1rem",
        }}
      >
        Personal{" "}
        <span style={{ color: "var(--amber)", fontStyle: "italic" }}>
          Projects.
        </span>
      </motion.h2>

      {/* ls header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          color: "var(--muted)",
          fontSize: "0.68rem",
          marginBottom: "1.25rem",
          paddingBottom: "0.6rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        total {PROJECTS.length}
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.75rem",
        }}
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.14 }}
          >
            {/* ls -la line */}
            <div
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.62rem",
                color: "var(--muted)",
                marginBottom: "0.5rem",
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span>{project.permissions}</span>
              <span>ryan</span>
              <span>staff</span>
              <span>{project.size}</span>
              <span>{project.date}</span>
              <span style={{ color: "var(--amber)" }}>{project.filename}</span>
            </div>

            {/* Card */}
            <div
              style={{
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                padding: "1.75rem",
                transition:
                  "border-color 0.3s, box-shadow 0.3s, transform 0.3s, background 0.3s",
                height: "calc(100% - 1.6rem)",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--green-border)";
                el.style.boxShadow =
                  "0 10px 36px var(--green-faint), 0 0 0 1px rgba(0,255,136,0.06)";
                el.style.transform = "translateY(-5px)";
                el.style.background = "var(--bg-hover)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
                el.style.background = "var(--bg-card)";
              }}
            >
              {/* Status indicator */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.1rem",
                }}
              >
                <span
                  style={{
                    color: "var(--green)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-jetbrains), monospace",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--green)",
                      animation: "glowPulse 2s ease-in-out infinite",
                    }}
                  />
                  {project.status}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)",
                  fontWeight: 700,
                  color: "var(--green)",
                  marginBottom: "0.8rem",
                  textShadow: "0 0 12px rgba(0,255,136,0.12)",
                }}
              >
                {project.name}
              </h3>

              <p
                style={{
                  color: "var(--green-dim)",
                  fontSize: "clamp(0.75rem, 1.3vw, 0.84rem)",
                  lineHeight: "1.75",
                  fontFamily: "var(--font-jetbrains), monospace",
                  marginBottom: "1.4rem",
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1.5rem",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      border: "1px solid var(--border)",
                      padding: "0.18rem 0.45rem",
                      fontFamily: "var(--font-jetbrains), monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Visit link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--amber)",
                  textDecoration: "none",
                  fontSize: "0.78rem",
                  letterSpacing: "0.05em",
                  fontFamily: "var(--font-jetbrains), monospace",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "gap 0.2s, text-shadow 0.2s",
                  textShadow: "0 0 6px var(--amber-glow)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.gap = "0.8rem";
                  el.style.textShadow = "0 0 12px var(--amber-glow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.gap = "0.5rem";
                  el.style.textShadow = "0 0 6px var(--amber-glow)";
                }}
              >
                <span>→</span>
                <span>visit {project.url.replace("https://", "")}</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
