import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroVideo from "./HeroVideo";
import TrustIndicators from "./TrustIndicators";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#F5F5F7] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.div variants={itemVariants}>
          <HeroBadge />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 md:mt-10">
          <HeroHeading />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-[700px] text-base leading-relaxed text-[#5B5B65] sm:mt-8 sm:text-lg md:text-xl"
        >
          Master HR behavioral rounds, complex technical challenges, and large-scale system
          design. Your AI mentor provides real-time feedback just like a lead engineer at FAANG.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-6 w-full sm:mt-8">
          <CTAButton className="w-full sm:w-auto" ariaLabel="Get started free">
            Get Started Free
          </CTAButton>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
          <HeroVideo />
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
          <TrustIndicators />
        </motion.div>
      </motion.div>
    </section>
  );
}
