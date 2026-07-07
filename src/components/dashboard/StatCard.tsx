import { dashCard, dashLabel, dashValue } from "./shared";

type StatCardProps = {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
};

export default function StatCard({ label, value, trend, trendUp }: StatCardProps) {
  return (
    <div className={dashCard}>
      <p className={dashLabel}>{label}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className={dashValue}>{value}</p>
        {trend && (
          <span
            className={`text-xs font-medium ${trendUp ? "text-emerald-600" : "text-[#5B5B65]"}`}
          >
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
