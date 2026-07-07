import { BsMicFill } from "react-icons/bs";

type BrandIconProps = {
  size?: "sm" | "md";
  className?: string;
};

const sizes = {
  sm: { box: "h-4 w-4 rounded-[5px]", icon: "h-2.5 w-2.5" },
  md: { box: "h-5 w-5 rounded-md", icon: "h-3 w-3" },
} as const;

export default function BrandIcon({ size = "md", className = "" }: BrandIconProps) {
  const { box, icon } = sizes[size];

  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center bg-[#4F46E5] text-white ${box} ${className}`}
    >
      <BsMicFill className={icon} />
    </span>
  );
}
