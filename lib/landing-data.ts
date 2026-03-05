import type { ServiceCardData } from "@/components/landing/service-card";
import type { ProjectCardData } from "@/components/landing/project-card";

export type TestimonialData = {
  quote: string;
  highlight?: string;
  name: string;
  role: string;
  company: string;
  avatarLabel: string;
  active?: boolean;
  avatarImage?: string;
};

export const serviceTiles: ServiceCardData[] = [
  {
    title: "Prototyping & proof of concepts",
    description: "Turn sketches into functional prototypes you can test and refine.",
    variant: "orange",
    iconVariant: "pill",
    icon: "none",
  },
  {
    title: "Marketing & Launch Collaterals",
    description: "Product visuals, renders, videos, and materials for launch readiness.",
    variant: "navy",
    iconVariant: "circle",
    icon: "megaphone",
  },
  {
    title: "Packaging & Physical Design",
    description: "Retail-ready packaging and industrial design for production.",
    variant: "light",
    iconVariant: "circle",
    icon: "briefcase",
  },
  {
    title: "Manufacturing Preparation",
    description: "CAD optimization, BOMs, and production-ready files.",
    variant: "silver",
    iconVariant: "none",
    icon: "none",
    watermarkText: "HEISENHYSE",
  },
];

export const projectTiles: ProjectCardData[] = [
  {
    title: "Aether Marine EV",
    description: "Electric catamaran concept refined from sketch to showroom prototype.",
    imageType: "image",
    imageSrc: "/projects/tiles/image-1.png",
    textOverlay: true,
    projectGradient: "from-[#181414] to-[#323232]",
    descriptionTextColor: "#52525b",
  },
  {
    title: "Orbit Assistant",
    description: "Consumer robot identity and launch visuals for first-round investor demos.",
    imageType: "image",
    imageSrc: "/projects/tiles/image-2.png",
    textOverlay: true,
    projectGradient: "from-[#CDFFAB] to-[#D5FFB8]",
    descriptionTextColor: "#134e4a",
  },
  {
    title: "RetroCore Console",
    description: "Industrial redesign of a nostalgic gaming unit with modern internals.",
    imageType: "image",
    imageSrc: "/projects/tiles/image-3.png",
    textOverlay: true,
    projectGradient: "from-[#CACACA] to-[#5E5E5E]",
    descriptionTextColor: "#3f3f46",
  },
  {
    title: "Trailframe Utility EV",
    description: "Off-road platform with modular chassis and production-ready surfacing.",
    imageType: "image",
    imageSrc: "/projects/tiles/image-4.png",
    textOverlay: true,
    projectGradient: "from-[#F7A591] to-[#FF7959]",
    descriptionTextColor: "#ffedd4",
  },
  {
    title: "Helix Cockpit",
    description: "Automotive steering interface study focused on UX and premium finish.",
    imageType: "image",
    imageSrc: "/projects/tiles/image-5.png",
    textOverlay: true,
    projectGradient: "from-[#303936] to-[#45504A]",
    descriptionTextColor: "#a4f4cf",
  },
  {
    title: "Nova Home Drone",
    description: "Compact indoor drone product language and packaging system exploration.",
    imageType: "image",
    imageSrc: "/projects/tiles/image-1.png",
    textOverlay: true,
    projectGradient: "from-[#CACACA] to-[#5E5E5E]",
    descriptionTextColor: "#d1d5db",
  },
];

export const testimonials: TestimonialData[] = [
  {
    quote: "I love using VEED. The subtitles are the most accurate I've seen on the market.",
    highlight: "It's helped take my content to the next level.",
    name: "Laura Haleydt",
    role: "Brand Marketing Manager",
    company: "Carlsberg",
    avatarLabel: "LH",
    active: true,
    avatarImage: "/testimonials/avatars/user-1.png",
  },
  {
    quote:
      "I used Loom to record, Rev for captions, Google for storing and Youtube to get a share link. I can now do this all in one spot with VEED.",
    name: "Cedric Gustavo Ravache",
    role: "Enterprise Account Executive",
    company: "Cloud Software Group",
    avatarLabel: "CR",
    avatarImage: "/testimonials/avatars/user-2.png",
  },
  {
    quote:
      "VEED is my one-stop-shop. It's cut my editing time by around 60%, from helping with my online career to my business.",
    name: "Nawid Nabil",
    role: "Entrepreneur",
    company: "The Ecom King",
    avatarLabel: "NN",
    avatarImage: "/testimonials/avatars/user-3.png",
  },
];

export type FooterSitemapLink = {
  label: string;
  href: string;
};

export const footerSitemapLinks: FooterSitemapLink[] = [
  { label: "Home", href: "/" },
  { label: "All Services", href: "/services" },
  { label: "All Use Cases", href: "/use-cases" },
  { label: "All Locations", href: "/locations" },

  // Curated high-intent pages (footer subset)
  { label: "Design System Agency", href: "/services/design-system-agency-for-startups" },
  { label: "Rapid Prototyping Agency", href: "/services/rapid-prototyping-agency" },
  { label: "Product + Engineering Support", href: "/services/product-design-and-engineering-support" },
  { label: "Packaging Design Studio India", href: "/services/packaging-design-studio-india" },
  { label: "Launch Collateral Design", href: "/services/launch-collateral-design-service" },

  { label: "Design-to-Dev Handoff", href: "/use-cases/design-to-development-handoff-service" },
  { label: "Go-to-Market Design Support", href: "/use-cases/go-to-market-design-support" },
  { label: "Reliable Design Partner", href: "/use-cases/reliable-design-partner-for-startup" },

  { label: "UI/UX Agency India", href: "/locations/ui-ux-agency-india-for-startups" },
  { label: "Branding + Packaging Bangalore", href: "/locations/branding-and-packaging-agency-bangalore" },
  { label: "Remote Product Design India", href: "/locations/remote-product-design-partner-india" },
];
