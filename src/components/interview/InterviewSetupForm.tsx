import { useState } from "react";
import { dashCard } from "@/components/dashboard/shared";
import {
  interviewTypes,
  levelOptions,
  yearsOptions,
  type InterviewLevel,
  type InterviewTypeId,
  type InterviewYears,
} from "./InterviewTypeGrid";

type InterviewSetupFormProps = {
  typeId: InterviewTypeId;
  onBack: () => void;
  onStart: (data: {
    level: InterviewLevel;
    years: InterviewYears;
    experience: string;
  }) => void;
};

export default function InterviewSetupForm({ typeId, onBack, onStart }: InterviewSetupFormProps) {
  const selected = interviewTypes.find((t) => t.id === typeId);
  const [level, setLevel] = useState<InterviewLevel | "">("");
  const [years, setYears] = useState<InterviewYears | "">("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!level || !years || !experience.trim()) return;
    onStart({ level, years, experience: experience.trim() });
  };

  if (!selected) return null;

  return (
    <div className={`${dashCard} mx-auto max-w-xl`}>
      <button
        type="button"
        onClick={onBack}
        className="text-xs font-medium text-[#5B5B65] hover:text-[#0A0A0A]"
      >
        ← Back to interview types
      </button>

      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-[#4F46E5]">
          Session setup
        </p>
        <h2 className="mt-1 font-editorial text-2xl tracking-[-0.03em] text-[#0A0A0A]">
          {selected.title}
        </h2>
        <p className="mt-1 text-sm text-[#5B5B65]">
          Tell us about your background so the AI mentor can tailor questions.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <span className="mb-2 block text-sm font-medium text-[#0A0A0A]">Level</span>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {levelOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setLevel(opt)}
                className={`rounded-xl border px-2 py-2.5 text-center text-xs font-medium transition-colors ${
                  level === opt
                    ? "border-[#4F46E5] bg-[#4F46E5]/10 text-[#4F46E5]"
                    : "border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] text-[#5B5B65] hover:text-[#0A0A0A]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#0A0A0A]">
            Years of experience
          </span>
          <select
            value={years}
            onChange={(e) => setYears(e.target.value as InterviewYears)}
            required
            className="w-full rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-4 py-2.5 text-sm text-[#0A0A0A] outline-none focus:border-[#4F46E5]/40"
          >
            <option value="" disabled>
              Select years
            </option>
            {yearsOptions.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#0A0A0A]">
            Relevant experience
          </span>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            rows={4}
            placeholder="e.g. 2 years building React dashboards at a fintech startup, led API migration to GraphQL..."
            className="w-full resize-none rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-4 py-3 text-sm leading-relaxed text-[#0A0A0A] placeholder:text-[#5B5B65] outline-none focus:border-[#4F46E5]/40"
          />
        </label>

        <button
          type="submit"
          disabled={!level || !years || !experience.trim()}
          className="w-full rounded-xl bg-[#0A0A0A] py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Start Interview
        </button>
      </form>
    </div>
  );
}
