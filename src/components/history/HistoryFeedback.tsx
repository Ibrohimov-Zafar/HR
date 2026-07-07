import { BsCheckCircle, BsExclamationTriangle, BsXCircle } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

const feedback = [
  {
    type: "strength",
    title: "Strong algorithmic thinking",
    text: "You quickly identified the hash map approach and implemented it cleanly with correct time complexity analysis.",
  },
  {
    type: "improvement",
    title: "Edge case handling",
    text: "Missed the duplicate value edge case in test case 3. Always walk through examples with duplicates before submitting.",
  },
  {
    type: "strength",
    title: "Clear communication",
    text: "You explained your thought process well during the behavioral round, using structured STAR responses.",
  },
  {
    type: "weakness",
    title: "System design depth",
    text: "When discussing scalability, consider mentioning caching layers and database sharding strategies.",
  },
] as const;

const icons = {
  strength: { Icon: BsCheckCircle, color: "text-emerald-500", bg: "bg-emerald-50" },
  improvement: { Icon: BsExclamationTriangle, color: "text-amber-500", bg: "bg-amber-50" },
  weakness: { Icon: BsXCircle, color: "text-red-500", bg: "bg-red-50" },
};

export default function HistoryFeedback() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">AI Feedback</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Detailed analysis of your performance</p>

      <div className="mt-6 space-y-4">
        {feedback.map((item) => {
          const { Icon, color, bg } = icons[item.type];
          return (
            <div key={item.title} className="flex gap-3 rounded-xl border border-[rgba(0,0,0,0.06)] p-4">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${bg}`}>
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-[#0A0A0A]">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#5B5B65]">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
