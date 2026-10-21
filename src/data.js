export const brand = {
  name: "24/7 Marketing Solutions",
  short: "24/7 MS",
  email: "info@247marketingsolution.com",
  phone: "+92 312 2407538",
  phoneHref: "tel:+923122407538",
  whatsapp: "https://wa.me/923122407538",
  addressLines: [
    "M1-411, Country Tower Phase 2",
    "Buffer Zone 15B",
    "Karachi, Sindh, Pakistan",
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=M1-411+Country+Tower+Phase+2+Buffer+Zone+15B+Karachi+Sindh+Pakistan",
};

export const nav = [
  {
    label: "Services",
    sub: "Always-on growth",
    to: "/services",
    children: [
      { label: "Google Ads (PPC)", to: "/services/ppc" },
      { label: "Social Media Marketing", to: "/services/ssm" },
      { label: "Ad Networks", to: "/services/ad-networks" },
      { label: "Software Services", to: "/services/software" },
    ],
  },
  { label: "Work", sub: "Client results", to: "/work" },
  { label: "About", sub: "Our history", to: "/about" },
  { label: "Contact Us", sub: "Information", to: "/contact" },
];

export const services = [
  {
    slug: "ppc",
    number: "01",
    title: "Google Ads / PPC",
    short: "Search, shopping, and Performance Max built around CPA — not vanity clicks.",
    body: "Paid search is still the fastest way to sit in front of people who are already looking to buy. We build account structure, negatives, and bid rules that hold up overnight, then keep watching the auction after hours.",
    points: ["Search & Performance Max", "Shopping & feed hygiene", "Landing-page tests tied to CPA"],
  },
  {
    slug: "ssm",
    number: "02",
    title: "Social Media Marketing",
    short: "SSM that treats paid social as a performance channel, not a content calendar.",
    body: "Meta, TikTok, and LinkedIn get creative tests, audience cuts, and daily pacing. Spend does not sit idle because nobody is at the desk — we run social like a sales floor that never closes.",
    points: ["Meta, TikTok, LinkedIn", "Creative iteration & UGC", "Retargeting that converts"],
  },
  {
    slug: "ad-networks",
    number: "03",
    title: "Ad Networks",
    short: "Display, native, and programmatic that follow the buyer after search.",
    body: "We mix networks by margin, not habit. Frequency caps, brand-safe placements, and remarketing keep your offer in front of people who already showed intent — without lighting budget on leftover inventory.",
    points: ["Display & native", "Programmatic & remarketing", "Network mix by unit economics"],
  },
  {
    slug: "software",
    number: "04",
    title: "Software Services",
    short: "Tracking, landing pages, dashboards, and the tools that make spend accountable.",
    body: "If ads cannot see the sale, they cannot be optimized. We build conversion events, funnels, lead routing, and internal tools so media, creative, and operations share one source of truth.",
    points: ["Pixels & server-side tracking", "Landing pages & funnels", "Dashboards & automations"],
  },
  {
    slug: "meta-ads",
    number: "05",
    title: "Meta Ads / Performance",
    short: "Always-on paid social with creative fatigue checks and tight ROAS rules.",
    body: "Performance campaigns on Meta need more than a weekly report. We rotate creative, kill losers fast, and scale only when the cost per result still makes sense on the P&L.",
    points: ["Advantage+ and manual setups", "Creative testing grid", "Catalog & retargeting"],
  },
  {
    slug: "tracking",
    number: "06",
    title: "Tracking & Analytics",
    short: "Events your sales team can trust — not a pixel that fires on every pageview.",
    body: "We implement clean conversion tracking, consent-aware tags, and reporting that ties spend to leads, sales, or booked calls. No more arguing about whose dashboard is right.",
    points: ["GA4 & ad pixels", "CRM lead matching", "Live cost-per-result views"],
  },
  {
    slug: "landing-pages",
    number: "07",
    title: "Landing Pages & Funnels",
    short: "Pages that match the ad, load fast, and give the form a reason to convert.",
    body: "A great campaign on a slow, generic page is wasted money. We design and ship landing pages and multi-step forms that speak to the same offer the click promised.",
    points: ["Speed-first builds", "Offer-matched copy", "A/B tests on the money page"],
  },
  {
    slug: "always-on",
    number: "08",
    title: "Always-On Campaign Ops",
    short: "Night-shift monitoring so a weekend spike or a midnight leak does not wait until Monday.",
    body: "Auctions do not pause at 6pm. We watch pacing, broken pixels, and creative drop-off on a 24-hour loop — which is the point of the name on the door.",
    points: ["Pacing & budget guards", "Broken-tracking alerts", "Same-day creative kills"],
  },
];

export const clients = [
  "Northline Retail",
  "Harbor Dental",
  "Keystone Realty",
  "Atlas Auto Group",
  "Willow Clinics",
  "Brightpath Schools",
  "Summit HVAC",
  "Oak & Iron Homes",
];

export const work = [
  {
    title: "Local service brand, paid search",
    tag: "PPC",
    result: "CPA down 38% in 90 days while lead volume held.",
    industry: "Home services",
  },
  {
    title: "Clinic group, Meta + Google",
    tag: "SSM + PPC",
    result: "Booked consults up without raising monthly spend.",
    industry: "Healthcare",
  },
  {
    title: "Retail catalog, ad networks",
    tag: "Ad networks",
    result: "Remarketing recovered abandoned carts after search went quiet.",
    industry: "Ecommerce",
  },
  {
    title: "B2B lead desk, tracking rebuild",
    tag: "Software",
    result: "Sales finally saw which campaigns closed — not just which clicked.",
    industry: "Professional services",
  },
  {
    title: "Education offer, landing funnel",
    tag: "Software + PPC",
    result: "Form completion rose after the page matched the ad promise.",
    industry: "Education",
  },
  {
    title: "Multi-location retailer, always-on ops",
    tag: "Campaign ops",
    result: "Overnight budget leaks caught the same night, not the next week.",
    industry: "Retail",
  },
];

export const reviews = [
  {
    name: "Khalid S.",
    text: "They treat paid media like an operations job. Someone is actually watching the account, not just sending a monthly PDF.",
  },
  {
    name: "Sofia R.",
    text: "Social and search finally talk to each other. Same offer, same tracking, fewer surprises.",
  },
  {
    name: "Marcus T.",
    text: "The software side is what sold us. Landing pages and pixels were broken before they touched the ads.",
  },
  {
    name: "Amira N.",
    text: "We needed a local team that did not disappear after launch. 24/7 is the first shop that meant it.",
  },
];

export const faqs = [
  {
    q: "What services does 24/7 Marketing Solutions offer?",
    a: "We run pay-per-click, social media marketing, ad networks, and the software around them — tracking, landing pages, dashboards, and always-on campaign operations.",
  },
  {
    q: "How is this different from a 9-to-5 agency?",
    a: "Auctions, creatives, and pixels fail at night. We staff monitoring around the clock so a broken tag or a runaway campaign does not wait until Monday.",
  },
  {
    q: "How fast will we see results?",
    a: "PPC and paid social can move in days once tracking is clean. Software and funnel work often come first — otherwise you are optimizing noise. SEO-style timelines do not apply to the channels we run.",
  },
  {
    q: "Do I need all four services?",
    a: "No. Many clients start with PPC or social. We add networks and software when the unit economics are ready — not as a bundle you do not need.",
  },
  {
    q: "How do we get started?",
    a: "Send a brief on the contact form, email hello@247marketingsolutions.com, or call. We come back with a next step — usually the same day — not a 40-page deck.",
  },
  {
    q: "Will this increase sales?",
    a: "We aim spend at people already looking, then make sure the page and tracking can close. Sales lift depends on the offer and follow-up. We will tell you if the math does not work before you buy media.",
  },
];

export const rotating = ["Launch", "Optimize", "Scale", "Repeat"];
