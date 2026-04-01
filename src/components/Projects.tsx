"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const seygoTags = [
  "Flutter","FastAPI","Python","Supabase","PostgreSQL",
  "Node.js","GitHub Actions","Railway","GitHub Pages","REST API",
];

const seygoBullets = [
  "Built cross-platform Flutter app with location-based recommendations for hidden Sri Lankan spots",
  "Led CS156 project team — managed tasks, standups, sprint planning and code reviews",
  "Deployed backend on Railway (FastAPI/Python) · frontend on GitHub Pages",
  "Used Supabase as the real-time database with Row Level Security for auth",
  "Set up CI/CD pipeline with GitHub Actions for automated testing & deployment",
  "App currently live and in user testing phase — achieved 75/100 individual score",
];

const deployBadges = [
  { label: "Backend · Railway" },
  { label: "Frontend · GitHub Pages" },
  { label: "DB · Supabase" },
];

const techGrid = ["Flutter", "FastAPI", "Supabase", "Railway", "GitHub", "CI/CD"];

const otherProjects = [
  {
    num: "02",
    idx: "// 02 — Web · Team Lead",
    name: "Life on Land",
    period: "May — Aug 2025",
    desc: "Website promoting UN SDG Life on Land — raising environmental awareness and connecting volunteers to conservation efforts. Hosted via GitHub Pages.",
    tags: ["HTML5", "CSS", "Bootstrap", "GitHub Pages"],
  },
  {
    num: "03",
    idx: "// 03 — Full-Stack",
    name: "School Management System",
    period: "Sep 2022 — Oct 2023",
    desc: "Web-based platform managing students, teachers, attendance and records with role-based access control for admin, teacher and student roles.",
    tags: ["HTML/CSS", "JavaScript", "MySQL", "PHP"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) =>
              el.classList.add("visible")
            );
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-28 px-14 max-w-[1300px] mx-auto z-[2] relative" ref={sectionRef}>
      {/* Header */}
      <div className="mb-16 reveal">
        <p className="font-mono text-[11px] text-accent tracking-[4px] uppercase flex items-center gap-3 mb-3">
          <span className="w-7 h-px bg-accent" />03 — Projects
        </p>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95]"
          style={{ fontSize: "clamp(38px, 5vw, 72px)" }}
        >
          Selected{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
            Work
          </span>
        </h2>
      </div>

      {/* ── SEYGO FEATURED CARD ── */}
      <div
        className="border border-white/[0.07] relative overflow-hidden mb-0.5 transition-all duration-300 hover:border-accent/22 reveal"
        style={{ background: "#06060a" }}
      >
        {/* Radial tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 5% 5%, rgba(180,245,66,0.05), transparent 55%)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Body */}
          <div className="p-14">
            <p className="font-mono text-[10px] text-[#6a6870] tracking-[3px] mb-4">
              // 01 — Featured · Real-World App · Team Lead
            </p>
            {/* SeyGo logo — white transparent PNG blends cleanly on dark background */}
            <div className="mb-1" style={{ width: "clamp(180px, 22vw, 280px)", height: "auto" }}>
              <Image
                src="/seygo-logo.png"
                alt="SeyGo"
                width={280}
                height={110}
                className="w-full h-auto object-contain"
                style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.15))" }}
                priority
              />
            </div>
            <p className="font-mono text-[10px] text-accent tracking-[2px] uppercase mb-5">
              Sep 2025 — Mar 2026 · Currently in Testing
            </p>
            <p className="text-[15px] text-[#7a7880] leading-[1.8] mb-6">
              A smart travel app for discovering hidden Sri Lankan destinations with personalized
              routes and community-driven insights. Built cross-platform with Flutter, backed by
              FastAPI and Supabase.{" "}
              <strong className="text-white">
                Live deployment — backend on Railway, frontend on GitHub Pages.
              </strong>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {seygoTags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 border border-white/[0.07] font-mono text-[9px] text-[#6a6870] tracking-[1px] uppercase transition-all duration-200 hover:border-accent/20 hover:text-accent/80"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="mb-5 space-y-1">
              {seygoBullets.map((b) => (
                <li key={b} className="text-[13px] text-[#666] pl-5 relative leading-[1.7] border-b border-white/[0.03] pb-1">
                  <span className="absolute left-0 top-0 text-accent text-[11px]">→</span>
                  {b.includes("Railway") ? (
                    <>
                      {b.split("Railway")[0]}
                      <strong className="text-accent">Railway</strong>
                      {b.split("Railway")[1]?.split("GitHub Pages")[0]}
                      {b.includes("GitHub Pages") && (
                        <><strong className="text-accent">GitHub Pages</strong>{b.split("GitHub Pages")[1]}</>
                      )}
                    </>
                  ) : b.includes("Supabase") ? (
                    <>
                      {b.split("Supabase")[0]}
                      <strong className="text-accent">Supabase</strong>
                      {b.split("Supabase")[1]}
                    </>
                  ) : b.includes("GitHub Actions") ? (
                    <>
                      {b.split("GitHub Actions")[0]}
                      <strong className="text-accent">GitHub Actions</strong>
                      {b.split("GitHub Actions")[1]}
                    </>
                  ) : (
                    b
                  )}
                </li>
              ))}
            </ul>

            {/* Deploy badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {deployBadges.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 border border-accent/15 bg-accent/[0.05] font-mono text-[9px] text-accent tracking-[1px] uppercase"
                >
                  <span
                    className="w-[5px] h-[5px] rounded-full bg-accent animate-blink"
                    style={{ boxShadow: "0 0 6px #b4f542" }}
                  />
                  {d.label}
                </div>
              ))}
            </div>

            {/* Score badge */}
            <div className="flex items-center gap-3 mt-4 px-4 py-2 border border-amber/25 bg-amber/[0.07] w-fit">
              <span className="font-display text-[28px] font-extrabold text-amber leading-none">75</span>
              <div>
                <p className="font-mono text-[9px] text-amber/70 tracking-[2px] uppercase">Individual Score</p>
                <p className="font-mono text-[9px] text-[#6a6870] tracking-[1px] mt-0.5">CS156 · SDGP Module</p>
              </div>
            </div>
          </div>

          {/* Visual panel */}
          <div
            className="flex flex-col items-center justify-center gap-5 p-10 relative overflow-hidden min-h-[360px]"
            style={{ background: "rgba(180,245,66,0.015)" }}
          >
            {/* Big bg number */}
            <span
              className="absolute font-display font-extrabold text-transparent pointer-events-none right-[-30px] bottom-[-20px] leading-none animate-numFloat"
              style={{
                fontSize: "200px",
                WebkitTextStroke: "1px rgba(180,245,66,0.05)",
              }}
            >
              SG
            </span>

            {/* Status */}
            <div className="flex items-center gap-2 px-4 py-2 border border-green-500/20 bg-green-500/[0.05] font-mono text-[9px] text-green-400 tracking-[2px] z-[1]">
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-400 animate-blink"
                style={{ boxShadow: "0 0 8px #4ade80" }}
              />
              Live · In Testing
            </div>

            {/* SeyGo Logo — large centrepiece */}
            <div className="relative z-[1] flex items-center justify-center">
              {/* Pulsing ring behind logo */}
              <div
                className="absolute border border-accent/[0.07] animate-boxPulse rounded-full"
                style={{ inset: "-18px" }}
              />
              <div
                className="absolute border border-accent/[0.07] animate-boxPulse rounded-full"
                style={{ inset: "-36px", animationDelay: "0.9s" }}
              />
              <Image
                src="/seygo-logo.png"
                alt="SeyGo Logo"
                width={200}
                height={80}
                className="object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 24px rgba(180,245,66,0.25)) drop-shadow(0 0 8px rgba(255,255,255,0.15))",
                  mixBlendMode: "screen",
                }}
                priority
              />
            </div>

            {/* Tech grid */}
            <div
              className="grid grid-cols-2 gap-[4px] z-[1] w-full"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {techGrid.map((t) => (
                <div
                  key={t}
                  className="py-2 px-3 bg-bg border border-white/[0.07] font-mono text-[9px] text-[#6a6870] text-center transition-all duration-200 hover:border-accent/22 hover:text-accent tracking-[1px]"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── OTHER PROJECTS ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 mt-0.5"
        style={{ gap: "2px", background: "rgba(255,255,255,0.07)" }}
      >
        {otherProjects.map((p, i) => (
          <div
            key={p.name}
            className={`bg-bg p-12 relative overflow-hidden transition-colors duration-300 hover:bg-surface group ${
              i === 0 ? "reveal delay-100" : "reveal delay-200"
            }`}
          >
            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

            <span className="absolute top-5 right-7 font-display text-[80px] font-extrabold text-accent/[0.04] leading-none pointer-events-none">
              {p.num}
            </span>
            <p className="font-mono text-[10px] text-[#6a6870] tracking-[2px] mb-4">{p.idx}</p>
            <h3 className="font-display text-[32px] font-bold tracking-[-0.5px] mb-1.5">{p.name}</h3>
            <p className="font-mono text-[10px] text-accent tracking-[2px] mb-3.5">{p.period}</p>
            <p className="text-[14px] text-[#666] leading-[1.75] mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 border border-white/[0.07] font-mono text-[9px] text-[#6a6870] tracking-[1px] uppercase transition-all duration-200 group-hover:border-accent/20 group-hover:text-accent/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
