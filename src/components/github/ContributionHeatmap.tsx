import { useMemo } from "react";
import { dashCard } from "@/components/dashboard/shared";

const LEVELS = 5;
const WEEKS = 52;

function getColor(level: number) {
  const colors = [
    "bg-[#F5F5F7]",
    "bg-[#4F46E5]/25",
    "bg-[#4F46E5]/45",
    "bg-[#4F46E5]/70",
    "bg-[#4F46E5]",
  ];
  return colors[level] ?? colors[0];
}

export default function ContributionHeatmap() {
  const grid = useMemo(() => {
    return Array.from({ length: WEEKS }, () =>
      Array.from({ length: 7 }, () => Math.floor(Math.random() * LEVELS)),
    );
  }, []);

  const dayLabels = ["Mon", "", "Wed", "", "Fri", "", ""];

  return (
    <div className={`${dashCard} w-full`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">
        Contribution Activity
      </h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Last 52 weeks of GitHub contributions</p>

      <div className="mt-6 w-full">
        <div className="flex w-full items-stretch gap-2 md:gap-3">
          <div className="flex w-8 shrink-0 flex-col gap-1.5 md:gap-2">
            {dayLabels.map((label, i) => (
              <div
                key={i}
                className="flex flex-1 items-center text-[9px] leading-none text-[#5B5B65] md:text-[10px]"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="flex min-w-0 flex-1 gap-1.5 md:gap-2">
            {grid.map((week, wi) => (
              <div key={wi} className="flex min-w-0 flex-1 flex-col gap-1.5 md:gap-2">
                {week.map((level, di) => (
                  <div
                    key={di}
                    className={`aspect-square w-full rounded-[3px] md:rounded-[4px] ${getColor(level)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-end gap-2 text-[10px] text-[#5B5B65] md:text-xs">
        <span>Less</span>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3, 4].map((l) => (
            <div
              key={l}
              className={`h-3 w-3 rounded-[3px] md:h-3.5 md:w-3.5 ${getColor(l)}`}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
