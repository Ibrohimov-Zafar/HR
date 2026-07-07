import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashCard } from "@/components/dashboard/shared";

const data = [
  { week: "W1", mocks: 4, coding: 6, review: 3 },
  { week: "W2", mocks: 5, coding: 5, review: 4 },
  { week: "W3", mocks: 3, coding: 8, review: 2 },
  { week: "W4", mocks: 6, coding: 7, review: 5 },
  { week: "W5", mocks: 7, coding: 6, review: 4 },
  { week: "W6", mocks: 5, coding: 9, review: 6 },
  { week: "W7", mocks: 8, coding: 8, review: 5 },
  { week: "W8", mocks: 6, coding: 10, review: 7 },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.08)",
  fontSize: 12,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
};

export default function ActivityAreaChart() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Weekly Activity</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Sessions by type over the last 8 weeks</p>
      <div className="mt-6 h-[240px] w-full sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="mocksFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="codingFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#10B981" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="reviewFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(0,0,0,0.06)" vertical={false} />
            <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: "#5B5B65", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#5B5B65", fontSize: 12 }} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
            <Area type="monotone" dataKey="mocks" name="Mock Interviews" stackId="1" stroke="#4F46E5" fill="url(#mocksFill)" strokeWidth={2} />
            <Area type="monotone" dataKey="coding" name="Coding Practice" stackId="1" stroke="#10B981" fill="url(#codingFill)" strokeWidth={2} />
            <Area type="monotone" dataKey="review" name="Review Sessions" stackId="1" stroke="#F59E0B" fill="url(#reviewFill)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
