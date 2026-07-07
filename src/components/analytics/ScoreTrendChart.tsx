import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashCard } from "@/components/dashboard/shared";

const data = [
  { month: "Jan", technical: 72, behavioral: 68, communication: 74 },
  { month: "Feb", technical: 76, behavioral: 71, communication: 76 },
  { month: "Mar", technical: 79, behavioral: 74, communication: 78 },
  { month: "Apr", technical: 82, behavioral: 77, communication: 80 },
  { month: "May", technical: 85, behavioral: 80, communication: 82 },
  { month: "Jun", technical: 88, behavioral: 83, communication: 85 },
  { month: "Jul", technical: 90, behavioral: 86, communication: 87 },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.08)",
  fontSize: 12,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
};

export default function ScoreTrendChart() {
  return (
    <div className={`${dashCard}`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Score Trends</h2>
          <p className="mt-1 text-sm text-[#5B5B65]">Performance across interview dimensions</p>
        </div>
        <select
          className="rounded-lg border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-3 py-1.5 text-xs font-medium text-[#5B5B65] outline-none"
          defaultValue="6"
          aria-label="Time range"
        >
          <option value="6">Last 6 months</option>
          <option value="12">Last 12 months</option>
        </select>
      </div>
      <div className="mt-6 h-[260px] w-full sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="rgba(0,0,0,0.06)" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#5B5B65", fontSize: 12 }} />
            <YAxis domain={[60, 100]} axisLine={false} tickLine={false} tick={{ fill: "#5B5B65", fontSize: 12 }} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, paddingTop: 16 }} />
            <Line type="monotone" dataKey="technical" name="Technical" stroke="#4F46E5" strokeWidth={2.5} dot={{ fill: "#4F46E5", r: 3 }} activeDot={{ r: 6, strokeWidth: 0 }} />
            <Line type="monotone" dataKey="behavioral" name="Behavioral" stroke="#10B981" strokeWidth={2} dot={{ fill: "#10B981", r: 3 }} activeDot={{ r: 6, strokeWidth: 0 }} />
            <Line type="monotone" dataKey="communication" name="Communication" stroke="#F59E0B" strokeWidth={2} strokeDasharray="6 4" dot={{ fill: "#F59E0B", r: 3 }} activeDot={{ r: 6, strokeWidth: 0 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
