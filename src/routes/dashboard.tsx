import { createFileRoute } from "@tanstack/react-router";
import DailyChallengeCard from "@/components/dashboard/DailyChallengeCard";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FocusAreasCard from "@/components/dashboard/FocusAreasCard";
import RecentInterviewsTable from "@/components/dashboard/RecentInterviewsTable";
import SkillRadarChart from "@/components/dashboard/SkillRadarChart";
import StatCard from "@/components/dashboard/StatCard";
import WeeklyProgressChart from "@/components/dashboard/WeeklyProgressChart";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          <StatCard label="Total Interviews" value="32" trend="+4" trendUp />
          <StatCard label="Avg Score" value="84%" trend="+2%" trendUp />
          <StatCard label="Technical" value="88/100" />
          <StatCard label="Communication" value="76/100" />
          <StatCard label="English" value="C1" />
          <StatCard label="Confidence" value="High" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <WeeklyProgressChart />
          </div>
          <SkillRadarChart />
        </div>

        <RecentInterviewsTable />

        <div className="grid gap-6 md:grid-cols-2">
          <DailyChallengeCard />
          <FocusAreasCard />
        </div>
      </div>
    </DashboardLayout>
  );
}
