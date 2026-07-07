import {
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { dashCard } from "@/components/dashboard/shared";

const skills = [
  { skill: "Algorithms", difficulty: 82, score: 88, hours: 28, fill: "#4F46E5" },
  { skill: "System Design", difficulty: 90, score: 72, hours: 18, fill: "#8B5CF6" },
  { skill: "Concurrency", difficulty: 78, score: 65, hours: 12, fill: "#EC4899" },
  { skill: "Behavioral", difficulty: 45, score: 86, hours: 22, fill: "#10B981" },
  { skill: "Data Structures", difficulty: 70, score: 91, hours: 32, fill: "#06B6D4" },
  { skill: "API Design", difficulty: 62, score: 79, hours: 15, fill: "#F59E0B" },
  { skill: "SQL", difficulty: 55, score: 84, hours: 20, fill: "#6366F1" },
  { skill: "DevOps", difficulty: 68, score: 58, hours: 8, fill: "#EF4444" },
];

function BubbleTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: (typeof skills)[number] }[];
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white px-3 py-2 text-xs shadow-lg">
      <p className="font-medium text-[#0A0A0A]">{item.skill}</p>
      <p className="mt-1 text-[#5B5B65]">Score: {item.score}%</p>
      <p className="text-[#5B5B65]">Difficulty: {item.difficulty}</p>
      <p className="text-[#5B5B65]">{item.hours}h practiced</p>
    </div>
  );
}

export default function SkillBubbleChart() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Skill Matrix</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Bubble size = practice hours · Position = difficulty vs score</p>
      <div className="mt-6 h-[280px] w-full sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 8, right: 16, left: -8, bottom: 8 }}>
            <CartesianGrid stroke="rgba(0,0,0,0.06)" strokeDasharray="3 3" />
            <XAxis type="number" dataKey="difficulty" domain={[30, 100]} axisLine={false} tickLine={false} tick={{ fill: "#5B5B65", fontSize: 11 }} label={{ value: "Difficulty", position: "insideBottom", offset: -4, fill: "#5B5B65", fontSize: 11 }} />
            <YAxis type="number" dataKey="score" domain={[50, 100]} axisLine={false} tickLine={false} tick={{ fill: "#5B5B65", fontSize: 11 }} label={{ value: "Score", angle: -90, position: "insideLeft", fill: "#5B5B65", fontSize: 11 }} />
            <ZAxis type="number" dataKey="hours" range={[120, 700]} />
            <Tooltip content={<BubbleTooltip />} cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={skills} fill="#4F46E5" fillOpacity={0.75}>
              {skills.map((entry) => (
                <Cell key={entry.skill} fill={entry.fill} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map(({ skill, fill }) => (
          <span key={skill} className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(0,0,0,0.06)] px-2.5 py-1 text-[10px] font-medium text-[#5B5B65]">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: fill }} />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
