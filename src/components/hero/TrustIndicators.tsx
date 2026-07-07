import { BsChatDots, BsMic, BsPeople, BsShieldCheck } from "react-icons/bs";

const items = [
  { icon: BsMic, label: "AI Voice Interviews" },
  { icon: BsChatDots, label: "Behavioral Round Prep" },
  { icon: BsShieldCheck, label: "Real-time Feedback" },
  { icon: BsPeople, label: "Trusted by 50k+ Engineers" },
] as const;

export default function TrustIndicators() {
  return (
    <ul className="mt-8 flex w-full flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:gap-8">
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2 text-sm font-medium text-[#5B5B65]">
          <Icon className="h-4 w-4 shrink-0" aria-hidden />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
