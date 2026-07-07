import { useEffect, useRef } from "react";
import { BsChatDots, BsPerson, BsRobot } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

const transcript = [
  {
    role: "mentor" as const,
    text: "How would you handle race conditions in a distributed microservices architecture when multiple services update the same inventory record simultaneously?",
  },
  {
    role: "user" as const,
    text: "I would implement optimistic locking with version fields, and for critical paths use Redis-based distributed locks with TTL to prevent deadlocks...",
    speaking: true,
  },
] as const;

export default function LiveTranscript() {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className={`${dashCard} flex h-full flex-col`}>
      <div className="flex items-center gap-2">
        <BsChatDots className="h-4 w-4 text-[#4F46E5]" />
        <h2 className="text-[10px] font-semibold uppercase tracking-wide text-[#5B5B65]">
          Live Transcript
        </h2>
      </div>

      <div className="mt-4 flex-1 space-y-5 overflow-y-auto pr-1">
        {transcript.map((line, i) => {
          const isMentor = line.role === "mentor";
          return (
            <div
              key={i}
              className={`flex gap-2.5 ${isMentor ? "flex-row" : "flex-row-reverse"}`}
            >
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  isMentor ? "bg-[#F5F5F7] text-[#4F46E5]" : "bg-[#4F46E5] text-white"
                }`}
              >
                {isMentor ? (
                  <BsRobot className="h-3.5 w-3.5" />
                ) : (
                  <BsPerson className="h-3.5 w-3.5" />
                )}
              </div>

              <div className={`max-w-[85%] ${isMentor ? "" : "text-right"}`}>
                <div className={`mb-1 flex items-center gap-1.5 ${isMentor ? "" : "justify-end"}`}>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wide ${
                      isMentor ? "text-[#5B5B65]" : "text-[#4F46E5]"
                    }`}
                  >
                    {isMentor ? "InterviewAI" : "You"}
                  </span>
                  {"speaking" in line && line.speaking && (
                    <span className="flex items-center gap-1 text-[10px] font-medium text-[#4F46E5]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4F46E5]" />
                      speaking...
                    </span>
                  )}
                </div>
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    isMentor
                      ? "rounded-tl-sm border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] text-[#0A0A0A]"
                      : "rounded-tr-sm bg-[#4F46E5] text-white shadow-sm"
                  }`}
                >
                  {line.text}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
