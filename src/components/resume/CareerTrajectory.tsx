import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashCard } from "@/components/dashboard/shared";

const data = [
  { year: "2019", level: 1 },
  { year: "2020", level: 2 },
  { year: "2021", level: 2.5 },
  { year: "2022", level: 3 },
  { year: "2023", level: 3.5 },
  { year: "2024", level: 4 },
  { year: "2025", level: 4.5 },
];

const labels = ["", "Junior", "Mid", "Senior", "Staff", "Principal"];

export default function CareerTrajectory() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Career Trajectory</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Projected seniority growth based on experience</p>

      <div className="mt-5 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid stroke="rgba(0,0,0,0.06)" vertical={false} />
            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#5B5B65", fontSize: 12 }}
            />
            <YAxis
              domain={[0, 5]}
              ticks={[1, 2, 3, 4, 5]}
              tickFormatter={(v) => labels[v] || ""}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#5B5B65", fontSize: 11 }}
            />
            <Tooltip
              formatter={(value: number) => [labels[Math.round(value)] || value, "Level"]}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.08)",
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="level"
              stroke="#4F46E5"
              strokeWidth={2.5}
              dot={{ fill: "#4F46E5", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
