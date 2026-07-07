import { Link } from "@tanstack/react-router";
import { BsBell, BsPlus } from "react-icons/bs";
import CTAButton from "@/components/hero/CTAButton";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

export default function DashboardHeader() {
  return (
    <header className="shrink-0 border-b border-[rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <h1 className="font-editorial min-w-0 truncate text-xl tracking-[-0.04em] text-[#0A0A0A] sm:text-2xl lg:text-3xl">
          {getGreeting()}, Zafar
        </h1>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="hidden rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#5B5B65] md:inline">
            Pro Plan
          </span>
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.08)] text-[#5B5B65] hover:text-[#0A0A0A] sm:h-10 sm:w-10"
          >
            <BsBell className="h-4 w-4" />
          </button>
          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[rgba(0,0,0,0.08)] bg-[#E5E7EB] sm:h-10 sm:w-10">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zafar"
              alt="Zafar"
              className="h-full w-full object-cover"
            />
          </div>
          <Link to="/interview" className="shrink-0">
            <CTAButton
              className="!px-3 !py-2.5 whitespace-nowrap sm:!px-5 sm:!py-3"
              ariaLabel="Start new interview"
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                <BsPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Start New Interview</span>
                <span className="sm:hidden">Start</span>
              </span>
            </CTAButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
