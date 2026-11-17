import { createFileRoute } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { ext } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/events-list")({
  head: () => seo("Events & Tournaments", "Upcoming events at Fortius Sports Academy, including the Fortius Atlanta Badminton Open 2026."),
  component: Events,
});

function Events() {
  return (
    <>
      <PageHero eyebrow="Events & tournaments" lines={["Upcoming", "events."]} image={img.tournamentTableTennis} />
      <section className="section-y bg-bone">
        <div className="container-x">
          <Reveal className="grid gap-10 border-y border-onyx/20 py-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-16">
            <div className="flex items-baseline gap-4 lg:block">
              <p className="eyebrow text-navy">Fri</p>
              <p className="font-display text-[7rem] font-semibold leading-none tracking-tighter">20</p>
              <p className="eyebrow">Nov 2026</p>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Fortius Sports Academy</p>
              <h2 className="display-md mt-3">Fortius Atlanta Badminton Open - 2026</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Cta href={ext.openTournament} size="lg">Register</Cta>
              <Cta href={ext.openTournament} variant="ghostDark" size="lg">More info</Cta>
            </div>
          </Reveal>
          <p className="mt-10 max-w-2xl text-muted-foreground">Fortius Management may conduct local, regional, national level tournaments. Members will be informed in advance for participation. Tournament fee will be collected from the participants separately.</p>
        </div>
      </section>
    </>
  );
}
