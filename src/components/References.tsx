"use client";
import { useEffect, useRef } from "react";

const refs = [
  {
    name: "Mr. Shehan Amantha",
    role: "Software Engineer · Virtusa (PVT) Ltd",
    details: [
      { icon: "✉", text: "shehan.amantha@virtusa.com" },
      { icon: "📞", text: "+94 77 495 3225" },
      { icon: "📍", text: "Sri Lanka" },
    ],
  },
  {
    name: "Ms. Sankeetha Elancheliyan",
    role: "Assistant Lecturer · IIT Sri Lanka",
    details: [
      { icon: "✉", text: "sankeetha.e@iit.ac.lk" },
      { icon: "📞", text: "+94 76 678 2428" },
      { icon: "📍", text: "Sri Lanka" },
    ],
  },
];

export default function References() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 px-14 max-w-[1300px] mx-auto z-[2] relative" ref={sectionRef}>
      <div className="mb-16 reveal">
        <p className="font-mono text-[11px] text-accent tracking-[4px] uppercase flex items-center gap-3 mb-3">
          <span className="w-7 h-px bg-accent" />06 — References
        </p>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95]"
          style={{ fontSize: "clamp(38px, 5vw, 72px)" }}
        >
          Who Vouches{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
            for Me
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2px", background: "rgba(255,255,255,0.07)" }}>
        {refs.map((r, i) => (
          <div
            key={r.name}
            className={`bg-bg p-11 relative overflow-hidden transition-colors duration-300 hover:bg-surface group ${
              i === 0 ? "reveal-left" : "reveal-right"
            }`}
          >
            {/* Left accent bar */}
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-accent scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-400" />
            <h3 className="font-display text-[22px] font-bold tracking-[-0.5px] mb-1.5">{r.name}</h3>
            <p className="font-mono text-[11px] text-accent tracking-[1px] mb-5">{r.role}</p>
            <div className="space-y-2">
              {r.details.map((d) => (
                <div key={d.text} className="flex items-center gap-2.5 text-[13px] text-[#888]">
                  <span className="text-accent text-[12px]">{d.icon}</span>
                  {d.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
