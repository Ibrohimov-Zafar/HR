import { useState } from "react";
import { BsGithub, BsLightning, BsLink45Deg, BsPencil, BsRobot } from "react-icons/bs";
import CTAButton from "@/components/hero/CTAButton";
import { dashCard } from "@/components/dashboard/shared";
import { SettingsSectionHeader } from "./SettingsNav";

const focusAreas = [
  "System Design",
  "Algorithms",
  "Concurrency",
  "Behavioral",
  "Data Structures",
] as const;

export default function ProfileSettings() {
  const [tone, setTone] = useState<"casual" | "formal">("formal");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [focus, setFocus] = useState<string[]>(["System Design", "Algorithms", "Concurrency"]);
  const [coaching, setCoaching] = useState(true);

  const toggleFocus = (area: string) => {
    setFocus((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    );
  };

  return (
    <div className="space-y-6">
      <section className={`${dashCard} p-6 md:p-8`}>
        <SettingsSectionHeader
          title="Public Profile"
          description="Manage how you appear to mentors and potential recruiters."
        />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="relative shrink-0">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zafar"
              alt="Avatar"
              className="h-24 w-24 rounded-2xl border border-[rgba(0,0,0,0.08)] object-cover"
            />
            <button type="button" aria-label="Edit avatar" className="absolute -right-2 -bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#4F46E5] text-white shadow-md">
              <BsPencil className="h-3.5 w-3.5" />
            </button>
          </div>
          <div>
            <p className="text-sm font-medium text-[#0A0A0A]">Avatar</p>
            <p className="mt-1 text-xs text-[#5B5B65]">JPG, GIF or PNG. Max size 2MB</p>
            <div className="mt-3 flex gap-2">
              <button type="button" className="rounded-lg border border-[rgba(0,0,0,0.08)] px-4 py-2 text-xs font-medium text-[#0A0A0A] hover:bg-[#F5F5F7]">Upload new</button>
              <button type="button" className="px-4 py-2 text-xs font-medium text-red-600 hover:opacity-80">Remove</button>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">Full Name</span>
            <input type="text" defaultValue="Zafar Ibragimov" className="w-full rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-4 py-2.5 text-sm text-[#0A0A0A] outline-none focus:border-[#4F46E5]/40" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">Email Address</span>
            <input type="email" defaultValue="zafar@example.com" className="w-full rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-4 py-2.5 text-sm text-[#0A0A0A] outline-none focus:border-[#4F46E5]/40" />
          </label>
        </div>
        <label className="mt-4 block">
          <span className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">Bio</span>
          <textarea rows={4} defaultValue="Full Stack Engineer passionate about distributed systems, interview prep, and building AI-powered developer tools." className="w-full resize-none rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-4 py-3 text-sm leading-relaxed text-[#0A0A0A] outline-none focus:border-[#4F46E5]/40" />
        </label>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">LinkedIn Profile</span>
            <div className="relative">
              <BsLink45Deg className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#5B5B65]" />
              <input type="url" defaultValue="linkedin.com/in/zafar" className="w-full rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] py-2.5 pr-4 pl-10 text-sm text-[#0A0A0A] outline-none focus:border-[#4F46E5]/40" />
            </div>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">GitHub Profile</span>
            <div className="relative">
              <BsGithub className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#5B5B65]" />
              <input type="url" defaultValue="github.com/alex_codes_fast" className="w-full rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] py-2.5 pr-4 pl-10 text-sm text-[#0A0A0A] outline-none focus:border-[#4F46E5]/40" />
            </div>
          </label>
        </div>
        <div className="mt-8 flex justify-end">
          <CTAButton ariaLabel="Save profile changes">Save Changes</CTAButton>
        </div>
      </section>

      <section className={`${dashCard} p-6 md:p-8`}>
        <SettingsSectionHeader title="AI Mentor Tuning" description="Customize how your AI mentor behaves during mock interviews." icon={BsRobot} />
        <div className="space-y-8">
          <div>
            <p className="mb-3 text-sm font-medium text-[#0A0A0A]">Mentor&apos;s Tone</p>
            <div className="inline-flex rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] p-1">
              {(["casual", "formal"] as const).map((t) => (
                <button key={t} type="button" onClick={() => setTone(t)} className={`rounded-lg px-5 py-2 text-sm font-medium capitalize transition-colors ${tone === t ? "bg-white text-[#0A0A0A] shadow-sm" : "text-[#5B5B65]"}`}>{t}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium text-[#0A0A0A]">Base Difficulty Level</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { id: "easy" as const, label: "Easy", desc: "Entry Level & Fundamentals", color: "emerald" },
                { id: "medium" as const, label: "Medium", desc: "Standard SWE Roles", color: "indigo" },
                { id: "hard" as const, label: "Hard", desc: "Senior & Tech Lead", color: "red" },
              ].map(({ id, label, desc, color }) => (
                <button key={id} type="button" onClick={() => setDifficulty(id)} className={`rounded-xl border p-4 text-left transition-colors ${difficulty === id ? "border-[#4F46E5] bg-[#4F46E5]/5" : "border-[rgba(0,0,0,0.08)] bg-white hover:border-[rgba(0,0,0,0.14)]"}`}>
                  <p className={`text-sm font-medium ${color === "emerald" ? "text-emerald-700" : color === "red" ? "text-red-700" : "text-[#4F46E5]"}`}>{label}</p>
                  <p className="mt-1 text-xs text-[#5B5B65]">{desc}</p>
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium text-[#0A0A0A]">Interview Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => {
                const selected = focus.includes(area);
                return (
                  <button key={area} type="button" onClick={() => toggleFocus(area)} className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${selected ? "border-[#4F46E5]/30 bg-[#4F46E5]/10 text-[#4F46E5]" : "border-[rgba(0,0,0,0.08)] bg-white text-[#5B5B65] hover:text-[#0A0A0A]"}`}>
                    {selected ? "✓ " : ""}{area}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] p-4">
            <div className="flex items-start gap-3">
              <BsLightning className="mt-0.5 h-5 w-5 shrink-0 text-[#4F46E5]" />
              <div>
                <p className="text-sm font-medium text-[#0A0A0A]">Real-time Coaching</p>
                <p className="mt-1 text-xs text-[#5B5B65]">Get live hints and feedback during your mock interviews.</p>
              </div>
            </div>
            <button type="button" role="switch" aria-checked={coaching} onClick={() => setCoaching((v) => !v)} className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${coaching ? "bg-[#4F46E5]" : "bg-[#D1D5DB]"}`}>
              <span className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${coaching ? "translate-x-5" : ""}`} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
