import { BsCheck2 } from "react-icons/bs";
import CTAButton from "@/components/hero/CTAButton";
import { card, container, headingXl, sectionPy, subtext } from "./shared";

const plans = [
  {
    name: "Free",
    desc: "Essential prep for students.",
    price: "$0",
    period: "/forever",
    features: [
      { text: "2 Mock Interviews / Month", included: true },
      { text: "Basic Feedback Report", included: true },
      { text: "500+ Practice Problems", included: true },
      { text: "Voice Simulation", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    desc: "Complete interview mastery.",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited AI Mock Interviews",
      "Real-time Voice & Tone Analysis",
      "Company-Specific Loops",
      "System Design Whiteboard",
      "Resume & GitHub Integration",
    ].map((text) => ({ text, included: true })),
    cta: "Unlock Pro Access",
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "For universities and cohorts.",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Batch Onboarding",
      "Performance Dashboard",
      "Dedicated Support",
    ].map((text) => ({ text, included: true })),
    cta: "Contact Sales",
    popular: false,
  },
] as const;

export default function PricingSection() {
  return (
    <section id="pricing" className={`bg-white ${sectionPy}`}>
      <div className={container}>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className={`${headingXl} mb-4`}>Pricing for Every Stage</h2>
          <p className={subtext}>Start for free, upgrade when you&apos;re ready to get hired.</p>
        </div>
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${card} relative flex flex-col p-8 ${plan.popular ? "border-[#4F46E5]/30 shadow-md md:scale-[1.02]" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-editorial text-2xl tracking-[-0.03em] text-[#0A0A0A]">{plan.name}</h3>
              <p className={`${subtext} mt-2 text-sm`}>{plan.desc}</p>
              <div className="mb-8 mt-6">
                <span className="font-editorial text-4xl tracking-[-0.03em] text-[#0A0A0A]">{plan.price}</span>
                {plan.period && <span className="text-[#5B5B65]">{plan.period}</span>}
              </div>
              <ul className="mb-10 flex-grow space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-start gap-2 text-sm ${f.included ? "text-[#0A0A0A]" : "text-[#5B5B65]/50"}`}
                  >
                    <BsCheck2 className={`mt-0.5 shrink-0 ${f.included ? "text-[#4F46E5]" : "opacity-30"}`} />
                    {f.text}
                  </li>
                ))}
              </ul>
              {plan.popular ? (
                <CTAButton className="w-full !py-3.5" ariaLabel={plan.cta}>
                  {plan.cta}
                </CTAButton>
              ) : (
                <button
                  type="button"
                  className="w-full rounded-xl border border-[rgba(0,0,0,0.08)] bg-white py-3.5 text-sm font-medium text-[#0A0A0A] transition-colors hover:bg-[#F5F5F7]"
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
