"use client";

import { motion } from "framer-motion";

const BIO_TEXT = `Senior software engineer with 7 years of full-stack
experience, now focused on AI-native product
development.

Built production RAG systems, vector search pipelines,
and agentic tooling at Fluid.app. Deep background in
TypeScript/React and API architecture; experienced
leading engineering teams from 0→1 in startup
environments.`;

const SKILL_CATEGORIES = [
  {
    label: "AI/ML",
    skills: ["LangChain", "RAG", "pgvector", "OpenAI / Anthropic APIs", "Embeddings", "Agentic Workflows"],
  },
  {
    label: "LANGUAGES",
    skills: ["TypeScript", "JavaScript", "Ruby", "Python"],
  },
  {
    label: "FRONTEND",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "BACKEND",
    skills: ["Node.js", "Ruby on Rails", "REST APIs", "tRPC"],
  },
  {
    label: "INFRA",
    skills: ["PostgreSQL", "Cloudflare", "AWS", "GCP", "Docker"],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: "var(--green-dim)",
              lineHeight: "1.95",
              fontSize: "clamp(0.78rem, 1.5vw, 0.88rem)",
              fontFamily: "var(--font-jetbrains), monospace",
              whiteSpace: "pre-line",
            }}
          >
            {BIO_TEXT}
          </motion.div>
        </div>

        {/* Skills grid column */}
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
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
              <span
                style={{
                  color: "var(--muted)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.06em",
                  marginLeft: "0.5rem",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
              >
                tech-stack.json
              </span>
            </div>

            {/* Categories */}
            <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
              {SKILL_CATEGORIES.map((category, catIdx) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + catIdx * 0.1, duration: 0.4 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "88px 1fr",
                    gap: "0.75rem",
                    alignItems: "start",
                    paddingBottom: catIdx < SKILL_CATEGORIES.length - 1 ? "1rem" : 0,
                    marginBottom: catIdx < SKILL_CATEGORIES.length - 1 ? "1rem" : 0,
                    borderBottom:
                      catIdx < SKILL_CATEGORIES.length - 1
                        ? "1px solid rgba(0,255,136,0.06)"
                        : "none",
                    fontFamily: "var(--font-jetbrains), monospace",
                  }}
                >
                  {/* Category label */}
                  <span
                    style={{
                      color: "var(--amber)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                      paddingTop: "0.1rem",
                    }}
                  >
                    {category.label}
                  </span>

                  {/* Skill tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.15 + catIdx * 0.1 + skillIdx * 0.05,
                          duration: 0.3,
                        }}
                        style={{
                          color: "var(--green-dim)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.04em",
                          border: "1px solid var(--border)",
                          padding: "0.2rem 0.55rem",
                          background: "var(--green-faint)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
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
            cat tech-stack.json | jq .skills
          </div>
        </div>
      </div>
    </section>
  );
}
