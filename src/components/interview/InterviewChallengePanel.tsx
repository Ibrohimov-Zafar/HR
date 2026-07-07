import { BsLightbulb } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

const tags = ["Concurrency", "Architecture", "Distributed Systems"] as const;

export default function InterviewChallengePanel() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className={`${dashCard} border-l-4 border-l-amber-400`}>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[#5B5B65]">
          Active Challenge
        </p>
        <h3 className="mt-2 font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">
          Handling Race Conditions
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#5B5B65]">
          Explain how you would prevent race conditions in a distributed microservices
          architecture handling concurrent inventory updates.
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-2.5 py-0.5 text-[10px] font-medium text-[#5B5B65]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`${dashCard} flex-1`}>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50">
            <BsLightbulb className="h-4 w-4 text-amber-500" />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#5B5B65]">
            AI Mentor Tip
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#5B5B65]">
          Consider mentioning specific tools like Zookeeper or Etcd for distributed locking.
          Interviewers appreciate concrete technology choices over abstract concepts.
        </p>
      </div>
    </div>
  );
}
