"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const p = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setPct(Math.min(100, p));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[600] transition-all duration-100"
      style={{
        width: `${pct}%`,
        background: "linear-gradient(90deg, #b4f542, #42d4f5)",
        boxShadow: "0 0 10px #b4f542",
      }}
    />
  );
}
