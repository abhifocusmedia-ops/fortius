import { createFileRoute } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { InterestBlock } from "@/components/site/InterestBlock";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { CoachRoster, ProgramIndex } from "@/components/site/Programs";
import { Reveal } from "@/components/site/Reveal";
import { badmintonPrograms } from "@/data/coaching";
import { img } from "@/lib/images";
import { ext } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/badminton-coaching")({
  head: () => seo("Badminton Coaching", "World-class badminton coaching for every level — Shuttle Sparks, Smash Starters, Court Commanders, Fortius Strikers, juniors and 1-on-1 training."),
  component: BadmintonCoaching,
});

function BadmintonCoaching() {
  return (
    <>
      <PageHero eyebrow="Badminton Coaching" lines={["From first grip", "to podium."]} image={img.facilityBadmintonPlay}
        intro="We offer world-class coaching programs for badminton designed to help players of all levels enhance their skills, strategy, and overall performance. Whether you’re a beginner looking to build a strong foundation or an advanced player aiming for competitive excellence, our experienced coaches provide personalized training tailored to your goals.">
        <Cta href={ext.badmintonEnroll} variant="volt" size="lg">Coaching enrollment</Cta>
        <Cta to="/book-online" variant="ghostLight" size="lg">Book a kickoff</Cta>
      </PageHero>
      <section className="section-y bg-paper">
        <div className="container-x">
          <SectionHead eyebrow="Coaches" title="Meet the coaches." intro="Certified coaches, national-level players and guest mentors." />
          <div className="mt-14"><CoachRoster coaches={[{ name: "Heymard", photo: img.coachHeymard }, { name: "Daniel", photo: img.coachDaniel }, { name: "Kathir", photo: img.coachKathir }, { name: "Sanjeeth", photo: img.coachSanjeeth }, { name: "Vinh", photo: img.coachVinh }]} /></div>
        </div>
      </section>
      <section className="section-y bg-bone">
        <div className="container-x">
          <SectionHead eyebrow="The pathway" title={<>Six programs.<br /><span className="editorial font-normal">One pathway.</span></>} />
          <div className="mt-14"><ProgramIndex programs={badmintonPrograms} enrollHref={ext.badmintonEnroll} /></div>
        </div>
      </section>
      <InterestBlock sport="badminton" askLocation />
      <section className="grid bg-ink text-paper md:grid-cols-2">
        {([["Make-up Class request for Existing Students", "Students who missed a class and requesting a make up class can click below.", "Note: Only one make up class is allowed per month*", "Make Up class", ext.makeUpClass], ["Class reschedule request for Existing Students", "Students who need a schedule change for their class can click below.", "Note: Only 2 reschedule request is allowed in a year (August - May)", "Reschedule Class", ext.rescheduleClass]] as string[][]).map(([t, d, n, l, h], i) => (
          <Reveal key={t} className={`px-[clamp(1.25rem,4vw,3.5rem)] py-20 ${i ? "md:border-l md:border-line-dark" : ""}`}>
            <p className="eyebrow text-volt">Existing students</p>
            <h3 className="mt-5 font-display text-3xl font-medium tracking-tight">{t}</h3>
            <p className="mt-4 text-paper/70">{d}</p>
            <p className="mt-2 text-sm text-paper/45">{n}</p>
            <Cta href={h ?? "#"} variant="ghostLight" className="mt-8">{l}</Cta>
          </Reveal>
        ))}
      </section>
    </>
  );
}
