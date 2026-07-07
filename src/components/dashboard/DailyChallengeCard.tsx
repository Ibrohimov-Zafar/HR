import { BsClock, BsLightning } from "react-icons/bs";
import CTAButton from "@/components/hero/CTAButton";
import { dashCard } from "./shared";

export default function DailyChallengeCard() {
  return (
    <div className={`${dashCard} flex h-full flex-col`}>
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-[#4F46E5]">
          <BsLightning className="h-4 w-4" />
        </span>
        <div>
          <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Daily Challenge</h2>
          <p className="text-xs text-[#5B5B65]">Level up with today&apos;s problem</p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-[#4F46E5]">Medium · Arrays</p>
        <p className="mt-2 font-medium text-[#0A0A0A]">Longest Substring Without Repeating Characters</p>
        <p className="mt-2 text-sm leading-relaxed text-[#5B5B65]">
          Given a string, find the length of the longest substring without repeating characters.
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-[#5B5B65]">
          <BsClock className="h-3.5 w-3.5" />
          ~25 min · 847 solved today
        </div>
      </div>

      <div className="mt-5">
        <CTAButton className="w-full !py-3" ariaLabel="Start daily challenge">
          Start Challenge
        </CTAButton>
      </div>
    </div>
  );
}
