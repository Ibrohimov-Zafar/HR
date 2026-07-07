import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import InterviewSetupForm from "@/components/interview/InterviewSetupForm";
import { InterviewTypeCard, interviewTypes, type InterviewTypeId } from "@/components/interview/InterviewTypeGrid";

export const Route = createFileRoute("/interview/")({
  component: InterviewSelectPage,
});

function InterviewSelectPage() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<InterviewTypeId | null>(null);
  const [step, setStep] = useState<"select" | "setup">("select");

  useEffect(() => {
    void import("@/components/HeroBlob");
  }, []);

  const handleSelect = (id: InterviewTypeId) => {
    setSelectedId(id);
    setStep("setup");
  };

  return (
    <DashboardLayout hideHeader>
      <div className="mx-auto max-w-5xl space-y-6 pb-8">
        <div>
          <h1 className="font-editorial text-3xl tracking-[-0.04em] text-[#0A0A0A] md:text-4xl">
            Choose Your Interview
          </h1>
          <p className="mt-1 text-sm text-[#5B5B65]">
            Select an IT role to practice. You&apos;ll configure your level before starting.
          </p>
        </div>

        {step === "select" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {interviewTypes.map((type) => (
              <InterviewTypeCard
                key={type.id}
                type={type}
                selected={selectedId === type.id}
                onSelect={() => handleSelect(type.id)}
              />
            ))}
          </div>
        )}

        {step === "setup" && selectedId && (
          <InterviewSetupForm
            typeId={selectedId}
            onBack={() => setStep("select")}
            onStart={({ level, years, experience }) => {
              navigate({
                to: "/interview/session",
                search: {
                  type: selectedId,
                  level,
                  years,
                  experience,
                },
              });
            }}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
