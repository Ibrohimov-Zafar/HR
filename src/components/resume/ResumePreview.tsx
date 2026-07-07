import { dashCard } from "@/components/dashboard/shared";

export default function ResumePreview() {
  return (
    <div className={`${dashCard}`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-editorial text-xl tracking-[-0.03em] text-[#0A0A0A]">Resume Preview</h2>
          <p className="mt-1 text-sm text-[#5B5B65]">zafar_ibragimov_resume.pdf</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          Parsed
        </span>
      </div>

      <div className="mt-5 space-y-4 rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F5F5F7] p-5 text-sm">
        <div>
          <p className="font-editorial text-lg text-[#0A0A0A]">Zafar Ibragimov</p>
          <p className="text-[#5B5B65]">Full Stack Engineer · Tashkent, Uzbekistan</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[#5B5B65]">Experience</p>
          <p className="mt-1 font-medium text-[#0A0A0A]">Senior Software Engineer — TechCorp</p>
          <p className="text-[#5B5B65]">2022 – Present · Led microservices migration</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[#5B5B65]">Education</p>
          <p className="mt-1 text-[#0A0A0A]">B.S. Computer Science — TUIT</p>
        </div>
      </div>
    </div>
  );
}
