import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashCard } from "@/components/dashboard/shared";

const data = [
  { type: "Frontend", score: 86, fill: "#4F46E5" },
  { type: "Backend", score: 91, fill: "#6366F1" },
  { type: "Full Stack", score: 84, fill: "#8B5CF6" },
  { type: "Mobile", score: 72, fill: "#A78BFA" },
  { type: "DevOps", score: 68, fill: "#C4B5FD" },
  { type: "Data Eng.", score: 79, fill: "#7C3AED" },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.08)",
  fontSize: 12,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
};

export default function InterviewBarChart() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Role Performance</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Average scores by target role</p>
      <div className="mt-6 h-[260px] w-full sm:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 16, left: 4, bottom: 0 }}>
            <CartesianGrid stroke="rgba(0,0,0,0.06)" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fill: "#5B5B65", fontSize: 11 }} />
            <YAxis type="category" dataKey="type" axisLine={false} tickLine={false} tick={{ fill: "#0A0A0A", fontSize: 12 }} width={72} />
            <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`${value}%`, "Avg Score"]} />
            <Bar dataKey="score" radius={[0, 8, 8, 0]} barSize={22}>
              {data.map((entry) => (
                <Cell key={entry.type} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
