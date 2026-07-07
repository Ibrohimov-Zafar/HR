import { BsLightbulb, BsRobot, BsSend } from "react-icons/bs";
import type { PracticeProblem } from "./problems";
import { practiceBorder, practiceInset, practiceMuted, practicePanel } from "./shared";

type PracticeMentorPanelProps = {
  problem: PracticeProblem;
};

export default function PracticeMentorPanel({ problem }: PracticeMentorPanelProps) {
  return (
    <div className={`${practicePanel} flex h-full flex-col overflow-hidden !p-0`}>
      <div className={`shrink-0 border-b ${practiceBorder} p-4`}>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F46E5]/10">
            <BsRobot className="h-5 w-5 text-[#4F46E5]" />
          </div>
          <div>
            <p className="font-editorial text-lg tracking-[-0.03em] text-[#0A0A0A]">AI Mentor</p>
            <p className="text-[10px] font-medium text-emerald-600">Ready to help</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        <div className={`${practiceInset} p-3`}>
          <p className={`text-xs leading-relaxed ${practiceMuted}`}>{problem.mentorHint}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-lg border border-[#4F46E5]/30 bg-[#4F46E5]/10 px-3 py-1.5 text-[10px] font-medium text-[#4F46E5]"
            >
              Get Hint (1/3)
            </button>
            <button
              type="button"
              className={`rounded-lg border ${practiceBorder} bg-white px-3 py-1.5 text-[10px] font-medium text-[#5B5B65] hover:text-[#0A0A0A]`}
            >
              Complexity Analysis
            </button>
          </div>
        </div>

        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-[#5B5B65]">
            Interview Health
          </p>
          <div className="space-y-3">
            <div>
              <div className="mb-1 flex justify-between text-[10px]">
                <span className={practiceMuted}>Communication</span>
                <span className="font-medium text-emerald-700">Excellent</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[#F5F5F7]">
                <div className="h-full w-[88%] rounded-full bg-emerald-500" />
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-[10px]">
                <span className={practiceMuted}>Logic Speed</span>
                <span className="font-medium text-amber-600">Average</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[#F5F5F7]">
                <div className="h-full w-[58%] rounded-full bg-amber-500" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[#5B5B65]">
            Tags
          </p>
          <div className="flex flex-wrap gap-1.5">
            {problem.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-2 py-1 text-[10px] font-medium text-[#5B5B65]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#4F46E5]/20 bg-[#4F46E5]/5 p-3">
          <div className="flex items-start gap-2">
            <BsLightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
            <div>
              <p className="text-[10px] font-semibold text-[#4F46E5]">Pro Tip</p>
              <p className={`mt-1 text-xs leading-relaxed ${practiceMuted}`}>{problem.mentorTip}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`shrink-0 border-t ${practiceBorder} p-3`}>
        <div className={`flex items-center gap-2 rounded-xl border ${practiceBorder} bg-[#F5F5F7] px-3 py-2`}>
          <input
            type="text"
            placeholder="Ask AI mentor..."
            className="flex-1 bg-transparent text-xs text-[#0A0A0A] placeholder:text-[#5B5B65] outline-none"
          />
          <button
            type="button"
            aria-label="Send message"
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4F46E5] text-white"
          >
            <BsSend className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
