import { Link, useRouterState } from "@tanstack/react-router";
import {
  BsBoxArrowRight,
  BsClockHistory,
  BsCodeSlash,
  BsFileEarmarkText,
  BsGear,
  BsGithub,
  BsGraphUp,
  BsGrid,
  BsMic,
  BsQuestionCircle,
  BsX,
} from "react-icons/bs";
import CTAButton from "@/components/hero/CTAButton";
import BrandIcon from "@/components/BrandIcon";

const navItems = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: BsGrid,
    activeWhen: (pathname: string) => pathname === "/dashboard",
  },
  {
    to: "/interview",
    label: "Interview",
    icon: BsMic,
    activeWhen: (pathname: string) => pathname.startsWith("/interview"),
  },
  {
    to: "/technical",
    label: "Practice",
    icon: BsCodeSlash,
    activeWhen: (pathname: string) => pathname.startsWith("/technical"),
  },
  {
    to: "/history",
    label: "History",
    icon: BsClockHistory,
    activeWhen: (pathname: string) => pathname.startsWith("/history"),
  },
  {
    to: "/resume",
    label: "Resume",
    icon: BsFileEarmarkText,
    activeWhen: (pathname: string) => pathname.startsWith("/resume"),
  },
  {
    to: "/github",
    label: "GitHub",
    icon: BsGithub,
    activeWhen: (pathname: string) => pathname.startsWith("/github"),
  },
  {
    to: "/analytics",
    label: "Analytics",
    icon: BsGraphUp,
    activeWhen: (pathname: string) => pathname.startsWith("/analytics"),
  },
  {
    to: "/settings",
    label: "Settings",
    icon: BsGear,
    activeWhen: (pathname: string) => pathname.startsWith("/settings"),
  },
] as const;

type DashboardSidebarProps = {
  onNavigate?: () => void;
  onClose?: () => void;
};

export default function DashboardSidebar({ onNavigate, onClose }: DashboardSidebarProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col overflow-hidden border-r border-[rgba(0,0,0,0.08)] bg-white">
      <div className="flex h-16 items-center justify-between gap-2 border-b border-[rgba(0,0,0,0.08)] px-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 text-lg font-medium text-[#0A0A0A]"
          onClick={onNavigate}
        >
          <BrandIcon />
          <span className="truncate">InterviewAI</span>
        </Link>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,0,0,0.08)] text-[#5B5B65] transition-colors hover:bg-[#F5F5F7] hover:text-[#0A0A0A]"
            aria-label="Close sidebar"
          >
            <BsX className="h-4 w-4" />
          </button>
        )}
      </div>

      <nav aria-label="Dashboard" className="flex-1 space-y-1 overflow-y-auto p-4">
        {navItems.map(({ to, label, icon: Icon, activeWhen }) => {
          const highlighted = activeWhen(pathname);
          return (
            <Link
              key={label}
              to={to}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                highlighted
                  ? "bg-[#4F46E5] text-white"
                  : "text-[#5B5B65] hover:bg-[#F5F5F7] hover:text-[#0A0A0A]"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="shrink-0 space-y-3 border-t border-[rgba(0,0,0,0.08)] p-4">
        <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] p-4">
          <p className="text-sm font-medium text-[#0A0A0A]">Ready to level up?</p>
          <p className="mt-1 text-xs text-[#5B5B65]">Unlock unlimited mock interviews.</p>
          <CTAButton className="mt-3 w-full !px-4 !py-2.5 !text-xs" ariaLabel="Upgrade to Pro">
            Upgrade to Pro
          </CTAButton>
        </div>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-[#5B5B65] hover:text-[#0A0A0A]">
          <BsQuestionCircle className="h-4 w-4" /> Help
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-[#5B5B65] hover:text-[#0A0A0A]">
          <BsBoxArrowRight className="h-4 w-4" /> Logout
        </a>
      </div>
    </aside>
  );
}
