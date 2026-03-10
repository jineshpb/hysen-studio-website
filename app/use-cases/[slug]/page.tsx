import { notFound } from "next/navigation";
import { SeoRoutePage } from "@/components/seo/route-page";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";
import { getSeoPage } from "@/lib/seo-pages";
import { getRoute, getRoutesByType } from "@/lib/seo-routes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getRoutesByType("use-cases").map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = getSeoPage("use-cases", slug);
  if (content) {
    return {
      title: content.meta.title,
      description: content.meta.description,
    };
  }

  const route = getRoute("use-cases", slug);
  if (!route) return {};

  return {
    title: `${route.title} | Heisen Forge`,
    description: `Heisen Forge helps with ${route.keyword} using practical design and prototyping support.`,
  };
}

export default async function UseCaseDetailPage({ params }: Props) {
  const { slug } = await params;

  const content = getSeoPage("use-cases", slug);
  if (content) return <SeoLandingPage content={content} />;

  const route = getRoute("use-cases", slug);
  if (!route) notFound();

  return <SeoRoutePage route={route} />;
}
