import { BsPlay, BsSend } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

const defaultCode = `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`;

export default function CodeEditorPanel() {
  return (
    <div className={`${dashCard} flex h-full flex-col overflow-hidden !p-0`}>
      <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.08)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#5B5B65]">solution.js</span>
          <span className="rounded bg-[#F5F5F7] px-2 py-0.5 text-[10px] text-[#5B5B65]">JavaScript</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg border border-[rgba(0,0,0,0.08)] px-3 py-1.5 text-xs font-medium text-[#0A0A0A] hover:bg-[#F5F5F7]"
          >
            <BsPlay className="h-3 w-3" />
            Run
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg bg-[#4F46E5] px-3 py-1.5 text-xs font-medium text-white"
          >
            <BsSend className="h-3 w-3" />
            Submit
          </button>
        </div>
      </div>
      <textarea
        defaultValue={defaultCode}
        spellCheck={false}
        className="min-h-[320px] flex-1 resize-none bg-[#1E1E2E] p-4 font-mono text-sm leading-relaxed text-[#CDD6F4] outline-none"
        aria-label="Code editor"
      />
      <div className="border-t border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-4 py-2">
        <p className="font-mono text-xs text-emerald-700">
          ✓ Test case 1 passed · Test case 2 passed · Test case 3 failed
        </p>
      </div>
    </div>
  );
}
