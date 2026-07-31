/* ============================================================
   ALPANAFLIX — CONTENT FILE
   ------------------------------------------------------------
   Edit everything below to personalize the site.

   TO ADD A REAL PHOTO:
   1. Put your image file in the same folder as this file
      (e.g. "photo1.jpg")
   2. Set  image: "photo1.jpg"   on the card you want it on
   3. If image is left as "" (empty), a nice colored placeholder
      card with the title will show instead — so you can publish
      now and swap photos in whenever you have them.

   TO ADD A VIDEO PREVIEW (plays on hover, like Netflix):
   1. Put a short video file (5-15 sec, .mp4 works best) in the
      same folder, e.g. "clip1.mp4"
   2. Add a video field to that card:  video: "clip1.mp4"
   3. Keep the "image" field too — it's the still photo shown
      before you hover, and the video plays over it on hover.
      Example:
      { title: "Beach Day", image: "beach.jpg", video: "beach-clip.mp4", ... }
   4. Keep clips SHORT and compressed — big files slow the site
      down a lot, especially on mobile data. Under ~10MB per
      clip is a good target.
   5. Clicking the card still opens the full modal, where the
      video plays with sound and controls if present.

   HERO SECTION:
   - Set heroImage below to a photo filename for the big banner.
   ============================================================ */

const HERO = {
  image: "", // e.g. "us-favorite.jpg"
};

const CARD_DATA = {

  continue: [
    { title: "The Day We Met", tag: "Pilot Episode", desc: "Where it all started. Neither of us knew what we were getting into. 10/10, no notes.", genre: "Origin Story", progress: 92, image: "" },
    { title: "First Trip Together", tag: "S1: Ep 4", desc: "The one where we learned how the other person actually travels.", genre: "Adventure", progress: 60, image: "" },
    { title: "That One Fight (We're Fine)", tag: "S1: Ep 7", desc: "Low point of the season, but the writers course-corrected beautifully.", genre: "Drama", progress: 35, image: "" },
    { title: "Meeting the Parents", tag: "S1: Ep 9", desc: "High stakes. Higher stress. Surprisingly good reviews.", genre: "Comedy", progress: 78, image: "" },
    { title: "Random Tuesday", tag: "S2: Ep 12", desc: "Nothing happened. It was perfect anyway.", genre: "Slice of Life", progress: 20, image: "" },
    { title: "Anniversary Special", tag: "S2: Ep 20", desc: "A milestone episode. Fans call it a top-10 all-timer.", genre: "Romance", progress: 88, image: "" },
  ],

  jokes: [
    { title: "The Nickname Nobody Else Understands", desc: "Classified information. Ask us in person and we still won't tell you.", genre: "Comedy", image: "" },
    { title: "\"You Know What I Mean\"", desc: "A saga in three words, understood only by the two of us.", genre: "Comedy", image: "" },
    { title: "The Impression You Do", desc: "Objectively not that accurate. Still makes me laugh every single time.", genre: "Parody", image: "" },
    { title: "That Text From 2AM", desc: "Context lost to time. Vibes remain immaculate.", genre: "Mystery-Comedy", image: "" },
    { title: "The Voice You Use For The Dog", desc: "An entire character with a backstory we made up together.", genre: "Comedy", image: "" },
    { title: "Our Made-Up Word For It", desc: "It's not in any dictionary. It should be.", genre: "Linguistics", image: "" },
  ],

  trips: [
    { title: "The Beach Trip", tag: "Travel Special", desc: "Sunburn: significant. Regret: none.", genre: "Travel", image: "" },
    { title: "The Road Trip Playlist Incident", tag: "Travel Special", desc: "Six hours, one aux cord, zero compromises reached.", genre: "Travel", image: "" },
    { title: "Getting Lost On Purpose", desc: "The best plan was having no plan at all.", genre: "Adventure", image: "" },
    { title: "The Trip Where It Rained The Whole Time", desc: "A weather disaster that somehow became a top memory.", genre: "Comedy-Drama", image: "" },
    { title: "That Tiny Restaurant We Found", desc: "Still think about that meal. Still can't find it on a map.", genre: "Food & Travel", image: "" },
    { title: "The Trip We're Planning Next", tag: "Coming Soon", desc: "Pre-production has already begun.", genre: "Travel", image: "" },
  ],

  romcom: [
    { title: "Meet Cute: Our Version", desc: "The genre's favorite trope, except this one's real.", genre: "Rom-Com", image: "" },
    { title: "The Grand Gesture", desc: "Exactly the kind of scene that gets clipped and shared online.", genre: "Rom-Com", image: "" },
    { title: "Slow Burn, Then Not So Slow", desc: "A pacing choice that, in retrospect, was perfect.", genre: "Rom-Com", image: "" },
    { title: "The Almost-Missed-It Timing", desc: "The universe cutting it closer than the script needed to.", genre: "Rom-Com Drama", image: "" },
    { title: "The Third Act Twist", desc: "No spoilers, but it works out. It really works out.", genre: "Rom-Com", image: "" },
  ],

  soon: [
    { title: "Season 3", tag: "Coming Soon", desc: "Renewed. Writers' room is already in session.", genre: "TBD", image: "" },
    { title: "The Next Big Trip", tag: "In Production", desc: "Currently in the planning-group-chat phase.", genre: "Travel", image: "" },
    { title: "Whatever Comes Next", tag: "Announced", desc: "No script yet. Excited to write it together.", genre: "Life", image: "" },
    { title: "The Home We'll Build", tag: "In Development", desc: "Still early, but pre-production looks promising.", genre: "Drama", image: "" },
  ],

  because: [
    { title: "Your Favorite Playlist, Ranked", desc: "A definitive, occasionally contested ranking.", genre: "Music", image: "" },
    { title: "Every Coffee Order You've Ever Had", desc: "A surprisingly deep catalog for one person.", genre: "Documentary", image: "" },
    { title: "The Show We Binge-Watched Too Fast", desc: "Finished in four days. Immediately wanted a rewatch.", genre: "Comfort Watch", image: "" },
    { title: "Sunday Mornings", desc: "The quietest, best-reviewed part of the whole show.", genre: "Slice of Life", image: "" },
    { title: "Every Time You Laughed Too Hard", desc: "A supercut. Somehow gets longer every year.", genre: "Comedy", image: "" },
  ],

};

/* ============================================================
   HOW THE PLACEHOLDER "POSTERS" LOOK:
   Each row cycles through this list of gradients so cards
   without a real photo still look colorful and distinct.
   ============================================================ */
const PLACEHOLDER_GRADIENTS = [
  "linear-gradient(135deg, #7A1030, #2C0714)",
  "linear-gradient(135deg, #1F3A5F, #0B1626)",
  "linear-gradient(135deg, #5C4A1F, #1F1808)",
  "linear-gradient(135deg, #1F5C4A, #081F17)",
  "linear-gradient(135deg, #4A1F5C, #170822)",
  "linear-gradient(135deg, #8C3A1F, #2B1006)",
  "linear-gradient(135deg, #1F4A5C, #071B22)",
];
