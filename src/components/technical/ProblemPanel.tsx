import { dashCard } from "@/components/dashboard/shared";

const examples = [
  { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
  { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
] as const;

export default function ProblemPanel() {
  return (
    <div className={`${dashCard} h-full overflow-y-auto`}>
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
          Easy
        </span>
        <span className="text-xs text-[#5B5B65]">Arrays · Hash Table</span>
      </div>

      <h2 className="mt-4 font-editorial text-2xl tracking-[-0.03em] text-[#0A0A0A]">Two Sum</h2>

      <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#5B5B65]">
        <p>
          Given an array of integers <code className="rounded bg-[#F5F5F7] px-1.5 py-0.5 text-[#0A0A0A]">nums</code> and
          an integer <code className="rounded bg-[#F5F5F7] px-1.5 py-0.5 text-[#0A0A0A]">target</code>, return{" "}
          <em>indices of the two numbers</em> such that they add up to target.
        </p>
        <p>You may assume that each input would have exactly one solution.</p>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="text-sm font-medium text-[#0A0A0A]">Examples</h3>
        {examples.map((ex, i) => (
          <div key={i} className="rounded-xl bg-[#F5F5F7] p-3 font-mono text-xs text-[#0A0A0A]">
            <p>Input: {ex.input}</p>
            <p className="mt-1 text-[#4F46E5]">Output: {ex.output}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-[#0A0A0A]">Constraints</h3>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[#5B5B65]">
          <li>2 ≤ nums.length ≤ 10⁴</li>
          <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
          <li>Only one valid answer exists</li>
        </ul>
      </div>
    </div>
  );
}
