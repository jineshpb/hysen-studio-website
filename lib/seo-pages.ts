import seoPagesRaw from "@/data/seo-pages.json";
import { RouteType } from "@/lib/seo-routes";

export type SeoCapability = {
  title: string;
  subtitle: string;
  icon?: string;
  imageSrc?: string;
};

export type SeoPageLayout = {
  showHero?: boolean;
  showCtaBand?: boolean;
  showCapabilities?: boolean;
  showServices?: boolean;
  showTestimonials?: boolean;
  showTeam?: boolean;
  showFinalCta?: boolean;
};

export type SeoLayoutPreset = "full" | "lean" | "conversion";

export type SeoPageContent = {
  type: RouteType;
  slug: string;
  keyword: string;
  meta: {
    title: string;
    description: string;
  };
  layoutPreset?: SeoLayoutPreset;
  layout?: SeoPageLayout;
  hero: {
    heading: string;
    subheading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    ctaLabel: string;
    ctaHref: string;
  };
  ctaBand: {
    heading: string;
    subheading: string;
    ctaLabel: string;
    ctaHref: string;
  };
  capabilities: SeoCapability[];
  services: {
    heading: string;
    points: string[];
    ctaLabel: string;
    ctaHref: string;
  };
  finalCta: {
    heading: string;
    subheading: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

const LAYOUT_PRESETS: Record<SeoLayoutPreset, Required<SeoPageLayout>> = {
  full: {
    showHero: true,
    showCtaBand: true,
    showCapabilities: true,
    showServices: true,
    showTestimonials: true,
    showTeam: true,
    showFinalCta: true,
  },
  lean: {
    showHero: true,
    showCtaBand: false,
    showCapabilities: true,
    showServices: true,
    showTestimonials: false,
    showTeam: false,
    showFinalCta: true,
  },
  conversion: {
    showHero: true,
    showCtaBand: true,
    showCapabilities: true,
    showServices: true,
    showTestimonials: true,
    showTeam: false,
    showFinalCta: true,
  },
};

const DEFAULT_LAYOUT = LAYOUT_PRESETS.full;

export const SEO_PAGES: SeoPageContent[] = (seoPagesRaw as SeoPageContent[]).map((page) => {
  const preset = page.layoutPreset ? LAYOUT_PRESETS[page.layoutPreset] : DEFAULT_LAYOUT;

  return {
    ...page,
    layoutPreset: page.layoutPreset ?? "full",
    layout: { ...preset, ...page.layout },
  };
});

export function getSeoPage(type: RouteType, slug: string) {
  return SEO_PAGES.find((page) => page.type === type && page.slug === slug);
}

export function getSeoPagesByType(type: RouteType) {
  return SEO_PAGES.filter((page) => page.type === type);
}
