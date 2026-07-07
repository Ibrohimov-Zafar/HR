import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BsCheckCircleFill, BsCircle, BsDashCircle, BsSearch } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";
import {
  difficultyTone,
  practiceProblems,
  type ProblemDifficulty,
  type ProblemStatus,
} from "./problems";
import { practiceBorder, practiceMuted } from "./shared";

const filters: Array<"All" | ProblemDifficulty> = ["All", "Easy", "Medium", "Hard"];

function StatusIcon({ status }: { status: ProblemStatus }) {
  if (status === "solved") return <BsCheckCircleFill className="h-4 w-4 text-emerald-600" />;
  if (status === "attempted") return <BsDashCircle className="h-4 w-4 text-amber-500" />;
  return <BsCircle className="h-4 w-4 text-[#D1D5DB]" />;
}

export default function PracticeProblemList() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<"All" | ProblemDifficulty>("All");

  const filtered = useMemo(() => {
    return practiceProblems.filter((p) => {
      const matchesDifficulty = difficulty === "All" || p.difficulty === difficulty;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        String(p.number).includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesDifficulty && matchesQuery;
    });
  }, [query, difficulty]);

  return (
    <div className="space-y-5">
      <div className={`${dashCard} !p-4 md:!p-5`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-sm flex-1">
            <BsSearch className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-[#9CA3AF]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search problems..."
              className={`w-full rounded-xl border ${practiceBorder} bg-[#F5F5F7] py-2 pr-3 pl-9 text-sm text-[#0A0A0A] outline-none placeholder:text-[#9CA3AF] focus:border-[#4F46E5]/40 focus:bg-white`}
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setDifficulty(f)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  difficulty === f
                    ? "bg-[#4F46E5] text-white"
                    : "bg-[#F5F5F7] text-[#5B5B65] hover:text-[#0A0A0A]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`${dashCard} overflow-hidden !p-0`}>
        <div
          className={`hidden grid-cols-[40px_56px_1fr_100px_90px] gap-4 border-b ${practiceBorder} bg-[#FAFAFA] px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-[#5B5B65] md:grid`}
        >
          <span />
          <span>#</span>
          <span>Title</span>
          <span>Acceptance</span>
          <span>Difficulty</span>
        </div>

        <div className={`divide-y ${practiceBorder}`}>
          {filtered.length === 0 ? (
            <p className={`px-5 py-10 text-center text-sm ${practiceMuted}`}>No problems found.</p>
          ) : (
            filtered.map((problem) => (
              <Link
                key={problem.id}
                to="/technical/$problemId"
                params={{ problemId: problem.id }}
                className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[#F5F5F7] md:grid md:grid-cols-[40px_56px_1fr_100px_90px] md:gap-4 md:px-5"
              >
                <StatusIcon status={problem.status} />

                <span className={`text-sm tabular-nums ${practiceMuted} md:text-xs`}>
                  {problem.number}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[#0A0A0A] group-hover:text-[#4F46E5]">
                    {problem.title}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1 md:hidden">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${difficultyTone(problem.difficulty)}`}
                    >
                      {problem.difficulty}
                    </span>
                    <span className={`text-[10px] ${practiceMuted}`}>{problem.acceptance}</span>
                  </div>
                  <div className="mt-1 hidden flex-wrap gap-1.5 md:flex">
                    {problem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#F5F5F7] px-1.5 py-0.5 text-[10px] text-[#5B5B65]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className={`hidden text-xs ${practiceMuted} md:block`}>
                  {problem.acceptance}
                </span>

                <span
                  className={`hidden rounded-full border px-2.5 py-0.5 text-center text-[10px] font-semibold md:inline-block ${difficultyTone(problem.difficulty)}`}
                >
                  {problem.difficulty}
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
