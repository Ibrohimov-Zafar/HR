import { dashCard, scoreTone } from "@/components/dashboard/shared";

const metrics = [
  { name: "Code Coverage", score: 82 },
  { name: "Documentation", score: 68 },
  { name: "Test Quality", score: 75 },
  { name: "Maintainability", score: 88 },
  { name: "Security", score: 71 },
] as const;

export default function CodeQuality() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Code Quality</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">AI analysis of your repositories</p>

      <div className="mt-5 space-y-4">
        {metrics.map(({ name, score }) => {
          const tone = scoreTone(score);
          return (
            <div key={name}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="text-[#0A0A0A]">{name}</span>
                <span className={`font-medium ${tone.pill.split(" ")[1]}`}>{score}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#F5F5F7]">
                <div className={`h-full rounded-full ${tone.bar}`} style={{ width: `${score}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
