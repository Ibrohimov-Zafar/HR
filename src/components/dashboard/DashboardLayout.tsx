import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useIsMobile } from "@/hooks/use-mobile";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

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

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen((open) => !open);
      return;
    }
    setDesktopOpen((open) => !open);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setMobileOpen(false);
      return;
    }
    setDesktopOpen(false);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F5F5F7] text-[#0A0A0A]">
      <div
        className={`fixed inset-y-0 left-0 z-30 hidden w-64 transition-transform duration-300 ease-out lg:block ${
          desktopOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DashboardSidebar onClose={closeSidebar} />
      </div>

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
              onClose={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}

      <div
        className={`flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden transition-[margin] duration-300 ease-out ${
          desktopOpen ? "lg:ml-64" : "lg:ml-0"
        }`}
      >
        {hideHeader ? (
          <div className="flex h-14 shrink-0 items-center border-b border-[rgba(0,0,0,0.08)] bg-white px-4">
            <button
              type="button"
              onClick={toggleSidebar}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.08)]"
              aria-label={mobileOpen || desktopOpen ? "Close sidebar" : "Open sidebar"}
              aria-expanded={mobileOpen || desktopOpen}
            >
              <HiMenu className="h-5 w-5" />
            </button>
            <span className="ml-3 truncate font-medium text-[#0A0A0A] lg:hidden">InterviewAI</span>
          </div>
        ) : (
          <DashboardHeader
            onMenuClick={toggleSidebar}
            sidebarOpen={desktopOpen || mobileOpen}
          />
        )}
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
