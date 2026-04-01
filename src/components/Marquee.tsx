const items = [
  "Flutter · Dart",
  "Node.js · FastAPI",
  "Python · Java",
  "PostgreSQL · Supabase",
  "React · TypeScript",
  "GitHub Actions · Railway",
  "Agile · Team Lead",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="border-t border-b border-white/[0.07] bg-accent/[0.015] overflow-hidden py-3.5 relative z-[2]">
      {/* fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-20 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to right, #06060a, transparent)" }} />
      <div className="absolute top-0 bottom-0 right-0 w-20 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to left, #06060a, transparent)" }} />

      <div className="flex animate-marquee w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[11px] text-accent/30 tracking-[3px] uppercase px-10 whitespace-nowrap flex items-center gap-10 after:content-['◆'] after:text-[5px] after:text-amber"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
