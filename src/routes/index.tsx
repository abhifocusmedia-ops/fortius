import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Cta } from "@/components/site/Cta";
import { SectionHead } from "@/components/site/PageHero";
import { Reveal, RevealImage, SplitLines } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { contact } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Badminton, Pickleball & Table Tennis in Alpharetta", "24 badminton courts, 4 pickleball courts and 10 table tennis tables across two Fortius facilities in Alpharetta and Cumming, GA — memberships, coaching, camps and events."),
  component: Home,
});

const sports = [
  { n: "24", unit: "Badminton Courts", line: "For Endless Smashes!", to: "/badminton-coaching", membership: "Badminton Membership", image: img.facilityBadmintonPlay, sport: "Badminton" },
  { n: "04", unit: "Pickleball Courts", line: "Fun Loaded Dinks!", to: "/pickleball", membership: "Pickleball Membership", image: img.sportPickleball, sport: "Pickleball" },
  { n: "10", unit: "Table Tennis Tables", line: "Ping pong enthusiasts", to: "/tabletennis", membership: "Table Tennis Membership", image: img.sportTableTennis, sport: "Table Tennis" },
];

const features = ["21 BWF Standard Indoor Courts", "Premier Academy with Top Coaches", "International Standard Lighting", "7 Tournament Grade Pickleball Courts", "Relaxing Lounge Area (Coming Soon)", "Pro Shop"];

function Home() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      {/* 01 — Hero */}
      <section ref={heroRef} className="grain relative isolate overflow-hidden bg-ink text-paper">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-20 -z-10 h-[36rem] w-[36rem] rounded-full bg-navy blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-volt/20 blur-3xl" />
        <p aria-hidden className="pointer-events-none absolute -bottom-10 left-0 -z-10 select-none whitespace-nowrap font-display text-[22vw] font-bold leading-none tracking-tighter text-paper/[0.04]">FORTIUS</p>
        <div className="container-x grid min-h-[100svh] items-center gap-12 pb-28 pt-32 lg:grid-cols-[1.05fr_1fr] lg:pb-16">
          <div>
            <motion.p initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 rounded-full border border-volt/40 bg-volt/10 px-4 py-2 text-sm text-volt">
              <span className="h-2 w-2 animate-pulse rounded-full bg-volt" /> Alpharetta &amp; Cumming, GA
            </motion.p>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
              <SplitLines lines={["Smash.", "Dink."]} delay={0.25} />
              <span className="block text-volt"><SplitLines lines={["Spin."]} delay={0.45} /></span>
            </h1>
            <motion.p initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="lede mt-8 max-w-md text-paper/75">
              Badminton, pickleball &amp; table tennis — exceptional facilities, expert coaching and a passionate community.
            </motion.p>
            <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7 }} className="mt-10 flex flex-wrap gap-3">
              <Cta to="/book-online" variant="volt" size="lg">Book Your Experience</Cta>
              <Cta to="/membership" variant="ghostLight" size="lg">Join Us</Cta>
            </motion.div>
            <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-12 flex flex-wrap gap-3">
              {sports.map((s) => (
                <Link key={s.sport} to={s.to} className="group flex items-center gap-3 rounded-full border border-line-dark bg-paper/5 py-1.5 pl-1.5 pr-4 transition-colors hover:border-volt hover:bg-volt hover:text-volt-foreground">
                  <img src={s.image} alt="" className="h-9 w-9 rounded-full object-cover" />
                  <span className="text-sm font-medium">{s.sport}</span>
                </Link>
              ))}
            </motion.div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <motion.div initial={reduce ? false : { opacity: 0, rotate: 6, scale: 0.9 }} animate={{ opacity: 1, rotate: 2, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden rounded-[2rem] border-4 border-volt shadow-2xl">
              <img src={img.heroSmash} alt="Badminton athlete mid-air jump smash" width={1920} height={1088} className="aspect-[4/5] w-full object-cover object-[65%_center]" />
            </motion.div>
            <motion.div initial={reduce ? false : { opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0, y: reduce ? 0 : [0, -10, 0] }} transition={{ opacity: { delay: 0.8 }, x: { delay: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }} className="absolute -left-4 top-10 rounded-2xl bg-volt p-4 text-volt-foreground shadow-xl md:-left-10">
              <p className="font-display text-4xl font-bold leading-none tracking-tighter">24</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider">Badminton courts</p>
            </motion.div>
            <motion.div initial={reduce ? false : { opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0, y: reduce ? 0 : [0, 10, 0] }} transition={{ opacity: { delay: 1 }, x: { delay: 1 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} className="absolute -right-3 bottom-24 flex items-center gap-3 rounded-2xl bg-paper p-3 pr-5 text-onyx shadow-xl md:-right-8">
              <img src={img.sportPickleball} alt="" className="h-12 w-12 rounded-xl object-cover" />
              <div><p className="font-display text-2xl font-bold leading-none text-navy">04</p><p className="text-xs font-medium">Pickleball courts</p></div>
            </motion.div>
            <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="absolute -bottom-6 left-8 flex items-center gap-3 rounded-2xl bg-navy p-3 pr-5 shadow-xl ring-1 ring-paper/15">
              <img src={img.sportTableTennis} alt="" className="h-12 w-12 rounded-xl object-cover" />
              <div><p className="font-display text-2xl font-bold leading-none text-volt">10</p><p className="text-xs font-medium text-paper/80">Table tennis tables</p></div>
            </motion.div>
            <Link to="/book-online" aria-label="Book now" className="absolute -right-4 -top-6 hidden h-28 w-28 place-items-center rounded-full bg-ink md:grid">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]">
                <defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
                <text className="fill-volt text-[10px] font-semibold uppercase tracking-[0.3em]"><textPath href="#circ">Book now · Book now · </textPath></text>
              </svg>
              <ArrowUpRight className="h-7 w-7 text-volt" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats marquee */}
      <div className="overflow-hidden border-b border-line-dark bg-ink py-5 text-paper">
        <div className="marquee flex w-max gap-12 whitespace-nowrap">
          {[...features, ...features].map((f, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-xl font-medium uppercase tracking-tight text-paper/80">
              {f}<span className="h-1.5 w-1.5 rounded-full bg-volt" />
            </span>
          ))}
        </div>
      </div>

      {/* 02 — Experience */}
      <section className="section-y bg-bone">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-navy"><span className="text-stone">01</span><span className="h-px w-8 bg-navy" />The Fortius Experience</p>
              <h2 className="display-lg mt-6">More than a<br />place to <span className="editorial font-normal">play.</span></h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 max-w-lg">
              <p className="lede text-foreground/80">A brand-new premier destination for recreational and professional athletes — world-class courts and a full coaching curriculum.</p>
              <ul className="mt-8 grid gap-3 text-foreground/80">
                <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-volt" /><span><b className="text-navy">Game &amp; Grill, Alpharetta</b> — 15 badminton + 4 pickleball courts</span></li>
                <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-volt" /><span><b className="text-navy">ARC, Cumming</b> — 9 badminton courts + table tennis tables</span></li>
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
              <Cta to="/membership" variant="volt">Join Us</Cta>
              <Cta to="/badminton-coaching" variant="volt">Get Trained</Cta>
              <Cta to="/book-online" variant="volt">Book Now!</Cta>
            </Reveal>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <RevealImage src={img.facilityHallPlayers} alt="Players training in the Fortius badminton hall" className="aspect-[4/5] rounded-2xl" />
              <RevealImage src={img.facilityLounge} alt="Fortius lounge overlooking the courts" delay={0.15} className="aspect-[4/5] rounded-2xl" />
            </div>
            <Reveal delay={0.25} className="grid grid-cols-3 gap-4">
              {[["21", "BWF standard courts"], ["7", "Pickleball courts"], ["2", "Locations"]].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-navy p-5 text-paper transition-transform duration-500 hover:-translate-y-1">
                  <p className="font-display text-5xl font-semibold tracking-tighter text-volt">{n}</p>
                  <p className="mt-1 text-sm font-medium text-paper/75">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — Sports */}
      <section className="section-y bg-ink text-paper">
        <div className="container-x">
          <SectionHead dark index="02" eyebrow="Explore our sports" title={<>Love all? Dink,<br />ping pong &amp; smash.</>} intro="Three sports under one roof. Sign up for the membership that suits your game — or take them all with the Combo Membership." />
          <div className="mt-20 space-y-24 md:space-y-32">
            {sports.map((s, i) => (
              <Reveal key={s.sport} className={`grid items-center gap-8 md:grid-cols-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <Link to={s.to} className="block md:col-span-7">
                  <RevealImage src={s.image} alt={`${s.sport} at Fortius`} className="aspect-[16/11]" />
                </Link>
                <div className={`md:col-span-5 ${i % 2 ? "md:pr-8" : "md:pl-8"}`}>
                  <p className="font-display text-[clamp(6rem,14vw,11rem)] font-semibold leading-none tracking-tighter text-volt">{s.n}</p>
                  <h3 className="display-md mt-2">{s.unit}</h3>
                  <p className="editorial mt-3 text-2xl text-paper/60">{s.line}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Cta to="/membership" variant="light">{s.membership}</Cta>
                    <Cta to={s.to} variant="ghostLight">{s.sport} Coaching</Cta>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal className="relative overflow-hidden border border-line-dark p-10 md:p-16">
              <img src={img.facilityCourtsWide} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
              <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
                <div>
                  <p className="eyebrow text-volt">Combo Membership</p>
                  <h3 className="display-md mt-4">Badminton, Pickleball &amp; Table Tennis.</h3>
                  <p className="mt-4 text-paper/70">Love all? Yes, you can Dink, Ping Pong and Smash! Adult monthly membership <span className="font-semibold text-paper">$85.00/month</span>.</p>
                </div>
                <Cta to="/membership" variant="volt" size="lg" className="md:justify-self-end">Sign up here</Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — Facilities */}
      <section className="section-y bg-paper">
        <div className="container-x">
          <SectionHead index="03" eyebrow="Our facilities" title={<>Two venues.<br /><span className="editorial font-normal">One standard.</span></>} intro="Two state-of-the-art facilities in the Alpharetta area — 21 badminton courts, 7 pickleball courts, and a dedicated table tennis arena." />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {contact.locations.map((l, i) => (
              <Reveal key={l.key} delay={i * 0.1} className="group">
                <div className="relative">
                  <RevealImage src={i === 0 ? img.facilityBadmintonHall : img.facilityPickleballIndoor} alt={l.name} className="aspect-[16/11]" />
                  <span className="eyebrow absolute left-5 top-5 bg-paper px-3 py-1.5 text-onyx">{l.city}</span>
                </div>
                <div className="flex flex-col justify-between gap-6 border-b border-onyx/15 py-7 sm:flex-row sm:items-end">
                  <div>
                    <h3 className="font-display text-3xl font-medium tracking-tight">{l.name}</h3>
                    <p className="mt-2 text-muted-foreground">{l.address}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{l.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}</p>
                  </div>
                  <a href={l.map} target="_blank" rel="noopener noreferrer" className="eyebrow flex shrink-0 items-center gap-2 link-line">Directions <ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Coaching */}
      <section className="section-y bg-navy-deep text-paper">
        <div className="container-x">
          <SectionHead dark index="04" eyebrow="Performance & coaching" title={<>Interested to<br />get trained?</>} intro="Enroll yourself — or enroll your junior. Structured pathways from first grip to national-level competition." />
          <ul className="mt-16 border-t border-line-dark">
            {([
              ["Badminton Coaching", "Shuttle Sparks → Fortius Strikers", "/badminton-coaching", img.coachKathir],
              ["Pickleball Coaching", "Paddle Foundation → Paddle Titans", "/pickleball", img.sportPickleball],
              ["Table Tennis Coaching", "Beginner → Advanced & Private", "/tabletennis", img.coachMichael],
              ["FAST Performance Training", "Fortius Agility Strength Training", "/pricing-plans/fast", img.promoFast],
            ] as [string, string, string, string][]).map(([t, sub, to, im], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <Link to={to} className="group relative grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-line-dark py-8 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:py-10">
                  <span className="font-display text-sm text-paper/40">0{i + 1}</span>
                  <span className="font-display text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">{t}</span>
                  <span className="hidden text-paper/55 md:block">{sub}</span>
                  <ArrowUpRight className="h-6 w-6 text-volt transition-transform duration-500 group-hover:rotate-45" />
                  <img src={im} alt="" loading="lazy" className="pointer-events-none absolute right-7 top-1/2 hidden h-40 w-32 -translate-y-1/2 rotate-3 object-cover opacity-0 transition-all duration-500 group-hover:-rotate-2 group-hover:opacity-100 lg:block" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 — Membership */}
      <section className="section-y bg-bone">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-navy"><span className="text-stone">05</span><span className="h-px w-8 bg-navy" />Membership</p>
            <h2 className="display-lg mt-6">Tailor made<br />for <span className="editorial font-normal">everyone.</span></h2>
            <p className="lede mt-8 max-w-md text-muted-foreground">Unlimited open play, member-only events, free gym access and no long-term contracts.</p>
            <Cta to="/membership" className="mt-10" size="lg">View membership plans</Cta>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {([["Badminton", "$65", "Adult / month", "bg-navy text-paper", "text-volt", img.facilityBadmintonPlay], ["Pickleball", "$240", "Annual membership", "bg-volt text-volt-foreground", "text-navy", img.sportPickleball], ["Table Tennis", "$55", "Adult / month", "bg-paper text-onyx ring-1 ring-navy/10", "text-navy", img.sportTableTennis], ["Combo", "$85", "Adult / month · all sports", "bg-ink text-paper", "text-volt", img.facilityCourtsWide]] as const).map(([s, p, t, c, pc, im], i) => (
              <Reveal key={s} delay={i * 0.06}>
                <Link to="/membership" className={`group relative block overflow-hidden rounded-3xl p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:rotate-[-1deg] hover:shadow-2xl md:p-8 ${c}`}>
                  <img src={im} alt="" loading="lazy" className="absolute -right-6 -top-6 h-24 w-24 rounded-full object-cover opacity-90 ring-4 ring-current/10 transition-transform duration-700 group-hover:scale-125 md:h-28 md:w-28" />
                  <p className="eyebrow relative opacity-80">{s}</p>
                  <p className={`relative mt-10 font-display text-5xl font-bold tracking-tighter md:text-7xl ${pc}`}>{p}</p>
                  <p className="relative mt-2 text-sm opacity-75">{t}</p>
                  <ArrowUpRight className="relative mt-6 h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Camps & 08 Events */}
      <section className="grid bg-ink text-paper lg:grid-cols-2">
        <Link to="/copy-of-camps" className="img-zoom group relative isolate flex min-h-[80svh] items-end overflow-hidden p-8 md:p-14">
          <img src={img.facilityHallPlayers} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="scrim-bottom absolute inset-0 -z-10" />
          <div>
            <p className="eyebrow text-volt">06 · Camps &amp; training</p>
            <h2 className="display-md mt-4">Train like a champion.</h2>
            <p className="mt-4 max-w-md text-paper/70">Thanksgiving Break, Winter and Summer multi-racquet camps. Half-day or full-day. Sibling discount 10%.</p>
            <span className="eyebrow mt-8 inline-flex items-center gap-2 link-line">Explore camps <ArrowUpRight className="h-4 w-4" /></span>
          </div>
        </Link>
        <Link to="/events-list" className="img-zoom group relative isolate flex min-h-[80svh] items-end overflow-hidden p-8 md:p-14">
          <img src={img.tournamentTableTennis} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="scrim-bottom absolute inset-0 -z-10" />
          <div>
            <p className="eyebrow text-volt">07 · Events &amp; tournaments</p>
            <h2 className="display-md mt-4">Fortius Atlanta Badminton Open — 2026</h2>
            <p className="mt-4 text-paper/70">Fri, Nov 20 · Fortius Sports Academy</p>
            <span className="eyebrow mt-8 inline-flex items-center gap-2 link-line">Upcoming events <ArrowUpRight className="h-4 w-4" /></span>
          </div>
        </Link>
      </section>

      {/* 09 — Referral */}
      <section className="bg-volt text-volt-foreground">
        <div className="container-x grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-center md:py-28">
          <Reveal>
            <p className="eyebrow">08 · Refer and win!!!</p>
            <h2 className="display-lg mt-5">Refer more.<br />Win more.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4 text-lg font-medium">
              <li className="border-b border-onyx/20 pb-4">10% OFF on First Month for Both*</li>
              <li className="border-b border-onyx/20 pb-4">Chance to Win a $100 Pro-Shop Credit*</li>
            </ul>
            <Cta to="/refer" size="lg" className="mt-8">Refer Now!</Cta>
          </Reveal>
        </div>
      </section>

      {/* 10 — Pro Shop */}
      <section className="section-y bg-paper">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <RevealImage src={img.proshopApparel} alt="Fortius Pro Shop apparel and equipment" className="aspect-[16/11]" />
          <Reveal delay={0.1}>
            <p className="eyebrow flex items-center gap-3 text-navy"><span className="text-stone">09</span><span className="h-px w-8 bg-navy" />Pro Shop</p>
            <h2 className="display-lg mt-6">Gear up for<br />the game.</h2>
            <p className="mt-8 text-muted-foreground">Top-quality equipment and apparel — from pickleball and badminton essentials to the latest sports accessories. Visit us in-store for expert advice and premium gear tailored for champions.</p>
            <div className="mt-10 flex items-center gap-10">
              <img src={img.brandYonex} alt="Yonex" loading="lazy" className="h-8 w-auto" />
              <img src={img.brandSelkirk} alt="Selkirk Sport" loading="lazy" className="h-6 w-auto invert" />
            </div>
            <Cta to="/pro-shop" variant="ghostDark" className="mt-10">Visit the Pro Shop</Cta>
          </Reveal>
        </div>
      </section>

      {/* 11 — Final statement */}
      <section className="grain relative isolate overflow-hidden bg-ink text-paper">
        <img src={img.closingGrip} alt="" loading="lazy" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" />
        <div className="container-x py-32 md:py-48">
          <Reveal>
            <h2 className="display-xl">Your game.<br /><span className="text-paper/60">Your journey.</span><br /><span className="text-volt">Your Fortius.</span></h2>
            <Cta to="/membership" variant="volt" size="lg" className="mt-12">Join the Fortius community</Cta>
          </Reveal>
        </div>
      </section>
    </>
  );
}
