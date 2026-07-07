import { BsMic } from "react-icons/bs";
import CTAButton from "@/components/hero/CTAButton";
import { dashCard } from "@/components/dashboard/shared";

const topics = [
  "Explain your microservices architecture in api-gateway",
  "Walk through the testing strategy in react-dashboard",
  "How would you scale interview-prep-kit to 1M users?",
  "Discuss trade-offs in your ML pipeline design",
] as const;

export default function InterviewPrep() {
  return (
    <div className={`${dashCard}`}>
      <div className="flex items-center gap-2">
        <BsMic className="h-5 w-5 text-[#4F46E5]" />
        <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">
          Interview Prep from GitHub
        </h2>
      </div>
      <p className="mt-1 text-sm text-[#5B5B65]">
        AI-generated questions based on your code contributions
      </p>

      <ul className="mt-5 space-y-2">
        {topics.map((topic, i) => (
          <li
            key={i}
            className="rounded-xl border border-[rgba(0,0,0,0.06)] bg-[#F5F5F7] px-4 py-3 text-sm text-[#0A0A0A]"
          >
            {topic}
          </li>
        ))}
      </ul>

      <CTAButton className="mt-5 w-full !py-3" ariaLabel="Practice GitHub questions">
        Practice These Questions
      </CTAButton>
    </div>
  );
}
