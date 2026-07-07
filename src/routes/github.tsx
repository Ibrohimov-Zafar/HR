import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CodeQuality from "@/components/github/CodeQuality";
import ContributionHeatmap from "@/components/github/ContributionHeatmap";
import GitHubProfileCard from "@/components/github/GitHubProfileCard";
import InterviewPrep from "@/components/github/InterviewPrep";
import TechStack from "@/components/github/TechStack";
import TopRepositories from "@/components/github/TopRepositories";

export const Route = createFileRoute("/github")({
  component: GitHubPage,
});

function GitHubPage() {
  return (
    <DashboardLayout hideHeader>
      <div className="space-y-6">
        <GitHubProfileCard />

        <div className="grid gap-6 lg:grid-cols-2">
          <TechStack />
          <CodeQuality />
        </div>

        <ContributionHeatmap />

        <div className="grid gap-6 lg:grid-cols-2">
          <TopRepositories />
          <InterviewPrep />
        </div>
      </div>
    </DashboardLayout>
  );
}
