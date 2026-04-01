"use client";
import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number; size: number;
  pulse: number; speed: number;
  type: "a" | "b" | "amber";
}
interface Packet {
  ax: number; ay: number; bx: number; by: number;
  t: number; spd: number; done: boolean; clr: string;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let frame = 0;
    let raf: number;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const count = Math.floor((W * H) / 22000);
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          size: Math.random() * 1.4 + 0.4,
          pulse: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.013 + 0.004,
          type: Math.random() < 0.1 ? "amber" : Math.random() < 0.5 ? "a" : "b",
        });
      }
    };

    const colors = {
      a: (a: number) => `rgba(180,245,66,${a})`,
      b: (a: number) => `rgba(66,212,245,${a})`,
      amber: (a: number) => `rgba(245,167,66,${a})`,
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      frame++;

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 145) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(180,245,66,${((1 - d / 145) * 0.06).toFixed(3)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach((n) => {
        n.pulse += n.speed;
        const a = 0.2 + 0.3 * Math.abs(Math.sin(n.pulse));
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = colors[n.type](a);
        ctx.fill();
      });

      // Packets
      if (frame % 55 === 0 && nodes.length > 1) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const b = nodes[Math.floor(Math.random() * nodes.length)];
        if (a !== b) {
          packets.push({
            ax: a.x, ay: a.y, bx: b.x, by: b.y,
            t: 0, spd: Math.random() * 0.005 + 0.003, done: false,
            clr: Math.random() < 0.1 ? "rgba(245,167,66,.65)" : "rgba(180,245,66,.65)",
          });
        }
      }
      packets = packets.filter((p) => !p.done);
      packets.forEach((p) => {
        p.t += p.spd;
        if (p.t >= 1) { p.done = true; return; }
        const x = p.ax + (p.bx - p.ax) * p.t;
        const y = p.ay + (p.by - p.ay) * p.t;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = p.clr;
        ctx.fill();
      });

      raf = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.38 }}
    />
  );
}
