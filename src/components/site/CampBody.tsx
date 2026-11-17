import { campHighlights, campWhy } from "@/data/camps";
import { Reveal, RevealImage } from "./Reveal";

export function CampHighlights() {
  return (
    <section className="section-y bg-ink text-paper">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-volt">Fortius Camps</p>
          <h2 className="display-lg mt-6">Train like a champion — <span className="editorial font-normal text-paper/70">learn, compete, elevate!</span></h2>
          <p className="lede mt-8 text-paper/65">Fortius Multi-Racquet Camps offer an immersive experience in both badminton and pickleball - two of the fastest-growing racquet sports in the U.S.</p>
        </Reveal>
        <div className="mt-16 grid gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
          {campHighlights.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="bg-ink p-8 md:p-10">
              <p className="font-display text-sm text-volt">0{i + 1}</p>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{t}</h3>
              <p className="mt-3 text-paper/60">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CampWhy({ image }: { image: string }) {
  return (
    <section className="section-y bg-bone">
      <div className="container-x">
        <Reveal className="max-w-4xl"><p className="lede text-foreground">{campWhy.lead}</p></Reveal>
        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-navy">Why choose Fortius Summer Camp?</p>
            <h2 className="display-md mt-5">Badminton &amp; Pickleball Excellence</h2>
            <p className="mt-6 text-muted-foreground">{campWhy.excellence}</p>
            <RevealImage src={image} alt="" className="mt-10 aspect-[16/11]" />
          </Reveal>
          <div className="space-y-14">
            <Reveal>
              <h3 className="font-display text-3xl font-medium tracking-tight">More Time = Deeper Skill Development</h3>
              <p className="mt-4 text-muted-foreground">{campWhy.moreTime}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="border-t-2 border-onyx pt-5"><p className="eyebrow">Morning Sessions (typically)</p><p className="mt-3 text-muted-foreground">{campWhy.morning}</p></div>
                <div className="border-t-2 border-navy pt-5"><p className="eyebrow text-navy">Afternoon Sessions (full-day)</p><p className="mt-3 text-muted-foreground">{campWhy.afternoon}</p></div>
              </div>
            </Reveal>
            <Reveal>
              <h3 className="font-display text-3xl font-medium tracking-tight">Dual-Sport Advantage</h3>
              <p className="mt-4 text-muted-foreground">Training in both badminton and pickleball enhances:</p>
              <ul className="mt-4">{campWhy.dualSport.map((x) => <li key={x} className="border-b border-onyx/10 py-3">{x}</li>)}</ul>
            </Reveal>
            <Reveal>
              <h3 className="font-display text-3xl font-medium tracking-tight">Integrated Physical &amp; Mental Conditioning</h3>
              <p className="mt-4 text-muted-foreground">In a full-day environment, we build complete athletes through:</p>
              <ul className="mt-4">{campWhy.conditioning.map((x) => <li key={x} className="border-b border-onyx/10 py-3">{x}</li>)}</ul>
            </Reveal>
            <Reveal>
              <h3 className="font-display text-3xl font-medium tracking-tight">Age-Appropriate Progression</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="bg-paper p-6"><p className="eyebrow text-navy">Half-Day Camp</p><p className="mt-3">{campWhy.halfDay}</p></div>
                <div className="bg-navy p-6 text-paper"><p className="eyebrow text-volt">Full-Day Camp</p><p className="mt-3 text-paper/80">{campWhy.fullDay}</p></div>
              </div>
              <p className="editorial mt-8 text-2xl">{campWhy.close}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
