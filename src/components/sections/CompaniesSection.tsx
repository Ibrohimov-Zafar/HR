import { BsArrowUpRight } from "react-icons/bs";
import { card, container, headingLg, sectionPy, subtext } from "./shared";

const companies = [
  { name: "Google", difficulty: "Hard", time: "60m", hard: true },
  { name: "Meta", difficulty: "Medium", time: "45m", hard: false },
  { name: "Amazon", difficulty: "Hard", time: "90m", hard: true },
  { name: "Microsoft", difficulty: "Medium", time: "45m", hard: false },
  { name: "Netflix", difficulty: "Hard", time: "60m", hard: true },
  { name: "Uber", difficulty: "Medium", time: "45m", hard: false },
] as const;

export default function CompaniesSection() {
  return (
    <section id="companies" className={`bg-[#F5F5F7] ${sectionPy}`}>
      <div className={container}>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className={`${headingLg} mb-3`}>Practice Company-Specific Loops</h2>
            <p className={subtext}>Simulate the exact interview pipeline of top tech companies.</p>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-medium text-[#0A0A0A] transition-opacity hover:opacity-70"
          >
            View All Companies
            <BsArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((c) => (
            <div key={c.name} className={`${card} flex flex-col items-center p-5 text-center`}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F5F7] text-lg font-medium text-[#4F46E5]">
                {c.name[0]}
              </div>
              <h3 className="mb-3 text-sm font-medium text-[#0A0A0A]">{c.name}</h3>
              <span
                className={`mb-2 block w-full rounded-md border px-2 py-0.5 text-[10px] font-medium ${
                  c.hard
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-amber-200 bg-amber-50 text-amber-700"
                }`}
              >
                {c.difficulty}
              </span>
              <p className="text-xs text-[#5B5B65]">{c.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
