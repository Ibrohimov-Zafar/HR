import CTAButton from "@/components/hero/CTAButton";
import { badge, card, container, headingLg, sectionPy, subtext } from "./shared";

export default function FinalCTASection() {
  return (
    <section className={`bg-white ${sectionPy}`}>
      <div className={container}>
        <div className={`${card} relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:rounded-[3rem] md:px-24 md:py-24`}>
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className={`${badge} mb-6 uppercase tracking-widest`}>Join 50,000+ Engineers</span>
            <h2 className={`${headingLg} mb-6 text-center`}>Ready to land your dream role?</h2>
            <p className={`${subtext} mx-auto mb-10 max-w-lg text-lg`}>
              Stop guessing what interviewers want. Start practicing with the tool that knows exactly
              how they think.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <CTAButton ariaLabel="Get started for free">Get Started For Free</CTAButton>
              <CTAButton variant="outline" ariaLabel="View pro features">
                View Pro Features
              </CTAButton>
            </div>
            <p className="mt-8 text-sm text-[#5B5B65]">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
