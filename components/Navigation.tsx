"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about", label: "--about" },
  { href: "#work", label: "--work" },
  { href: "#projects", label: "--projects" },
  { href: "#contact", label: "--contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["about", "work", "projects", "contact"];
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom >= 120;
      });
      setActiveSection(current ?? "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0.9rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.5rem",
        background: scrolled ? "rgba(8, 12, 10, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
        fontFamily: "var(--font-jetbrains), monospace",
      }}
    >
      <a
        href="#"
        style={{
          color: "var(--amber)",
          textDecoration: "none",
          fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
          textShadow: "0 0 8px var(--amber-glow)",
          letterSpacing: "0.06em",
        }}
      >
        ~/ryan-gale $
      </a>

      <div
        style={{
          display: "flex",
          gap: "clamp(1rem, 2.5vw, 2.25rem)",
          flexWrap: "wrap",
        }}
      >
        {NAV_LINKS.map(({ href, label }) => {
          const id = href.replace("#", "");
          const active = activeSection === id;
          return (
            <a
              key={href}
              href={href}
              style={{
                color: active ? "var(--amber)" : "var(--green-dim)",
                textDecoration: "none",
                fontSize: "clamp(0.7rem, 1.3vw, 0.8rem)",
                letterSpacing: "0.06em",
                transition: "color 0.2s, text-shadow 0.2s",
                textShadow: active ? "0 0 8px var(--amber-glow)" : "none",
                borderBottom: active
                  ? "1px solid var(--amber)"
                  : "1px solid transparent",
                paddingBottom: "2px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--amber)";
                el.style.textShadow = "0 0 8px var(--amber-glow)";
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  const el = e.currentTarget;
                  el.style.color = "var(--green-dim)";
                  el.style.textShadow = "none";
                }
              }}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
