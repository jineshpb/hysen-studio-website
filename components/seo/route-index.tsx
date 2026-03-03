import Link from "next/link";
import { RouteType, SeoRoute } from "@/lib/seo-routes";

type Props = {
  type: RouteType;
  title: string;
  description: string;
  items: SeoRoute[];
};

export function SeoRouteIndex({ type, title, description, items }: Props) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 text-[#2a3239]">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="mt-4 text-lg text-[#4f5b66]">{description}</p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Link key={item.slug} href={`/${type}/${item.slug}`} className="rounded-xl border border-[#d7ccbc] bg-white px-4 py-4 hover:bg-[#f9f5ec]">
            <p className="font-medium">{item.title}</p>
            <p className="mt-1 text-sm text-[#6f7c88]">{item.keyword}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
