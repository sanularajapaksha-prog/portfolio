"use client";
import { useEffect, useRef } from "react";

export default function Footer() {
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
    <>
      {/* CTA Section */}
      <div className="border-t border-white/[0.07] relative z-[2] overflow-hidden" ref={sectionRef}>
        <div className="max-w-[1300px] mx-auto px-14 py-32 text-center relative">
          {/* Bg ghost text */}
          <span
            className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-transparent pointer-events-none overflow-hidden select-none"
            style={{
              fontSize: "clamp(80px,16vw,220px)",
              WebkitTextStroke: "1px rgba(180,245,66,0.025)",
              letterSpacing: "-8px",
            }}
          >
            HIRE
          </span>

          <h2
            className="font-display font-extrabold tracking-[-3px] mb-5 relative reveal"
            style={{ fontSize: "clamp(38px,6vw,84px)" }}
          >
            <span className="text-accent">Ready</span> to
            <br />
            Collaborate?
          </h2>
          <p className="font-mono text-[12px] text-[#6a6870] tracking-[2px] uppercase mb-12 relative reveal">
            Open to internships, freelance projects &amp; full-time roles
          </p>
          <div className="flex gap-4 justify-center flex-wrap relative reveal">
            <a
              href="mailto:sanulasanula52@gmail.com"
              className="bg-accent text-bg font-mono text-[11px] tracking-[2px] uppercase px-8 py-3.5 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(180,245,66,0.35)]"
              style={{
                clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
              }}
            >
              Send a Message
            </a>
            <a
              href="/sanularajapasksha_cv.pdf"
              download="Sanula_Rajapaksha_CV.pdf"
              className="bg-transparent text-white border border-white/[0.07] font-mono text-[11px] tracking-[2px] uppercase px-8 py-3.5 transition-all duration-200 hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] px-14 py-10 relative z-[2]">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-[18px] font-extrabold tracking-tight">
            Sanula <span className="text-accent">Rajapaksha</span>
          </div>
          <p className="font-mono text-[10px] text-[#6a6870] tracking-[1px]">
            © 2026 · Full-Stack Developer · Sri Lanka
          </p>
          <div className="flex gap-7">
            {[
              { label: "GitHub", href: "https://github.com/sanularajapaksha-prog" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sanula-rajapaksha-64a010321" },
              { label: "Email", href: "mailto:sanulasanula52@gmail.com" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[11px] text-[#6a6870] tracking-[2px] uppercase transition-colors duration-200 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
