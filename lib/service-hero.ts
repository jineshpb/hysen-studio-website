export type ServiceHeroVariant =
  | "home-default"
  | "design-system"
  | "branding"
  | "product-prototyping"
  | "clickable-prototype"
  | "product-support"
  | "packaging"
  | "launch-collateral";

export type HeroContent = {
  heading: string;
  subheading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

export const HERO_VARIANTS: Record<ServiceHeroVariant, HeroContent> = {
  "home-default": {
    heading: "Have an idea?\nWe build it.",
    subheading: "Design, prototype, and brand - all in one studio.",
    description: "Work with a team that turns concepts into real, testable products without the usual delays.",
    imageSrc: "/hero/home/hero-car.png",
    imageAlt: "Studio showcase hero visual",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
  },
  "design-system": {
    heading: "Scale Product Design Faster",
    subheading: "Design systems and product foundations built for growth.",
    description: "From component architecture to handoff clarity, we help teams ship consistent product experiences.",
    imageSrc: "/hero/services/hero-digital-product.png",
    imageAlt: "Digital product interface previews for design system service",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
  },
  branding: {
    heading: "Build a Brand That Sticks",
    subheading: "Visual identity and brand systems for product-led teams.",
    description: "We shape clear narratives, memorable visuals, and practical brand assets that support growth.",
    imageSrc: "/hero/services/hero-branding.jpg",
    imageAlt: "Branding and visual identity design samples",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
  },
  "product-prototyping": {
    heading: "Prototype Before You Commit",
    subheading: "Fast product prototyping for confident decisions.",
    description: "Validate product flows, test ideas quickly, and align teams before engineering time is spent.",
    imageSrc: "/hero/services/hero-product-prototyping.jpg",
    imageAlt: "Product prototyping flows and wireframes",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
  },
  "clickable-prototype": {
    heading: "Demo-Ready Clickable Prototypes",
    subheading: "Interactive product demos for investors and stakeholders.",
    description: "Turn early concepts into polished, clickable stories that communicate your vision clearly.",
    imageSrc: "/hero/services/hero-clickable-prototype.jpg",
    imageAlt: "Clickable prototype presentation screens",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
  },
  "product-support": {
    heading: "Extend Your Product Team",
    subheading: "Ongoing design support for startup and engineering teams.",
    description: "Get reliable design execution across product, UX, and delivery without scaling headcount too early.",
    imageSrc: "/hero/services/hero-product.png",
    imageAlt: "Product design collaboration visuals",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
  },
  packaging: {
    heading: "Packaging That Drives Decisions",
    subheading: "Packaging design built for shelf impact and brand trust.",
    description: "From structural concepts to launch-ready visuals, we craft packaging systems with market clarity.",
    imageSrc: "/hero/services/hero-packaging.png",
    imageAlt: "Packaging concepts and branding mockups",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
  },
  "launch-collateral": {
    heading: "Launch Collateral That Converts",
    subheading: "Pitch decks and launch assets that tell a clear story.",
    description: "We create high-clarity collateral for launches, fundraising conversations, and go-to-market momentum.",
    imageSrc: "/hero/services/hero-branding.jpg",
    imageAlt: "Launch collateral and pitch deck design examples",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
  },
};

const SERVICE_SLUG_TO_HERO_VARIANT: Record<string, ServiceHeroVariant> = {
  "design-system-agency-for-startups": "design-system",
  "design-system-consulting-services": "design-system",
  "build-a-scalable-design-system": "design-system",
  "visual-identity-design-studio": "branding",
  "startup-branding-and-design-system": "branding",
  "rapid-prototyping-agency": "product-prototyping",
  "product-prototype-design-service": "product-prototyping",
  "clickable-prototype-for-investors": "clickable-prototype",
  "proof-of-concept-design-partner": "product-prototyping",
  "mvp-prototype-design-and-build": "product-prototyping",
  "product-design-and-engineering-support": "product-support",
  "fractional-product-design-team": "product-support",
  "startup-product-design-partner": "product-support",
  "design-support-for-engineering-teams": "product-support",
  "packaging-design-studio-india": "packaging",
  "product-packaging-and-branding-agency": "packaging",
  "structural-packaging-design-service": "packaging",
  "physical-product-design-consultancy": "packaging",
  "launch-collateral-design-service": "launch-collateral",
  "startup-pitch-deck-design-agency": "launch-collateral",
};

export function getServiceHeroVariant(slug: string, keyword: string): ServiceHeroVariant {
  const variantBySlug = SERVICE_SLUG_TO_HERO_VARIANT[slug];
  if (variantBySlug) return variantBySlug;

  const searchSource = `${slug} ${keyword}`.toLowerCase();

  if (searchSource.includes("design-system")) return "design-system";

  if (searchSource.includes("visual-identity") || searchSource.includes("branding")) return "branding";

  if (searchSource.includes("clickable-prototype") || searchSource.includes("investor")) return "clickable-prototype";

  if (
    searchSource.includes("rapid-prototyping") ||
    searchSource.includes("product-prototype") ||
    searchSource.includes("proof-of-concept") ||
    searchSource.includes("mvp")
  ) {
    return "product-prototyping";
  }

  if (
    searchSource.includes("product-design-and-engineering-support") ||
    searchSource.includes("fractional-product-design-team") ||
    searchSource.includes("startup-product-design-partner") ||
    searchSource.includes("design-support-for-engineering-teams")
  ) {
    return "product-support";
  }

  if (searchSource.includes("packaging") || searchSource.includes("physical-product")) return "packaging";

  if (searchSource.includes("launch-collateral") || searchSource.includes("pitch-deck")) return "launch-collateral";

  return "design-system";
}

export function getServiceHeroContent(slug: string, keyword: string): HeroContent {
  const heroVariant = getServiceHeroVariant(slug, keyword);
  return HERO_VARIANTS[heroVariant];
}
