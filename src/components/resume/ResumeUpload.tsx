import { BsCloudUpload } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

export default function ResumeUpload() {
  return (
    <div className={`${dashCard}`}>
      <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Upload Resume</h2>
      <p className="mt-1 text-sm text-[#5B5B65]">PDF or DOCX · Max 5MB</p>

      <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[rgba(0,0,0,0.12)] bg-[#F5F5F7] px-6 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F46E5]/10 text-[#4F46E5]">
          <BsCloudUpload className="h-7 w-7" />
        </div>
        <p className="mt-4 text-sm font-medium text-[#0A0A0A]">
          Drag & drop your resume here
        </p>
        <p className="mt-1 text-xs text-[#5B5B65]">or click to browse files</p>
        <button
          type="button"
          className="mt-5 rounded-xl bg-[#0A0A0A] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1a1a1a]"
        >
          Choose File
        </button>
      </div>
    </div>
  );
}
