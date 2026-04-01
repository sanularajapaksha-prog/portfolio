"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Avatar3D = dynamic(() => import("@/components/Avatar3D"), { ssr: false });

export default function Hero() {
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const countUp = (el: HTMLSpanElement | null, target: number, suffix = "") => {
      if (!el) return;
      let n = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const t = setInterval(() => {
        n = Math.min(n + step, target);
        el.textContent = n + suffix;
        if (n >= target) clearInterval(t);
      }, 40);
    };
    const timer = setTimeout(() => {
      countUp(stat1Ref.current, 3, "+");
      countUp(stat2Ref.current, 12, "+");
      countUp(stat3Ref.current, 1, "");
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden z-[2]">
      {/* ── LEFT column ── */}
      <div className="flex flex-col justify-end px-6 md:px-14 pb-12 lg:pb-24 pt-24 lg:pt-32 relative z-[2]">
        {/* Badge */}
        <div
          className="flex items-center gap-3 font-mono text-[9px] md:text-[11px] text-accent tracking-[2px] md:tracking-[3px] uppercase mb-5 md:mb-7 flex-wrap"
          style={{ animation: "fadeUp 0.8s 0.2s forwards", opacity: 0 }}
        >
          <span className="w-4 md:w-6 h-px bg-accent inline-block" />
          Full-Stack Developer · Sri Lanka
        </div>

        {/* Name */}
        <h1
          className="font-display font-extrabold leading-[0.9] tracking-[-2px] md:tracking-[-4px] mb-0"
          style={{
            fontSize: "clamp(46px, 12vw, 116px)",
            animation: "fadeUp 0.8s 0.4s forwards",
            opacity: 0,
          }}
        >
          SANULA
          <br />
          <em className="not-italic text-accent">RAJA</em><span className="break-all md:break-normal">PAKSHA</span>
        </h1>

        {/* Title */}
        <p
          className="font-mono text-[#6a6870] tracking-[3px] md:tracking-[5px] uppercase mt-4 md:mt-6 leading-[1.6]"
          style={{
            fontSize: "clamp(10px, 1.4vw, 14px)",
            animation: "fadeUp 0.8s 0.6s forwards",
            opacity: 0,
          }}
        >
          Software Engineer &amp; Mobile Developer
        </p>

        {/* Desc */}
        <p
          className="text-[#7a7880] text-base leading-[1.9] mt-7 max-w-[400px]"
          style={{ animation: "fadeUp 0.8s 0.8s forwards", opacity: 0 }}
        >
          IIT / University of Westminster student building cross-platform apps,
          scalable backends, and elegant web experiences. Team lead, thinker, maker.
        </p>

        {/* CTAs */}
        <div
          className="flex gap-3 mt-11 flex-wrap"
          style={{ animation: "fadeUp 0.8s 1s forwards", opacity: 0 }}
        >
          <a
            href="#projects"
            className="bg-accent text-bg font-mono text-[11px] tracking-[2px] uppercase px-8 py-3.5 font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
              boxShadow: "none",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.boxShadow =
                "0 8px 36px rgba(180,245,66,0.35)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.boxShadow = "none")
            }
          >
            View Work
          </a>
          <a
            href="#contact"
            className="bg-transparent text-white border border-white/[0.07] font-mono text-[11px] tracking-[2px] uppercase px-8 py-3.5 transition-all duration-200 hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex gap-0 mt-14 pt-9 border-t border-white/[0.07]"
          style={{ animation: "fadeUp 0.8s 1.2s forwards", opacity: 0 }}
        >
          {[
            { ref: stat1Ref, init: "0+", label: "Projects" },
            { ref: stat2Ref, init: "0+", label: "Technologies" },
            { ref: stat3Ref, init: "0", label: "Achievements" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`${i < 2 ? "pr-9 mr-9 border-r border-white/[0.07]" : ""}`}
            >
              <span
                ref={s.ref}
                className="font-display text-[34px] font-extrabold text-accent block leading-none"
              >
                {s.init}
              </span>
              <span className="font-mono text-[9px] text-[#6a6870] tracking-[2px] uppercase mt-1 block">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT column — Avatar right-aligned on desktop, stacked on mobile ── */}
      <div
        className="flex items-center justify-center lg:justify-end relative min-h-[60vh] lg:min-h-[100%] pb-12 lg:pb-0 px-6 lg:px-0"
      >
        <Avatar3D />
      </div>
    </section>
  );
}
