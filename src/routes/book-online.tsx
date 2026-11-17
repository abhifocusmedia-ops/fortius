import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ext } from "@/lib/site";
import { seo } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { img } from "@/lib/images";

export const Route = createFileRoute("/book-online")({
  head: () => seo("Book Online", "Book badminton, pickleball and table tennis courts, coaching kickoffs, 1-on-1 training and more at Fortius."),
  component: Book,
});

type S = { name: string; dur: string; price?: string; slug: string };
const groups: { title: string; items: S[] }[] = [
  { title: "Court Reservation", items: [
    { name: "Pickleball Court Booking", dur: "1 hr", price: "$20", slug: "pickleball-court-booking" },
    { name: "Badminton Court Booking", dur: "1 hr", price: "$40", slug: "badminton-court-booking" },
    { name: "Table Tennis Table Booking", dur: "1 hr", price: "$15", slug: "table-tennis-table-booking" },
  ] },
  { title: "Coaching Kick off", items: [
    { name: "Badminton Coaching Kickoff", dur: "1 hr", slug: "badminton-coaching-kickoff" },
    { name: "Table Tennis Assessment Session", dur: "30 min", slug: "table-tennis-assessment-session" },
    { name: "Pickleball Coaching Kickoff", dur: "1 hr", slug: "pickleball-coaching-kickoff" },
  ] },
  { title: "Pickleball Training", items: [{ name: "Pickleball 1-on-1 Coaching", dur: "1 hr", price: "From $65", slug: "pickleball-1-on-1-coaching" }] },
  { title: "Badminton Training", items: [
    { name: "Badminton 1-1 Training Beginners", dur: "1 hr", price: "$65", slug: "badminton-1-1-training-beginners" },
    { name: "Badminton Group Beginner Class", dur: "1 hr", price: "$25", slug: "badminton-group-beginner-class" },
    { name: "Badminton High Performance 1-1 Training", dur: "1 hr", price: "$70", slug: "badminton-high-performance-1-1-training" },
    { name: "Badminton Feeding Machine", dur: "1 hr", price: "$10", slug: "badminton-feeding-machine" },
  ] },
  { title: "Stretching Exercise", items: [{ name: "Stretch with Chris", dur: "20 min", price: "$30", slug: "stretch-with-chris" }] },
];

function Book() {
  return (
    <>
      <PageHero eyebrow="Bookings" lines={["Book your", "court."]} image={img.facilityCourtsWide}
        intro={<ul className="space-y-2 border-l-2 border-volt pl-5 text-sm md:text-base"><li className="eyebrow text-paper/50">Booking Rules</li><li>Non-marking shoes are required on all courts.</li><li>Badminton and pickleball court bookings are limited to six players per reservation.</li><li>Non-members using pickleball courts are required to pay a drop-in fee.</li></ul>} />
      <section className="section-y bg-bone">
        <div className="container-x space-y-20">
          {groups.map((g) => (
            <Reveal key={g.title}>
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">{g.title}</h2>
              <ul className="mt-6 grid gap-3">
                {g.items.map((s) => (
                  <li key={s.slug}>
                    <a href={ext.booking(s.slug)} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border-l-4 border-volt bg-paper px-5 py-5 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg sm:grid-cols-[minmax(0,1fr)_6rem_8rem_auto] md:px-7">
                      <span className="font-display text-xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-2xl">{s.name}</span>
                      <span className="hidden text-muted-foreground sm:block">{s.dur}</span>
                      <span className="hidden font-display text-xl font-semibold text-navy sm:block">{s.price ?? "—"}</span>
                      <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-paper transition-colors group-hover:bg-volt group-hover:text-volt-foreground">Book Now <ArrowUpRight className="h-3.5 w-3.5" /></span>
                      <span className="text-sm text-muted-foreground sm:hidden">{s.dur}{s.price ? ` · ${s.price}` : ""}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          <p className="text-sm text-muted-foreground">Bookings and payments are completed on the Fortius booking calendar.</p>
        </div>
      </section>
    </>
  );
}
