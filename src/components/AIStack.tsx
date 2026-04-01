"use client";
import { useEffect, useRef } from "react";

/* ─── Data ─────────────────────────────────────────────────── */

const aiTools = [
  {
    category: "Development & Coding",
    tools: ["Claude", "ChatGPT", "DeepSeek", "Gemini", "Cursor", "Ollama"],
    bullets: [
      "Backend logic design, debugging, and rapid prototyping",
      "Cursor + AI enables fast iteration while maintaining architecture control",
      "Ollama: local model execution — offline testing, zero API cost",
    ],
    example: {
      label: "Real use",
      text: "Resolved FastAPI endpoint failures by analyzing logs, restructuring validation middleware, and optimizing response handling with AI-assisted root-cause analysis.",
    },
    color: "accent",
  },
  {
    category: "UI/UX Design",
    tools: ["Figma"],
    bullets: [
      "Wireframes, component systems, and user flows before any code is written",
      "Design tokens mapped directly to Flutter theme variables",
    ],
    example: {
      label: "Real use",
      text: "Designed SeyGo's radius-based travel discovery UI in Figma — validated the interaction model before writing a single line of Flutter.",
    },
    color: "accent2",
  },
  {
    category: "3D & Visual Systems",
    tools: ["Leonardo AI", "Spline"],
    bullets: [
      "Interactive visuals and enhanced frontend experience",
      "Spline 3D elements embed directly into web UI with minimal performance overhead",
    ],
    example: {
      label: "Real use",
      text: "Built interactive 3D portfolio elements to improve engagement metrics without runtime performance cost.",
    },
    color: "amber",
  },
  {
    category: "Research & Decisions",
    tools: ["Perplexity", "Grok"],
    bullets: [
      "Technical research, API comparisons, and solution validation",
      "Supports informed engineering decisions — not guesswork",
      "Used before integrating any new API or service dependency",
    ],
    example: null,
    color: "accent",
  },
  {
    category: "Automation Layer",
    tools: ["Anti-Gravity", "Ollama"],
    bullets: [
      "Automates structured AI workflows and development pipelines",
      "Reduces repetitive engineering tasks and accelerates iteration cycles",
    ],
    example: null,
    color: "accent2",
  },
];

const apis = [
  {
    name: "DeepSeek API",
    badge: "Primary AI Engine",
    badgeColor: "accent",
    points: [
      "Cost-efficient AI processing for production features",
      "Used for recommendation logic and backend AI tasks",
    ],
  },
  {
    name: "Grok API",
    badge: "Fallback / Experimental",
    badgeColor: "amber",
    points: [
      "Secondary AI processing and experimental feature testing",
      "Prevents single-provider dependency — multi-API reliability",
    ],
  },
  {
    name: "TripAdvisor API",
    badge: "Travel Data",
    badgeColor: "accent2",
    points: [
      "Provides reviews, ratings, and destination metadata",
      "Powers destination insights in SeyGo",
    ],
  },
  {
    name: "OpenMapGL / Google Maps",
    badge: "Geo & Navigation",
    badgeColor: "accent",
    points: [
      "Map rendering, location search, and route optimization",
      "Core to travel discovery and navigation features in SeyGo",
    ],
  },
  {
    name: "Google AI (Gemini API)",
    badge: "Multimodal AI",
    badgeColor: "accent2",
    points: [
      "Multimodal reasoning — text, image, and code in a single model",
      "Used for prototyping AI features before switching to cost-optimised providers",
      "Integrates with Google Cloud ecosystem for production-ready deployments",
    ],
  },
];

const engPractices = [
  "Secure API key management via environment variables — no hardcoded secrets",
  "Cost optimization: DeepSeek over high-cost providers for production",
  "Multi-API fallback strategy for reliability and vendor independence",
];

const workflow = [
  { step: "01", label: "Idea", detail: "AI-assisted feature planning & scope definition" },
  { step: "02", label: "Design", detail: "UI/UX wireframes in Figma" },
  { step: "03", label: "Build", detail: "Flutter (mobile) · FastAPI (backend)" },
  { step: "04", label: "AI Coding", detail: "Cursor + Claude / ChatGPT for rapid iteration" },
  { step: "05", label: "Integrate", detail: "AI + Travel + Map APIs" },
  { step: "06", label: "Test", detail: "AI-supported log analysis & debugging" },
  { step: "07", label: "Deploy", detail: "Frontend → Vercel / GitHub Pages · Backend → Railway" },
];

const whyPoints = [
  {
    num: "01",
    title: "Accelerates, never replaces",
    body: "AI speeds up development — core engineering thinking, architecture decisions, and code ownership remain with me.",
  },
  {
    num: "02",
    title: "Cost-efficient architecture",
    body: "DeepSeek as primary AI provider over high-cost alternatives — real cost analysis applied at the infrastructure level.",
  },
  {
    num: "03",
    title: "No vendor lock-in",
    body: "Multi-provider AI integration (DeepSeek → Grok fallback) ensures reliability and flexibility across production systems.",
  },
  {
    num: "04",
    title: "Full-stack AI capability",
    body: "Can design, build, integrate, and deploy complete AI-powered systems from zero — end to end.",
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function AIStack() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el) => el.classList.add("visible"));
        });
      },
      { threshold: 0.03 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai-stack"
      className="py-28 px-14 max-w-[1300px] mx-auto z-[2] relative"
      ref={sectionRef}
    >
      {/* ── Header ── */}
      <div className="mb-16 reveal">
        <p className="font-mono text-[11px] text-accent tracking-[4px] uppercase flex items-center gap-3 mb-3">
          <span className="w-7 h-px bg-accent" />06 — AI & Automation Stack
        </p>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95]"
          style={{ fontSize: "clamp(38px, 5vw, 72px)" }}
        >
          AI &amp;{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
          >
            Automation
          </span>
        </h2>
        <p className="font-mono text-[12px] text-[#6a6870] tracking-[1px] mt-4 max-w-[560px] leading-[1.8]">
          Real engineering applications of AI tooling — structured by purpose, not by buzzword.
          Every tool listed has a concrete use case in production or active development.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SUBSECTION 1 — AI TOOLS
      ══════════════════════════════════════════════════════════ */}
      <div className="mb-1">
        {/* Sub-header */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <span className="w-1.5 h-1.5 bg-amber rounded-full" style={{ boxShadow: "0 0 8px #f5a742" }} />
          <span className="font-mono text-[10px] text-amber tracking-[3px] uppercase">
            AI Tools — Applied Engineering Use
          </span>
          <span className="flex-1 h-px bg-white/[0.05]" />
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          style={{ gap: "2px", background: "rgba(255,255,255,0.06)" }}
        >
          {aiTools.map((t, i) => (
            <div
              key={t.category}
              className={`card-popup bg-bg p-8 relative overflow-hidden transition-colors duration-300 hover:bg-surface group ${
                i % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
            >
              {/* Watermark */}
              <span
                className="absolute right-4 bottom-2 font-display font-extrabold text-transparent leading-none pointer-events-none select-none"
                style={{
                  fontSize: "72px",
                  WebkitTextStroke: `1px rgba(${
                    t.color === "accent"
                      ? "180,245,66"
                      : t.color === "accent2"
                      ? "66,212,245"
                      : "245,167,66"
                  },0.045)`,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Category label */}
              <p
                className={`font-mono text-[9px] tracking-[3px] uppercase mb-3 ${
                  t.color === "accent"
                    ? "text-accent"
                    : t.color === "accent2"
                    ? "text-accent2"
                    : "text-amber"
                }`}
              >
                {t.category}
              </p>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {t.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 border border-white/[0.09] font-mono text-[9px] text-[#888] tracking-[1px] uppercase transition-all duration-200 group-hover:border-accent/20 group-hover:text-accent/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-4">
                {t.bullets.map((b) => (
                  <li key={b} className="text-[12px] text-[#666] pl-4 relative leading-[1.7]">
                    <span className="absolute left-0 top-0 text-accent text-[11px]">→</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Example box */}
              {t.example && (
                <div className="mt-4 border-l-2 border-accent/30 pl-3 py-1 bg-accent/[0.03]">
                  <p className="font-mono text-[8px] text-accent tracking-[2px] uppercase mb-1">
                    ◆ {t.example.label}
                  </p>
                  <p className="text-[11px] text-[#777] leading-[1.7] italic">{t.example.text}</p>
                </div>
              )}

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SUBSECTION 2 — API & DATA INTEGRATION
      ══════════════════════════════════════════════════════════ */}
      <div className="mt-10 mb-1">
        {/* Sub-header */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <span className="w-1.5 h-1.5 bg-accent2 rounded-full" style={{ boxShadow: "0 0 8px #42d4f5" }} />
          <span className="font-mono text-[10px] text-accent2 tracking-[3px] uppercase">
            API & Data Integration
          </span>
          <span className="flex-1 h-px bg-white/[0.05]" />
        </div>

        {/* API cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "2px", background: "rgba(255,255,255,0.06)" }}
        >
          {apis.map((api, i) => (
            <div
              key={api.name}
              className={`card-popup bg-bg p-7 relative overflow-hidden group transition-colors duration-300 hover:bg-surface ${
                i % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
            >
              <div className="flex items-start justify-between mb-4 gap-3">
                <h4 className="font-display font-bold text-[18px] tracking-tight">{api.name}</h4>
                <span
                  className={`flex-shrink-0 px-2.5 py-1 font-mono text-[8px] tracking-[2px] uppercase border ${
                    api.badgeColor === "accent"
                      ? "border-accent/25 text-accent bg-accent/[0.06]"
                      : api.badgeColor === "accent2"
                      ? "border-accent2/25 text-accent2 bg-accent2/[0.06]"
                      : "border-amber/25 text-amber bg-amber/[0.06]"
                  }`}
                >
                  {api.badge}
                </span>
              </div>
              <ul className="space-y-2">
                {api.points.map((p) => (
                  <li key={p} className="text-[12px] text-[#666] pl-4 relative leading-[1.75]">
                    <span className="absolute left-0 top-0 text-accent2 text-[11px]">→</span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent2 to-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Engineering practices panel */}
        <div className="mt-0.5 bg-bg border-t-0 reveal" style={{ background: "rgba(180,245,66,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="p-6 border-b border-white/[0.07] flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" style={{ boxShadow: "0 0 8px #b4f542" }} />
            <span className="font-mono text-[10px] text-accent tracking-[3px] uppercase">
              Engineering Practices
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {engPractices.map((p) => (
              <div key={p} className="bg-bg px-6 py-5 text-[12px] text-[#666] leading-[1.75] relative pl-9">
                <span className="absolute left-4 top-5 text-accent text-[11px]">◆</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SUBSECTION 3 — SYSTEM WORKFLOW
      ══════════════════════════════════════════════════════════ */}
      <div className="mt-10 mb-1 reveal">
        {/* Sub-header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" style={{ boxShadow: "0 0 8px #b4f542" }} />
          <span className="font-mono text-[10px] text-accent tracking-[3px] uppercase">
            System Workflow
          </span>
          <span className="flex-1 h-px bg-white/[0.05]" />
        </div>

        {/* Pipeline */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "2px",
            background: "rgba(255,255,255,0.06)",
            overflowX: "auto",
          }}
        >
          {workflow.map((w, i) => (
            <div
              key={w.step}
              className="card-popup bg-bg p-5 relative group hover:bg-surface transition-colors duration-300 min-w-[130px]"
            >
              {/* Connector arrow */}
              {i < workflow.length - 1 && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 font-mono text-[10px] text-accent/30 z-10 select-none">
                  ›
                </span>
              )}

              <span className="font-mono text-[9px] text-accent/40 tracking-[2px] block mb-2">
                {w.step}
              </span>
              <p className="font-display font-bold text-[14px] text-white mb-2 leading-tight">
                {w.label}
              </p>
              <p className="font-mono text-[9px] text-[#555] leading-[1.6] tracking-[0.5px]">
                {w.detail}
              </p>

              {/* Active accent bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          WHY THIS MATTERS
      ══════════════════════════════════════════════════════════ */}
      <div className="mt-10 reveal">
        {/* Sub-header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-1.5 h-1.5 bg-amber rounded-full" style={{ boxShadow: "0 0 8px #f5a742" }} />
          <span className="font-mono text-[10px] text-amber tracking-[3px] uppercase">
            Why This Matters
          </span>
          <span className="flex-1 h-px bg-white/[0.05]" />
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "2px", background: "rgba(255,255,255,0.06)" }}
        >
          {whyPoints.map((w) => (
            <div
              key={w.num}
              className="card-popup bg-bg px-8 py-7 relative overflow-hidden group hover:bg-surface transition-colors duration-300"
            >
              {/* Big watermark number */}
              <span
                className="absolute right-5 top-2 font-display font-extrabold text-transparent leading-none pointer-events-none select-none"
                style={{
                  fontSize: "68px",
                  WebkitTextStroke: "1px rgba(180,245,66,0.05)",
                }}
              >
                {w.num}
              </span>

              <p className="font-mono text-[9px] text-accent tracking-[3px] uppercase mb-3">
                ◆ {w.num}
              </p>
              <h4 className="font-display font-bold text-[17px] tracking-tight mb-2 text-white">
                {w.title}
              </h4>
              <p className="text-[13px] text-[#666] leading-[1.8]">{w.body}</p>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Badge */}
        <div
          className="mt-0.5 flex items-center gap-4 px-8 py-5 border border-accent/15"
          style={{ background: "rgba(180,245,66,0.03)" }}
        >
          <div className="relative flex-shrink-0">
            <span
              className="w-3 h-3 rounded-full bg-accent block animate-blink"
              style={{ boxShadow: "0 0 12px #b4f542" }}
            />
          </div>
          <div>
            <p className="font-mono text-[10px] text-accent tracking-[3px] uppercase mb-0.5">
              Badge · AI-Augmented Developer
            </p>
            <p className="text-[13px] text-[#888]">
              Builds scalable systems using modern AI tooling and APIs — across the full stack, from design to deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
