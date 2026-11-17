import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Wordmark rendered as a mask so it can take any brand colour. */
export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span
      role="img"
      aria-label="Fortius"
      className={cn("block aspect-[384/80]", tone === "light" ? "bg-paper" : "bg-navy", className)}
      style={{ WebkitMask: `url(${img.logoWordmark}) center/contain no-repeat`, mask: `url(${img.logoWordmark}) center/contain no-repeat` }}
    />
  );
}
