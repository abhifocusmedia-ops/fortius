import { createFileRoute } from "@tanstack/react-router";
import { CampHighlights, CampWhy } from "@/components/site/CampBody";
import { Cta } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { img } from "@/lib/images";
import { ext } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/campsfsa")({
  head: () => seo("High Performance Summer Camp", "Register for the Fortius High Performance Summer Camp — immersive multi-racquet training for players of all levels. Early bird discount until May 20th."),
  component: SummerCamp,
});

function SummerCamp() {
  return (
    <>
      <PageHero eyebrow="High Performance Summer Camp" lines={["Train like", "a champion."]} image={img.tournamentTableTennis} intro="Early Bird Discount until May 20th." tall>
        <Cta href={ext.summerCampForm} variant="volt" size="lg">Click here to register</Cta>
      </PageHero>
      <CampHighlights />
      <CampWhy image={img.sportTableTennis} />
      <section className="bg-navy text-paper">
        <div className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <h2 className="display-md">Register for High Performance Summer Camp</h2>
          <Cta href={ext.summerCampForm} variant="volt" size="lg">Register now</Cta>
        </div>
      </section>
    </>
  );
}
