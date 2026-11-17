import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

/** Inner-page hero: navy stage, light split headline, framed photo with layered motion. */
export function PageHero({
  eyebrow, lines, intro, image, children, tall = false, position = "center",
}: {
  eyebrow: string; lines: string[]; intro?: ReactNode; image: string; children?: ReactNode;
  align?: "bottom" | "center"; tall?: boolean; position?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const last = lines.length - 1;
  let w = 0;

  return (
    <section ref={ref} className={cn("relative isolate overflow-hidden bg-ink text-paper", tall ? "min-h-[92svh]" : "min-h-[72svh]")}>
      {/* glow blobs */}
      <motion.div aria-hidden className="absolute -left-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-navy blur-3xl"
        animate={reduce ? {} : { x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden className="absolute -bottom-40 right-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-volt/15 blur-3xl"
        animate={reduce ? {} : { x: [0, -50, 0], y: [0, -20, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      {/* animated court lines */}
      <svg aria-hidden viewBox="0 0 600 400" className="absolute inset-y-0 left-0 -z-10 h-full w-2/3 text-paper/[0.06]" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.5">
        {["M20 20H580V380H20Z", "M300 20V380", "M20 200H580", "M120 20V380", "M480 20V380"].map((d, i) => (
          <motion.path key={d} d={d} initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 + i * 0.15, duration: 1.6, ease }} />
        ))}
      </svg>

      <div className={cn("container-x grid items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16", tall ? "min-h-[92svh]" : "min-h-[72svh]")}>
        <div>
          <motion.p initial={reduce ? false : { opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease }}
            className="eyebrow inline-flex items-center gap-2 rounded-full bg-paper/5 px-4 py-2 text-volt ring-1 ring-paper/15 backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-70" /><span className="relative h-2 w-2 rounded-full bg-volt" /></span>
            {eyebrow}
          </motion.p>
          <h1 className="mt-7 font-display text-[clamp(2.4rem,5.4vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.035em]">
            {lines.map((line, li) => (
              <span key={li} className={cn("block", li === last && lines.length > 1 && "editorial text-volt")}>
                {line.split(" ").map((word) => {
                  const i = w++;
                  return (
                    <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                      <motion.span className="inline-block"
                        initial={reduce ? false : { y: "110%", rotate: 6, filter: "blur(6px)" }}
                        animate={{ y: "0%", rotate: 0, filter: "blur(0px)" }}
                        transition={{ delay: 0.15 + i * 0.06, duration: 0.9, ease }}>
                        {word}&nbsp;
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
          {intro && (
            <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
              {intro}
            </motion.div>
          )}
          {children && (
            <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7 }} className="mt-9 flex flex-wrap gap-3">
              {children}
            </motion.div>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div aria-hidden initial={reduce ? false : { opacity: 0, rotate: 0 }} animate={{ opacity: 1, rotate: 6 }} transition={{ delay: 0.3, duration: 1.2, ease }}
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-volt" />
          <motion.div initial={reduce ? false : { clipPath: "inset(100% 0 0 0 round 2rem)" }} animate={{ clipPath: "inset(0% 0 0 0 round 2rem)" }} transition={{ delay: 0.2, duration: 1.2, ease }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-paper/10 lg:aspect-[5/6]">
            <motion.img src={image} alt="" style={{ objectPosition: position, y: reduce ? 0 : imgY }}
              initial={reduce ? false : { scale: 1.25 }} animate={{ scale: 1.12 }} transition={{ duration: 1.8, ease }}
              className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </motion.div>
          <motion.div initial={reduce ? false : { scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1, type: "spring", stiffness: 160, damping: 14 }}
            className="absolute -left-5 bottom-10 grid h-24 w-24 place-items-center rounded-full bg-navy text-volt shadow-2xl ring-4 ring-ink">
            <motion.svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" animate={reduce ? {} : { rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}>
              <defs><path id="ph-circle" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1 -72 0" /></defs>
              <text className="fill-current text-[10px] font-semibold uppercase tracking-[0.3em]"><textPath href="#ph-circle">Fortius • Atlanta • Fortius •</textPath></text>
            </motion.svg>
            <span className="font-display text-2xl font-semibold">F</span>
          </motion.div>
        </div>
      </div>
      <motion.div aria-hidden initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 1.2, ease }} className="absolute bottom-0 left-0 h-1.5 w-full origin-left bg-gradient-to-r from-volt via-volt/60 to-transparent" />
    </section>
  );
}

export function SectionHead({ index, eyebrow, title, intro, dark = false, className }: { index?: string; eyebrow: string; title: ReactNode; intro?: ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end", className)}>
      <div>
        <p className={cn("eyebrow flex items-center gap-3", dark ? "text-volt" : "text-navy")}>
          {index && <span className={dark ? "text-paper/40" : "text-stone"}>{index}</span>}
          <span className={cn("h-px w-8", dark ? "bg-volt" : "bg-navy")} />
          {eyebrow}
        </p>
        <h2 className="display-lg mt-6">{title}</h2>
      </div>
      {intro && <div className={cn("lede max-w-xl lg:justify-self-end", dark ? "text-paper/65" : "text-muted-foreground")}>{intro}</div>}
    </div>
  );
}
