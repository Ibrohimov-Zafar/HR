import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { dashCard } from "@/components/dashboard/shared";

const data = [
  { name: "Technical", value: 42, color: "#4F46E5" },
  { name: "Behavioral", value: 28, color: "#10B981" },
  { name: "System Design", value: 18, color: "#8B5CF6" },
  { name: "Resume Review", value: 12, color: "#F59E0B" },
];

const total = data.reduce((sum, d) => sum + d.value, 0);

function DonutTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { name: string; value: number }[];
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  const pct = Math.round((item.value / total) * 100);
  return (
    <div className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white px-3 py-2 text-xs shadow-lg">
      <p className="font-medium text-[#0A0A0A]">{item.name}</p>
      <p className="mt-0.5 text-[#5B5B65]">{item.value} sessions · {pct}%</p>
    </div>
  );
}

export default function CategoryDonutChart() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Session Mix</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Distribution by interview category</p>
      <div className="relative mt-4 h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={58} outerRadius={82} paddingAngle={3} dataKey="value" stroke="none">
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<DonutTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-editorial text-3xl tracking-[-0.03em] text-[#0A0A0A]">{total}</span>
          <span className="text-xs text-[#5B5B65]">Total sessions</span>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {data.map(({ name, value, color }) => (
          <li key={name} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-[#5B5B65]">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
              {name}
            </span>
            <span className="font-medium text-[#0A0A0A]">{Math.round((value / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
