import { notFound } from "next/navigation";
import { SeoRoutePage } from "@/components/seo/route-page";
import { getRoute, getRoutesByType } from "@/lib/seo-routes";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getRoutesByType("services").map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const route = getRoute("services", slug);

  if (!route) return {};

  return {
    title: `${route.title} | Heisen Forge`,
    description: `Heisen Forge provides ${route.keyword} with a fast, focused and reliable execution model.`,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const { slug } = params;
  const route = getRoute("services", slug);
  if (!route) notFound();

  return <SeoRoutePage route={route} />;
}
