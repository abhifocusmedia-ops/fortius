import { createFileRoute } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { InterestBlock } from "@/components/site/InterestBlock";
import { PageHero } from "@/components/site/PageHero";
import { ProgramIndex } from "@/components/site/Programs";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { pickleballPrograms } from "@/data/coaching";
import { img } from "@/lib/images";
import { ext } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/pickleball")({
  head: () => seo("Pickleball Coaching", "Structured pickleball coaching from Paddle Foundation to Paddle Titans, plus Catch Them Young juniors and Prime Focus 1-on-1 coaching."),
  component: Pickleball,
});

function Pickleball() {
  return (
    <>
      <PageHero eyebrow="Pickleball Coaching" lines={["Own the kitchen.", "Control the court."]} image={img.sportPickleball} position="center 40%">
        <Cta href={ext.pickleballEnroll} variant="volt" size="lg">Enroll</Cta>
        <Cta to="/book-online" variant="ghostLight" size="lg">Book a kickoff</Cta>
      </PageHero>
      <section className="section-y bg-ink text-paper">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-[1.15] tracking-tight">
              At Fortius Pickleball, our coaching program is designed to develop players at every skill level, from beginners to professional athletes.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-paper/65">Our structured curriculum ensures a progressive learning experience, focusing on technical mastery, tactical awareness, and mental toughness.</p>
            <div className="mt-8 grid grid-cols-3 border-t border-line-dark pt-6">
              {["Technical mastery", "Tactical awareness", "Mental toughness"].map((x) => <p key={x} className="text-sm text-volt">{x}</p>)}
            </div>
          </Reveal>
        </div>
        <div className="container-x mt-20"><ProgramIndex dark programs={pickleballPrograms} enrollHref={ext.pickleballEnroll} /></div>
      </section>
      <section className="grid md:grid-cols-2">
        <RevealImage src={img.facilityPickleballCourts} alt="Fortius tournament-grade pickleball courts" className="aspect-[16/11] md:aspect-auto" />
        <div className="bg-bone px-[clamp(1.25rem,4vw,3.5rem)] py-20">
          <p className="eyebrow text-navy">7 tournament grade courts</p>
          <h2 className="display-md mt-5">Train where the game is played right.</h2>
          <p className="mt-6 text-muted-foreground">International standard lighting and dedicated court reservations for $20.</p>
          <Cta to="/book-online" className="mt-8">Reserve courts</Cta>
        </div>
      </section>
      <InterestBlock sport="pickleball" />
    </>
  );
}
