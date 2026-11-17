import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-3 whitespace-nowrap font-sans text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-all duration-500 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        volt: "bg-volt text-volt-foreground hover:bg-paper",
        solid: "bg-navy text-paper hover:bg-ink",
        light: "bg-paper text-onyx hover:bg-volt",
        ghostLight: "border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-onyx",
        ghostDark: "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-paper",
        text: "px-0 py-0 text-current",
      },
      size: { md: "h-12 px-6", lg: "h-14 px-8", sm: "h-10 px-4 text-[0.7rem]" },
    },
    compoundVariants: [{ variant: "text", class: "h-auto px-0" }],
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type Props = VariantProps<typeof ctaVariants> & { children: ReactNode; className?: string; arrow?: boolean } & (
    | { to: string; href?: never }
    | { href: string; to?: never }
  );

export function Cta({ children, variant, size, className, arrow = true, ...rest }: Props) {
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );
  const cls = cn(ctaVariants({ variant, size }), className);
  if ("href" in rest && rest.href) {
    const external = rest.href.startsWith("http");
    return (
      <a href={rest.href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={rest.to as string} className={cls}>
      {inner}
    </Link>
  );
}
