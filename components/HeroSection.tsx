"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const CODE_LINES = [
  `const embeddings = await openai.embeddings.create({ model: 'text-embedding-ada-002', input: query });`,
  `export async function vectorSearch(query: string): Promise<Result[]> {`,
  `  const vec = await embed(query);`,
  `  return db.select().from(docs).orderBy(cosineDistance(docs.vec, vec)).limit(10);`,
  `type RAGContext = { chunks: Chunk[]; score: number; metadata: Record<string, unknown> };`,
  `async function ingestDocument(file: File, opts: ChunkOptions): Promise<void> {`,
  `  const chunks = splitText(file.content, { chunkSize: 512, overlap: 64 });`,
  `  await Promise.all(chunks.map(c => embedAndStore(c)));`,
  `}`,
  `class WebhookDispatcher < ApplicationService`,
  `  def call(event_type, payload)`,
  `    resource = ResourceFactory.build(event_type, payload)`,
  `    handlers_for(event_type).each { |handler| handler.call(resource) }`,
  `  end`,
  `import { pgvector } from 'pgvector/drizzle-orm';`,
  `const trpc = createTRPCRouter({ search: searchRouter, assets: assetRouter, webhooks: webhookRouter });`,
  `scope :active, -> { where(status: :active).includes(:webhooks) }`,
  `@asset = DamPicker.upload(file, storage: :cloudflare, transforms: [:thumb, :webp])`,
  `const schema = z.object({ query: z.string(), filters: z.record(z.string()).optional() });`,
  `router.post('/webhooks/:type', validateSignature, asyncHandler(webhookController.handle));`,
  `before_action :authenticate_api_key!, only: [:create, :update, :destroy]`,
  `const { data } = await supabase.rpc('match_documents', { query_embedding: vec, match_count: 5 });`,
  `has_many :webhook_subscriptions, -> { active }, dependent: :destroy`,
  `export const ragPipeline = new Pipeline({ retriever, reranker, generator });`,
  `  return await db.transaction(async (tx) => { await tx.insert(chunks).values(rows); });`,
];

type Stream = {
  y: number;
  x: number;
  speed: number;
  opacity: number;
  text: string;
  textWidth: number;
  fontSize: number;
};

function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let streams: Stream[] = [];
    let animId: number;
    let lastTime = 0;

    const buildStreams = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const rowSpacing = 38;
      const rows = Math.ceil(canvas.height / rowSpacing);
      streams = [];

      for (let i = 0; i < rows; i++) {
        const fontSize = i % 3 === 0 ? 11 : 12;
        const text = CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)];
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        const textWidth = ctx.measureText(text).width;
        const speed = 0.4 + Math.random() * 0.7;
        const opacity = 0.12 + Math.random() * 0.28;

        streams.push({
          y: rowSpacing * i + rowSpacing,
          x: -Math.random() * canvas.width,
          speed,
          opacity,
          text,
          textWidth,
          fontSize,
        });
      }
    };

    buildStreams();
    window.addEventListener("resize", buildStreams);

    const draw = (time: number) => {
      animId = requestAnimationFrame(draw);
      if (time - lastTime < 30) return;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of streams) {
        ctx.font = `${s.fontSize}px "JetBrains Mono", monospace`;
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = "#00ff88";

        // Tile the text seamlessly across the width
        const gap = 120;
        const tile = s.textWidth + gap;
        const startX = ((s.x % tile) - tile);
        for (let x = startX; x < canvas.width; x += tile) {
          ctx.fillText(s.text, x, s.y);
        }

        s.x += s.speed;
      }

      ctx.globalAlpha = 1;
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", buildStreams);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        maskImage:
          "radial-gradient(ellipse 90% 80% at 50% 50%, black 10%, transparent 100%)",
        pointerEvents: "none",
      }}
    />
  );
}

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
      <CodeRain />

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
          senior engineer · ai-native builder
        </motion.div>

        {/* Terminal prompt line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          style={{
            display: "inline-block",
            color: "var(--green-dim)",
            fontSize: "clamp(0.7rem, 1.4vw, 0.85rem)",
            fontFamily: "var(--font-jetbrains), monospace",
            marginBottom: "2.5rem",
            padding: "0.45rem 1rem",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid var(--border)",
          }}
        >
          <span style={{ color: "var(--amber)" }}>~/ryan-gale</span>
          <span style={{ color: "var(--green-dim)" }}>
            {" "}
            $ engineer --years 7+ --stack ts+rails --focus ai-native
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
          color: "var(--green-dim)",
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textAlign: "center",
          fontFamily: "var(--font-jetbrains), monospace",
          padding: "0.4rem 0.9rem",
          background: "rgba(0,0,0,0.6)",
          border: "1px solid var(--border)",
          whiteSpace: "nowrap",
        }}
      >
        <div>scroll --down</div>
        <div
          style={{
            marginTop: "0.5rem",
            fontSize: "1.2rem",
            animation: "bounceDown 1.6s ease-in-out infinite",
          }}
        >
          ↓
        </div>
      </motion.div>
    </section>
  );
}
