import { dashCard, scoreTone } from "./shared";

const areas = [
  { name: "System Design", score: 62, target: 80 },
  { name: "Behavioral", score: 76, target: 85 },
  { name: "Algorithms", score: 88, target: 90 },
  { name: "Communication", score: 71, target: 85 },
] as const;

export default function FocusAreasCard() {
  return (
    <div className={`${dashCard} flex h-full flex-col`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Focus Areas</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Skills that need the most improvement</p>

      <div className="mt-6 space-y-5">
        {areas.map(({ name, score, target }) => {
          const tone = scoreTone(score);
          const pct = Math.min(100, (score / target) * 100);
          return (
            <div key={name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-[#0A0A0A]">{name}</span>
                <span className="text-[#5B5B65]">
                  {score}
                  <span className="text-[#5B5B65]/60"> / {target}</span>
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#F5F5F7]">
                <div
                  className={`h-full rounded-full transition-all ${tone.bar}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
