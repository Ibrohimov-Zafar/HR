import { BsLightbulb } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

const insights = [
  "Strong frontend focus — consider highlighting backend distributed systems experience.",
  "3 years at current role signals readiness for senior-level interviews.",
  "Missing cloud certifications — AWS Solutions Architect would strengthen your profile.",
  "Leadership keywords detected — prepare behavioral stories about team mentorship.",
] as const;

export default function ResumeInsights() {
  return (
    <div className={`${dashCard}`}>
      <div className="flex items-center gap-2">
        <BsLightbulb className="h-5 w-5 text-amber-500" />
        <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">AI Insights</h2>
      </div>
      <p className="mt-1 text-sm text-[#5B5B65]">Personalized recommendations for your profile</p>

      <ul className="mt-5 space-y-3">
        {insights.map((text, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-xl border border-[rgba(0,0,0,0.06)] bg-[#F5F5F7] p-3 text-sm leading-relaxed text-[#5B5B65]"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4F46E5]/10 text-xs font-medium text-[#4F46E5]">
              {i + 1}
            </span>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
