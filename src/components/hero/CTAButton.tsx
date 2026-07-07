import { motion } from "framer-motion";

type CTAButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

export default function CTAButton({
  children,
  variant = "primary",
  className = "",
  ariaLabel,
  onClick,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-[#111111] text-white hover:bg-[#0A0A0A]",
    outline:
      "border border-[rgba(0,0,0,0.08)] bg-white text-[#0A0A0A] hover:bg-[#F5F5F7]",
  };

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
