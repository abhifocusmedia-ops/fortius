import { createFileRoute } from "@tanstack/react-router";
import { CampHighlights, CampWhy } from "@/components/site/CampBody";
import { Cta } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { campSchedule } from "@/data/camps";
import { img } from "@/lib/images";
import { ext } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/copy-of-camps")({
  head: () => seo("Badminton Camps", "Fortius multi-racquet camps: Thanksgiving Break, Winter and Summer camps. Half-day or full-day programs, sibling discount 10%."),
  component: BadmintonCamps,
});

function BadmintonCamps() {
  return (
    <>
      <PageHero eyebrow="Badminton Camps" lines={["Learn.", "Compete.", "Elevate."]} image={img.facilityHallPlayers} intro="Half-day or Full-day programs. Early Bird Discount until May 5th.">
        <Cta href={ext.springCampForm} variant="volt" size="lg">Register — Spring Badminton Camp</Cta>
      </PageHero>
      <section className="section-y bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <Reveal>
            <p className="eyebrow text-navy">Schedule</p>
            <h2 className="display-lg mt-6">Camp<br />calendar.</h2>
            <div className="mt-8 inline-flex items-center gap-3 bg-volt px-4 py-2 text-sm font-semibold text-volt-foreground">Sibling Discount: 10%</div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] border-b border-onyx pb-3"><span className="eyebrow text-muted-foreground">Camp</span><span className="eyebrow text-muted-foreground">Time</span></div>
            {campSchedule.map((c) => (
              <div key={c.camp} className="grid grid-cols-1 gap-2 border-b border-onyx/15 py-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline">
                <span className="font-display text-3xl font-medium tracking-tight">{c.camp}</span>
                <span className="text-lg text-muted-foreground">{c.time}</span>
              </div>
            ))}
            <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <p className="border-l-2 border-navy pl-4">Half day program – Mon to Friday</p>
              <p className="border-l-2 border-navy pl-4">Full day program – Mon to Fri</p>
            </div>
            <Cta href={ext.springCampForm} className="mt-10" size="lg">Click here to register</Cta>
          </Reveal>
        </div>
      </section>
      <CampHighlights />
      <CampWhy image={img.facilityBadmintonPlay} />
    </>
  );
}
