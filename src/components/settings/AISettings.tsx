import { useState } from "react";
import { BsChevronDown, BsGlobe, BsMic, BsSliders } from "react-icons/bs";
import CTAButton from "@/components/hero/CTAButton";
import { dashCard } from "@/components/dashboard/shared";
import { SettingsSectionHeader } from "./SettingsNav";

const personalities = [
  { id: "architect", label: "The Architect", desc: "Deep technical dives and system design focus." },
  { id: "hr", label: "The HR Specialist", desc: "Behavioral questions and culture fit assessment." },
  { id: "tech-lead", label: "The Tech Lead", desc: "Pragmatic, code-focused, and performance-oriented." },
] as const;

const voices = ["Alex — Deep & Professional", "Samantha — Warm & Encouraging", "Marcus — Direct & Analytical"] as const;
const feedbackLevels = ["Brief & Direct", "Balanced", "Deep Technical Analysis"] as const;
const interventions = [
  { id: "hints", label: "Real-time hints", defaultOn: true },
  { id: "typos", label: "Auto-correction on typos", defaultOn: false },
  { id: "time", label: "Time-limit alerts", defaultOn: true },
] as const;
const simulationModes = [
  { id: "stress", label: "Stress Interview" },
  { id: "whiteboard", label: "Whiteboard Challenge" },
  { id: "casual", label: "Casual Coffee Chat" },
] as const;
const languages = ["English (US)", "English (UK)", "Spanish", "German"] as const;
const accents = ["Neutral Professional", "American", "British", "Australian"] as const;

type PersonalityId = (typeof personalities)[number]["id"];
type FeedbackLevel = (typeof feedbackLevels)[number];
type SimulationId = (typeof simulationModes)[number]["id"];

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} onClick={() => onChange(!checked)} className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${checked ? "bg-[#4F46E5]" : "bg-[#D1D5DB]"}`}>
      <span className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-5" : ""}`} />
    </button>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: readonly string[] }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">{label}</span>
      <div className="relative">
        <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full appearance-none rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-4 py-2.5 pr-10 text-sm text-[#0A0A0A] outline-none focus:border-[#4F46E5]/40">
          {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <BsChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[#5B5B65]" />
      </div>
    </label>
  );
}

export default function AISettings() {
  const [personality, setPersonality] = useState<PersonalityId>("architect");
  const [voice, setVoice] = useState<string>(voices[0]);
  const [feedback, setFeedback] = useState<FeedbackLevel>("Balanced");
  const [toggles, setToggles] = useState(() =>
    Object.fromEntries(interventions.map(({ id, defaultOn }) => [id, defaultOn])) as Record<(typeof interventions)[number]["id"], boolean>,
  );
  const [simulation, setSimulation] = useState<SimulationId>("whiteboard");
  const [language, setLanguage] = useState<string>(languages[0]);
  const [accent, setAccent] = useState<string>(accents[0]);

  const setToggle = (id: (typeof interventions)[number]["id"], value: boolean) => {
    setToggles((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="space-y-6">
      <section className={`${dashCard} p-6 md:p-8`}>
        <SettingsSectionHeader title="Mentor Personality & Voice" description="Define the character and voice of your AI interviewer." icon={BsMic} />
        <div className="grid gap-3 md:grid-cols-3">
          {personalities.map(({ id, label, desc }) => (
            <button key={id} type="button" onClick={() => setPersonality(id)} className={`rounded-xl border p-4 text-left transition-colors ${personality === id ? "border-[#4F46E5] bg-[#4F46E5]/5" : "border-[rgba(0,0,0,0.08)] bg-white hover:border-[rgba(0,0,0,0.14)]"}`}>
              <p className="text-sm font-medium text-[#0A0A0A]">{label}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#5B5B65]">{desc}</p>
            </button>
          ))}
        </div>
        <div className="mt-6">
          <SelectField label="AI Voice Selection" value={voice} onChange={setVoice} options={voices} />
        </div>
      </section>

      <section className={`${dashCard} p-6 md:p-8`}>
        <SettingsSectionHeader title="Feedback & Intervention" description="Control how and when your AI mentor steps in during sessions." icon={BsSliders} />
        <div>
          <p className="mb-3 text-sm font-medium text-[#0A0A0A]">Feedback Granularity</p>
          <div className="inline-flex w-full flex-col gap-1 rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] p-1 sm:w-auto sm:flex-row">
            {feedbackLevels.map((level) => (
              <button key={level} type="button" onClick={() => setFeedback(level)} className={`rounded-lg px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${feedback === level ? "bg-white text-[#0A0A0A] shadow-sm" : "text-[#5B5B65] hover:text-[#0A0A0A]"}`}>{level}</button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <p className="mb-3 text-sm font-medium text-[#0A0A0A]">Live Intervention Level</p>
          <div className="space-y-2">
            {interventions.map(({ id, label }) => (
              <div key={id} className="flex items-center justify-between gap-4 rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] px-4 py-3">
                <span className="text-sm text-[#0A0A0A]">{label}</span>
                <Toggle checked={toggles[id]} onChange={(v) => setToggle(id, v)} label={label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${dashCard} p-6 md:p-8`}>
        <SettingsSectionHeader title="Simulation & Language" description="Configure interview format and localization preferences." icon={BsGlobe} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium text-[#0A0A0A]">Interview Simulation Mode</p>
            <div className="space-y-2">
              {simulationModes.map(({ id, label }) => (
                <button key={id} type="button" onClick={() => setSimulation(id)} className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${simulation === id ? "border-[#4F46E5] bg-[#4F46E5]/5" : "border-[rgba(0,0,0,0.08)] bg-white hover:border-[rgba(0,0,0,0.14)]"}`}>
                  <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${simulation === id ? "border-[#4F46E5]" : "border-[#D1D5DB]"}`}>
                    {simulation === id && <span className="h-2 w-2 rounded-full bg-[#4F46E5]" />}
                  </span>
                  <span className="text-sm text-[#0A0A0A]">{label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <SelectField label="Primary Language" value={language} onChange={setLanguage} options={languages} />
            <SelectField label="Accent Preference" value={accent} onChange={setAccent} options={accents} />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <CTAButton ariaLabel="Apply AI settings">Apply AI Settings</CTAButton>
        </div>
      </section>
    </div>
  );
}
