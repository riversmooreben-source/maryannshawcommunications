import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { insights } from "@/data/insights";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const item = insights.find((a) => a.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Maryann Shaw Communications" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { item } = loaderData;
    const title = `${item.title} | Maryann Shaw Communications`;
    return {
      meta: [
        { title },
        { name: "description", content: item.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: item.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: InsightNotFound,
  component: InsightArticle,
});

function InsightNotFound() {
  return (
    <section className="pb-24 pt-40">
      <div className="shell">
        <h1 className="display-xl">Article not found.</h1>
        <Link to="/insights" className="link-underline mt-8 inline-block text-sm font-semibold">
          ← Back to all insights
        </Link>
      </div>
    </section>
  );
}

const dateFormatter = new Intl.DateTimeFormat("en-ZA", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function InsightArticle() {
  const { item } = Route.useLoaderData();

  return (
    <>
      <section className="pb-12 pt-36 md:pt-48">
        <div className="shell">
          <Reveal>
            <Link to="/insights" className="link-underline text-sm font-semibold">
              ← All insights
            </Link>
            <p className="eyebrow mt-8">
              {item.category} · {dateFormatter.format(new Date(item.date))}
            </p>
            <h1 className="display-xl mt-6 max-w-4xl">{item.title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <Reveal>
            <div className="overflow-hidden rounded-lg bg-muted">
              <img
                src={item.image}
                alt={item.alt}
                width={1280}
                height={960}
                className="h-[22rem] w-full object-cover md:h-[34rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-2">
            <Reveal>
              <div
                className="insight-body space-y-6 text-lg leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-8 inline-block text-sm font-semibold"
              >
                View the original post →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
