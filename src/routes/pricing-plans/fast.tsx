import { createFileRoute } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { Reveal, RevealImage, SplitLines } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { ext } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/pricing-plans/fast")({
  head: () => seo("FAST — Fortius Agility Strength Training", "FAST: a periodized, sport-specific strength & conditioning program for athletes and members. $40 every month."),
  component: Fast,
});

const pillars = ["Speed", "Agility", "Power", "Stability", "Reaction", "Strength", "Conditioning"];
const goals = ["Explosive court movement", "Deep lunge strength & recovery speed", "Smash power & rotational force", "Reactive agility & decision speed", "Injury resilience (knee, ankle & shoulder protection)", "Match endurance & competition readiness"];

function Fast() {
  return (
    <>
      <section className="grain relative bg-ink pb-20 pt-36 text-paper">
        <div className="container-x">
          <p className="eyebrow text-volt">Fortius Agility Strength Training</p>
          <h1 className="mt-6 font-display text-[clamp(4.5rem,16vw,11rem)] font-bold leading-[0.82] tracking-[-0.06em] text-volt"><SplitLines lines={["FAST"]} /></h1>
          <div className="mt-10 grid gap-10 border-t border-line-dark pt-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="display-md">High Performance Strength &amp; Conditioning Program</h2>
              <p className="editorial mt-4 text-2xl text-paper/70">Built for everyone! Driven by our Coaches!</p>
            </div>
            <div className="border border-line-dark p-8">
              <p className="eyebrow text-paper/50">Best Value · FAST - Fitness Program</p>
              <p className="mt-4 font-display text-7xl font-semibold tracking-tighter">$40<span className="text-xl font-normal text-paper/50"> / every month</span></p>
              <p className="mt-3 text-sm text-paper/60">FAST - Fortius Agility Strength Training Program for Athletes and Members.</p>
              <Cta href={ext.fastBuy} variant="volt" size="lg" className="mt-6 w-full">Buy Now</Cta>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden bg-volt py-5 text-volt-foreground">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-tight">
          {[...pillars, ...pillars, ...pillars, ...pillars].map((p, i) => <span key={i}>{p} ·</span>)}
        </div>
      </div>
      <section className="section-y bg-bone">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <RevealImage src={img.promoFast} alt="FAST — Stay fit, not still" className="aspect-[3/4]" />
          <Reveal delay={0.1}>
            <p className="text-lg">At Fortius High Performance Team, our periodized Strength &amp; Conditioning program is designed specifically for competitive badminton athletes aiming to excel in USAB Circuit tournaments and beyond.</p>
            <p className="mt-6 text-muted-foreground">This is not general fitness training — it is a structured, sport-specific performance system developed for all members who would like to improve:</p>
            <ol className="mt-8">
              {goals.map((g, i) => (
                <li key={g} className="flex items-baseline gap-5 border-b border-onyx/15 py-5"><span className="font-display text-sm text-stone">0{i + 1}</span><span className="font-display text-2xl font-medium tracking-tight">{g}</span></li>
              ))}
            </ol>
            <Cta href={ext.fastBuy} size="lg" className="mt-10">Join FAST</Cta>
          </Reveal>
        </div>
      </section>
    </>
  );
}
