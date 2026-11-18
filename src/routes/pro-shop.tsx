import { createFileRoute } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { contact } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/pro-shop")({
  head: () => seo("Pro Shop", "Yonex badminton and Selkirk Sport pickleball gear, apparel and stringing service at the Fortius Pro Shop."),
  component: ProShop,
});

function ProShop() {
  return (
    <>
      <PageHero eyebrow="Pro Shop" lines={["Gear up", "for the game."]} image={img.proshopCounter} intro="Visit us in-store for expert advice and premium gear tailored for champions!" />
      <section className="section-y bg-paper">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-medium leading-[1.2] tracking-tight">Top-quality badminton and pickleball gear and apparel — everything you need to play your best.</p>
            <p className="editorial mt-8 text-xl text-muted-foreground">"Fortius Sports Academy equips and trains athletes of all levels, from beginners to pros. Get the best gear and expert coaching to elevate your game!"</p>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-px bg-onyx/15 sm:grid-cols-2">
            <div className="bg-paper p-8">
              <img src={img.brandYonex} alt="Yonex" loading="lazy" className="h-8 w-auto" />
              <p className="eyebrow mt-8 text-navy">Badminton</p>
              <p className="mt-3 text-muted-foreground">Shuttles, Rackets, Shoes, Kitbags, T-Shirts, Shorts, Stringing service and more.</p>
            </div>
            <div className="bg-paper p-8">
              <img src={img.brandSelkirk} alt="Selkirk Sport" loading="lazy" className="h-6 w-auto invert" />
              <p className="eyebrow mt-8 text-navy">Pickleball</p>
              <p className="mt-3 text-muted-foreground">Paddles, Shoes, Kitbags, T-Shirts, Shorts and accessories.</p>
            </div>
            <p className="bg-bone p-8 sm:col-span-2">Yonex badminton equipment and Selkirk Sport pickleball paddles — rackets, shuttles, grips, bags and more.</p>
          </Reveal>
        </div>
      </section>
      <section className="section-y bg-ink text-paper">
        <div className="container-x">
          <p className="eyebrow text-volt">Deal Zone</p>
          <h2 className="display-lg mt-5">In-store now.</h2>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[[img.promoBoltSwift, "Bolt & Swift shuttles"], [img.promoBadmintonTraining, "Badminton training — walk-in"], [img.promoFast, "FAST — Stay fit, not still"], [img.promoFeedingMachine, "Badminton feeding machine rental"]].map(([s, a]) => (
              <Reveal key={a} className="img-zoom aspect-[3/4] bg-paper"><img src={s} alt={a} loading="lazy" className="h-full w-full object-cover" /></Reveal>
            ))}
          </div>
          <RevealImage src={img.proshopApparel} alt="Fortius Pro Shop interior" className="mt-4 aspect-[21/9]" />
          <div className="mt-12 flex flex-wrap gap-3"><Cta href={`tel:${contact.phone}`} variant="volt">Call {contact.phone}</Cta><Cta to="/contact-us" variant="ghostLight">Visit us</Cta></div>
        </div>
      </section>
    </>
  );
}
