import heroImg from "@/assets/hero-capetown.jpg";
import maryannImg from "@/assets/maryann-portrait.jpg";
import andreaImg from "@/assets/andrea.jpg";
import workTrail from "@/assets/work-trail.png";
import workBos from "@/assets/work-bos.png";
import workGlamtrails from "@/assets/work-glamtrails.png";
import workSwimrun from "@/assets/work-swimrun.png";
import workWildair from "@/assets/work-wildair.png";
import workSani2c from "@/assets/work-sani2c.png";
import workMotorshow from "@/assets/work-motorshow.png";
import workKingfish from "@/assets/work-kingfish.jpg";
import workVilaca from "@/assets/work-vilaca.png";

export const images = { heroImg, maryannImg, andreaImg };

export const contact = {
  email: "hello@maryannshawcommunications.co.za",
  phone: "+27 (83) 419-4235",
  phoneHref: "tel:+27834194235",
  whatsapp: "https://wa.me/27834194235",
  location: "Cape Town, South Africa",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/maryannshawcomms/",
      platform: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/maryann-shaw-communications",
      platform: "linkedin",
    },
    { label: "Facebook", href: "https://www.facebook.com/MaryannShawComms", platform: "facebook" },
  ] as const,
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "Team", to: "/team" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
  {
    title: "Public Relations",
    blurb: "Strategic PR designed to build credibility, visibility and meaningful media coverage.",
    detail:
      "We listen and get an understanding of what makes you and your business or event tick, then develop a comprehensive PR plan covering how and where you should feature editorially in the most appropriate media.",
  },
  {
    title: "Media Relations",
    blurb: "Connecting brands and people with the media audiences that matter to them.",
    detail:
      "We go to the media and build relationships on your behalf, using a very targeted approach that media appreciate and respond well to. Our strength lies in establishing relevant and compelling media angles around your story.",
  },
  {
    title: "Content Creation",
    blurb: "Press releases, articles, blogs, editorial content, copywriting and storytelling.",
    detail:
      "We draft press releases, feature articles, company profiles and other collateral that is used in pitching to the media and in telling your story consistently.",
  },
  {
    title: "Social Media",
    blurb:
      "Strategic social media management integrated with wider PR and communications activity.",
    detail:
      "We develop engaging content plans along with a strategy to reach and grow your audiences, and make sure those plans are executed effectively.",
  },
  {
    title: "Event PR",
    blurb: "Generating awareness, media interest and coverage around events and experiences.",
    detail:
      "We have a solid track record of working with events, particularly in the lifestyle and adventure sports arena, raising their profile across a broad spectrum of media.",
  },
  {
    title: "Influencer & Product PR",
    blurb: "Connecting relevant brands and products with influential voices and audiences.",
    detail:
      "Influencer campaigns, advertorial recommendations and other paid-for opportunities form part of a considered plan, never a scattergun approach.",
  },
  {
    title: "Corporate Communications",
    blurb: "Clear, strategic communications aligned with wider business and marketing objectives.",
    detail:
      "We work closely with your marketing team so that PR goals are aligned with overall marketing strategy, offering common-sense insights that further your business goals.",
  },
  {
    title: "Editorial Services",
    blurb: "Professional writing, editing and content refinement.",
    detail:
      "Writing and editing services for brands and individuals who need their words to work as hard as their ideas do.",
  },
];

export type WorkItem = {
  slug: string;
  client: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  /** Logo-style artwork: render contained on a neutral block instead of full-bleed. */
  contained?: boolean;
  story?: string[];
  quote?: { text: string; name: string; role: string };
  sourceUrl?: string;
};

export const work: WorkItem[] = [
  {
    slug: "bos",
    client: "BOS",
    category: "Brand & Product PR",
    description:
      "PR, copywriting and influencer work for the much-loved South African rooibos brand, including new product launches and national broadcast coverage.",
    image: workBos,
    alt: "BOS brand logo",
    contained: true,
    quote: {
      text: "Having worked with Maryann over the last 18 months I can highly recommend her for your PR, copy writing or influencer work. She has extensive experience and her strong list of industry PR contacts has resulted in exponential coverage for BOS.",
      name: "Will Battersby",
      role: "CEO, BOS Brands",
    },
    story: [
      "BOS is one of South Africa's best-loved rooibos brands, and our brief covered PR, copywriting and influencer work across a busy programme of product launches and brand moments.",
      "A highlight was the launch of the BOS x Siya Kolisi limited-edition can, where every can sold supported the Kolisi Foundation — a story that travelled well beyond the drinks pages because it connected a much-loved brand with real national impact.",
      "We also launched the BOS Sparkling Ice Tea range in lemon, tropical and strawberry, taking the brand into the carbonated drinks sector, and secured a Radio 702 and CapeTalk \u201cMoney Show\u201d interview with Bruce Whitfield to give the business story a national broadcast platform.",
    ],
  },
  {
    slug: "ultra-trail-cape-town",
    client: "Ultra-Trail Cape Town",
    category: "Event PR",
    description:
      "Expanding coverage of South Africa's premier trail running event beyond the trail community into mainstream media, before and during race week.",
    image: workTrail,
    alt: "Ultra-Trail Cape Town event logo",
    contained: true,
    quote: {
      text: "The Ultra-trail Cape Town Team was looking to expand the coverage that the event received to more mainstream media, rather than focus only on digital marketing and social media. We wanted someone who understood the event but who was well connected and could create content that spoke to audiences other than the trail running community. Maryann was the obvious choice and we have seen the benefits of having a committed PR partner on board.",
      name: "Sue Ullyet",
      role: "Ultra-Trail Cape Town",
    },
    story: [
      "Ultra-Trail Cape Town is South Africa's premier ultra-distance trail event, but its media presence sat largely within the trail running community. The brief was to build mainstream reach without losing the trust of the core audience.",
      "We built story angles that spoke to general news, lifestyle, travel and business audiences, and worked media access, interviews and content throughout the build-up and race week itself.",
      "RMB Ultra-trail Cape Town went on to join the World Trail Majors and became a worldwide bucket-list race, drawing international elite entries to South Africa. The 2021 edition alone generated over 80 pieces of media coverage.",
    ],
  },
  {
    slug: "glamtrails",
    client: "Glamtrails",
    category: "Lifestyle & Tourism",
    description:
      "PR and social media management for a start-up offering walking tours with wine and food experiences in the Hemel-en-Aarde Valley.",
    image: workGlamtrails,
    alt: "Glamtrails logo",
    contained: true,
    quote: {
      text: "Our business has appeared in various media relevant to our target market and now we'll be expanding our focus to other markets too. Maryann Shaw Communications has been a really good fit for Glamtrails.",
      name: "Gillian Faichnie",
      role: "Co-founder, Glamtrails",
    },
    story: [
      "The challenge: Glamtrails offers walking tours paired with wine and food experiences in the Hemel-en-Aarde Valley. As a new business it needed to reach international tour operators and upscale domestic adventurers — an audience distinct from co-founder Tim Lundy's existing hiking-guide following.",
      "The strategy: a targeted press release to travel trade and lifestyle publications, followed up with hosted journalist experiences on the trails, alongside taking over the Glamtrails Facebook, Twitter and Instagram accounts so the social voice matched the PR story.",
      "The results: within three to four months Glamtrails appeared in National Geographic Traveller, Getaway, Country Life, Fairlady, Traveller24, Sunday Times and Escapes magazine, with strong local coverage in The Village News and The Hermanus Times.",
    ],
  },
  {
    slug: "torpedo-swimrun",
    client: "Torpedo SwimRun",
    category: "Sports PR",
    description:
      "Introducing a new sport to South Africa, with mainstream coverage including front covers of the Cape Times and Weekend Argus.",
    image: workSwimrun,
    alt: "Torpedo SwimRun logo",
    contained: true,
    quote: {
      text: "We received coverage far beyond our expectations with Maryann. Torpedo is not only a new business but a new sport, and the mainstream media coverage that SwimRun has enjoyed has been a great boost. Front covers in both the Cape Times and Weekend Argus were two of our great successes this year.",
      name: "Richard McMartin",
      role: "Torpedo SwimRun",
    },
    story: [
      "Torpedo SwimRun was not only a new business but an entirely new sport in South Africa, which meant explaining the format to the media before any event could be sold.",
      "We built accessible, visual angles around the racing and the people doing it, landing front-cover coverage in both the Cape Times and the Weekend Argus.",
      "Extreme swimmer Ryan Stramrood's involvement in the Torpedo SwimRun Moon events gave us a further platform, turning night-time racing into a genuinely compelling human-interest story.",
    ],
  },
  {
    slug: "kap-sani2c",
    client: "KAP sani2c",
    category: "Event PR",
    description:
      "Ongoing PR since 2018 for an iconic KwaZulu-Natal mountain bike stage race with deep roots in rural school and community support.",
    image: workSani2c,
    alt: "KAP sani2c event logo",
    contained: true,
    quote: {
      text: "We have worked with Maryann on two of our events, the KAP sani2c and Glencairn Trail Run. She takes the time to get all her facts correct as well as ensure that the relevant media houses are interested in the story… We have thoroughly enjoyed working with her! She is honest and extremely professional.",
      name: "Tamika Haw",
      role: "KAP sani2c and Glencairn Trail Run",
    },
    story: [
      "We came on board less than four weeks before the 2018 KAP sani2c, with a brief to find mainstream stories in a race normally covered only by cycling media.",
      "The breakout story was 83-year-old rider Arthur Duncan. We gathered interviews, photographs and audio immediately after his finish, and the story was picked up by Beeld, Business Insider and Good Things Guy.",
      "Alongside it we built the #morethanaride broadcast angle around the race's rural school and community support, delivering ENCA news features, an Expresso studio interview, a slot on Radio 702's Marc Lewis show and a Moneyweb podcast interview.",
      "Image galleries were featured in Bicycling — as the lead story in their newsletter to 20,000 subscribers — and in In the Bunch. We have handled PR for the event ever since.",
    ],
  },
  {
    slug: "wild-air",
    client: "WILD AIR",
    category: "Product PR",
    description:
      "Launch PR for a locally produced kids' bicycle seat, bringing a Cape Town-developed product to family and cycling audiences.",
    image: workWildair,
    alt: "WILD AIR brand logo",
    contained: true,
    quote: {
      text: "Having a detailed, strategic and implementable PR plan is one of the key success factors to any marketing strategy… To date, Maryann has been consistent in delivering against her set deliverables and more. She takes a proactive approach to all that she does.",
      name: "Doug Bird",
      role: "WILD AIR",
    },
    story: [
      "WILD AIR founder Doug Bird developed the Little Wing kids' bicycle seat in Cape Town, designed for adventurous children riding singletrack with their parents rather than simply being carried along.",
      "Our work covered the launch of the product in South Africa, positioning it with both family and cycling audiences and building a PR plan that ran alongside the wider marketing strategy.",
    ],
  },
  {
    slug: "cape-town-motor-show",
    client: "Cape Town Motor Show",
    category: "Event PR",
    description:
      "PR and communications since 2017, with year-on-year growth in media exposure and on-site coordination of media access and interviews.",
    image: workMotorshow,
    alt: "Cape Town Motor Show event logo",
    contained: true,
    quote: {
      text: "I have worked with Maryann since 2017, during which time she managed the PR and communications needs of the Cape Town Motor Show. It was incredibly successful and year on year our media exposure has increased… Managing media at the event can be challenging, but Maryann seamlessly coordinates media access and interviews.",
      name: "Garth Rhoda",
      role: "Cape Town Motor Show",
    },
    story: [
      "We have handled PR and communications for the Cape Town Motor Show since 2017, growing media exposure year on year across print, broadcast, online and social channels.",
      "On-site, we coordinate media access, accreditation and interviews across a busy show floor so that journalists get the time and the stories they need.",
    ],
  },
  {
    slug: "kingfish-enterprises",
    client: "Kingfish Enterprises",
    category: "Sustainability",
    description:
      "Sharing the story of sustainable aquaculture, including coverage in Daily Maverick and consumer awareness of green-listed farmed Kob.",
    image: workKingfish,
    alt: "Farmed Kob prepared with thyme butter",
    sourceUrl: "https://maryannshawcommunications.co.za/kingfish-enterprises-in-daily-maverick/",
    story: [
      "Kingfish Enterprises farms species that South African consumers have learned to avoid — including Kob, which is red-listed by SASSI in the wild.",
      "Our work focused on a Daily Maverick feature on the company's sustainable aquaculture operation, explaining how responsible farming works and why farmed Kob is green-listed by SASSI.",
      "The result was coverage that reframed the conversation for consumers and chefs, rather than simply promoting a supplier.",
    ],
  },
  {
    slug: "vilaca-racing",
    client: "Vilaca Racing",
    category: "Motorsport",
    description:
      "Personal-brand PR for Jonathan Vilaca, including a feature in Men's Health Magazine Online on his life in South African motorsport.",
    image: workVilaca,
    alt: "Jonathan Vilaca featured in Men's Health Magazine Online",
    sourceUrl:
      "https://maryannshawcommunications.co.za/how-jonathan-vilaca-is-redefining-south-african-motorsport/",
    story: [
      "Personal-brand PR for racing driver Jonathan Vilaca, built around who he is off the track as much as what he does on it.",
      "The centrepiece was a feature in Men's Health Magazine Online on his life and career in South African motorsport — coverage that reached an audience well beyond the motorsport pages.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Having worked with Maryann over the last 18 months I can highly recommend her for your PR, copy writing or influencer work. She has extensive experience and her strong list of industry PR contacts has resulted in exponential coverage for BOS.",
    name: "Will Battersby",
    role: "CEO, BOS Brands",
  },
  {
    quote:
      "When we first launched our business, we knew we would need a PR agency with specific experience because of our needs as a small start up and our focus on a relatively new tourism niche. Maryann was recommended to us because of her experience working with new business in sports and adventure tourism. We had a planning session before we embarked on a formal relationship and Maryann has delivered on everything we wanted. Our business has appeared in various media relevant to our target market and now we'll be expanding our focus to other markets too. Maryann Shaw Communications has been a really good fit for Glamtrails.",
    name: "Gillian Faichnie",
    role: "Co-founder, Glamtrails",
  },
  {
    quote:
      "The Ultra-trail Cape Town Team was looking to expand the coverage that the event received to more mainstream media, rather than focus only on digital marketing and social media. We wanted someone who understood the event but who was well connected and could create content that spoke to audiences other than the trail running community. Maryann was the obvious choice and we have seen the benefits of having a committed PR partner on board. Her attention to detail and her passion for finding stories is greatly appreciated and we love having her as part of the team.",
    name: "Sue Ullyet",
    role: "Ultra-Trail Cape Town",
  },
  {
    quote:
      "We received coverage far beyond our expectations with Maryann. Torpedo is not only a new business but a new sport, and the mainstream media coverage that SwimRun has enjoyed has been a great boost. Front covers in both the Cape Times and Weekend Argus were two of our great successes this year.",
    name: "Richard McMartin",
    role: "Torpedo SwimRun",
  },
  {
    quote:
      "Having a detailed, strategic and implementable PR plan is one of the key success factors to any marketing strategy. Trying to source a PR partner to bring our ideas and strategies to life was no easy task. We needed someone who was well networked, understood brand but more importantly could create relevant content for various demographics across many different walks of life. To date, Maryann has been consistent in delivering against her set deliverables and more. She takes a proactive approach to all that she does.",
    name: "Doug Bird",
    role: "WILD AIR",
  },
  {
    quote:
      "We have worked with Maryann on two of our events, the KAP sani2c and Glencairn Trail Run. She takes the time to get all her facts correct as well as ensure that the relevant media houses are interested in the story and will publish it, thereby reaching the correct target market, ensuring maximum exposure. We have thoroughly enjoyed working with her! She is honest and extremely professional.",
    name: "Tamika Haw",
    role: "KAP sani2c and Glencairn Trail Run",
  },
  {
    quote:
      "One of our best decisions to date was our signing with Maryann Shaw Communications for all our PR requirements. The well targeted media attention, hand selected and generated by Maryann on her first project with us was unprecedented against our experience. It realised exposure and value that far exceeded any reasonable expectations and we highly appreciate the personalised attention, genuine interest and high energy delivery of service.",
    name: "Ryan Stramrood",
    role: "Extreme Swimmer and Inspirational Speaker",
  },
  {
    quote:
      "I have worked with Maryann since 2017, during which time she managed the PR and communications needs of the Cape Town Motor Show. It was incredibly successful and year on year our media exposure has increased, and the depth and breadth of the coverage has been significant and grew across all media channels. Managing media at the event can be challenging, but Maryann seamlessly coordinates media access and interviews. I highly recommend Maryann for any project that you may need.",
    name: "Garth Rhoda",
    role: "Cape Town Motor Show",
  },
];

export const team = [
  {
    name: "Maryann Shaw",
    role: "PR Strategist & Content Specialist",
    image: maryannImg,
    bio: "Founder of Maryann Shaw Communications, with over twenty years in the industry as a photographer and writer, photo editor and photo library manager, and in public relations.",
  },
  {
    name: "Andrea Joseph",
    role: "Social Media Manager",
    image: andreaImg,
    bio: "Andrea manages social media content and community for our clients, keeping social work closely integrated with PR and media activity.",
  },
];
