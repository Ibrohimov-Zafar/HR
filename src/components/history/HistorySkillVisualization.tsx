import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { dashCard } from "@/components/dashboard/shared";

const data = [
  { skill: "Algorithms", you: 88, benchmark: 75 },
  { skill: "System Design", you: 62, benchmark: 70 },
  { skill: "Communication", you: 76, benchmark: 72 },
  { skill: "Problem Solving", you: 84, benchmark: 78 },
  { skill: "Code Quality", you: 80, benchmark: 74 },
];

export default function HistorySkillVisualization() {
  return (
    <div className={`${dashCard} flex h-full flex-col`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Skill Breakdown</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">You vs. industry benchmark</p>
      <div className="mt-4 min-h-[280px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="rgba(0,0,0,0.08)" />
            <PolarAngleAxis dataKey="skill" tick={{ fill: "#5B5B65", fontSize: 11 }} />
            <Radar
              name="You"
              dataKey="you"
              stroke="#4F46E5"
              fill="#4F46E5"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Benchmark"
              dataKey="benchmark"
              stroke="#5B5B65"
              fill="#5B5B65"
              fillOpacity={0.05}
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex justify-center gap-6 text-xs text-[#5B5B65]">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#4F46E5]" /> You
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full border border-[#5B5B65]" /> Benchmark
        </span>
      </div>
    </div>
  );
}
