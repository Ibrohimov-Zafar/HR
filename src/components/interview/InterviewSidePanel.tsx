import { BsCheckCircle, BsClock, BsLightning } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

const challenges = [
  {
    id: 1,
    title: "Leadership & Conflict",
    status: "active",
    time: "2:34",
    hint: "Use the STAR method",
  },
  {
    id: 2,
    title: "Technical Decision Making",
    status: "upcoming",
    time: "~5 min",
    hint: null,
  },
  {
    id: 3,
    title: "Culture Fit",
    status: "completed",
    time: "Done",
    hint: null,
  },
] as const;

export default function InterviewSidePanel() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className={`${dashCard} shrink-0`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[#5B5B65]">Session</p>
            <p className="mt-1 font-editorial text-xl text-[#0A0A0A]">Behavioral Round</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Live
          </span>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-[#5B5B65]">
          <span className="flex items-center gap-1">
            <BsClock className="h-3.5 w-3.5" /> 12:45 elapsed
          </span>
          <span>Question 2 of 5</span>
        </div>
      </div>

      <div className={`${dashCard} flex-1 overflow-y-auto`}>
        <h3 className="text-sm font-medium text-[#0A0A0A]">Challenge Queue</h3>
        <div className="mt-3 space-y-2">
          {challenges.map((c) => (
            <div
              key={c.id}
              className={`rounded-xl border p-3 ${
                c.status === "active"
                  ? "border-[#4F46E5]/30 bg-[#4F46E5]/5"
                  : "border-[rgba(0,0,0,0.06)] bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-[#0A0A0A]">{c.title}</p>
                {c.status === "completed" && (
                  <BsCheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                )}
                {c.status === "active" && (
                  <BsLightning className="h-4 w-4 shrink-0 text-[#4F46E5]" />
                )}
              </div>
              <p className="mt-1 text-xs text-[#5B5B65]">{c.time}</p>
              {c.hint && (
                <p className="mt-2 rounded-lg bg-white/80 px-2 py-1 text-xs text-[#4F46E5]">
                  Tip: {c.hint}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
