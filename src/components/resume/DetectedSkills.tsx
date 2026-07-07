import { dashCard } from "@/components/dashboard/shared";

const skills = [
  { name: "React", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "PostgreSQL", level: 78 },
  { name: "AWS", level: 72 },
  { name: "System Design", level: 65 },
  { name: "Docker", level: 80 },
  { name: "GraphQL", level: 70 },
] as const;

export default function DetectedSkills() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Detected Skills</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">AI-extracted from your resume</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map(({ name, level }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-3 py-1.5 text-xs font-medium text-[#0A0A0A]"
          >
            {name}
            <span className="text-[#4F46E5]">{level}%</span>
          </span>
        ))}
      </div>
    </div>
  );
}
