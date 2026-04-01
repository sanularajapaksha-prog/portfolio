"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#ai-stack", label: "AI Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] h-16 flex items-center justify-between px-6 md:px-14 border-b border-white/[0.07] transition-all duration-300 ${
        scrolled ? "bg-bg/92 backdrop-blur-2xl" : "bg-bg/80 backdrop-blur-xl"
      }`}
    >
      {/* Logo */}
      <div className="font-display text-lg font-extrabold tracking-tight text-white">
        S<span className="text-accent">.</span>R
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[11px] text-[#6a6870] hover:text-accent tracking-[2px] uppercase transition-colors duration-200"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Status */}
      <div className="flex items-center gap-2 font-mono text-[10px] text-accent tracking-wide">
        <span
          className="w-[6px] h-[6px] rounded-full bg-accent animate-blink"
          style={{ boxShadow: "0 0 8px #b4f542" }}
        />
        Open to Work
      </div>
    </nav>
  );
}
