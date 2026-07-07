import { BsCreditCard, BsPerson, BsShield, BsStars } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

export const settingsTabs = [
  { id: "profile", label: "Profile", icon: BsPerson },
  { id: "ai", label: "AI Customization", icon: BsStars },
  { id: "subscription", label: "Subscription", icon: BsCreditCard },
  { id: "security", label: "Security", icon: BsShield },
] as const;

export type SettingsTabId = (typeof settingsTabs)[number]["id"];

type SettingsNavProps = {
  active: SettingsTabId;
  onChange: (tab: SettingsTabId) => void;
};

export default function SettingsNav({ active, onChange }: SettingsNavProps) {
  return (
    <nav
      aria-label="Settings"
      className={`${dashCard} grid w-full grid-cols-4 gap-1 p-1.5 sm:gap-1.5 sm:p-2`}
    >
      {settingsTabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2.5 text-[10px] font-medium transition-colors sm:flex-row sm:gap-2 sm:px-2 sm:text-xs md:px-3 md:text-sm ${
            active === id
              ? "bg-[#4F46E5] text-white"
              : "text-[#5B5B65] hover:bg-[#F5F5F7] hover:text-[#0A0A0A]"
          }`}
        >
          <Icon className="h-4 w-4 shrink-0" />
          <span className="truncate text-center leading-tight sm:text-left">
            {id === "ai" ? (
              <>
                <span className="md:hidden">AI</span>
                <span className="hidden md:inline">{label}</span>
              </>
            ) : id === "subscription" ? (
              <>
                <span className="md:hidden">Plan</span>
                <span className="hidden md:inline">{label}</span>
              </>
            ) : (
              label
            )}
          </span>
        </button>
      ))}
    </nav>
  );
}

export function SettingsSectionHeader({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5 text-[#4F46E5]" />}
        <h2 className="font-editorial text-2xl tracking-[-0.03em] text-[#0A0A0A]">{title}</h2>
      </div>
      <p className="mt-1 text-sm text-[#5B5B65]">{description}</p>
    </div>
  );
}
