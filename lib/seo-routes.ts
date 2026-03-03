export type RouteType = "services" | "use-cases" | "locations";

export type SeoRoute = {
  type: RouteType;
  slug: string;
  keyword: string;
  title: string;
};

export const SEO_ROUTES: SeoRoute[] = [
  { type: "services", slug: "design-system-agency-for-startups", keyword: "design system agency for startups", title: "Design System Agency for Startups" },
  { type: "services", slug: "design-system-consulting-services", keyword: "design system consulting services", title: "Design System Consulting Services" },
  { type: "services", slug: "build-a-scalable-design-system", keyword: "build a scalable design system", title: "Build a Scalable Design System" },
  { type: "services", slug: "visual-identity-design-studio", keyword: "visual identity design studio", title: "Visual Identity Design Studio" },
  { type: "services", slug: "startup-branding-and-design-system", keyword: "startup branding and design system", title: "Startup Branding and Design System" },
  { type: "services", slug: "rapid-prototyping-agency", keyword: "rapid prototyping agency", title: "Rapid Prototyping Agency" },
  { type: "services", slug: "product-prototype-design-service", keyword: "product prototype design service", title: "Product Prototype Design Service" },
  { type: "services", slug: "clickable-prototype-for-investors", keyword: "clickable prototype for investors", title: "Clickable Prototype for Investors" },
  { type: "services", slug: "proof-of-concept-design-partner", keyword: "proof of concept design partner", title: "Proof of Concept Design Partner" },
  { type: "services", slug: "mvp-prototype-design-and-build", keyword: "mvp prototype design and build", title: "MVP Prototype Design and Build" },
  { type: "services", slug: "product-design-and-engineering-support", keyword: "product design and engineering support", title: "Product Design and Engineering Support" },
  { type: "services", slug: "fractional-product-design-team", keyword: "fractional product design team", title: "Fractional Product Design Team" },
  { type: "services", slug: "startup-product-design-partner", keyword: "startup product design partner", title: "Startup Product Design Partner" },
  { type: "services", slug: "design-support-for-engineering-teams", keyword: "design support for engineering teams", title: "Design Support for Engineering Teams" },
  { type: "services", slug: "packaging-design-studio-india", keyword: "packaging design studio india", title: "Packaging Design Studio India" },
  { type: "services", slug: "product-packaging-and-branding-agency", keyword: "product packaging and branding agency", title: "Product Packaging and Branding Agency" },
  { type: "services", slug: "structural-packaging-design-service", keyword: "structural packaging design service", title: "Structural Packaging Design Service" },
  { type: "services", slug: "physical-product-design-consultancy", keyword: "physical product design consultancy", title: "Physical Product Design Consultancy" },
  { type: "services", slug: "launch-collateral-design-service", keyword: "launch collateral design service", title: "Launch Collateral Design Service" },
  { type: "services", slug: "startup-pitch-deck-design-agency", keyword: "startup pitch deck design agency", title: "Startup Pitch Deck Design Agency" },

  { type: "use-cases", slug: "design-to-development-handoff-service", keyword: "design to development handoff service", title: "Design to Development Handoff Service" },
  { type: "use-cases", slug: "product-discovery-and-execution-partner", keyword: "product discovery and execution partner", title: "Product Discovery and Execution Partner" },
  { type: "use-cases", slug: "ongoing-product-design-retainer", keyword: "ongoing product design retainer", title: "Ongoing Product Design Retainer" },
  { type: "use-cases", slug: "premium-packaging-design-for-d2c-brands", keyword: "premium packaging design for d2c brands", title: "Premium Packaging Design for D2C Brands" },
  { type: "use-cases", slug: "packaging-prototype-and-mockup-service", keyword: "packaging prototype and mockup service", title: "Packaging Prototype and Mockup Service" },
  { type: "use-cases", slug: "ad-creatives-and-landing-page-design", keyword: "ad creatives and landing page design", title: "Ad Creatives and Landing Page Design" },
  { type: "use-cases", slug: "sales-enablement-design-assets", keyword: "sales enablement design assets", title: "Sales Enablement Design Assets" },
  { type: "use-cases", slug: "conversion-focused-landing-page-design", keyword: "conversion focused landing page design", title: "Conversion Focused Landing Page Design" },
  { type: "use-cases", slug: "go-to-market-design-support", keyword: "go to market design support", title: "Go To Market Design Support" },
  { type: "use-cases", slug: "reliable-design-partner-for-startup", keyword: "reliable design partner for startup", title: "Reliable Design Partner for Startup" },
  { type: "use-cases", slug: "fast-design-agency-that-actually-delivers", keyword: "fast design agency that actually delivers", title: "Fast Design Agency That Actually Delivers" },
  { type: "use-cases", slug: "design-agency-with-ownership-mindset", keyword: "design agency with ownership mindset", title: "Design Agency with Ownership Mindset" },
  { type: "use-cases", slug: "iterative-design-process-agency", keyword: "iterative design process agency", title: "Iterative Design Process Agency" },
  { type: "use-cases", slug: "transparent-product-design-studio", keyword: "transparent product design studio", title: "Transparent Product Design Studio" },
  { type: "use-cases", slug: "end-to-end-design-execution-partner", keyword: "end to end design execution partner", title: "End-to-End Design Execution Partner" },
  { type: "use-cases", slug: "design-systems-and-visual-identity-for-saas", keyword: "design systems and visual identity for saas", title: "Design Systems and Visual Identity for SaaS" },
  { type: "use-cases", slug: "prototype-design-for-pre-seed-startup", keyword: "prototype design for pre seed startup", title: "Prototype Design for Pre-Seed Startup" },
  { type: "use-cases", slug: "packaging-design-for-consumer-electronics-india", keyword: "packaging design for consumer electronics india", title: "Packaging Design for Consumer Electronics India" },
  { type: "use-cases", slug: "product-ui-ux-support-for-engineering-teams", keyword: "product ui ux support for engineering teams", title: "Product UI/UX Support for Engineering Teams" },
  { type: "use-cases", slug: "launch-design-partner-for-startup-founders", keyword: "launch design partner for startup founders", title: "Launch Design Partner for Startup Founders" },

  { type: "locations", slug: "best-product-design-agency-india", keyword: "best product design agency india", title: "Best Product Design Agency India" },
  { type: "locations", slug: "ui-ux-agency-india-for-startups", keyword: "ui ux agency india for startups", title: "UI UX Agency India for Startups" },
  { type: "locations", slug: "branding-and-packaging-agency-bangalore", keyword: "branding and packaging agency bangalore", title: "Branding and Packaging Agency Bangalore" },
  { type: "locations", slug: "design-prototyping-studio-mumbai", keyword: "design prototyping studio mumbai", title: "Design Prototyping Studio Mumbai" },
  { type: "locations", slug: "remote-product-design-partner-india", keyword: "remote product design partner india", title: "Remote Product Design Partner India" },
  { type: "locations", slug: "affordable-startup-design-agency", keyword: "affordable startup design agency", title: "Affordable Startup Design Agency" },
  { type: "locations", slug: "enterprise-design-systems-consultancy-india", keyword: "enterprise design systems consultancy india", title: "Enterprise Design Systems Consultancy India" },
  { type: "locations", slug: "d2c-packaging-design-agency-india", keyword: "d2c packaging design agency india", title: "D2C Packaging Design Agency India" },
  { type: "locations", slug: "startup-launch-design-agency-india", keyword: "startup launch design agency india", title: "Startup Launch Design Agency India" },
  { type: "locations", slug: "product-design-studio-for-seed-stage-startups", keyword: "product design studio for seed stage startups", title: "Product Design Studio for Seed Stage Startups" },
];

export function getRoutesByType(type: RouteType) {
  return SEO_ROUTES.filter((route) => route.type === type);
}

export function getRoute(type: RouteType, slug: string) {
  return SEO_ROUTES.find((route) => route.type === type && route.slug === slug);
}
