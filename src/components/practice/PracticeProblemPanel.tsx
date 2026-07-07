import { useState } from "react";
import { difficultyTone, type PracticeProblem } from "./problems";
import { practiceBorder, practiceInset, practiceMuted, practicePanel } from "./shared";

type PracticeProblemPanelProps = {
  problem: PracticeProblem;
};

export default function PracticeProblemPanel({ problem }: PracticeProblemPanelProps) {
  const [tab, setTab] = useState<"description" | "submissions">("description");

  return (
    <div className={`${practicePanel} flex h-full flex-col overflow-hidden`}>
      <div className={`flex shrink-0 border-b ${practiceBorder}`}>
        {(["description", "submissions"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`px-4 py-3 text-xs font-medium capitalize transition-colors ${
              tab === t
                ? "border-b-2 border-[#4F46E5] text-[#0A0A0A]"
                : `${practiceMuted} hover:text-[#0A0A0A]`
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-5">
        {tab === "description" ? (
          <>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">
                {problem.number}. {problem.title}
              </h2>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase ${difficultyTone(problem.difficulty)}`}
              >
                {problem.difficulty}
              </span>
            </div>
            <p className={`mt-2 text-xs ${practiceMuted}`}>
              {problem.topics} · Acceptance: {problem.acceptance}
            </p>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#3A3A42]">
              {problem.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {problem.examples.map((example, i) => (
              <div key={i} className={`mt-5 ${practiceInset} p-4`}>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#5B5B65]">
                  Example {i + 1}
                </p>
                <div className="mt-3 space-y-2 font-mono text-xs">
                  <p className="text-[#0A0A0A]">
                    <span className="text-[#5B5B65]">Input: </span>
                    {example.input}
                  </p>
                  <p className="text-[#0A0A0A]">
                    <span className="text-[#5B5B65]">Output: </span>
                    <span className="font-semibold text-emerald-700">{example.output}</span>
                  </p>
                </div>
                {example.explanation && (
                  <p className={`mt-3 text-xs leading-relaxed ${practiceMuted}`}>
                    {example.explanation}
                  </p>
                )}
              </div>
            ))}

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#5B5B65]">
                Constraints
              </p>
              <ul className={`mt-3 space-y-1.5 text-xs ${practiceMuted}`}>
                {problem.constraints.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#5B5B65]" />
                    <span className="font-mono">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {problem.followUp && (
              <div className="mt-5 rounded-xl border border-[#4F46E5]/15 bg-[#4F46E5]/5 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[#4F46E5]">
                  Follow-up
                </p>
                <p className={`mt-1.5 text-xs leading-relaxed ${practiceMuted}`}>
                  {problem.followUp}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className={`${practiceInset} p-4`}>
            <p className="text-sm font-medium text-[#0A0A0A]">No submissions yet</p>
            <p className={`mt-1 text-xs ${practiceMuted}`}>
              Run your solution and click Submit to see results here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
