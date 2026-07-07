import { BsClock, BsCodeSlash } from "react-icons/bs";

export default function TechnicalHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <BsCodeSlash className="h-5 w-5 text-[#4F46E5]" />
          <h1 className="font-editorial text-2xl tracking-[-0.03em] text-[#0A0A0A] md:text-3xl">
            Technical Round
          </h1>
        </div>
        <p className="mt-1 text-sm text-[#5B5B65]">Two Sum · Easy · Arrays & Hashing</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 rounded-full border border-[rgba(0,0,0,0.08)] bg-white px-3 py-1.5 text-sm text-[#5B5B65]">
          <BsClock className="h-3.5 w-3.5" />
          28:14 remaining
        </span>
        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
          2 / 3 test cases passed
        </span>
      </div>
    </div>
  );
}
