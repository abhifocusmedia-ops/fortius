import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { ext } from "@/lib/site";

/** The original site's "FSA Coaching - Interest Form" lives on Wix Forms; we link to it directly. */
export function InterestBlock({ sport, askLocation = false }: { sport: string; askLocation?: boolean }) {
  const asks = ["Please pick a sport of your interest", "How did you hear about us?", "Have you been trained before?", "Have you been trained in Atlanta?", ...(askLocation ? ["Preferred coaching location — Fortius @ ARC (Cumming) or Fortius @ GG (Alpharetta)"] : [])];
  return (
    <section className="bg-volt text-volt-foreground">
      <div className="container-x grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <Reveal>
          <p className="eyebrow">FSA Coaching — Interest Form</p>
          <h2 className="display-lg mt-5">Start with an<br />assessment.</h2>
          <p className="mt-6 max-w-md text-lg">Tell us about the athlete and we’ll match them with the right {sport} program.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Athlete information we’ll ask for</p>
          <ul className="mt-4">{asks.map((a) => <li key={a} className="border-b border-onyx/20 py-3">{a}</li>)}</ul>
          <p className="mt-5 text-sm">I waive, release, and agree to indemnify Fortius Sports Academy, its staff, and affiliates from any and all claims, liabilities, or damages arising out of or related to participation in the assessment.</p>
          <Cta href={ext.coachingInterestForm} size="lg" className="mt-8">Open interest form</Cta>
        </Reveal>
      </div>
    </section>
  );
}
