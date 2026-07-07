import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useIsMobile } from "@/hooks/use-mobile";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

function SidebarToggleButton({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.08)] bg-white text-[#0A0A0A] shadow-sm transition-colors hover:bg-[#F5F5F7] ${className}`}
      aria-label="Open sidebar"
    >
      <HiMenu className="h-5 w-5" />
    </button>
  );
}

export default function DashboardLayout({
  children,
  hideHeader = false,
  mainClassName,
}: {
  children: React.ReactNode;
  hideHeader?: boolean;
  mainClassName?: string;
}) {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  const sidebarOpen = isMobile ? mobileOpen : desktopOpen;

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen((open) => !open);
      return;
    }
    setDesktopOpen((open) => !open);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F5F5F7] text-[#0A0A0A]">
      <div
        className={`fixed inset-y-0 left-0 z-30 hidden w-64 transition-transform duration-300 ease-out lg:block ${
          desktopOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DashboardSidebar onToggle={toggleSidebar} />
      </div>

      {!sidebarOpen && (
        <SidebarToggleButton
          onClick={toggleSidebar}
          className="fixed left-3 top-3 z-40 lg:left-4 lg:top-4"
        />
      )}

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close sidebar"
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative h-full w-64 overflow-hidden shadow-xl">
            <DashboardSidebar
              onNavigate={() => setMobileOpen(false)}
              onToggle={toggleSidebar}
            />
          </div>
        </div>
      )}

      <div
        className={`flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden transition-[margin] duration-300 ease-out ${
          desktopOpen ? "lg:ml-64" : "lg:ml-0"
        }`}
      >
        {!hideHeader && <DashboardHeader />}
        <main
          className={`flex-1 overflow-x-hidden overflow-y-auto ${
            mainClassName ??
            (hideHeader ? "px-3 py-4 md:px-5 md:py-5" : "p-3 sm:p-4 md:p-6")
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
