import { container, sectionPy } from "./shared";

const stats = [
  ["50k+", "Engineers Prepped"],
  ["98%", "Placement Rate"],
  ["1M+", "Mock Sessions"],
  ["4.9/5", "User Satisfaction"],
] as const;

export default function StatsSection() {
  return (
    <section className={`border-y border-[rgba(0,0,0,0.08)] bg-white ${sectionPy}`}>
      <div className={`${container} grid grid-cols-2 gap-8 text-center md:grid-cols-4`}>
        {stats.map(([value, label]) => (
          <div key={label}>
            <p className="font-editorial text-3xl tracking-[-0.03em] text-[#0A0A0A] md:text-4xl">{value}</p>
            <p className="mt-2 text-sm font-medium text-[#5B5B65]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
