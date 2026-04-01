"use client";
import { useEffect, useRef } from "react";

const facts = [
  { label: "Location", value: "Sri Lanka 🇱🇰" },
  { label: "Status", value: "Open to Work" },
  { label: "University", value: "Westminster / IIT" },
  { label: "Focus", value: "Mobile · Backend · Web" },
  { label: "Languages", value: "English · Sinhala" },
  { label: "Achievement", value: "Merit — Foundation Cert" },
];

const contacts = [
  { icon: "@", label: "Email", value: "sanulasanula52@gmail.com", href: "mailto:sanulasanula52@gmail.com" },
  { icon: "☎", label: "Phone", value: "+94 72 028 4218", href: "tel:+94720284218" },
  { icon: "GH", label: "GitHub", value: "github.com/sanularajapaksha-prog", href: "https://github.com/sanularajapaksha-prog" },
  { icon: "IN", label: "LinkedIn", value: "linkedin.com/in/sanula-rajapaksha", href: "https://www.linkedin.com/in/sanula-rajapaksha-64a010321" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-28 px-6 md:px-14 max-w-[1300px] mx-auto z-[2] relative" ref={sectionRef}>
      {/* Header */}
      <div className="mb-16 reveal">
        <p className="font-mono text-[11px] text-accent tracking-[4px] uppercase flex items-center gap-3 mb-3">
          <span className="w-7 h-px bg-accent" />01 — About
        </p>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95]"
          style={{ fontSize: "clamp(38px, 5vw, 72px)" }}
        >
          Who I <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>Am</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-12 lg:gap-20 items-start">
        {/* Left */}
        <div className="reveal-left">
          <p className="text-[#7a7880] text-[17px] leading-[1.9]">
            I&apos;m{" "}
            <strong className="text-white font-medium">Sanula Rajapaksha</strong>, a full-stack
            developer and BSc Computer Science student at the{" "}
            <strong className="text-white font-medium">University of Westminster</strong> (via IIT Sri
            Lanka). I love turning ideas into polished, functional products — whether that&apos;s a
            mobile app, a web platform, or a backend service.
            <br />
            <br />
            I led the{" "}
            <strong className="text-white font-medium">Seygo</strong> project team — a real-world smart
            travel app for Sri Lanka — where I handled everything from architecture decisions to
            deployment on <strong className="text-white font-medium">Railway</strong> and{" "}
            <strong className="text-white font-medium">GitHub Pages</strong>.
          </p>

          {/* Facts grid */}
          <div
            className="grid grid-cols-2 mt-9"
            style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
          >
            {facts.map((f) => (
              <div
                key={f.label}
                className="bg-bg px-5 py-4 hover:bg-surface transition-colors duration-300"
              >
                <p className="font-mono text-[9px] text-[#6a6870] tracking-[2px] uppercase mb-1.5">
                  {f.label}
                </p>
                <p className="font-mono text-[12px] text-accent">{f.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Contact panel */}
        <div id="contact" className="reveal-right delay-200">
          <div className="border border-white/[0.07] overflow-hidden relative">
            {/* Scan line */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, #b4f542, transparent)",
                animation: "scanH 4s linear infinite",
              }}
            />
            <div className="px-5 py-4 border-b border-white/[0.07] font-mono text-[10px] text-[#6a6870] tracking-[3px] uppercase flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                style={{ boxShadow: "0 0 8px #b4f542" }}
              />
              Contact Info
            </div>
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                className={`flex items-center gap-4 px-5 py-4 transition-all duration-200 hover:bg-surface hover:pl-7 ${
                  i < contacts.length - 1 ? "border-b border-white/[0.07]" : ""
                }`}
              >
                <div className="w-[30px] h-[30px] border border-accent/20 flex items-center justify-center font-mono text-[10px] text-accent flex-shrink-0 transition-all duration-200 hover:bg-accent/10">
                  {c.icon}
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[9px] text-[#6a6870] tracking-[1px] uppercase">
                    {c.label}
                  </p>
                  <p className="text-[13px] text-white mt-0.5">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="flex" style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}>
              {["English", "Sinhala"].map((lang) => (
                <div
                  key={lang}
                  className="flex-1 text-center py-3 bg-bg font-mono text-[10px] text-[#6a6870] tracking-[2px] uppercase transition-all duration-300 hover:bg-surface hover:text-accent"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
