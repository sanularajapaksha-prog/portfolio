"use client";
import { useEffect, useRef } from "react";

const techSkills = [
  { name: "Java · Python · Node.js · TypeScript", pct: 0.8, display: "80%" },
  { name: "HTML · CSS · React · Next.js",         pct: 0.85, display: "85%" },
  { name: "Flutter · Dart",                        pct: 0.7,  display: "70%" },
  { name: "MySQL · PostgreSQL · Supabase",          pct: 0.75, display: "75%" },
  { name: "Git · GitHub Actions · CI/CD · Railway", pct: 0.8,  display: "80%" },
];

const softSkills = [
  "Communication","Teamwork","Time Mgmt","Problem Solving",
  "Adaptability","Leadership","Agile","Code Review",
];

const leadership = [
  { name: "Life on Land Website", period: "May–Jul 2025", active: false },
  { name: "SEYGO Mobile App",     period: "Sep 2025–Present", active: true },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) =>
              el.classList.add("visible")
            );
            // Animate skill bars
            e.target.querySelectorAll<HTMLElement>(".sbar-fill").forEach((bar) => {
              bar.classList.add("animated");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 px-14 max-w-[1300px] mx-auto z-[2] relative" ref={sectionRef}>
      {/* Header */}
      <div className="mb-16 reveal">
        <p className="font-mono text-[11px] text-accent tracking-[4px] uppercase flex items-center gap-3 mb-3">
          <span className="w-7 h-px bg-accent" />04 — Skills
        </p>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95]"
          style={{ fontSize: "clamp(38px, 5vw, 72px)" }}
        >
          Tech{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
            Stack
          </span>
        </h2>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "2px", background: "rgba(255,255,255,0.07)" }}
      >
        {/* Technical Skills */}
        <div className="card-popup bg-bg p-10 hover:bg-surface transition-colors duration-300 reveal-left">
          <p className="font-mono text-[10px] text-amber tracking-[3px] uppercase mb-7 flex items-center gap-2.5">
            <span className="w-[5px] h-[5px] bg-amber" />
            Languages &amp; Frameworks
          </p>
          <div className="space-y-5">
            {techSkills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-[13px] text-white font-normal">{s.name}</span>
                  <span className="font-mono text-[11px] text-[#6a6870]">{s.display}</span>
                </div>
                <div className="h-[2px] bg-white/[0.05] overflow-hidden">
                  <div
                    className="sbar-fill h-full bg-gradient-to-r from-accent to-accent/30"
                    style={{ transform: `scaleX(${s.pct})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="card-popup bg-bg p-10 hover:bg-surface transition-colors duration-300 reveal-right">
          <p className="font-mono text-[10px] text-amber tracking-[3px] uppercase mb-7 flex items-center gap-2.5">
            <span className="w-[5px] h-[5px] bg-amber" />
            Soft Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 border border-white/[0.07] font-mono text-[10px] text-[#6a6870] tracking-[2px] uppercase transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/[0.06]"
                style={{ clipPath: "polygon(5px 0,100% 0,100% 100%,0 100%,0 5px)" }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Leadership */}
          <div className="mt-8">
            <p className="font-mono text-[10px] text-accent2 tracking-[3px] uppercase mb-4 flex items-center gap-2.5">
              <span className="w-[5px] h-[5px] bg-accent2" />
              Leadership Roles
            </p>
            <div className="border border-white/[0.07] overflow-hidden">
              {leadership.map((l, i) => (
                <div
                  key={l.name}
                  className={`flex justify-between items-center px-5 py-3.5 text-[13px] ${
                    i < leadership.length - 1 ? "border-b border-white/[0.07]" : ""
                  }`}
                >
                  <span>{l.name}</span>
                  <span
                    className={`font-mono text-[10px] tracking-[1px] ${
                      l.active ? "text-accent" : "text-[#6a6870]"
                    }`}
                  >
                    {l.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
