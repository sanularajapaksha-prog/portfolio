"use client";
import { useEffect, useRef } from "react";

const education = [
  {
    period: "2025 — 2028",
    institution: "University of Westminster",
    degree: "BSc (Hons) Computer Science — UK Degree via IIT",
    desc: "Software/mobile development, databases, web technologies, algorithms. Hands-on through coursework, team projects, and industry-focused modules.",
    badge: "In Progress",
    badgeColor: "text-accent border-accent/20 bg-accent/7",
  },
  {
    period: "2024 — 2025",
    institution: "IIT Sri Lanka",
    degree: "Foundation Certificate — Computer Software Engineering",
    desc: "Strong foundation in programming, software development, databases, and computer systems.",
    badge: "Merit",
    badgeColor: "text-amber border-amber/20 bg-amber/7",
  },
  {
    period: "2022 — 2023",
    institution: "Esoft Metro Campus",
    degree: "Diploma in Education — IT",
    desc: "IT fundamentals, computer hardware, software applications, networking, basic programming.",
    badge: null,
    badgeColor: "",
  },
  {
    period: "2011 — 2022",
    institution: "Sangabodhi National College",
    degree: "Primary & Secondary Education",
    desc: null,
    badge: null,
    badgeColor: "",
  },
];

export default function Education() {
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 md:py-28 px-6 md:px-14 max-w-[1300px] mx-auto z-[2] relative" ref={sectionRef}>
      <div className="mb-16 reveal">
        <p className="font-mono text-[11px] text-accent tracking-[4px] uppercase flex items-center gap-3 mb-3">
          <span className="w-7 h-px bg-accent" />02 — Education
        </p>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95]"
          style={{ fontSize: "clamp(38px, 5vw, 72px)" }}
        >
          Academic{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
            Journey
          </span>
        </h2>
      </div>

      <div className="flex flex-col reveal">
        {education.map((e, i) => (
          <div
            key={e.institution}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-4 border-b border-white/[0.07] py-9 md:py-11 relative overflow-hidden group transition-transform duration-200 hover:translate-x-1"
            style={i === 0 ? { borderTop: "1px solid rgba(255,255,255,0.07)" } : {}}
          >
            {/* Hover fill */}
            <div className="absolute inset-0 bg-accent/[0.025] w-0 group-hover:w-full transition-all duration-500 pointer-events-none" />

            <p className="font-mono text-[11px] text-[#6a6870] tracking-[1px] pt-1.5 relative z-[1]">
              {e.period}
            </p>
            <div className="relative z-[1]">
              <h3 className="font-display text-2xl font-bold tracking-[-0.5px] mb-1.5">{e.institution}</h3>
              <p className="font-mono text-[11px] text-accent tracking-[1px] mb-2.5">{e.degree}</p>
              {e.desc && <p className="text-[14px] text-[#666] leading-[1.7] max-w-[540px]">{e.desc}</p>}
              {e.badge && (
                <span
                  className={`inline-block mt-2.5 px-3 py-1 border font-mono text-[9px] tracking-[2px] uppercase ${e.badgeColor}`}
                >
                  {e.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
