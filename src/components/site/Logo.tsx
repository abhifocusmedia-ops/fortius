import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Original Fortius logo used in the site header and mobile menu. */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={img.logoWordmark}
      alt="Fortius Sports Academy"
      className={cn("block h-auto w-auto object-contain", className)}
    />
  );
}
