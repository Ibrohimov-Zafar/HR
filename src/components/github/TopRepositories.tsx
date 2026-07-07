import { BsStar } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

const repos = [
  { name: "interview-prep-kit", stars: 124, lang: "TypeScript", desc: "Curated interview resources" },
  { name: "react-dashboard", stars: 89, lang: "React", desc: "Analytics dashboard template" },
  { name: "api-gateway", stars: 56, lang: "Go", desc: "Microservices API gateway" },
  { name: "ml-pipeline", stars: 34, lang: "Python", desc: "ML training pipeline tools" },
] as const;

export default function TopRepositories() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Top Repositories</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">Most starred and active projects</p>

      <div className="mt-5 space-y-3">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="rounded-xl border border-[rgba(0,0,0,0.08)] p-4 hover:border-[rgba(0,0,0,0.14)]"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium text-[#4F46E5]">{repo.name}</p>
              <span className="flex items-center gap-1 text-xs text-[#5B5B65]">
                <BsStar className="h-3 w-3" />
                {repo.stars}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#5B5B65]">{repo.desc}</p>
            <span className="mt-2 inline-block rounded-full bg-[#F5F5F7] px-2 py-0.5 text-[10px] font-medium text-[#5B5B65]">
              {repo.lang}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
