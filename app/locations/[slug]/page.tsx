import { notFound } from "next/navigation";
import { SeoRoutePage } from "@/components/seo/route-page";
import { getRoute, getRoutesByType } from "@/lib/seo-routes";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getRoutesByType("locations").map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const route = getRoute("locations", slug);

  if (!route) return {};

  return {
    title: `${route.title} | Heisen Forge`,
    description: `${route.title} by Heisen Forge for startup teams and product-focused businesses.`,
  };
}

export default function LocationDetailPage({ params }: Props) {
  const { slug } = params;
  const route = getRoute("locations", slug);
  if (!route) notFound();

  return <SeoRoutePage route={route} />;
}
