import { Link } from "@tanstack/react-router";
import { BsArrowLeft, BsGear } from "react-icons/bs";
import BrandIcon from "@/components/BrandIcon";

function levelTone(level?: string) {
  const value = level?.toLowerCase() ?? "";
  if (value.includes("junior")) return "border-sky-200 bg-sky-50 text-sky-700";
  if (value.includes("mid")) return "border-amber-200 bg-amber-50 text-amber-700";
  if (value.includes("senior")) return "border-violet-200 bg-violet-50 text-violet-700";
  if (value.includes("staff") || value.includes("lead")) {
    return "border-rose-200 bg-rose-50 text-rose-700";
  }
  return "border-amber-200 bg-amber-50 text-amber-700";
}

type InterviewHeaderProps = {
  roleTitle?: string;
  level?: string;
  years?: string;
};

function TimerBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-10 items-center justify-between gap-3 rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-3 sm:px-4 ${className}`}
    >
      <p className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-[#5B5B65]">
        Time Remaining
      </p>
      <p className="shrink-0 text-lg font-semibold tabular-nums leading-none tracking-tight text-[#0A0A0A] sm:text-xl">
        09:38
      </p>
    </div>
  );
}

function BackButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/interview"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.08)] text-[#5B5B65] transition-colors hover:bg-[#F5F5F7] hover:text-[#0A0A0A] ${className}`}
      aria-label="Back to interview setup"
    >
      <BsArrowLeft className="h-4 w-4" />
    </Link>
  );
}

function SettingsButton() {
  return (
    <button
      type="button"
      aria-label="Settings"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.08)] text-[#5B5B65] transition-colors hover:bg-[#F5F5F7] hover:text-[#0A0A0A]"
    >
      <BsGear className="h-4 w-4" />
    </button>
  );
}

function ProfileAvatar() {
  return (
    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[rgba(0,0,0,0.08)] bg-[#E5E7EB]">
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zafar"
        alt="Profile"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function RoleMeta({
  badge,
  roleTitle,
  years,
  level,
  className = "",
}: {
  badge: string;
  roleTitle: string;
  years?: string;
  level?: string;
  className?: string;
}) {
  return (
    <div className={`flex min-w-0 items-center gap-2 ${className}`}>
      <span
        className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${levelTone(level)}`}
      >
        {badge}
      </span>
      <span className="min-w-0 truncate text-sm font-medium text-[#0A0A0A] sm:text-base">
        {roleTitle}
      </span>
      {years && (
        <span className="shrink-0 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-2.5 py-1 text-[10px] font-medium text-[#5B5B65]">
          {years}
        </span>
      )}
    </div>
  );
}

export default function InterviewHeader({
  roleTitle = "Software Engineering Lead Role",
  level,
  years,
}: InterviewHeaderProps) {
  const badge = level ?? "Hard";

  return (
    <header className="shrink-0 overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white px-3 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:px-4 sm:py-4 md:px-5 md:py-4">
      <div className="hidden items-center justify-between gap-4 lg:flex">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <BackButton />
          <Link to="/dashboard" className="flex min-w-0 shrink-0 items-center gap-2.5">
            <BrandIcon />
            <span className="font-editorial truncate text-base font-medium tracking-[-0.02em] text-[#0A0A0A]">
              InterviewAI
            </span>
          </Link>
          <div className="hidden h-6 w-px shrink-0 bg-[rgba(0,0,0,0.08)] xl:block" />
          <div className="hidden min-w-0 xl:block">
            <RoleMeta badge={badge} roleTitle={roleTitle} years={years} level={level} />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <TimerBox className="min-w-[180px]" />
          <SettingsButton />
          <ProfileAvatar />
        </div>
      </div>

      <div className="hidden min-w-0 lg:block xl:hidden">
        <RoleMeta badge={badge} roleTitle={roleTitle} years={years} level={level} className="mt-3" />
      </div>

      <div className="lg:hidden">
        <div className="flex items-center gap-2">
          <BackButton />
          <Link to="/dashboard" className="flex min-w-0 flex-1 items-center gap-2.5">
            <BrandIcon />
            <span className="font-editorial truncate text-sm font-medium tracking-[-0.02em] text-[#0A0A0A] sm:text-base">
              InterviewAI
            </span>
          </Link>
        </div>

        <div className="mt-3">
          <RoleMeta badge={badge} roleTitle={roleTitle} years={years} level={level} />
        </div>

        <div className="mt-3 flex items-center gap-2">
          <TimerBox className="min-w-0 flex-1" />
          <SettingsButton />
          <ProfileAvatar />
        </div>
      </div>

      <div className="mt-3 border-t border-[rgba(0,0,0,0.06)] pt-3 lg:mt-4">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs font-medium text-[#5B5B65]">
          <span className="shrink-0">
            Question <span className="text-[#0A0A0A]">4</span> of 12
          </span>
          <span className="shrink-0">
            <span className="text-[#0A0A0A]">35%</span> Complete
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]">
          <div className="h-full w-[35%] rounded-full bg-[#4F46E5]" />
        </div>
      </div>
    </header>
  );
}
