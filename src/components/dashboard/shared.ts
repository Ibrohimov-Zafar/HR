export const dashCard =
  "rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-4 sm:p-5 md:p-6";
export const dashLabel = "text-[10px] font-medium uppercase tracking-wide text-[#5B5B65] sm:text-xs";
export const dashValue = "font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A] sm:text-2xl md:text-3xl";
export const dashMuted = "text-sm text-[#5B5B65]";

export function scoreTone(score: number) {
  if (score >= 85) return { pill: "bg-emerald-50 text-emerald-700 border-emerald-200", bar: "bg-emerald-600" };
  if (score >= 70) return { pill: "bg-amber-50 text-amber-700 border-amber-200", bar: "bg-amber-500" };
  return { pill: "bg-red-50 text-red-700 border-red-200", bar: "bg-red-500" };
}
