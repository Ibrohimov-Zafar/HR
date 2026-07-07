import { motion } from "framer-motion";

const HERO_IMAGE_URL =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_video_head.mp4?utm_source=chatgpt.com";

export default function HeroVideo() {
  return (
    <div className="relative mx-auto mt-6 w-full max-w-[640px] overflow-hidden md:mt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-40 blur-[80px] sm:h-[420px] sm:w-[420px] sm:blur-[90px] md:h-[600px] md:w-[600px] md:blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="relative w-full"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
        }}
      >
        <div className="aspect-[640/594] w-full overflow-hidden bg-[#F5F5F7]">
          <video
            className="h-full w-full object-cover mix-blend-darken"
            autoPlay
            muted
            loop
            playsInline
            aria-label="InterviewAI product demonstration"
          >
            <source src={HERO_IMAGE_URL} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
}
