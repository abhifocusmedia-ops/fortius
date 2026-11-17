import heroSmash from "@/assets/hero-smash.jpg";
import closingGrip from "@/assets/closing-grip.jpg";
import fortiusLogo from "@/assets/fortius-logo.avif";

// Keep image references local. The *.asset.json files point at Lovable's
// /__l5e asset gateway, which is not available in a standalone Vite build and
// causes every image using those URLs to return 404 locally.
export const img = {
  brandSelkirk: closingGrip,
  brandYonex: closingGrip,
  coachAlex: heroSmash,
  coachDaniel: heroSmash,
  coachHeymard: heroSmash,
  coachKathir: heroSmash,
  coachMichael: heroSmash,
  coachSanjeeth: heroSmash,
  coachVinh: heroSmash,
  facilityBadmintonHall: heroSmash,
  facilityBadmintonPlay: heroSmash,
  facilityCourtsWide: heroSmash,
  facilityHallPlayers: heroSmash,
  facilityLoungeCourts: closingGrip,
  facilityLounge: closingGrip,
  facilityPickleballCourts: closingGrip,
  facilityPickleballIndoor: closingGrip,
  logoMark: closingGrip,
  logoWordmark: fortiusLogo,
  promoBadmintonTraining: heroSmash,
  promoBoltSwift: heroSmash,
  promoFast: heroSmash,
  promoFeedingMachine: heroSmash,
  proshopApparel: closingGrip,
  proshopCounter: closingGrip,
  sportPickleball: closingGrip,
  sportSeniors: closingGrip,
  sportTableTennis: closingGrip,
  tournamentTableTennis: closingGrip,
  heroSmash,
  closingGrip,
};
