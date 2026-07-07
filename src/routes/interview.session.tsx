import { createFileRoute, redirect } from "@tanstack/react-router";
import SessionLayout from "@/components/layout/SessionLayout";
import InterviewChallengePanel from "@/components/interview/InterviewChallengePanel";
import InterviewControlBar from "@/components/interview/InterviewControlBar";
import InterviewHeader from "@/components/interview/InterviewHeader";
import InterviewVisual from "@/components/interview/InterviewVisual";
import LiveTranscript from "@/components/interview/LiveTranscript";
import { interviewTypes } from "@/components/interview/InterviewTypeGrid";
import { z } from "zod";

const sessionSearchSchema = z.object({
  type: z.string().optional(),
  level: z.string().optional(),
  years: z.string().optional(),
  experience: z.string().optional(),
});

export const Route = createFileRoute("/interview/session")({
  validateSearch: sessionSearchSchema,
  component: InterviewSessionPage,
  beforeLoad: ({ search }) => {
    if (!search.type) {
      throw redirect({ to: "/interview" });
    }
  },
});

function InterviewSessionPage() {
  const { type, level, years } = Route.useSearch();
  const interview = interviewTypes.find((t) => t.id === type);

  return (
    <SessionLayout>
      <div className="flex h-full flex-col overflow-x-hidden bg-[#F5F5F7] px-2 py-2 sm:px-3 sm:py-3 md:px-6 md:py-4">
        <InterviewHeader
          roleTitle={interview?.title}
          level={level}
          years={years}
        />

        <div className="grid min-h-0 flex-1 gap-5 pt-5 xl:grid-cols-[minmax(300px,360px)_1fr_minmax(300px,360px)] xl:gap-8 2xl:gap-12">
          <div className="hidden min-h-0 xl:block">
            <LiveTranscript />
          </div>

          <div className="relative flex min-h-0 flex-col">
            <div className="min-h-0 flex-1">
              <InterviewVisual />
            </div>
            <InterviewControlBar />
          </div>

          <div className="hidden min-h-0 xl:block">
            <InterviewChallengePanel />
          </div>
        </div>
      </div>
    </SessionLayout>
  );
}
