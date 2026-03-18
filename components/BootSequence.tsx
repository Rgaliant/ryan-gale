"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  { text: "══════════════════════════════════════════════════", type: "dim" },
  { text: "  RYAN GALE PORTFOLIO  ·  SYSTEM INIT v1.0.0     ", type: "amber" },
  { text: "══════════════════════════════════════════════════", type: "dim" },
  { text: "", type: "blank" },
  { text: "CPU: Apple Silicon  @  3.49GHz  ............  OK", type: "normal" },
  { text: "RAM: 32768MB DDR5  ..................  AVAILABLE", type: "normal" },
  { text: "DISK: 1TB NVMe SSD  ...................  MOUNTED", type: "normal" },
  { text: "", type: "blank" },
  { text: "[ BOOT ] Loading kernel  ...................  OK", type: "ok" },
  { text: "[ BOOT ] Mounting filesystems  .............  OK", type: "ok" },
  { text: "[ BOOT ] Starting network services  ........  OK", type: "ok" },
  { text: "[ BOOT ] Initializing ruby-on-rails  .......  OK", type: "ok" },
  { text: "[ BOOT ] Loading product-thinking module  ..  OK", type: "ok" },
  { text: "[ BOOT ] Starting ai-integrations daemon  ..  OK", type: "ok" },
  { text: "", type: "blank" },
  { text: "> init portfolio.ryan_gale  .................", type: "cmd" },
];

const LAST_LINE = "> ryan_gale.init() — engineer / builder";

function getLineStyle(type: string): React.CSSProperties {
  switch (type) {
    case "amber":
      return {
        color: "var(--amber)",
        textShadow: "0 0 8px var(--amber-glow)",
        fontWeight: 600,
      };
    case "dim":
      return { color: "var(--muted)" };
    case "ok":
      return { color: "var(--green)", textShadow: "0 0 4px var(--green-glow)" };
    case "cmd":
      return {
        color: "var(--amber)",
        textShadow: "0 0 6px var(--amber-glow)",
      };
    default:
      return { color: "var(--green-dim)" };
  }
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [lastLine, setLastLine] = useState("");
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const typeLastLine = useCallback(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setLastLine(LAST_LINE.slice(0, i));
      if (i >= LAST_LINE.length) {
        clearInterval(timer);
        setShowFinalCursor(true);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => onCompleteRef.current(), 900);
        }, 1100);
      }
    }, 35);
    return () => clearInterval(timer);
  }, []);

  // Step 1: reveal lines
  useEffect(() => {
    let line = 0;
    const timer = setInterval(() => {
      line++;
      setVisibleLines(line);
      if (line >= BOOT_LINES.length) {
        clearInterval(timer);
        setTimeout(() => setShowProgress(true), 200);
      }
    }, 90);
    return () => clearInterval(timer);
  }, []);

  // Step 2: fill progress bar
  useEffect(() => {
    if (!showProgress) return;
    let p = 0;
    const timer = setInterval(() => {
      p += 2;
      setProgress(p);
      if (p >= 100) {
        clearInterval(timer);
        setTimeout(typeLastLine, 300);
      }
    }, 22);
    return () => clearInterval(timer);
  }, [showProgress, typeLastLine]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--bg)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "660px",
              padding: "2rem 2.5rem",
              fontSize: "clamp(10px, 1.4vw, 13.5px)",
              lineHeight: "1.85",
            }}
          >
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.08 }}
                style={{
                  ...getLineStyle(line.type),
                  whiteSpace: "pre",
                  minHeight: line.type === "blank" ? "0.7rem" : undefined,
                }}
              >
                {line.type !== "blank" ? line.text : ""}
              </motion.div>
            ))}

            {showProgress && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ marginTop: "1rem" }}
              >
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.85em",
                    marginBottom: "0.3rem",
                  }}
                >
                  Loading... {Math.min(progress, 100)}%
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "3px",
                    background: "var(--green-faint)",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                    style={{
                      height: "100%",
                      background: "var(--green)",
                      boxShadow: "0 0 8px var(--green-glow)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </motion.div>
            )}

            {lastLine && (
              <div
                style={{
                  marginTop: "1.5rem",
                  color: "var(--green)",
                  textShadow: "0 0 10px var(--green-glow)",
                  fontWeight: 600,
                  fontSize: "1.15em",
                  animation: "flicker 8s ease-in-out infinite",
                }}
              >
                {lastLine}
                {showFinalCursor && (
                  <span className="cursor-blink" style={{ marginLeft: "2px" }} />
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
