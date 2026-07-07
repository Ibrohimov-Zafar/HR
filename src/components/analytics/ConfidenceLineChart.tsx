import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashCard } from "@/components/dashboard/shared";

const data = [
  { session: 1, confidence: 42, clarity: 55 },
  { session: 2, confidence: 48, clarity: 58 },
  { session: 3, confidence: 52, clarity: 62 },
  { session: 4, confidence: 58, clarity: 65 },
  { session: 5, confidence: 55, clarity: 68 },
  { session: 6, confidence: 64, clarity: 72 },
  { session: 7, confidence: 70, clarity: 76 },
  { session: 8, confidence: 68, clarity: 78 },
  { session: 9, confidence: 75, clarity: 82 },
  { session: 10, confidence: 82, clarity: 86 },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.08)",
  fontSize: 12,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
};

export default function ConfidenceLineChart() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Confidence Growth</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Self-assessed confidence vs answer clarity</p>
      <div className="mt-6 h-[240px] w-full sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="rgba(0,0,0,0.06)" vertical={false} />
            <XAxis dataKey="session" axisLine={false} tickLine={false} tick={{ fill: "#5B5B65", fontSize: 12 }} label={{ value: "Session #", position: "insideBottom", offset: -2, fill: "#5B5B65", fontSize: 11 }} />
            <YAxis domain={[30, 100]} axisLine={false} tickLine={false} tick={{ fill: "#5B5B65", fontSize: 12 }} />
            <ReferenceLine y={75} stroke="#4F46E5" strokeDasharray="4 4" strokeOpacity={0.4} />
            <Tooltip contentStyle={tooltipStyle} />
            <Line type="monotone" dataKey="confidence" name="Confidence" stroke="#EC4899" strokeWidth={2.5} dot={{ fill: "#EC4899", r: 3 }} activeDot={{ r: 6, strokeWidth: 0 }} />
            <Line type="monotone" dataKey="clarity" name="Clarity" stroke="#06B6D4" strokeWidth={2} dot={{ fill: "#06B6D4", r: 3 }} activeDot={{ r: 6, strokeWidth: 0 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-[#5B5B65]">Dashed line marks your 75% target benchmark</p>
    </div>
  );
}
