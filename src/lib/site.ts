// Business facts and external destinations — all taken verbatim from fsaatl.com.
export const contact = {
  phone: "(678) 505-0464",
  phoneHref: "tel:+16785050464",
  email: "fortius@fsaatl.com",
  locations: [
    {
      key: "gg",
      name: "Fortius @ Game & Grill",
      short: "Game & Grill",
      city: "Alpharetta",
      address: "5905 Ronald Reagan Blvd, Alpharetta, Georgia 30005",
      map: "https://www.google.com/maps/search/?api=1&query=5905+Ronald+Reagan+Blvd+Alpharetta+GA+30005",
      hours: [{ days: "Mon – Sun", time: "5:00 am – 11:00 pm" }],
      facts: ["15 badminton courts", "4 pickleball courts"],
    },
    {
      key: "arc",
      name: "Fortius @ ARC",
      short: "Atlanta Recreation Club",
      city: "Cumming",
      address: "2711 Pine Grove Rd, Cumming, Georgia 30041",
      map: "https://www.google.com/maps/search/?api=1&query=2711+Pine+Grove+Rd+Cumming+GA+30041",
      hours: [
        { days: "Mon – Fri", time: "4:00 pm – 9:00 pm" },
        { days: "Sat – Sun", time: "7:00 am – 6:00 pm" },
      ],
      facts: ["9 badminton courts", "Table tennis tables"],
    },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/fortius_sports_academy_atl/" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61573843050481" },
    { label: "YouTube", href: "https://www.youtube.com/@Fortiussports" },
  ],
};

export const ext = {
  badmintonMembership: "https://app.clubworx.com/s/wQmO2m1v",
  pickleballMembership: "https://app.clubworx.com/s/BJjHr2vC",
  tableTennisMembership: "https://app.clubworx.com/s/ErPzPBye",
  comboMembership: "https://app.clubworx.com/websites/fortius-sports-academy/waivers/pickleball-membership-1/signed_waivers/new",
  badmintonEnroll: "https://app.clubworx.com/s/sQ5T1wvz",
  pickleballEnroll: "https://app.clubworx.com/websites/fortius-sports-academy/waivers/badminton-coaching-1-1/signed_waivers/new",
  tableTennisEnroll: "https://app.clubworx.com/s/xCV0wahZ",
  coachingInterestForm: "https://www.wixforms.com/f/7422109400870945820",
  summerCampForm: "https://www.wixforms.com/f/7448854787870688330",
  springCampForm: "https://www.wixforms.com/f/7439690552443929630",
  makeUpClass: "https://www.fsaatl.com/reschedule-class",
  rescheduleClass: "https://www.fsaatl.com/reschedule-class",
  openTournament: "https://www.tournamentsoftware.com/tournament/5AA6988A-3A7F-455D-8945-0627A41B7F82",
  booking: (slug: string) => `https://www.fsaatl.com/booking-calendar/${slug}`,
  fastBuy: "https://www.fsaatl.com/pricing-plans/fast",
};

export type NavItem = { label: string; to: string; children?: { label: string; to: string; note?: string }[] };

export const nav: NavItem[] = [
  {
    label: "Academy",
    to: "/about-us",
    children: [
      { label: "About Us", to: "/about-us", note: "Mission, vision & Team Fortius" },
      { label: "Rules & Regulations", to: "/rules-regulations", note: "Policies, terms & conditions" },
      { label: "Careers", to: "/careers", note: "Fortius & Antera Restaurant" },
    ],
  },
  {
    label: "Membership",
    to: "/membership",
    children: [
      { label: "Membership", to: "/membership", note: "Badminton, pickleball, table tennis, combo" },
      { label: "Referral Program", to: "/refer", note: "10% off for both + $100 credit" },
    ],
  },
  {
    label: "Camps",
    to: "/copy-of-camps",
    children: [
      { label: "Badminton", to: "/copy-of-camps", note: "Thanksgiving, Winter & Summer" },
      { label: "Table Tennis", to: "/campsfsa", note: "High Performance Summer Camp" },
    ],
  },
  {
    label: "Coaching",
    to: "/badminton-coaching",
    children: [
      { label: "Badminton", to: "/badminton-coaching", note: "Shuttle Sparks to Fortius Strikers" },
      { label: "Pickleball", to: "/pickleball", note: "Paddle Foundation to Paddle Titans" },
      { label: "Table Tennis", to: "/tabletennis", note: "Beginner to Advanced" },
      { label: "FAST", to: "/pricing-plans/fast", note: "Agility & strength training" },
    ],
  },
  { label: "Events", to: "/events-list" },
  { label: "Pro Shop", to: "/pro-shop" },
  { label: "Contact", to: "/contact-us" },
];
