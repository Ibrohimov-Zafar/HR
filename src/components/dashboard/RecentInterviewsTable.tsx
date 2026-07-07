import { BsArrowRight } from "react-icons/bs";
import { dashCard, scoreTone } from "./shared";

const interviews = [
  { company: "Google", role: "Software Engineer", date: "Mar 4, 2026", score: 92, status: "Completed" },
  { company: "Meta", role: "Frontend Engineer", date: "Mar 2, 2026", score: 78, status: "Completed" },
  { company: "Amazon", role: "SDE II", date: "Feb 28, 2026", score: 85, status: "Completed" },
  { company: "Stripe", role: "Backend Engineer", date: "Feb 25, 2026", score: 68, status: "Review" },
] as const;

export default function RecentInterviewsTable() {
  return (
    <div className={`${dashCard} overflow-hidden`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Recent Interviews</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Your latest practice sessions and scores</p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.08)] text-xs font-medium uppercase tracking-wide text-[#5B5B65]">
              <th className="pb-3 pr-4 font-medium">Company</th>
              <th className="pb-3 pr-4 font-medium">Role</th>
              <th className="pb-3 pr-4 font-medium">Date</th>
              <th className="pb-3 pr-4 font-medium">Score</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((row) => {
              const tone = scoreTone(row.score);
              return (
                <tr
                  key={`${row.company}-${row.date}`}
                  className="border-b border-[rgba(0,0,0,0.04)] last:border-0"
                >
                  <td className="py-4 pr-4 font-medium text-[#0A0A0A]">{row.company}</td>
                  <td className="py-4 pr-4 text-[#5B5B65]">{row.role}</td>
                  <td className="py-4 pr-4 text-[#5B5B65]">{row.date}</td>
                  <td className="py-4 pr-4">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${tone.pill}`}
                    >
                      {row.score}%
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-[#5B5B65]">{row.status}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button
        type="button"
        className="mt-4 flex items-center gap-1 text-sm font-medium text-[#4F46E5] hover:opacity-80"
      >
        View all history
        <BsArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
