import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { ruleSections, rulesIntro } from "@/data/rules";
import { seo } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { img } from "@/lib/images";

export const Route = createFileRoute("/rules-regulations")({
  head: () => seo("Rules & Regulations", "Fortius Sports Academy policies, terms & conditions — general rules, memberships, payments, cancellation, conduct, dress code and more."),
  component: Rules,
});

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function Rules() {
  return (
    <>
      <PageHero eyebrow="Fortius Sports Academy!" lines={["Policies, terms", "& conditions."]} image={img.facilityBadmintonHall}
        intro={<div className="space-y-3 text-sm md:text-base">{rulesIntro.map((p) => <p key={p}>{p}</p>)}</div>} />
      <section className="section-y bg-bone">
        <div className="container-x">
          <p className="mb-8 text-muted-foreground">{ruleSections.length} sections · tap a card to read the full policy.</p>
          <div className="grid items-start gap-4 md:grid-cols-2">
            {ruleSections.map((s, i) => (
              <details key={s.title} id={slug(s.title)} className="group scroll-mt-28 rounded-2xl border border-navy/10 bg-paper shadow-sm transition-shadow open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center gap-4 p-6 [&::-webkit-details-marker]:hidden">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy font-display text-sm text-volt">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">
                    <span className="block font-display text-xl font-medium tracking-tight">{s.title}</span>
                    <span className="text-sm text-muted-foreground">{s.items.length} {s.items.length === 1 ? "point" : "points"}</span>
                  </span>
                  <Plus className="h-5 w-5 text-navy transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <ul className="space-y-3 border-t border-navy/10 px-6 pb-6 pt-5">
                  {s.items.map((it, j) => <li key={j} className="relative pl-5 text-sm leading-relaxed text-foreground/80 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-volt">{it}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
