import { createFileRoute } from "@tanstack/react-router";
import { MailForm } from "@/components/site/MailForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/refer")({
  head: () => seo("Referral Program", "Refer a friend to Fortius: 10% membership discount for both of you and a chance to win a $100 store credit every month."),
  component: Refer,
});

const terms = [
  ["Eligibility", ["The referral program is open exclusively to active Fortius members only.", "Referrals must be new customers who are not currently or previously enrolled in Fortius memberships or coaching programs."]],
  ["Referral Benefits", ["Each successful referral enters the referring member and the referred customer into the monthly Raffle conducted by Fortius.", "The raffle prize Fortius Stores Credit (valued up to $100) Usage exception on .", "Raffle winners will be notified 15-20 days after the raffle via email and/or announced on the Fortius notice board, with instructions for prize collection."]],
  ["Discount Application", ["Upon a successful referral, a 10% discount will automatically apply to both the referring member and the new member.", "The discount will be applied only in the following month after the referral is confirmed."]],
  ["Program Rules", ["Discounts are non-transferable, cannot be exchanged for cash, and cannot be combined with other promotions unless specified.", "A referral is considered successful only after the referred friend has completed registration and made the required payment.", "Fortius reserves the right to verify all referrals and eligibility before applying discounts or awarding raffle entries.", "Fortius may modify or terminate the referral program at any time without prior notice."]],
  ["Additional Terms", ["Members may refer multiple friends; each successful referral equals one raffle entry.", "Prizes must be collected within 15 days of notification; unclaimed prizes may be forfeited.", "Fortius reserves the right to use winners’ names or photos for promotional purposes unless otherwise requested in writing.", "This program is not applicable for coaching referral. This is exclusive for membership referral only.", "Any disputes or interpretations of these Terms & Conditions will be decided solely by Fortius management, and all decisions are final."]],
] as const;

function Refer() {
  return (
    <>
      <PageHero eyebrow="Fortius Referral Program" lines={["Share the fun", "with friends."]} image={img.facilityLoungeCourts} intro="Fortius members, it’s time to share the game you love!" />
      <section className="bg-volt text-volt-foreground">
        <div className="container-x grid divide-y divide-onyx/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[["Invite", "Invite your friends to join Fortius."], ["10%", "Successful referral gets you and your friend 10% membership fee discount."], ["$100", "Chance to WIN a store credit worth $100 every month!"]].map(([k, v]) => (
            <div key={k} className="py-12 md:px-10 md:first:pl-0">
              <p className="font-display text-6xl font-semibold tracking-tighter">{k}</p><p className="mt-4 text-lg">{v}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-y bg-bone">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="display-md">The more friends you refer, the more discount and chances you get to win!</h2>
            <p className="editorial mt-8 text-2xl text-muted-foreground">Be a part of growing the Fortius family—because champions are made together.</p>
          </Reveal>
          <Reveal delay={0.1} className="bg-paper p-8 md:p-12">
            <p className="eyebrow mb-8 text-navy">Referral form</p>
            <MailForm
              subject="Fortius Referral Program"
              submitLabel="Submit"
              fields={[
                { name: "name", label: "Name" }, { name: "phone", label: "Phone Number", type: "tel" },
                { name: "email", label: "Email", type: "email", full: true },
                { name: "referredBy", label: "Referred By" }, { name: "refPhone", label: "Referrer’s Phone Number", type: "tel" },
                { name: "refEmail", label: "Referrer’s Email", type: "email", full: true },
                { name: "interest", label: "Your Interest", type: "checkboxes", required: true, full: true, options: ["Badminton Membership", "Badminton Coaching", "Pickleball Membership", "Pickleball Coaching"] },
              ]}
              consent="I agree to the terms & conditions below!"
            />
          </Reveal>
        </div>
      </section>
      <section className="section-y bg-paper">
        <div className="container-x">
          <p className="eyebrow text-navy">Fortius Friends Referral Program – Terms &amp; Conditions</p>
          <div className="mt-12 grid items-start gap-4 md:grid-cols-2">
            {terms.map(([t, items], i) => (
              <Reveal key={t} delay={i * 0.04} className="rounded-2xl bg-bone p-7 ring-1 ring-navy/10">
                <h3 className="font-display text-2xl font-medium tracking-tight"><span className="mr-3 inline-grid h-9 w-9 place-items-center rounded-full bg-navy align-middle font-display text-sm text-volt">{i + 1}</span>{t}</h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">{items.map((x) => <li key={x} className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-volt">{x}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
