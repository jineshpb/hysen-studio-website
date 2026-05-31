import { notFound } from "next/navigation";
import { SeoRoutePage } from "@/components/seo/route-page";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";
import { getSeoPage } from "@/lib/seo-pages";
import { getRoute, getRoutesByType } from "@/lib/seo-routes";
import { getServiceHeroContent } from "@/lib/service-hero";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getRoutesByType("services").map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = getSeoPage("services", slug);
  if (content) {
    return {
      title: content.meta.title,
      description: content.meta.description,
    };
  }

  const route = getRoute("services", slug);
  if (!route) return {};

  return {
    title: `${route.title} | Heisen Forge`,
    description: `Heisen Forge provides ${route.keyword} with a fast, focused and reliable execution model.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const route = getRoute("services", slug);
  if (!route) notFound();

  const mappedHero = getServiceHeroContent(route.slug, route.keyword);

  const content = getSeoPage("services", slug);
  if (content) {
    const contentWithMappedHero = {
      ...content,
      hero: {
        ...content.hero,
        imageSrc: mappedHero.imageSrc,
        imageAlt: mappedHero.imageAlt,
        subheading: mappedHero.subheading,
      },
    };

    return <SeoLandingPage content={contentWithMappedHero} />;
  }

  return <SeoRoutePage route={route} />;
}
