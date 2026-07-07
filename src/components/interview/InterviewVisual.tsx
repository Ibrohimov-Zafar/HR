import { Suspense, lazy } from "react";
import { CssBlob } from "@/components/CssBlob";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroBlob = lazy(() => import("@/components/HeroBlob"));

function AudioBars() {
  return (
    <div className="flex h-5 items-end justify-center gap-[3px]">
      {[3, 5, 8, 5, 10, 6, 4, 7, 3].map((h, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-[#4F46E5]/60"
          style={{ height: `${h * 2}px` }}
        />
      ))}
    </div>
  );
}

function BlobVisual() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <CssBlob />;
  }

  return (
    <Suspense fallback={<CssBlob />}>
      <HeroBlob fallback={<CssBlob />} />
    </Suspense>
  );
}

export default function InterviewVisual() {
  return (
    <div className="relative flex h-full min-h-[280px] w-full flex-col items-center justify-start pt-6 md:pt-10">
      <div className="flex flex-col items-center">
        <div className="h-[240px] w-[240px] md:h-[300px] md:w-[300px] lg:h-[340px] lg:w-[340px]">
          <BlobVisual />
        </div>

        <div className="mt-2 flex items-center gap-1.5 rounded-full border border-[rgba(0,0,0,0.08)] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#5B5B65] shadow-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Listening
        </div>

        <div className="mt-3">
          <AudioBars />
        </div>
      </div>
    </div>
  );
}
