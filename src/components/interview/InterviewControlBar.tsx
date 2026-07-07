import { Link } from "@tanstack/react-router";
import { BsFlag, BsMic, BsPause, BsThreeDots, BsTelephoneX } from "react-icons/bs";

export default function InterviewControlBar() {
  return (
    <div className="flex justify-center pb-1 pt-2">
      <div className="inline-flex items-center gap-1 rounded-full border border-[rgba(0,0,0,0.08)] bg-white px-2 py-1.5 shadow-md">
        <button
          type="button"
          aria-label="Mute"
          className="flex flex-col items-center gap-0.5 rounded-full px-3 py-1 text-[#5B5B65] hover:bg-[#F5F5F7] hover:text-[#0A0A0A]"
        >
          <BsMic className="h-4 w-4" />
          <span className="text-[9px] font-medium">Mute</span>
        </button>

        <button
          type="button"
          aria-label="Pause"
          className="flex flex-col items-center gap-0.5 rounded-full px-3 py-1 text-[#5B5B65] hover:bg-[#F5F5F7] hover:text-[#0A0A0A]"
        >
          <BsPause className="h-4 w-4" />
          <span className="text-[9px] font-medium">Pause</span>
        </button>

        <Link
          to="/technical"
          aria-label="End session"
          className="mx-1 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-sm hover:bg-red-600"
        >
          <BsTelephoneX className="h-4 w-4" />
        </Link>

        <button
          type="button"
          aria-label="Report"
          className="flex flex-col items-center gap-0.5 rounded-full px-3 py-1 text-[#5B5B65] hover:bg-[#F5F5F7] hover:text-[#0A0A0A]"
        >
          <BsFlag className="h-4 w-4" />
          <span className="text-[9px] font-medium">Report</span>
        </button>

        <button
          type="button"
          aria-label="More options"
          className="flex flex-col items-center gap-0.5 rounded-full px-3 py-1 text-[#5B5B65] hover:bg-[#F5F5F7] hover:text-[#0A0A0A]"
        >
          <BsThreeDots className="h-4 w-4" />
          <span className="text-[9px] font-medium">More</span>
        </button>
      </div>
    </div>
  );
}
