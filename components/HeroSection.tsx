"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--green-faint) 1px, transparent 1px),
            linear-gradient(90deg, var(--green-faint) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(0,255,136,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          textAlign: "center",
          maxWidth: "820px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top border */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          style={{
            color: "var(--muted)",
            fontSize: "clamp(9px, 1.1vw, 12px)",
            marginBottom: "1.75rem",
            letterSpacing: "0.01em",
            fontFamily: "var(--font-jetbrains), monospace",
          }}
        >
          ╔══════════════════════════════════════════════════╗
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.85, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(3.5rem, 13vw, 8rem)",
            fontWeight: 900,
            color: "var(--green)",
            textShadow:
              "0 0 40px rgba(0, 255, 136, 0.22), 0 0 80px rgba(0, 255, 136, 0.08)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: "0.6rem",
            animation: "flicker 10s ease-in-out infinite",
          }}
        >
          Ryan Gale
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            color: "var(--amber)",
            textShadow: "0 0 10px var(--amber-glow)",
            fontSize: "clamp(0.8rem, 2vw, 1.1rem)",
            letterSpacing: "0.18em",
            marginBottom: "2rem",
            fontFamily: "var(--font-jetbrains), monospace",
            textTransform: "lowercase",
          }}
        >
          full-stack engineer · product builder
        </motion.div>

        {/* Terminal prompt line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          style={{
            color: "var(--green-dim)",
            fontSize: "clamp(0.7rem, 1.4vw, 0.85rem)",
            fontFamily: "var(--font-jetbrains), monospace",
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ color: "var(--amber)" }}>~/ryan-gale</span>
          <span style={{ color: "var(--muted)" }}>
            {" "}
            $ engineer --years 5+ --stack fullstack
          </span>
          <span className="cursor-blink" style={{ marginLeft: "2px" }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#work"
            className="hero-btn-primary"
            style={{
              color: "var(--bg)",
              background: "var(--green)",
              padding: "0.65rem 1.6rem",
              textDecoration: "none",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              fontFamily: "var(--font-jetbrains), monospace",
              transition: "all 0.22s ease",
              boxShadow: "0 0 18px var(--green-glow)",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--amber)";
              el.style.boxShadow = "0 0 18px var(--amber-glow)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--green)";
              el.style.boxShadow = "0 0 18px var(--green-glow)";
            }}
          >
            ./view-work
          </a>
          <a
            href="#contact"
            style={{
              color: "var(--green)",
              border: "1px solid var(--green-border)",
              padding: "0.65rem 1.6rem",
              textDecoration: "none",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              fontFamily: "var(--font-jetbrains), monospace",
              transition: "all 0.22s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--amber)";
              el.style.color = "var(--amber)";
              el.style.boxShadow = "0 0 12px var(--amber-glow)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--green-border)";
              el.style.color = "var(--green)";
              el.style.boxShadow = "none";
            }}
          >
            ./say-hello
          </a>
        </motion.div>

        {/* Bottom border */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          style={{
            color: "var(--muted)",
            fontSize: "clamp(9px, 1.1vw, 12px)",
            marginTop: "1.75rem",
            fontFamily: "var(--font-jetbrains), monospace",
          }}
        >
          ╚══════════════════════════════════════════════════╝
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--muted)",
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textAlign: "center",
          fontFamily: "var(--font-jetbrains), monospace",
        }}
      >
        <div>scroll --down</div>
        <div
          style={{
            marginTop: "0.5rem",
            fontSize: "1rem",
            animation: "bounceDown 1.6s ease-in-out infinite",
          }}
        >
          ↓
        </div>
      </motion.div>
    </section>
  );
}
