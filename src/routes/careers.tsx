import { createFileRoute } from "@tanstack/react-router";
import { MailForm } from "@/components/site/MailForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { contact } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => seo("Careers", "Careers at Fortius Sports Academy & Antera Restaurant at Game & Grill. Join our team. Grow with us."),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero eyebrow="Game & Grill Careers" lines={["Join our team.", "Grow with us."]} image={img.facilityLoungeCourts} intro="Careers at Fortius Sports & Antera Restaurant" />
      <section className="section-y bg-bone">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-[1.2] tracking-tight">At Fortius Sports Academy and Antera Restaurant, we believe great experiences are built by passionate people.</p>
            <p className="mt-6 text-lg text-muted-foreground">Whether it’s delivering high-performance training on the court or creating memorable dining experiences, our teams are at the heart of everything we do.</p>
            <p className="mt-4 text-lg text-muted-foreground">We’re always looking for driven individuals who are ready to learn, contribute, and grow.</p>
            <h2 className="display-md mt-14">Build Your Career.<br /><span className="editorial font-normal">Inspire Every Day.</span></h2>
            <div className="mt-10 space-y-2 text-sm text-muted-foreground">
              {contact.locations.map((l) => <p key={l.key}>{l.name}: {l.address}</p>)}
              <p>Phone: {contact.phone} · {contact.email}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="bg-paper p-8 md:p-12">
            <p className="eyebrow mb-8 text-navy">Apply</p>
            <MailForm
              subject="Career application — Fortius / Antera"
              submitLabel="Apply"
              note={<>Opens your email app addressed to {contact.email} — please attach your resume before sending.</>}
              fields={[
                { name: "first", label: "First name", required: true }, { name: "last", label: "Last name", required: true },
                { name: "email", label: "Email", type: "email", required: true }, { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "position", label: "Interested Position", required: true }, { name: "start", label: "Possible Start Date", type: "date" },
                { name: "cv", label: "Link to CV/LinkedIn", type: "url", full: true },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
