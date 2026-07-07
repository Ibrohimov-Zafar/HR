import { container } from "./shared";
import BrandIcon from "@/components/BrandIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] py-12">
      <div className={`${container} flex flex-col items-center justify-between gap-4 text-sm text-[#5B5B65] md:flex-row`}>
        <div className="flex items-center gap-2">
          <BrandIcon size="sm" />
          <span>© 2026 InterviewAI. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="transition-opacity hover:text-[#0A0A0A]">
            Privacy
          </a>
          <a href="#" className="transition-opacity hover:text-[#0A0A0A]">
            Terms
          </a>
          <a href="#" className="transition-opacity hover:text-[#0A0A0A]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
