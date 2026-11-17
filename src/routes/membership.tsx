import { createFileRoute } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { ext } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/membership")({
  head: () => seo("Membership", "Badminton, pickleball, table tennis and combo memberships at Fortius. Unlimited open play, no long-term contracts, family discounts."),
  component: Membership,
});

const benefits = ["Unlimited Open Play", "Member-Only Events & Tournaments*", "Free Gym Access", "Referral Bonuses", "No Long-Term Contracts", "Family Membership Discounts", "Access to exclusive member discounts @Pro Shop", "Access to Locker Rooms & Showers*", "5% Discount on Food and Beverage Purchases*", "Free Wi-Fi Throughout the Facility", "Flexible Freeze/Skip Policy"];

type Row = [string, string];
const plans: { sport: string; lead: Row; rows: Row[]; family?: Row[]; passes?: Row[]; note?: string; href: string; extra?: { label: string; to: string }; image: string }[] = [
  {
    sport: "Badminton", image: img.facilityBadmintonPlay, href: ext.badmintonMembership,
    lead: ["Adult Monthly Membership", "$65"],
    rows: [["Junior (<18), College Student and Senior (55+) Monthly Membership", "$55"], ["Off Hours (M-F 9AM to 3PM) Monthly Membership", "$30"], ["Fortius Academy Trainee Monthly Membership", "$35"]],
    family: [["Family of 2", "10% Off"], ["Family of 3", "20% Off"], ["Family of 4 and above", "30% Off"], ["Pay yearly", "Additional 10% Off"]],
    passes: [["Day Pass", "$15"], ["10 Day Passes (Valid for 3 months)", "$120"]],
  },
  {
    sport: "Pickleball", image: img.facilityPickleballCourts, href: ext.pickleballMembership,
    lead: ["Annual Membership", "$240"], rows: [],
    note: "Annual members may use the facility at any time when courts are available, and dedicated court reservations can be made for $20",
    extra: { label: "Reserve Courts", to: "/book-online" },
  },
  {
    sport: "Table Tennis", image: img.sportTableTennis, href: ext.tableTennisMembership,
    lead: ["Adult Monthly Membership", "$55"],
    rows: [["Senior (55+) Monthly Membership", "$50"], ["Off Hours (M-F 9AM to 3PM) Monthly Membership", "$30"]],
    family: [["Family of 2", "10% Off"], ["Family of 3", "20% Off"], ["Family of 4 and above", "30% Off"], ["Pay yearly", "Additional 10% Off"]],
    passes: [["Day Pass", "$10"], ["10 Day Passes (Valid for 3 months)", "$80"]],
  },
  {
    sport: "Combo", image: img.facilityCourtsWide, href: ext.comboMembership,
    lead: ["Badminton, Pickleball & Table Tennis - Adult Monthly Membership", "$85.00/month"], rows: [],
  },
];

function Table({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div>
      <p className="eyebrow text-muted-foreground">{title}</p>
      <dl className="mt-3">{rows.map(([k, v]) => (
        <div key={k} className="flex items-baseline justify-between gap-6 border-b border-onyx/10 py-3"><dt className="text-foreground/80">{k}</dt><dd className="shrink-0 font-display text-lg font-semibold">{v}</dd></div>
      ))}</dl>
    </div>
  );
}

function Membership() {
  return (
    <>
      <PageHero eyebrow="Fortius Membership Programs" lines={["Tailor made", "for everyone!"]} image={img.facilityBadmintonHall} intro="Contact us for latest special promotions on membership pricing!">
        <Cta href="#plans" variant="volt" size="lg">See plans</Cta>
      </PageHero>
      <section className="section-y bg-ink text-paper">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <Reveal><p className="eyebrow text-volt">Membership benefits</p><h2 className="display-lg mt-6">Everything<br />included.</h2></Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.03} className="flex items-center gap-4 rounded-xl border border-line-dark bg-paper/[0.03] p-5 transition-colors hover:border-volt/60">
                <span className="font-display text-sm text-volt">{String(i + 1).padStart(2, "0")}</span><span>{b}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <p className="container-x mt-12 text-sm text-paper/45">*Some benefits, amenities, and services are subject to availability and may vary based on scheduling, facility usage, membership tier, or at the discretion of the club.</p>
      </section>
      <section id="plans" className="section-y bg-bone">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Choose your plan</p>
            <h2 className="display-lg mt-4">Membership plans</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {plans.map((p, i) => (
              <Reveal key={p.sport} delay={(i % 2) * 0.08} className="h-full">
                <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${p.sport === "Combo" ? "border-onyx bg-ink text-paper" : "border-onyx/10 bg-background"}`}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={p.image} alt={`${p.sport} at Fortius`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/10 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-volt px-3 py-1 font-display text-xs font-semibold text-volt-foreground">0{i + 1}</span>
                    {p.sport === "Combo" && <span className="absolute right-5 top-5 rounded-full border border-paper/40 px-3 py-1 text-xs text-paper">All sports</span>}
                    <h3 className="absolute bottom-5 left-5 font-display text-3xl font-semibold text-paper">{p.sport}</h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className={p.sport === "Combo" ? "text-paper/70" : "text-muted-foreground"}>{p.lead[0]}</p>
                    <p className="mt-2 font-display text-5xl font-semibold tracking-tighter">{p.lead[1]}</p>
                    <div className="mt-8 grid flex-1 content-start gap-8">
                      {p.rows.length > 0 && <Table title="Monthly options" rows={p.rows} />}
                      {p.note && <p className="rounded-xl bg-bone p-5 text-foreground/80">{p.note}</p>}
                      {p.family && <Table title="Family & yearly" rows={p.family} />}
                      {p.passes && <Table title="Passes" rows={p.passes} />}
                      {p.sport === "Combo" && <ul className="grid gap-3 text-paper/80">{["Badminton", "Pickleball", "Table Tennis"].map((x) => <li key={x} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-volt" />{x}</li>)}</ul>}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Cta href={p.href} variant={p.sport === "Combo" ? "volt" : undefined}>{p.sport} Membership</Cta>
                      {p.extra && <Cta to={p.extra.to} variant="ghostDark">{p.extra.label}</Cta>}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-volt text-volt-foreground">
        <div className="container-x grid gap-10 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <p className="eyebrow">Fortius Referral Program</p>
            <h2 className="display-lg mt-5">Share the fun<br />with friends.</h2>
            <p className="mt-6 max-w-md text-lg">Be a part of growing the Fortius family—because champions are made together.</p>
          </div>
          <div>
            <p className="font-medium">Fortius members, it’s time to share the game you love!</p>
            <ul className="mt-5 space-y-3">
              {["Invite your friends to join Fortius.", "Successful referral gets you and your friend 10% membership fee discount.", "Each successful referral enters YOU into our Bi-Weekly Raffle.", "WIN a store credit worth $100 every 2 weeks!"].map((x) => <li key={x} className="border-b border-onyx/20 pb-3">{x}</li>)}
            </ul>
            <p className="mt-5 text-sm">The more friends you refer, the more chances you get to win!</p>
            <Cta to="/refer" className="mt-8" size="lg">Refer a friend</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
