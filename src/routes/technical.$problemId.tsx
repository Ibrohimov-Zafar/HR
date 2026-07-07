import { createFileRoute, redirect } from "@tanstack/react-router";
import SessionLayout from "@/components/layout/SessionLayout";
import PracticeEditorPanel from "@/components/practice/PracticeEditorPanel";
import PracticeMentorPanel from "@/components/practice/PracticeMentorPanel";
import PracticeProblemPanel from "@/components/practice/PracticeProblemPanel";
import PracticeTopBar from "@/components/practice/PracticeTopBar";
import { getProblemById, practiceProblems } from "@/components/practice/problems";
import { practiceBg } from "@/components/practice/shared";

export const Route = createFileRoute("/technical/$problemId")({
  component: PracticeSolvePage,
  beforeLoad: ({ params }) => {
    if (!getProblemById(params.problemId)) {
      throw redirect({ to: "/technical" });
    }
  },
});

function PracticeSolvePage() {
  const { problemId } = Route.useParams();
  const problem = getProblemById(problemId)!;
  const problemIndex = practiceProblems.findIndex((p) => p.id === problemId) + 1;
  const passedCount = problem.testCases.filter((t) => t.passed).length;

  return (
    <SessionLayout>
      <div className={`${practiceBg} flex h-full flex-col overflow-x-hidden`}>
        <PracticeTopBar
          problem={problem}
          problemIndex={problemIndex}
          totalProblems={practiceProblems.length}
          passedCount={passedCount}
          totalTests={problem.testCases.length}
        />

        <div className="grid min-h-0 flex-1 gap-4 px-3 pb-3 pt-4 md:gap-5 md:px-5 md:pb-5 lg:grid-cols-[minmax(280px,340px)_1fr_minmax(280px,320px)]">
          <div className="hidden min-h-0 lg:block">
            <PracticeProblemPanel problem={problem} />
          </div>

          <div className="min-h-0 overflow-hidden">
            <PracticeEditorPanel problem={problem} />
          </div>

          <div className="hidden min-h-0 lg:block">
            <PracticeMentorPanel problem={problem} />
          </div>
        </div>
      </div>
    </SessionLayout>
  );
}
