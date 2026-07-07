import {
  BsCodeSlash,
  BsCpu,
  BsDatabase,
  BsDiagram3,
  BsPhone,
  BsServer,
  BsStack,
  BsPeople,
} from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

export const interviewTypes = [
  {
    id: "frontend",
    title: "Frontend Developer",
    desc: "React, CSS, browser APIs, performance & accessibility.",
    icon: BsCodeSlash,
    tags: ["React", "TypeScript", "UI/UX"],
    duration: "45 min",
  },
  {
    id: "backend",
    title: "Backend Engineer",
    desc: "APIs, databases, caching, scalability & system trade-offs.",
    icon: BsServer,
    tags: ["Node.js", "SQL", "REST"],
    duration: "50 min",
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    desc: "End-to-end features from database to polished UI.",
    icon: BsStack,
    tags: ["React", "APIs", "DevOps"],
    duration: "55 min",
  },
  {
    id: "devops",
    title: "DevOps / SRE",
    desc: "CI/CD, Kubernetes, monitoring, incident response.",
    icon: BsCpu,
    tags: ["Docker", "K8s", "AWS"],
    duration: "45 min",
  },
  {
    id: "mobile",
    title: "Mobile Developer",
    desc: "iOS/Android patterns, offline-first, app architecture.",
    icon: BsPhone,
    tags: ["Swift", "Kotlin", "Flutter"],
    duration: "45 min",
  },
  {
    id: "data",
    title: "Data Engineer",
    desc: "Pipelines, warehousing, ETL, streaming & data quality.",
    icon: BsDatabase,
    tags: ["Spark", "SQL", "Airflow"],
    duration: "50 min",
  },
  {
    id: "system-design",
    title: "System Design",
    desc: "Architecture, scalability, distributed systems deep dives.",
    icon: BsDiagram3,
    tags: ["Microservices", "Caching", "Sharding"],
    duration: "60 min",
  },
  {
    id: "behavioral",
    title: "Behavioral (IT)",
    desc: "STAR stories, leadership, conflict & culture fit for tech roles.",
    icon: BsPeople,
    tags: ["STAR", "Leadership", "Communication"],
    duration: "35 min",
  },
] as const;

export type InterviewTypeId = (typeof interviewTypes)[number]["id"];

export const levelOptions = ["Junior", "Mid-Level", "Senior", "Staff / Lead"] as const;
export const yearsOptions = ["0–1 year", "1–3 years", "3–5 years", "5–8 years", "8+ years"] as const;

export type InterviewLevel = (typeof levelOptions)[number];
export type InterviewYears = (typeof yearsOptions)[number];

type InterviewTypeCardProps = {
  type: (typeof interviewTypes)[number];
  selected: boolean;
  onSelect: () => void;
};

export function InterviewTypeCard({ type, selected, onSelect }: InterviewTypeCardProps) {
  const Icon = type.icon;
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`${dashCard} w-full text-left transition-all hover:border-[#4F46E5]/30 hover:shadow-sm ${
        selected ? "border-[#4F46E5] ring-2 ring-[#4F46E5]/20" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            selected ? "bg-[#4F46E5] text-white" : "bg-[#4F46E5]/10 text-[#4F46E5]"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-[#0A0A0A]">{type.title}</h3>
            <span className="shrink-0 text-[10px] text-[#5B5B65]">{type.duration}</span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-[#5B5B65]">{type.desc}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {type.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#F5F5F7] px-2 py-0.5 text-[10px] font-medium text-[#5B5B65]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
