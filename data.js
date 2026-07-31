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
  image: "IMG-20260507-WA0008.jpg", // e.g. "us-favorite.jpg"
};

const CARD_DATA = {

  continue: [
    { title: "The Day We Met", tag: "Pilot Episode", desc: "Night of garba we really met for the first time ,talked for the first time ,tune chasma manga tha merese game khelne ke liye we did babuji wala dance hahaha we lay down on the gorund we laughed hahaha the night was i guess the night of begining .", genre: "Origin Story", progress: 92,  video: "VID-20260718-WA0007.mp4" },
    { title: "First Trip Together", tag: "S1: Ep 4", desc: "MANALI jaha jaake crazy shits hojati hai logo ki life ki sabse khas trip hoti hai vo meri bhi thi cause it taught me more about you it thought me to never let you go it taught me things i didn't even know about myself like i can kiss u after the vomiting and u know it was lovely haha.", genre: "Adventure", progress: 60,video: "VID-20260718-WA0005.mp4"  },
    { title: "That One Fight (We're Fine)", tag: "S1: Ep 7", desc: "Ladaiya to bohot hoti hai like majorly meri shits ki wajah se par all these fight i think just bring us more closee and if i think about the best part of those fights is that its over and we are finee and sorry abhi nahi btane ke liye kaha gyaa hu mai ye kar rha hu.", genre: "Drama", progress: 35, image: "" },
    { title: "First flowers", tag: "S1: Ep 9", desc: "That day when u bring me that pink flower like wtff was that someone gave me flower someone so beautiful as you gave me pink flower that day i thought aisa kya daan kara maine vo fool ki mehak ohoo par ek baat thii terese khubsurat nahi tha vo", genre: "romcom", progress: 78, image: "IMG-20260210-WA0032_1.jpeg" },
    { title: "Random Tuesday", tag: "S2: Ep 12", desc: "the dayy u make the cheese cake for mee like texture was little ghewari but the taste will always resides at my toungue but after the taste of u know what hahahaah", genre: "Slice of Life", progress: 20, image: "" },
    { title: "12th january", tag: "S2: Ep 20", desc: "The day u bring momo for me, momo wasn't the part i came for i came for something more important something i never though i can have, something for which my heart can stop,something fow which i can feel this much youu alpana , you know on that day i just realized what i found and i can never let you goo I LOVE YOUU SOO SOO MUCH LIKE NO WORDS TO EXPLAIN.", genre: "Romance", progress: 88, image: "" },
  ],

  jokes: [
    { title: "The Nickname Nobody Else Understands", desc: "khushdumiyaa.", genre: "Comedy", image: "" },
    { title: "\"You Know What I Mean\"", desc: "knock knock pizza delivery", genre: "Comedy", image: "" },
    { title: "The Impression You Do", desc: "everytime you tell me about your day about anything about anyone it like someone is telling me a story and i fucking love your stories ", genre: "Parody", image: "" },
    { title: "Texting till 5AM", desc: "First time i talk to someone till 5 and the i feel ab to fas gaya ye dil mera", genre: "Mystery-Comedy", image: "" },
    { title: "Suti babuuu", desc: "voice note bhej diya kar", genre: "Comedy", image: "" },
    { title: "jute juti", desc: "juti saaallli", genre: "Linguistics", image: "" },
  ],

  trips: [
    { title: "manali trip", tag: "mera boyfriend hai bc", desc: "First kiss ,First fight,first sleep together and manu more firsts .", genre: "Travel", image: "" },
    { title: "The Road Trip", tag: "scootybuddy", desc: "college se ghar or tu mere peeche hahaha bear sutte no more par no sutta", genre: "Travel", image: "" },
    { title: "Getting Lost ", desc: "like tere hath me phone ho or mere hath me scottu gum to hona hi hai.", genre: "Adventure", image: "" },
    { title: "The Trip Where It Rained The Whole Time", desc: "bhigte bhigte college se ana hahahaaha suitta fir romantic mausam adhiquii 2 wali kiss universe wants us there haha.", genre: "Comedy-Drama", image: "" },
    { title: "That Tiny Restaurant We Found", desc: "Still think about that meal. Still can't find it on a map.", genre: "Food & Travel", image: "" },
    { title: "The Trip We're Planning Next", tag: "banaras coming soon", desc: "dimag me haiiiii.", genre: "Travel", image: "" },
  ],

 

  soon: [
    { title: "Season 3", tag: "Coming Soon", desc: "Renewed. Writers' room is already in session.", genre: "TBD", image: "" },
    { title: "delhi ghumna", tag: "In Production", desc: "tujhse milna purani delhi mee.", genre: "Travel", image: "" },
  
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
