// Coaching programs — copy preserved from fsaatl.com.
export type Program = {
  name: string;
  nickname?: string;
  tagline?: string;
  description: string;
  focus: string[];
  idealFor: string[];
  schedule: string[];
  cta?: { label: string; href: string };
};

import { ext } from "@/lib/site";

export const badmintonPrograms: Program[] = [
  {
    name: "Beginner Program", nickname: "Shuttle Sparks", tagline: "Ignite the Passion. Build the Basics.",
    description: "Beginner Program is Fortius foundational program designed for young or first-time players. Through engaging and fun-filled sessions, kids are introduced to the world of badminton while learning the essential skills that form the building blocks of the game.",
    focus: ["Basic grip, stance, and footwork", "Introduction to racket and shuttle coordination", "Fun games to build agility, balance, and movement", "Developing interest and confidence through play-based learning"],
    idealFor: ["Children aged 5+ or anyone beginning their badminton journey with zero to minimal experience."],
    schedule: ["Each session is for 1 hour", "Minimum sessions - 2/week"],
  },
  {
    name: "Intermediate Program", nickname: "Smash Starters", tagline: "Level Up. Learn the Game.",
    description: "Intermediate Program takes students beyond the basics, guiding them into more structured gameplay and skill development. The focus is on consistency, technique refinement, and introducing tactical awareness while continuing to enjoy the sport.",
    focus: ["Stroke development (clears, drops, smashes, net shots)", "Footwork drills and movement patterns", "Matchplay basics and scoring", "Physical conditioning and discipline building"],
    idealFor: ["Players who have completed beginner training or have basic playing experience and are ready to play structured matches."],
    schedule: ["Each session is for 1 hour - 3 sessions every day", "Minimum sessions - 2/week"],
  },
  {
    name: "Advanced Program", nickname: "Court Commanders", tagline: "Train Hard. Play Smart.",
    description: "Advanced Program is built for athletes ready to elevate their game to a competitive level. This program dives deeper into strategy, match temperament, endurance, and advanced shot variation. Players will be groomed to compete in local and regional tournaments.",
    focus: ["Advanced shot selection, deception, and rallies", "On-court tactical understanding", "Mental strength and match preparation", "Regular sparring and match analysis", "Fitness, endurance, and injury prevention"],
    idealFor: ["Tournament-ready players or those actively competing who want to step up their level of performance and consistency."],
    schedule: ["Each session is for 1 - 2 hour - 2 sessions every day", "Minimum sessions - 3/week"],
  },
  {
    name: "High Performance Program", nickname: "Fortius Strikers", tagline: "Chase Excellence. Compete at the Top.",
    description: "High Performance is our invitation-only or assessment based, high-performance program designed for serious athletes aspiring to compete at state, national, or international levels. This program offers personalized coaching, high-intensity training sessions, video analysis, and tournament mentorship.",
    focus: ["Game-specific training plans and periodization", "Match strategy and opponent analysis", "Peak fitness conditioning and recovery planning", "Technical fine-tuning and mental toughness coaching", "National-level exposure and tournament support"],
    idealFor: ["Top-level junior players, national ranking athletes, or those preparing for elite tournaments with goals of reaching the highest levels of competitive badminton."],
    schedule: [],
  },
  {
    name: "Catch Them Young - Junior Program", nickname: "Catch Them Young", tagline: "Tiny Grips to tournament glory",
    description: "A fun and structured grassroots program that builds a strong badminton foundation at the right age. Our goal is to develop young players technically, physically, and mentally so they can confidently enter competitive badminton within 2–3 years",
    focus: ["Fun Early Engagement: Age-appropriate drills, games, and activities that spark excitement for badminton.", "Strong Skill Base: Grip, footwork, basic strokes, balance, and coordination taught in a playful but structured way.", "Physical Growth: Strength, agility, flexibility, and endurance designed for young athletes.", "Mindset Training: Discipline, focus, confidence, and sportsmanship through friendly matches and team activities.", "Clear Pathway: Step-by-step progression from beginner to pre-competitive to competitive levels.", "Parent Partnership: Guidance for parents to support their child’s development."],
    idealFor: ["Kids who have completed beginner lessons or have basic playing experience and are ready for structured match play."],
    schedule: ["Each session is for 1 hour - 1 sessions every day", "Minimum sessions - 2/week"],
  },
  {
    name: "1-on-1 Private Badminton Training", nickname: "Private Training", tagline: "Your Game. Your Goals. Your Coach.",
    description: "This is a highly personalized one-on-one coaching program tailored to meet the individual goals, pace, and potential of each player. Whether you’re just starting out or pushing toward elite-level competition, this private training experience is designed to accelerate skill development through focused attention, custom planning, and deep technical guidance.",
    focus: ["Customized Training Plans: Built around individual strengths, weaknesses, and goals", "Direct Coach Attention: Full session focus from experienced, certified coaches", "Video Analysis & Feedback: Technique breakdown, stroke correction, match reviews", "Physical Conditioning & Recovery Guidance: Tailored fitness and rest planning", "Progress Tracking: Regular assessments and data-driven improvement plans"],
    idealFor: ["Beginners needing strong fundamentals", "Intermediate players needing to fix specific gaps", "Advanced players looking to sharpen competitive edge", "Athletes returning from injury or preparing for tournaments"],
    schedule: ["Each session is for 1 hour - 1 sessions every day", "Minimum sessions - Need Based"],
    cta: { label: "Book Now", href: "/book-online" },
  },
];

export const pickleballPrograms: Program[] = [
  {
    name: "Beginner Program", nickname: "Paddle Foundation", tagline: "Where Champions Begin.",
    description: "Paddle Foundation introduces players to the world of pickleball in a supportive, fun-filled environment. We focus on building strong mechanics and an understanding of the game through drills, games, and repetition.",
    focus: ["Grip & Technique: Forehand, backhand, dinks, drops, serves", "Footwork & Movement: Balance, positioning, and agility basics", "Rules & Etiquette: Scoring, boundaries, and respectful play", "Engagement: High-energy drills and mini-games to build coordination and joy", "Progression: Players are encouraged through milestone badges and game-readiness check-ins"],
    idealFor: ["New players, young athletes, and recreational learners building confidence."],
    schedule: ["Each session is for 1 hour - 3 sessions every day", "Minimum sessions - 2/week", "Max batch Size - 12"],
  },
  {
    name: "Intermediate Program", nickname: "Paddle Rise", tagline: "Level Up Your Skills. Own the Court.",
    description: "Paddle Rise is where players take their baseline skills to the next level. This phase emphasizes game understanding, movement strategy, and physical conditioning to build a smarter, stronger game.",
    focus: ["Shot Expansion: Returns, overheads, resets, volleys", "Footwork Mastery: Court coverage, split steps, lateral agility. Refining movement patterns for efficiency and agility.", "Tactical Awareness: Shot selection, partner communication, offensive/defensive formations", "Conditioning: Endurance, flexibility, and mobility", "Mental Skills: Focus, consistency, and match preparation"],
    idealFor: ["Players with basic game experience who want to enhance technique and begin competitive play."],
    schedule: ["Each session is for 1 hour - 3 sessions every day", "Minimum sessions - 2/week", "Max batch Size - 6 to 8"],
  },
  {
    name: "Advanced Program", nickname: "Paddle Commanders", tagline: "Train Smart. Play Sharp. Win More.",
    description: "Paddle Commanders blends high-level technical training with match tactics and pressure simulation. Athletes are taught how to play with purpose and compete with intelligence and grit.",
    focus: ["Advanced Techniques: Rolls, flicks, lobs, blocks, deceptive shots", "Game Strategy: Constructing points, exploiting opponent weaknesses", "Real Match Simulation: Scenarios, rotations, and scoreboard-based pressure", "Tactical Systems: Third-shot options, stacking strategies, transitional play", "Fitness & Recovery: Strength, power, recovery routines"],
    idealFor: ["Tournament players and advanced club competitors preparing for high-level play."],
    schedule: ["Each session is for 1 - 2 hour - 2 sessions every day", "Minimum sessions - 3/week", "Max batch Size - 8 to 10"],
  },
  {
    name: "High Performance Program", nickname: "Paddle Titans", tagline: "Precision. Pressure. Performance.",
    description: "Paddle Titans is an elite training program designed to push athletes to their full potential. This program integrates sport science, analytics, and psychological training with on-court mastery.",
    focus: ["Technical Mastery: ATPs, Ernie shots, counterpunching, full-court dominance", "Strategic Play: Game plans, opponent scouting, time-out management", "High-Performance Training: Periodized conditioning, altitude training, recovery protocols", "Mental Resilience: Pressure drills, visualization, breathing control, mindset shifts", "Pro Readiness: Tournament logistics, nutrition, media skills, sponsorship prep"],
    idealFor: ["Serious competitors aiming for national, collegiate, or pro-level success."],
    schedule: ["Each session is for 2 hour - 1 sessions every day", "Minimum sessions - 4/week", "Max batch Size - 10 to 12"],
  },
  {
    name: "Junior Program - Catch Them Young", nickname: "Catch Them Young", tagline: "Fun. Fundamentals. Future Champions.",
    description: "Catch Them Young is a grassroots pickleball development program designed especially for children aged 5 to 8 years. The program focuses on early talent identification, skill-building, and athletic development to create a strong foundation for young players. Within 2–3 years, kids will be ready to transition confidently into age-group tournaments-with a deep love for the game.",
    focus: ["Early Engagement: Introduce children to pickleball through playful drills, hand-eye coordination games, and movement activities that spark excitement and enthusiasm.", "Fundamental Skill Development: Teach the core skills of pickleball—paddle grip, footwork, dinks, volleys, serves, and court movement—using kid-friendly techniques and visuals.", "Athletic Foundation: Build agility, coordination, strength, and endurance with physical activities tailored for young bodies and growing minds.", "Mental Readiness & Sportsmanship: Cultivate focus, listening skills, teamwork, and good sportsmanship through friendly challenges and structured play.", "Structured Pathway: Lay out a clear development track: from beginner to pre-competitive to entry-level tournament play—all within 2–3 years.", "Parental Involvement: Guide and educate parents on how to support their child's growth—on and off the court—through regular updates and workshops."],
    idealFor: ["Players who have completed beginner training or have basic playing experience and are ready to play structured matches."],
    schedule: ["Each session is for 1 hour - 1 sessions every day", "Minimum sessions - 2/week", "Max batch Size - 10 to 12"],
  },
  {
    name: "1-on-1 Private Pickleball Coaching", nickname: "Prime Focus", tagline: "Own the Kitchen. Control the Court.",
    description: "Prime Focus is your personalized, one-on-one pickleball coaching experience designed to transform your game from the ground up. Whether you're just getting into the sport or preparing for your next tournament, this private training program delivers targeted instruction, smart strategy, and expert support tailored to your pace and goals. Our mission is simple: help you own the kitchen—and every other part of the court.",
    focus: ["Tailored Training Plans: Built around your unique strengths, weaknesses, and aspirations", "Full Coach Focus: 1-on-1 sessions with certified coaches who are 100% invested in your progress", "Video Analysis & Tactical Feedback: Technique reviews, strategy breakdowns, and match-play insights", "Flexible Scheduling: Train when it works for you—mornings, evenings, or weekends", "Sport-Specific Conditioning & Injury Prevention: Drills and recovery plans to stay quick, agile, and injury-free", "Progress Tracking & Goal Setting: Regular evaluations and data-backed adjustments to keep you moving forward"],
    idealFor: ["New Players looking to master the basics with confidence", "Recreational Players ready to step up their consistency and shot selection", "Competitive Athletes aiming for strategic edge and match preparedness", "Cross-Sport Players (e.g., tennis or badminton) transitioning to pickleball"],
    schedule: ["Each session is for 1 hour - 1 sessions every day", "Minimum sessions - Need Based", "Max batch Size - 1"],
  },
];

const ttHours = ["Monday - Friday (4pm to 9pm)", "Saturday - Sunday (9am to 12pm and 5pm to 8pm)"];
export const tableTennisPrograms: Program[] = [
  {
    name: "Beginner Program",
    description: "Our Beginner program is designed to help new players develop strong fundamentals and proper techniques. Sessions focus on improvement through guided practice, clear instruction, and hands-on drills.",
    focus: ["Building proper posture for control and balance", "Mastering the basic forehand stroke", "Learning the basic backhand stroke", "Introducing the basic push for defensive play", "Understanding stroke timing and rhythm", "Practicing fundamental serves for consistency", "Strength training for agility and endurance"],
    idealFor: ["New players, young athletes, and recreational learners build confidence."],
    schedule: ttHours,
  },
  {
    name: "Intermediate Program",
    description: "The Intermediate program helps players refine mechanics, improve anticipation, and understand advanced concepts like spin and positioning. This level bridges the gap between casual play and competitive training.",
    focus: ["Forehand counter and block techniques", "Backhand counter and block drills", "Understanding spin and shot variations", "Developing basic footwork for mobility", "Serve and receive fundamentals", "Learning core match strategy and point setup"],
    idealFor: ["Players with basic game experience who want to enhance technique and begin competitive play."],
    schedule: ttHours,
  },
  {
    name: "Advanced Program",
    description: "Our Advanced program is tailored for experienced athletes aiming for tournament-level performance. Training emphasizes precision, speed, strategy, and dynamic movement integration.",
    focus: ["Advanced forehand techniques: counter, block, loop, and flick", "Advanced backhand variations: counter, block, loop, and flick", "High-level footwork coordination and speed", "Advanced serve and receive strategies", "Connecting footwork with stroke play", "Developing advanced game strategy and tactical execution"],
    idealFor: ["Tournament players and advanced club competitors preparing for high-level play."],
    schedule: ttHours,
  },
  {
    name: "Private/Semi-Private Training",
    description: "This personalized coaching program is tailored to each player's goals, pace, and potential. Whether you're a beginner or aiming for elite competition, private training accelerates skill development with focused attention and customized guidance.",
    focus: ["Customized Training Plans: Built around individual strengths, weaknesses, and goals", "Direct Coach Attention: Full session focus from experienced, certified coaches", "Physical Conditioning & Recovery Guidance: Tailored fitness and rest planning"],
    idealFor: ["Beginners needing strong fundamentals", "Intermediate players needing to fix specific gaps", "Advanced players looking to sharpen competitive edge"],
    schedule: ttHours,
  },
];

export const enrollLinks = { badminton: ext.badmintonEnroll, pickleball: ext.pickleballEnroll, tableTennis: ext.tableTennisEnroll };
