import { dashCard } from "@/components/dashboard/shared";

const questions = [
  "Tell me about the microservices migration you led at TechCorp.",
  "How do you handle trade-offs between delivery speed and code quality?",
  "Describe a time you mentored a junior developer.",
  "What's your approach to system design for high-traffic applications?",
  "Why are you looking for a new opportunity now?",
] as const;

export default function TailoredQuestions() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">
        Tailored Interview Questions
      </h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Generated from your resume content</p>

      <ol className="mt-5 space-y-3">
        {questions.map((q, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-xl border border-[rgba(0,0,0,0.08)] p-4 text-sm text-[#0A0A0A]"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-xs font-medium text-[#4F46E5]">
              {i + 1}
            </span>
            {q}
          </li>
        ))}
      </ol>

      <button
        type="button"
        className="mt-5 w-full rounded-xl bg-[#4F46E5] py-2.5 text-sm font-medium text-white hover:bg-[#4338CA]"
      >
        Practice These Questions
      </button>
    </div>
  );
}
