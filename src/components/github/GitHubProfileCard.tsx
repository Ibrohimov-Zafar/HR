import { BsGithub, BsGeoAlt, BsLink45Deg } from "react-icons/bs";
import { dashCard } from "@/components/dashboard/shared";

export default function GitHubProfileCard() {
  return (
    <div className={`${dashCard}`}>
      <div className="flex items-start gap-4">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex_codes"
          alt="GitHub avatar"
          className="h-20 w-20 rounded-2xl border border-[rgba(0,0,0,0.08)]"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h2 className="font-editorial text-2xl tracking-[-0.03em] text-[#0A0A0A]">
              alex_codes_fast
            </h2>
            <BsGithub className="h-5 w-5 text-[#5B5B65]" />
          </div>
          <p className="mt-1 text-sm text-[#5B5B65]">Full Stack Engineer · Open source contributor</p>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-[#5B5B65]">
            <span className="flex items-center gap-1">
              <BsGeoAlt className="h-3.5 w-3.5" /> Tashkent
            </span>
            <span className="flex items-center gap-1">
              <BsLink45Deg className="h-3.5 w-3.5" /> github.com/alex_codes_fast
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        {[
          { label: "Repos", value: "42" },
          { label: "Stars", value: "318" },
          { label: "Contributions", value: "1.2k" },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl bg-[#F5F5F7] px-3 py-3">
            <p className="font-editorial text-xl text-[#0A0A0A]">{value}</p>
            <p className="text-xs text-[#5B5B65]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
