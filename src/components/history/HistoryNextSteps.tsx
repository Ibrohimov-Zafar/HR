import { Link } from "@tanstack/react-router";
import { BsArrowRight, BsBook, BsMic, BsCodeSlash } from "react-icons/bs";
import CTAButton from "@/components/hero/CTAButton";
import { dashCard } from "@/components/dashboard/shared";

const steps = [
  {
    icon: BsBook,
    title: "Study System Design",
    desc: "Review caching, load balancing, and database scaling patterns.",
    action: "Start module",
  },
  {
    icon: BsCodeSlash,
    title: "Practice Edge Cases",
    desc: "Solve 3 array problems focusing on duplicate handling.",
    action: "View problems",
  },
  {
    icon: BsMic,
    title: "Mock Interview",
    desc: "Schedule a system design mock with the AI mentor.",
    action: "Book session",
  },
] as const;

export default function HistoryNextSteps() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Next Steps</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Recommended actions to improve your score</p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, desc, action }) => (
          <div
            key={title}
            className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] p-4"
          >
            <Icon className="h-5 w-5 text-[#4F46E5]" />
            <p className="mt-3 text-sm font-medium text-[#0A0A0A]">{title}</p>
            <p className="mt-1 text-xs leading-relaxed text-[#5B5B65]">{desc}</p>
            <button
              type="button"
              className="mt-3 flex items-center gap-1 text-xs font-medium text-[#4F46E5] hover:opacity-80"
            >
              {action}
              <BsArrowRight className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-stretch gap-3">
        <Link to="/interview" className="min-w-0 flex-1">
          <CTAButton className="w-full whitespace-nowrap !px-3 !py-3 text-xs sm:!px-5 sm:text-sm" ariaLabel="Start new interview">
            Start New Interview
          </CTAButton>
        </Link>
        <Link to="/dashboard" className="min-w-0 flex-1">
          <CTAButton
            variant="outline"
            className="w-full whitespace-nowrap !px-3 !py-3 text-xs sm:!px-5 sm:text-sm"
            ariaLabel="Back to dashboard"
          >
            Back to Dashboard
          </CTAButton>
        </Link>
      </div>
    </div>
  );
}
