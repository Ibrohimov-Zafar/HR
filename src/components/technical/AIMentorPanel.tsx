import { BsLightbulb, BsRobot } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

const hints = [
  "Consider using a hash map to store seen values and their indices.",
  "Think about the time complexity — can you solve this in O(n)?",
  "What happens when you encounter a complement that's already in your map?",
] as const;

export default function AIMentorPanel() {
  return (
    <div className={`${dashCard} flex h-full flex-col overflow-y-auto`}>
      <div className="flex items-center gap-2">
        <BsRobot className="h-5 w-5 text-[#4F46E5]" />
        <div>
          <h2 className="font-editorial text-lg tracking-[-0.03em] text-[#0A0A0A]">AI Mentor</h2>
          <p className="text-xs text-[#5B5B65]">Real-time guidance</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-[#4F46E5]/20 bg-[#4F46E5]/5 p-3">
        <p className="text-sm leading-relaxed text-[#0A0A0A]">
          Good approach using a hash map! Your solution is O(n) time and O(n) space. Consider edge
          cases with duplicate values.
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-1.5 text-sm font-medium text-[#0A0A0A]">
          <BsLightbulb className="h-4 w-4 text-amber-500" />
          Hints
        </div>
        <ul className="mt-3 space-y-2">
          {hints.map((hint, i) => (
            <li
              key={i}
              className="rounded-lg border border-[rgba(0,0,0,0.06)] bg-[#F5F5F7] px-3 py-2 text-xs leading-relaxed text-[#5B5B65]"
            >
              {hint}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-5">
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { label: "Time", value: "O(n)" },
            { label: "Space", value: "O(n)" },
            { label: "Score", value: "85%" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl bg-[#F5F5F7] px-2 py-2">
              <p className="text-[10px] uppercase tracking-wide text-[#5B5B65]">{label}</p>
              <p className="mt-0.5 text-sm font-medium text-[#0A0A0A]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
