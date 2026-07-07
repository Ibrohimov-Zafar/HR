import { card, container, headingXl, sectionPy, subtext } from "./shared";

const faqs = [
  {
    q: "How accurate is the AI feedback?",
    a: "Our AI is trained on thousands of real interview transcripts from top-tier companies. It benchmarks your answers against successful candidates, focusing on Big O efficiency, architectural trade-offs, and behavioral STAR method execution.",
    open: true,
  },
  {
    q: "Is my data and code private?",
    a: "Absolutely. We encrypt all submissions. Your code and personal data are never used to train global models without explicit consent. Your practice sessions are private to you.",
  },
  {
    q: "Which programming languages do you support?",
    a: "We support 15+ major languages including Python, Java, C++, TypeScript, Go, Rust, and Ruby. Our code execution environment is isolated and fast.",
  },
] as const;

export default function FAQSection() {
  return (
    <section id="faq" className={`bg-[#F5F5F7] ${sectionPy}`}>
      <div className={`${container} max-w-3xl`}>
        <div className="mb-16 text-center">
          <h2 className={`${headingXl} mb-4`}>Frequently Asked Questions</h2>
          <p className={subtext}>Everything you need to know about InterviewAI.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className={`${card} group overflow-hidden`} open={"open" in item ? item.open : undefined}>
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-base font-medium text-[#0A0A0A] select-none">
                {item.q}
                <span className="ml-4 text-[#5B5B65] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-sm leading-relaxed text-[#5B5B65]">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
