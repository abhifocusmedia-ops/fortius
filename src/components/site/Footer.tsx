import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/site";
import { Cta } from "./Cta";

const cols: { title: string; links: [string, string][] }[] = [
  { title: "Academy", links: [["About Us", "/about-us"], ["Our Team", "/about-us"], ["Careers", "/careers"], ["Events", "/events-list"], ["Contact Us", "/contact-us"]] },
  { title: "Play", links: [["Membership", "/membership"], ["Referral Program", "/refer"], ["Book Online", "/book-online"], ["Pro Shop", "/pro-shop"]] },
  { title: "Coaching", links: [["Badminton", "/badminton-coaching"], ["Pickleball", "/pickleball"], ["Table Tennis", "/tabletennis"], ["FAST Training", "/pricing-plans/fast"]] },
  { title: "Camps", links: [["Badminton Camps", "/copy-of-camps"], ["Table Tennis Camps", "/campsfsa"]] },
];

export function Footer() {
  return (
    <footer className="grain bg-ink text-paper">
      <div className="container-x pt-24">
        <div className="grid gap-12 border-b border-line-dark pb-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="eyebrow text-volt">Fortius Sports Academy</p>
            <p className="mt-5 max-w-sm font-display text-3xl font-medium leading-tight tracking-tight">
              Badminton, pickleball &amp; table tennis in Alpharetta and Cumming, Georgia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta to="/book-online" variant="volt">Book Now</Cta>
              <Cta to="/membership" variant="ghostLight">Join Us</Cta>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="eyebrow text-paper/40">{c.title}</p>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([l, to]) => (
                    <li key={l}><Link to={to} className="link-line text-paper/80 hover:text-paper">{l}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 border-b border-line-dark py-14 md:grid-cols-3">
          {contact.locations.map((l) => (
            <div key={l.key}>
              <p className="eyebrow text-paper/40">{l.name}</p>
              <a href={l.map} target="_blank" rel="noopener noreferrer" className="link-line mt-3 block text-paper/85">{l.address}</a>
            </div>
          ))}
          <div>
            <p className="eyebrow text-paper/40">Get in touch</p>
            <a href={contact.phoneHref} className="link-line mt-3 block text-paper/85">Phone: {contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="link-line block text-paper/85">{contact.email}</a>
            <div className="mt-4 flex gap-5">
              {contact.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link-line text-sm text-paper/60 hover:text-paper">{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-10" />

        <div className="flex flex-col justify-between gap-3 pb-10 text-sm text-paper/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Fortius Sports Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/rules-regulations" className="link-line">Privacy Policy</Link>
            <Link to="/rules-regulations" className="link-line">Rules &amp; Regulations</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
