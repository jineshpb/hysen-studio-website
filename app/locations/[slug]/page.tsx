import { notFound } from "next/navigation";
import { SeoRoutePage } from "@/components/seo/route-page";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";
import { getSeoPage } from "@/lib/seo-pages";
import { getRoute, getRoutesByType } from "@/lib/seo-routes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getRoutesByType("locations").map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = getSeoPage("locations", slug);
  if (content) {
    return {
      title: content.meta.title,
      description: content.meta.description,
    };
  }

  const route = getRoute("locations", slug);
  if (!route) return {};

  return {
    title: `${route.title} | Heisen Forge`,
    description: `${route.title} by Heisen Forge for startup teams and product-focused businesses.`,
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;

  const content = getSeoPage("locations", slug);
  if (content) return <SeoLandingPage content={content} />;

  const route = getRoute("locations", slug);
  if (!route) notFound();

  return <SeoRoutePage route={route} />;
}
