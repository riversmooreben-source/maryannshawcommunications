import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { insightCategories, insights } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights, Press Releases & Media Coverage | Maryann Shaw Communications" },
      {
        name: "description",
        content:
          "Press releases, media coverage, case studies and personal branding stories from a Cape Town public relations consultancy.",
      },
      { property: "og:title", content: "Insights & Media Coverage | Maryann Shaw Communications" },
      {
        property: "og:description",
        content: "Client stories, press releases and coverage across South African media.",
      },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

function Insights() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? insights : insights.filter((i) => i.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Journal."
        intro="Press releases, media coverage, case studies and the stories behind the work."
      />

      <section className="py-14 md:py-20">
        <div className="shell">
          <div className="flex flex-wrap gap-2">
            {insightCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active === c
                    ? "border-foreground bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {list.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 60} className="group">
                <article>
                  <div className="overflow-hidden rounded-lg bg-muted">
                    <img
                      src={a.image}
                      alt={a.alt}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-64 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-5">{a.category}</p>
                  <h2 className="mt-3 font-display text-2xl leading-snug">{a.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
                  <span className="link-underline mt-4 inline-block text-sm font-semibold">
                    Read article →
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
