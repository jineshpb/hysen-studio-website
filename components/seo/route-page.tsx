import Link from "next/link";
import { SeoRoute, SEO_ROUTES } from "@/lib/seo-routes";

type Props = {
  route: SeoRoute;
};

export function SeoRoutePage({ route }: Props) {
  const related = SEO_ROUTES.filter((item) => item.type === route.type && item.slug !== route.slug).slice(0, 5);

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 text-[#2a3239]">
      <p className="text-sm uppercase tracking-wider text-[#7f6748]">Heisen Forge</p>
      <h1 className="mt-3 text-4xl font-semibold">{route.title}</h1>
      <p className="mt-4 text-lg text-[#4f5b66]">
        We help teams execute faster with clear design, rapid prototyping, and practical product support.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-medium">What this page covers</h2>
        <ul className="list-disc space-y-1 pl-5 text-[#4f5b66]">
          <li>Query intent: {route.keyword}</li>
          <li>Scope and deliverables tailored to this service/use-case.</li>
          <li>Clear next step for founders and product teams.</li>
        </ul>
      </section>

      <section className="mt-10 rounded-xl border border-[#d7ccbc] bg-[#f9f5ec] p-6">
        <h2 className="text-2xl font-medium">Start a project</h2>
        <p className="mt-2 text-[#4f5b66]">
          Tell us what is blocked or unclear. We will map the fastest path from idea to shipped result.
        </p>
        <Link href="/" className="mt-4 inline-block rounded-full bg-[#cf9345] px-5 py-3 text-sm font-semibold text-white">
          Book a discovery call
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-medium">Related pages</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/${item.type}/${item.slug}`} className="rounded-full border border-[#d7ccbc] px-4 py-2 text-sm hover:bg-[#f4efe4]">
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
