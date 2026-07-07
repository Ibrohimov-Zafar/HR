import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { dashCard } from "./shared";

const data = [
  { skill: "Algorithm", value: 88 },
  { skill: "System Design", value: 62 },
  { skill: "Communication", value: 76 },
  { skill: "Problem Solving", value: 84 },
];

export default function SkillRadarChart() {
  return (
    <div className={`${dashCard} flex h-full flex-col`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Skill Profile</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Your strengths across key areas</p>
      <div className="mt-4 min-h-[240px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="rgba(0,0,0,0.08)" />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fill: "#5B5B65", fontSize: 11 }}
            />
            <Radar
              dataKey="value"
              stroke="#4F46E5"
              fill="#4F46E5"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
