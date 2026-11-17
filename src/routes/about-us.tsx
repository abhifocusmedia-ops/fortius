import { createFileRoute } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { CoachRoster } from "@/components/site/Programs";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about-us")({
  head: () => seo("About Us", "Fortius Sports Academy — a premier destination for recreational and professional athletes, backed by an award-winning management team."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Fortius" lines={["Premier destination", "for every athlete."]} image={img.facilityCourtsWide} />
      <section className="section-y bg-bone">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><p className="eyebrow text-navy">Welcome to Fortius Sports Academy</p></Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-[1.15] tracking-tight">
              A premier destination for recreational and professional athletes — world-class amenities and a complete coaching curriculum.
            </p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">Backed by an award-winning management team, with flexible membership and coaching programs for every skill level.</p>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[["2", "Facilities"], ["21", "Badminton courts"], ["7", "Pickleball courts"], ["1", "Table tennis arena"]].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-navy p-5 text-paper">
                  <p className="font-display text-4xl font-semibold tracking-tighter text-volt">{n}</p>
                  <p className="mt-1 text-sm text-paper/75">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="grid lg:grid-cols-2">
        {[["Mission", "Inspire and empower athletes of all levels through world-class facilities, exceptional coaching and a lifelong passion for sport.", "bg-ink text-paper"], ["Vision", "A global leader in sport — innovative venues and transformative training that nurture talent, health and community.", "bg-navy text-paper"]].map(([t, d, c]) => (
          <div key={t} className={`${c} px-[clamp(1.25rem,4vw,3.5rem)] py-24 md:py-32`}>
            <Reveal>
              <p className="eyebrow text-volt">{t}</p>
              <p className="editorial mt-8 max-w-xl text-[clamp(1.6rem,2.6vw,2.4rem)] leading-snug">{d}</p>
            </Reveal>
          </div>
        ))}
      </section>
      <section id="team" className="section-y bg-paper">
        <div className="container-x">
          <SectionHead eyebrow="Our team" title="Meet the team." intro="Certified coaches and national-level players leading every program on our courts." />
          <div className="mt-16">
            <CoachRoster coaches={[{ name: "Heymard", photo: img.coachHeymard }, { name: "Kathir", photo: img.coachKathir }, { name: "Sanjeeth", photo: img.coachSanjeeth }, { name: "Vinh", photo: img.coachVinh }]} />
          </div>
          <div className="mt-16 flex flex-wrap gap-3"><Cta to="/membership">Explore membership</Cta><Cta to="/badminton-coaching" variant="ghostDark">Explore coaching</Cta></div>
        </div>
      </section>
    </>
  );
}
