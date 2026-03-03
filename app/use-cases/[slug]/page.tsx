import { notFound } from "next/navigation";
import { SeoRoutePage } from "@/components/seo/route-page";
import { getRoute, getRoutesByType } from "@/lib/seo-routes";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getRoutesByType("use-cases").map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const route = getRoute("use-cases", slug);

  if (!route) return {};

  return {
    title: `${route.title} | Heisen Forge`,
    description: `Heisen Forge helps with ${route.keyword} using practical design and prototyping support.`,
  };
}

export default function UseCaseDetailPage({ params }: Props) {
  const { slug } = params;
  const route = getRoute("use-cases", slug);
  if (!route) notFound();

  return <SeoRoutePage route={route} />;
}
