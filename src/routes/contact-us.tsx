import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { MailForm } from "@/components/site/MailForm";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { contact } from "@/lib/site";
import { seo } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact-us")({
  head: () => seo("Contact Us", "Contact Fortius Sports Academy — Game & Grill in Alpharetta and ARC in Cumming. (678) 505-0464 · fortius@fsaatl.com"),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact us" lines={["We’re here", "to help."]} image={img.facilityLounge}
        intro="Whether you have questions about our programs, memberships, or facility rentals, our team is happy to assist you.">
        <div className="flex flex-col gap-2 font-display text-xl tracking-tight md:text-2xl">
          <a href={contact.phoneHref} className="link-line">{contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="link-line">{contact.email}</a>
        </div>
      </PageHero>
      <section className="grid bg-paper lg:grid-cols-2">
        {contact.locations.map((l, i) => (
          <Reveal key={l.key} className={`flex flex-col ${i ? "lg:border-l lg:border-onyx/15" : ""}`}>
            <RevealImage src={i ? img.facilityPickleballIndoor : img.facilityBadmintonHall} alt={l.name} className="aspect-[16/10]" />
            <div className="flex-1 px-[clamp(1.25rem,4vw,3.5rem)] py-12">
              <p className="eyebrow text-navy">{l.city}</p>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-tight">{l.name}</h2>
              <a href={l.map} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-lg link-line">{l.address}<ArrowUpRight className="h-4 w-4" /></a>
              <div className="mt-8">
                <p className="eyebrow text-muted-foreground">Opening Hours</p>
                <dl className="mt-3">{l.hours.map((h) => <div key={h.days} className="flex justify-between border-b border-onyx/10 py-3"><dt>{h.days}</dt><dd className="font-semibold">{h.time}</dd></div>)}</dl>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <section className="section-y bg-bone">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="display-lg">Send us<br />a message.</h2>
            <div className="mt-10 flex gap-6">{contact.social.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="eyebrow link-line">{s.label}</a>)}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <MailForm subject="Website enquiry" submitLabel="Send" fields={[
              { name: "first", label: "First Name" }, { name: "last", label: "Last Name" },
              { name: "email", label: "Email", type: "email", required: true, full: true },
              { name: "message", label: "Message", type: "textarea", required: true, full: true },
            ]} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
