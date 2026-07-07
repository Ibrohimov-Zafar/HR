import { BsCodeSlash, BsFileEarmarkText, BsGraphUp, BsMic } from "react-icons/bs";
import { card, container, headingXl, sectionPy, subtext } from "./shared";

export default function FeaturesSection() {
  return (
    <section id="features" className={`bg-white ${sectionPy}`}>
      <div className={container}>
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <h2 className={`${headingXl} mb-4`}>Precision-Engineered Preparation</h2>
          <p className={subtext}>
            Every feature is designed to bridge the gap between theoretical knowledge and successful
            interview execution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className={`${card} relative flex flex-col justify-between overflow-hidden p-8 md:col-span-2`}>
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F5F7] text-[#4F46E5]">
                  <BsMic className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0A0A0A]">AI Voice &amp; Behavioral</h3>
                  <p className="text-sm text-[#5B5B65]">Low-latency conversational simulation.</p>
                </div>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#5B5B65]">
                <p>
                  Natural language understanding handles follow-up questions and &ldquo;Tell me about a
                  time...&rdquo; scenarios flawlessly.
                </p>
                <p>
                  Real-time tone analysis identifies confidence levels and areas for improved
                  articulation.
                </p>
              </div>
            </div>
            <div className="mt-10 flex h-28 items-end gap-1 overflow-hidden rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-4 py-3">
              {[48, 80, 64, 96, 40, 72, 56, 88, 44, 76].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 animate-pulse rounded-t-sm bg-[#0A0A0A]"
                  style={{
                    height: `${h}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.8 + (i % 3) * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className={`${card} flex flex-col p-8`}>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F5F7] text-[#4F46E5]">
              <BsCodeSlash className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-lg font-medium text-[#0A0A0A]">Integrated Editor</h3>
            <p className={`${subtext} mb-6 text-sm`}>
              Full Monaco Editor support with IntelliSense, multiple languages, and real-time
              execution.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 border-t border-[rgba(0,0,0,0.08)] pt-6">
              {["Python", "Java", "TypeScript", "C++"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-2 py-1 text-[10px] font-medium text-[#5B5B65]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className={`${card} flex flex-col p-8`}>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F5F7] text-[#4F46E5]">
              <BsFileEarmarkText className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-lg font-medium text-[#0A0A0A]">Resume &amp; GitHub</h3>
            <p className={`${subtext} text-sm`}>
              AI analyzes your experience and public repos to generate custom questions tailored to
              your actual skills.
            </p>
          </div>

          <div className={`${card} grid gap-8 p-8 md:col-span-2 md:grid-cols-2`}>
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F5F7] text-[#4F46E5]">
                <BsGraphUp className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-[#0A0A0A]">Mastery Metrics</h3>
              <p className={`${subtext} text-sm`}>
                Track your growth with deep-dive analytics on coding speed, memory efficiency, and
                communication clarity.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-5 rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] p-6">
              {[
                ["Algorithmic Thinking", 85],
                ["System Design", 62],
                ["Behavioral Flow", 92],
              ].map(([label, pct]) => (
                <div key={label} className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-[#5B5B65]">
                    <span>{label}</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white">
                    <div className="h-full bg-[#0A0A0A]" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
