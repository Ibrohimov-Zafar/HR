import { dashCard } from "@/components/dashboard/shared";

const stack = [
  { name: "TypeScript", pct: 38, color: "#4F46E5" },
  { name: "JavaScript", pct: 24, color: "#F59E0B" },
  { name: "Python", pct: 18, color: "#10B981" },
  { name: "Go", pct: 12, color: "#06B6D4" },
  { name: "Other", pct: 8, color: "#5B5B65" },
] as const;

export default function TechStack() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Tech Stack</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Language distribution across repositories</p>

      <div className="mt-5 flex h-3 overflow-hidden rounded-full">
        {stack.map(({ name, pct, color }) => (
          <div
            key={name}
            style={{ width: `${pct}%`, backgroundColor: color }}
            title={`${name}: ${pct}%`}
          />
        ))}
      </div>

      <ul className="mt-4 space-y-2">
        {stack.map(({ name, pct, color }) => (
          <li key={name} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-[#5B5B65]">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
              {name}
            </span>
            <span className="font-medium text-[#0A0A0A]">{pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
