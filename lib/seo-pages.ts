import seoPagesRaw from "@/data/seo-pages.json";
import { RouteType } from "@/lib/seo-routes";

export type SeoCapability = {
  title: string;
  subtitle: string;
  icon?: string;
  imageSrc?: string;
};

export type SeoPageContent = {
  type: RouteType;
  slug: string;
  keyword: string;
  meta: {
    title: string;
    description: string;
  };
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

export const SEO_PAGES: SeoPageContent[] = seoPagesRaw as SeoPageContent[];

export function getSeoPage(type: RouteType, slug: string) {
  return SEO_PAGES.find((page) => page.type === type && page.slug === slug);
}

export function getSeoPagesByType(type: RouteType) {
  return SEO_PAGES.filter((page) => page.type === type);
}
