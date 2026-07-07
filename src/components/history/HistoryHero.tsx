import { dashCard } from "@/components/dashboard/shared";

export default function HistoryHero({ score = 84 }: { score?: number }) {
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={`${dashCard} flex flex-col items-center py-8 md:flex-row md:items-center md:gap-10 md:py-10`}>
      <div className="relative h-40 w-40 shrink-0 md:h-48 md:w-48">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="#F5F5F7" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-editorial text-4xl tracking-[-0.04em] text-[#0A0A0A] md:text-5xl">
            {score}
          </span>
          <span className="text-xs text-[#5B5B65]">Overall Score</span>
        </div>
      </div>

      <div className="mt-6 text-center md:mt-0 md:text-left">
        <p className="text-xs font-medium uppercase tracking-wide text-[#4F46E5]">
          Session Complete
        </p>
        <h1 className="mt-2 font-editorial text-3xl tracking-[-0.04em] text-[#0A0A0A] md:text-4xl">
          Great work, Zafar!
        </h1>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5B5B65]">
          You performed above average in technical skills. Focus on system design communication
          to reach the next level.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
          {[
            { label: "Technical", value: "88" },
            { label: "Behavioral", value: "82" },
            { label: "Communication", value: "76" },
          ].map(({ label, value }) => (
            <span
              key={label}
              className="rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#0A0A0A]"
            >
              {label}: {value}%
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
