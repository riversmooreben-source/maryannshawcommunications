import { createFileRoute, Link } from "@tanstack/react-router";
import { work } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Our Work & Clients | Maryann Shaw Communications" },
      {
        name: "description",
        content:
          "Selected PR work for BOS, Ultra-Trail Cape Town, Glamtrails, Torpedo SwimRun, KAP sani2c, WILD AIR, Cape Town Motor Show, Kingfish Enterprises and Vilaca Racing.",
      },
      { property: "og:title", content: "Our Work & Clients | Maryann Shaw Communications" },
      {
        property: "og:description",
        content: "Stories we've helped tell across lifestyle, events, sport and sustainability.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

function Work() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Stories we've helped tell."
        intro="A selection of the brands, events and individuals we work with across lifestyle, adventure sport, sustainability and the built environment."
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-x-10 gap-y-16 md:grid-cols-2">
          {work.map((w, i) => (
            <Reveal
              key={w.slug}
              delay={(i % 2) * 60}
              className={`group ${i % 3 === 0 ? "md:col-span-2" : ""}`}
            >
              <Link to="/work/$slug" params={{ slug: w.slug }} className="block">
                <div
                  className={`overflow-hidden rounded-lg ${w.contained ? "bg-secondary" : "bg-muted"}`}
                >
                  <img
                    src={w.image}
                    alt={w.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className={`w-full transition-transform duration-[900ms] ease-out group-hover:scale-105 ${
                      w.contained ? "object-contain p-12 md:p-16" : "object-cover"
                    } ${i % 3 === 0 ? "h-[26rem] md:h-[34rem]" : "h-80"}`}
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-baseline gap-4">
                  <h2 className="font-display text-4xl">{w.client}</h2>
                  <p className="eyebrow">{w.category}</p>
                </div>
                <p className="mt-4 max-w-2xl text-muted-foreground">{w.description}</p>
                <span className="link-underline mt-4 inline-block text-sm font-semibold">
                  View story →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>


      <Testimonials />
      <CtaBand />
    </>
  );
}
