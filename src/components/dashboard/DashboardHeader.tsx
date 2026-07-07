import { Link } from "@tanstack/react-router";
import { BsBell, BsPlus, BsSearch } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import CTAButton from "@/components/hero/CTAButton";

type DashboardHeaderProps = {
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
};

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

export default function DashboardHeader({ onMenuClick, sidebarOpen }: DashboardHeaderProps) {
  return (
    <header className="shrink-0 border-b border-[rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.08)] text-[#0A0A0A]"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={sidebarOpen}
          >
            <HiMenu className="h-5 w-5" />
          </button>

          <div className="relative hidden min-w-0 flex-1 md:block md:max-w-md lg:max-w-lg">
            <BsSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B5B65]" />
            <input
              type="search"
              placeholder="Search interviews, topics, companies..."
              className="w-full rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] py-2.5 pr-4 pl-10 text-sm text-[#0A0A0A] placeholder:text-[#5B5B65] outline-none focus:border-[#4F46E5]/40"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="hidden rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#5B5B65] sm:inline">
            Pro Plan
          </span>
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.08)] text-[#5B5B65] hover:text-[#0A0A0A]"
          >
            <BsBell className="h-4 w-4" />
          </button>
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[rgba(0,0,0,0.08)] bg-[#E5E7EB]">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zafar"
              alt="Zafar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-5 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <h1 className="font-editorial text-[28px] leading-[1.08] tracking-[-0.04em] text-[#0A0A0A] sm:text-3xl md:text-4xl">
            {getGreeting()}, Zafar
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed text-[#5B5B65]">
            You&apos;ve completed 4 interviews this week. Keep the momentum going.
          </p>
        </div>

        <Link to="/interview" className="w-full shrink-0 md:w-auto">
          <CTAButton className="w-full !px-5 !py-3 md:w-auto" ariaLabel="Start new interview">
            <span className="flex items-center justify-center gap-2">
              <BsPlus className="h-4 w-4" />
              Start New Interview
            </span>
          </CTAButton>
        </Link>
      </div>
    </header>
  );
}
