import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import CTAButton from "./CTAButton";
import BrandIcon from "@/components/BrandIcon";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#companies", label: "Companies" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 w-full border-b border-[rgba(0,0,0,0.08)] bg-[#F5F5F7]/80 backdrop-blur-md"
      >
        <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px]">
          <a href="#" className="flex min-w-0 items-center gap-2 text-lg font-medium text-[#0A0A0A] sm:text-xl">
            <BrandIcon />
            <span className="truncate">InterviewAI</span>
          </a>

          <nav
            aria-label="Main navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="group relative text-sm font-medium text-[#5B5B65] transition-colors hover:text-[#0A0A0A]"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#0A0A0A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#sign-in"
              className="text-sm font-medium text-[#0A0A0A] transition-opacity hover:opacity-70"
            >
              Sign In
            </a>
            <Link to="/dashboard">
              <CTAButton variant="outline" className="!px-5 !py-2.5 !text-sm" ariaLabel="Get started">
                Get Started
              </CTAButton>
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center text-[#0A0A0A] md:hidden"
          >
            {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex w-full flex-col overflow-y-auto bg-[#F5F5F7] px-4 pt-24 sm:px-6 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-8">
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-[#0A0A0A]"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="mt-12 flex flex-col gap-4">
              <a
                href="#sign-in"
                onClick={() => setMobileOpen(false)}
                className="text-center text-base font-medium text-[#5B5B65]"
              >
                Sign In
              </a>
              <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                <CTAButton className="w-full !py-5 !text-base" ariaLabel="Get started">
                  Get Started
                </CTAButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
