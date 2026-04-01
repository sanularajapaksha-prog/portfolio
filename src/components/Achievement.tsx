"use client";
import { useEffect, useRef } from "react";

export default function Achievement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
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
          <span className="w-7 h-px bg-accent" />05 — Achievement
        </p>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95]"
          style={{ fontSize: "clamp(38px, 5vw, 72px)" }}
        >
          Recognition
        </h2>
      </div>

      <div
        className="flex gap-8 items-start border border-white/[0.07] p-11 relative overflow-hidden reveal"
        style={{ background: "rgba(180,245,66,0.015)" }}
      >
        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, #b4f542, #42d4f5, #f5a742)" }}
        />
        <div className="w-[68px] h-[68px] border border-accent/20 flex items-center justify-center text-[30px] flex-shrink-0">
          🏅
        </div>
        <div>
          <h3 className="font-display text-[22px] font-bold tracking-[-0.5px] mb-3">
            Merit Classification — Foundation Certificate
          </h3>
          <p className="text-[15px] text-[#7a7880] leading-[1.8]">
            Achieved Merit classification in the Foundation Certificate in Computer Software
            Engineering at IIT Sri Lanka, demonstrating strong understanding of core computer
            science principles and commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
