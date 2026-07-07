import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CareerTrajectory from "@/components/resume/CareerTrajectory";
import DetectedSkills from "@/components/resume/DetectedSkills";
import ResumeInsights from "@/components/resume/ResumeInsights";
import ResumePreview from "@/components/resume/ResumePreview";
import ResumeUpload from "@/components/resume/ResumeUpload";
import TailoredQuestions from "@/components/resume/TailoredQuestions";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
});

function ResumePage() {
  return (
    <DashboardLayout hideHeader>
      <div className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <ResumeUpload />
          <ResumePreview />
        </div>

        <DetectedSkills />

        <div className="grid gap-6 lg:grid-cols-2">
          <CareerTrajectory />
          <ResumeInsights />
        </div>

        <TailoredQuestions />
      </div>
    </DashboardLayout>
  );
}
