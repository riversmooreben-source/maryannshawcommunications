import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { work } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const item = work.find((w) => w.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study not found | Maryann Shaw Communications" }, { name: "robots", content: "noindex" }],
      };
    }
    const { item } = loaderData;
    const title = `${item.client} — ${item.category} | Maryann Shaw Communications`;
    return {
      meta: [
        { title },
        { name: "description", content: item.description },
        { property: "og:title", content: title },
        { property: "og:description", content: item.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: WorkNotFound,
  component: CaseStudy,
});

function WorkNotFound() {
  return (
    <section className="pb-24 pt-40">
      <div className="shell">
        <h1 className="display-xl">Case study not found.</h1>
        <Link to="/work" className="link-underline mt-8 inline-block text-sm font-semibold">
          ← Back to all work
        </Link>
      </div>
    </section>
  );
}

function CaseStudy() {
  const { item } = Route.useLoaderData();

  return (
    <>
      <section className="pb-12 pt-36 md:pt-48">
        <div className="shell">
          <Reveal>
            <Link to="/work" className="link-underline text-sm font-semibold">
              ← All work
            </Link>
            <p className="eyebrow mt-8">{item.category}</p>
            <h1 className="display-xl mt-6 max-w-4xl">{item.client}</h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {item.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <Reveal>
            <div
              className={`overflow-hidden rounded-lg ${item.contained ? "bg-secondary" : "bg-muted"}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                width={1600}
                height={900}
                className={`h-[22rem] w-full md:h-[34rem] ${
                  item.contained ? "object-contain p-12 md:p-20" : "object-cover"
                }`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-2">
            <Reveal>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                {(item.story ?? [item.description]).map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              {item.sourceUrl && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-8 inline-block text-sm font-semibold"
                >
                  Read the original coverage →
                </a>
              )}
            </Reveal>
          </div>

          {item.quote && (
            <aside className="md:col-span-3">
              <Reveal delay={80}>
                <blockquote className="border-l border-border pl-6">
                  <p className="font-display text-2xl leading-snug">“{item.quote.text}”</p>
                  <footer className="mt-6 text-sm">
                    <span className="font-semibold">{item.quote.name}</span>
                    <span className="block text-muted-foreground">{item.quote.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
            </aside>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
