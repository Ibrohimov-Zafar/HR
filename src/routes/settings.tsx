import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AISettings from "@/components/settings/AISettings";
import ProfileSettings from "@/components/settings/ProfileSettings";
import SettingsNav, { type SettingsTabId } from "@/components/settings/SettingsNav";
import { dashCard } from "@/components/dashboard/shared";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

function PlaceholderTab({ title }: { title: string }) {
  return (
    <div className={`${dashCard} p-8 text-center`}>
      <p className="font-editorial text-xl text-[#0A0A0A]">{title}</p>
      <p className="mt-2 text-sm text-[#5B5B65]">Coming soon.</p>
    </div>
  );
}

function SettingsPage() {
  const [tab, setTab] = useState<SettingsTabId>("profile");

  return (
    <DashboardLayout hideHeader>
      <div className="w-full space-y-4 pb-6 sm:space-y-6">
        <SettingsNav active={tab} onChange={setTab} />
        <div className="min-w-0">
          {tab === "profile" && <ProfileSettings />}
          {tab === "ai" && <AISettings />}
          {tab === "subscription" && <PlaceholderTab title="Subscription" />}
          {tab === "security" && <PlaceholderTab title="Security & Access" />}
        </div>
      </div>
    </DashboardLayout>
  );
}
