import { createFileRoute } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { InterestBlock } from "@/components/site/InterestBlock";
import { PageHero } from "@/components/site/PageHero";
import { CoachRoster, ProgramIndex } from "@/components/site/Programs";
import { Reveal } from "@/components/site/Reveal";
import { tableTennisPrograms } from "@/data/coaching";
import { img } from "@/lib/images";
import { ext } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/tabletennis")({
  head: () => seo("Table Tennis Coaching", "Top-tier table tennis coaching — Beginner, Intermediate, Advanced and Private/Semi-Private training with Team Fortius coaches."),
  component: TableTennis,
});

function TableTennis() {
  return (
    <>
      <PageHero eyebrow="Table Tennis Coaching" lines={["Spin. Speed.", "Strategy."]} image={img.sportTableTennis} align="center">
        <Cta href={ext.tableTennisEnroll} variant="volt" size="lg">Enroll</Cta>
        <Cta href={ext.booking("table-tennis-assessment-session")} variant="ghostLight" size="lg">Book an assessment</Cta>
      </PageHero>
      <section className="section-y bg-paper">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-navy">Elevate every rally</p>
            <p className="mt-6 font-display text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-[1.15] tracking-tight">
              We provide top-tier table tennis coaching programs designed to elevate players of all skill levels.
            </p>
            <p className="mt-6 text-lg text-muted-foreground">Whether you're just starting out or striving for competitive success, our expert coaches deliver customized training focused on improving your technique, strategy, and overall performance.</p>
          </Reveal>
          <div className="min-w-0">
            <p className="eyebrow mb-6 text-muted-foreground">Your coaches</p>
            <CoachRoster coaches={[{ name: "Alex", photo: img.coachAlex }, { name: "Michael", photo: img.coachMichael }]} />
          </div>
        </div>
      </section>
      <section className="section-y bg-bone">
        <div className="container-x">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="display-lg">Programs</h2>
            <p className="text-muted-foreground">Monday - Friday (4pm to 9pm) · Saturday - Sunday (9am to 12pm and 5pm to 8pm)</p>
          </div>
          <ProgramIndex programs={tableTennisPrograms} enrollHref={ext.tableTennisEnroll} />
        </div>
      </section>
      <InterestBlock sport="table tennis" />
    </>
  );
}
