import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashCard } from "./shared";

const data = [
  { day: "Mon", score: 72 },
  { day: "Tue", score: 78 },
  { day: "Wed", score: 81 },
  { day: "Thu", score: 79 },
  { day: "Fri", score: 86 },
  { day: "Sat", score: 88 },
  { day: "Sun", score: 84 },
];

export default function WeeklyProgressChart() {
  return (
    <div className={`${dashCard} flex h-full flex-col`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Weekly Progress</h2>
          <p className="mt-1 text-sm text-[#5B5B65]">Average interview scores over time</p>
        </div>
        <select
          className="rounded-lg border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-3 py-1.5 text-xs font-medium text-[#5B5B65] outline-none"
          defaultValue="7"
          aria-label="Time range"
        >
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
        </select>
      </div>
      <div className="mt-6 min-h-[220px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid stroke="rgba(0,0,0,0.06)" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#5B5B65", fontSize: 12 }}
            />
            <YAxis
              domain={[60, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#5B5B65", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.08)",
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ fill: "#4F46E5", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
