import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { Program } from "@/data/coaching";
import { cn } from "@/lib/utils";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

/** Editorial expandable program index — numbered rows, one open at a time. */
export function ProgramIndex({ programs, enrollHref, dark = false }: { programs: Program[]; enrollHref: string; dark?: boolean }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {programs.map((p, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={p.name} delay={i * 0.04} className={cn("mb-3 rounded-2xl px-4 shadow-sm transition-colors md:px-6", dark ? "bg-paper/5 ring-1 ring-line-dark" : "bg-paper ring-1 ring-navy/10", isOpen && (dark ? "ring-volt/50" : "ring-navy/30"))}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group grid w-full grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 py-7 text-left md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,0.8fr)_auto] md:py-9"
            >
              <span className={cn("grid h-10 w-10 place-items-center rounded-full font-display text-sm tabular-nums", isOpen ? "bg-volt text-volt-foreground" : dark ? "bg-paper/10 text-paper/70" : "bg-navy text-volt")}>{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0">
                <span className="block font-display text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                  {p.nickname ?? p.name}
                </span>
                {p.nickname && <span className={cn("mt-1 block text-sm", dark ? "text-paper/50" : "text-muted-foreground")}>{p.name}</span>}
              </span>
              <span className={cn("editorial hidden text-lg md:block", dark ? "text-paper/60" : "text-muted-foreground")}>{p.tagline}</span>
              <span className={cn("grid h-11 w-11 place-items-center rounded-full border transition-all duration-500", dark ? "border-line-dark" : "border-onyx/20", isOpen && "rotate-45 border-volt bg-volt text-volt-foreground")}>
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                  <div className="grid gap-10 pb-12 md:grid-cols-[5rem_1fr_1fr] md:gap-8">
                    <span className="hidden md:block" />
                    <div>
                      <p className={cn("lede", dark ? "text-paper/80" : "text-foreground/80")}>{p.description}</p>
                      <div className="mt-8">
                        <p className={cn("eyebrow", dark ? "text-volt" : "text-navy")}>Ideal for</p>
                        <ul className="mt-3 space-y-1.5">{p.idealFor.map((x) => <li key={x}>{x}</li>)}</ul>
                      </div>
                      {p.schedule.length > 0 && (
                        <div className={cn("mt-8 border-l-2 pl-5", dark ? "border-volt" : "border-navy")}>
                          {p.schedule.map((s) => <p key={s} className={cn("text-sm", dark ? "text-paper/70" : "text-muted-foreground")}>{s}</p>)}
                        </div>
                      )}
                      <Cta {...(p.cta ? (p.cta.href.startsWith("/") ? { to: p.cta.href } : { href: p.cta.href }) : { href: enrollHref })} variant={dark ? "volt" : "solid"} className="mt-10">
                        {p.cta?.label ?? "Enroll"}
                      </Cta>
                    </div>
                    <div>
                      <p className={cn("eyebrow", dark ? "text-volt" : "text-navy")}>Training focus</p>
                      <ul className="mt-4">
                        {p.focus.map((f) => {
                          const [h, ...r] = f.split(": ");
                          return (
                            <li key={f} className={cn("border-t py-3.5", dark ? "border-line-dark" : "border-onyx/10")}>
                              {r.length ? (<><span className="font-semibold">{h}:</span> <span className={dark ? "text-paper/70" : "text-muted-foreground"}>{r.join(": ")}</span></>) : f}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </div>
  );
}

export function CoachRoster({ coaches }: { coaches: { name: string; photo: string }[]; dark?: boolean }) {
  return (
    <div className="flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] md:overflow-visible md:px-0">
      {coaches.map((c, i) => (
        <Reveal key={c.name} delay={i * 0.08} className="group w-[64vw] max-w-[20rem] shrink-0 snap-start sm:w-[38vw] md:w-auto md:max-w-none">
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden bg-navy">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,var(--navy),var(--navy-deep))]" />
              <img
                src={c.photo}
                alt={`Coach ${c.name}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[center_12%] grayscale-[35%] transition-all duration-[1200ms] ease-out-expo group-hover:scale-[1.06] group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep/70 to-transparent" />
            </div>
            <figcaption className="relative flex items-center justify-between overflow-hidden bg-volt px-5 py-4 text-volt-foreground">
              <span className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
              <span className="relative font-display text-xl font-semibold tracking-tight md:text-2xl">{c.name}</span>
              <span className="relative font-display text-xs tabular-nums opacity-60">{String(i + 1).padStart(2, "0")}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
