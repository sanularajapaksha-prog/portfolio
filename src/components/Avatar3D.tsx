"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Avatar3D() {
  const innerRef = useRef<HTMLDivElement>(null);

  const tiltX = useRef(0);
  const tiltY = useRef(0);
  const transX = useRef(0);
  const transY = useRef(0);
  const targetTX = useRef(0);
  const targetTY = useRef(0);
  const targetRX = useRef(0);
  const targetRY = useRef(0);
  const breathT = useRef(0);
  const mouseActive = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 900);

    const onMouseMove = (e: MouseEvent) => {
      mouseActive.current = true;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const nx = (e.clientX - cx) / cx;
      const ny = (e.clientY - cy) / cy;
      targetTX.current = nx * -12;
      targetTY.current = ny * -8;
      targetRX.current = ny * 6;
      targetRY.current = nx * -8;
    };

    const onMouseLeave = () => {
      mouseActive.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Idle breathe
    const breathInterval = setInterval(() => {
      if (!mouseActive.current) {
        breathT.current += 0.018;
        targetRY.current = Math.sin(breathT.current) * 3;
        targetRX.current = Math.cos(breathT.current * 0.6) * 2;
        targetTX.current += (0 - targetTX.current) * 0.02;
        targetTY.current += (0 - targetTY.current) * 0.02;
      }
    }, 16);

    // Animation loop
    let raf: number;
    const loop = () => {
      const ease = 0.065;
      transX.current += (targetTX.current - transX.current) * ease;
      transY.current += (targetTY.current - transY.current) * ease;
      tiltX.current += (targetRX.current - tiltX.current) * ease;
      tiltY.current += (targetRY.current - tiltY.current) * ease;

      if (innerRef.current) {
        innerRef.current.style.transform = `perspective(1200px) rotateX(${tiltX.current}deg) rotateY(${tiltY.current}deg) translateX(${transX.current}px) translateY(${transY.current}px)`;
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      clearTimeout(timeout);
      clearInterval(breathInterval);
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      className="w-full h-full flex items-center justify-center lg:justify-end pointer-events-none select-none"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 1.2s ease",
        paddingRight: "clamp(0px, 2vw, 32px)",
      }}
    >
      {/* Green ambient glow beneath the figure */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "60%",
          height: "220px",
          background:
            "radial-gradient(ellipse at bottom, rgba(180,245,66,0.13) 0%, transparent 70%)",
          filter: "blur(18px)",
          zIndex: 0,
        }}
      />

      {/* Ground shadow ellipse */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: "130px",
          height: "20px",
          background: "radial-gradient(ellipse, rgba(180,245,66,0.22), transparent 70%)",
          filter: "blur(10px)",
          zIndex: 0,
        }}
      />

      {/* 3D inner — receives tilt transform */}
      <div
        ref={innerRef}
        className="relative"
        style={{
          willChange: "transform",
          transformStyle: "preserve-3d",
          width: "100%",
          maxWidth: "540px",
          height: "clamp(400px, 60vh, 760px)",
        }}
      >
        {/* Scan line */}
        <div
          className="absolute left-0 right-0 h-px pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(180,245,66,0.6), transparent)",
            animation: "avatarScan 4s ease-in-out infinite",
          }}
        />

        {/* 
          Photo wrapper:
          - mix-blend-mode: multiply makes white/light-grey pixels transparent on dark backgrounds
            (white × dark-bg = dark-bg, so the checkerboard baked into the PNG vanishes)
          - radial-gradient mask softly fades out edges so there is no hard crop box
          - deep drop-shadow creates the dramatic floating look
        */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            // Tight elliptical mask — fades the edges so no rectangular boundary is visible
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 88% at 50% 46%, black 40%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 78% 88% at 50% 46%, black 40%, transparent 100%)",
            // multiply: white background pixels × dark page background = become dark/invisible
            mixBlendMode: "multiply",
          }}
        >
          <Image
            src="/sanula.png"
            alt="Sanula Rajapaksha"
            fill
            className="object-contain object-center select-none"
            style={{
              filter:
                "drop-shadow(0 0 50px rgba(180,245,66,0.20)) drop-shadow(0 12px 48px rgba(0,0,0,1)) brightness(1.08) contrast(1.05)",
              userSelect: "none",
              WebkitUserDrag: "none" as any,
            } as React.CSSProperties}
            priority
            draggable={false}
          />
        </div>

        {/* Floating data tags — left side */}
        <div
          className="absolute left-[-10%] md:left-[-115%] top-[18%] md:top-[28%] bg-[#06060a]/90 border border-accent/30 px-3 py-1.5 backdrop-blur-sm whitespace-nowrap z-[25]"
          style={{ animation: "float 3.2s ease-in-out infinite" }}
        >
          <span className="font-mono text-[8px] md:text-[9px] text-accent tracking-[2px] md:tracking-widest uppercase">
            ◆ Full-Stack Dev
          </span>
        </div>
        <div
          className="absolute right-[-10%] md:right-auto md:left-[-100%] top-[70%] md:top-[44%] bg-[#06060a]/90 border border-accent/20 px-3 py-1.5 backdrop-blur-sm whitespace-nowrap z-[25]"
          style={{ animation: "float 3.8s ease-in-out infinite", animationDelay: "0.8s" }}
        >
          <span className="font-mono text-[8px] md:text-[9px] text-accent/70 tracking-[2px] md:tracking-widest uppercase">
            ◆ IIT · UoW
          </span>
        </div>

        {/* HUD corner accents */}
        <div
          className="absolute top-6 right-6 w-7 h-7 pointer-events-none z-20"
          style={{
            borderTop: "2px solid rgba(180,245,66,0.55)",
            borderRight: "2px solid rgba(180,245,66,0.55)",
          }}
        />
        <div
          className="absolute bottom-6 left-6 w-7 h-7 pointer-events-none z-20"
          style={{
            borderBottom: "2px solid rgba(180,245,66,0.55)",
            borderLeft: "2px solid rgba(180,245,66,0.55)",
          }}
        />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes avatarScan {
          0%   { top: 100%; opacity: 0; }
          5%   { opacity: 0.7; }
          95%  { opacity: 0.7; }
          100% { top: 0%;   opacity: 0; }
        }
      `}</style>
    </div>
  );
}
