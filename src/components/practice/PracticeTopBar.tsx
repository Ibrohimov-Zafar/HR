import { Link } from "@tanstack/react-router";
import { BsArrowLeft, BsGear, BsPlayFill } from "react-icons/bs";
import BrandIcon from "@/components/BrandIcon";
import { difficultyTone, type PracticeProblem } from "./problems";

type PracticeTopBarProps = {
  problem: PracticeProblem;
  problemIndex: number;
  totalProblems: number;
  passedCount: number;
  totalTests: number;
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
      to="/technical"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.08)] text-[#5B5B65] transition-colors hover:bg-[#F5F5F7] hover:text-[#0A0A0A] ${className}`}
      aria-label="Back to problems"
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

function SubmitButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/history"
      className={`flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#4F46E5] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#4338CA] ${className}`}
    >
      <BsPlayFill className="h-3 w-3" />
      Submit
    </Link>
  );
}

function ProblemMeta({ problem, className = "" }: { problem: PracticeProblem; className?: string }) {
  return (
    <div className={`flex min-w-0 items-center gap-2 ${className}`}>
      <span className="shrink-0 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-700">
        Practice
      </span>
      <span
        className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${difficultyTone(problem.difficulty)}`}
      >
        {problem.difficulty}
      </span>
      <span className="min-w-0 truncate text-sm font-medium text-[#0A0A0A] sm:text-base">
        {problem.number}. {problem.title}
      </span>
    </div>
  );
}

export default function PracticeTopBar({
  problem,
  problemIndex,
  totalProblems,
  passedCount,
  totalTests,
}: PracticeTopBarProps) {
  const progress = totalTests > 0 ? (passedCount / totalTests) * 100 : 0;

  return (
    <header className="mx-3 mt-3 shrink-0 overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white px-3 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:mx-4 sm:mt-4 sm:px-4 sm:py-4 md:mx-5 md:px-5 md:py-4">
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
            <ProblemMeta problem={problem} />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700 2xl:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            AI Proctoring Active
          </span>
          <TimerBox className="min-w-[180px]" />
          <SubmitButton />
          <SettingsButton />
          <ProfileAvatar />
        </div>
      </div>

      <div className="hidden min-w-0 lg:block xl:hidden">
        <ProblemMeta problem={problem} className="mt-3" />
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
          <ProblemMeta problem={problem} />
        </div>

        <div className="mt-3 space-y-2">
          <TimerBox className="w-full" />
          <div className="flex items-center gap-2">
            <SubmitButton className="min-w-0 flex-1" />
            <SettingsButton />
            <ProfileAvatar />
          </div>
        </div>
      </div>

      <div className="mt-3 border-t border-[rgba(0,0,0,0.06)] pt-3 lg:mt-4">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs font-medium text-[#5B5B65]">
          <span className="shrink-0">
            Problem <span className="text-[#0A0A0A]">{problemIndex}</span> of {totalProblems}
          </span>
          <span className="min-w-0 text-right">
            <span className="text-[#0A0A0A]">
              {passedCount}/{totalTests}
            </span>
            <span className="hidden min-[360px]:inline"> test cases passed</span>
            <span className="min-[360px]:hidden"> passed</span>
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]">
          <div
            className="h-full rounded-full bg-[#4F46E5] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  );
}
