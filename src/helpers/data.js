import { ReactComponent as AdAgeLogo } from "../assets/logos/adAge.svg";
import { ReactComponent as WebbyLogo } from "../assets/logos/webbyLogo.svg";
import { ReactComponent as CampaignLogo } from "../assets/logos/campaignLogo.svg";
import { ReactComponent as GoogleLogo } from "../assets/logos/google-dark.svg";
import { ReactComponent as KFCLogo } from "../assets/logos/KFC-Logo.svg";
import { ReactComponent as WilsonLogo } from "../assets/logos/Wilson-Logo.svg";
import { ReactComponent as AttLogo } from "../assets/logos/ATT-Logo.svg";
import { ReactComponent as PatagoniaLogo } from "../assets/logos/patagonia-dark.svg";

import googleStoreCaseStudy from "../assets/videos/Google-Store-Web-Design-Case-Study-Thumbnail-02.mp4";
import pantagoniaCaseStudy from "../assets/images/Patagonia-Case-Study-Thumbnail.jpeg";
import wilsonCaseStudy from "../assets/images/WIlson-Case-Study-Thumbnail.jpeg";

import BrandingBlahs from "../assets/images/news/branding_blahs.jpeg";
import RyanParkhurst from "../assets/images/news/ryan_parkhurst.jpeg";
import WomensHistory from "../assets/images/news/womens_history.jpeg";
import RevByLyft from "../assets/images/news/rev_by_lyft.jpeg";
import WebbyAwardsNews from "../assets/images/news/webby_awards_news.jpeg";
import JohnWaters from "../assets/images/news/john_waters.jpeg";
import WebbyAwards27 from "../assets/images/news/27_webby_awards.jpeg";

import InitiativeJamsImg from "../assets/images/initiatives_Jams.jpeg";
import InitiativeAppliedImg from "../assets/images/Iniatives-Menu_Thumbnail_BASIC®_Applied.png";
import InitiativeMovesImg from "../assets/images/Iniatives-Menu_Thumbnail_BASIC®_Moves.png";
import InitiativeCraftedImg from "../assets/images/Iniatives-Menu_Thumbnail_BASIC®_Crafted.png";
import InitiativeBrandbeatsImg from "../assets/images/Iniatives-Menu_Thumbnail_BASIC®_Brandbeats.png";

const awards_data = [
  {
    name: "AdAge",
    Logo: AdAgeLogo,
    text: "Design and Branding Agency of the Year",
  },
  {
    name: "Webby_awards",
    Logo: WebbyLogo,
    text: "Agency of the Year",
  },
  {
    name: "Campaign",
    Logo: CampaignLogo,
    text: "Digital Innovation Agency of the Year Finalist",
  },
];
const works_data = [
  {
    imgSrc: pantagoniaCaseStudy,
    name: "patagonia",
    text: "An eCommerce experience driven by Patagonia’s brand mission",
  },
  {
    imgSrc: wilsonCaseStudy,
    name: "wilson",
    text: "A century-old sports brand finding its place in culture",
  },
  {
    vidSrc: googleStoreCaseStudy,
    name: "google store",
    text: "An eCommerce experience helping Google bring its hardware to people across the globe",
  },
];
const clients_data = [
  {
    name: "google",
    Logo: GoogleLogo,
    text: "Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership ",
    link: "#",
  },
  {
    name: "kfc",
    Logo: KFCLogo,
    text: "An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership ",
    link: "#",
  },
  {
    name: "wilson",
    Logo: WilsonLogo,
    text: "A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study ",
    link: "#",
  },
  {
    name: "at&t",
    Logo: AttLogo,
    text: "Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.",
    link: null,
  },
  {
    name: "patagonia",
    Logo: PatagoniaLogo,
    text: "Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study ",
    link: "#",
  },
];

const news_data = [
  {
    title: "Breaking Through the Branding Blahs",
    imgSrc: BrandingBlahs,
    date: "6.16.23",
  },
  {
    title:
      "Ryan Parkhurst moderates talk on “The art and science of brand purpose and creativity”",
    imgSrc: RyanParkhurst,
    date: "6.5.23",
  },
  {
    title: "John Waters, Bare Walls, and Sparking Creativity",
    imgSrc: JohnWaters,
    date: "5.15.23",
  },
  {
    title: "BASIC/DEPT® is the 27th Webby Awards: Agency of the Year",
    imgSrc: WebbyAwardsNews,
    date: "4.25.23",
  },
  {
    title:
      "BASIC/DEPT® secures 19 Nominations for the 27th Annual Webby Awards",
    imgSrc: WebbyAwards27,
    date: "4.4.23",
  },
  {
    title: "Women’s History Month Spotlight at B/D®",
    imgSrc: WomensHistory,
    date: "4.3.23",
  },
  {
    title: "Introducing REV by LYFT",
    imgSrc: RevByLyft,
    date: "3.28.23",
  },
];

// const socials = ["instagram", "twitter", "linkedIn", "Facebook"];
// const initiatives = [
//   "crafted",
//   "applied",
//   "brandbeats",
//   "moves",
//   "B&reg;/Good",
// ];
// const offices = [
//   "San Diego – CA",
//   "New York – NY",
//   "Bay Area – CA",
//   "St. Louis – MO",
//   "Amsterdam – NL",
//   "London – EN",
//   "Berlin – GE",
//   "Argentina – AR",
// ];

const initiatives_data = [
  {
    name: "b/d® jams",
    desc: "A weekly-ish playlist curated by the employees @ BASIC/DEPT®",
    label: "it's a vibe",
    imgSrc: InitiativeJamsImg,
    year: 2020,
    link: {
      text: "Visit the Site",
      href: "#",
    },
  },
  {
    name: "Applied®",
    desc: "Our panel series and thought-leadership platform where we share perspectives and tactics related to strategy, design, and technology.",
    label: "Thoughts & Perspectives",
    imgSrc: InitiativeAppliedImg,
    year: 2020,
    link: {
      text: "Explore Applied",
      href: "#",
    },
  },
  {
    name: "Moves®",
    desc: "When we moved into our new HQ, we put together a site experience providing an in-depth look into the two-year process imagining, designing, and developing our new office we call home.",
    label: "our new Hq",
    imgSrc: InitiativeMovesImg,
    year: 2019,
    link: {
      text: "Visit the Site",
      href: "#",
    },
  },
  {
    name: "crafted®",
    desc: "A communal initiative we operate to celebrate diversity and creativity by bringing together people from different backgrounds and interests.",
    label: "creative community",
    imgSrc: InitiativeCraftedImg,
    year: 2019,
    link: {
      text: "Visit the Site",
      href: "#",
    },
  },
  {
    name: "brandbeats®",
    desc: "Our podcast series garnering 45,000+ listens per episode providing candid conversations around various industry related topics.",
    label: "Podcast Series",
    imgSrc: InitiativeBrandbeatsImg,
    year: 2017,
    link: {
      text: "Explore Brandbeats",
      href: "#",
    },
  },
];

export { awards_data, works_data, clients_data, news_data, initiatives_data };
