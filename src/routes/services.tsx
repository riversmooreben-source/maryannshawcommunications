import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "PR & Communications Services | Cape Town PR Agency" },
      {
        name: "description",
        content:
          "Public relations, media relations, content creation, social media, event PR and editorial services for lifestyle, sports and sustainability brands in Cape Town.",
      },
      { property: "og:title", content: "PR & Communications Services | Cape Town PR Agency" },
      {
        property: "og:description",
        content:
          "Media strategy, media relations, content, social media management, event PR and editorial services.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything we do starts with the story."
        intro="We listen, get an understanding of what makes you and your business or event tick, then develop a comprehensive plan for how and where you should feature in the most appropriate media."
      />

      <section className="py-16 md:py-24">
        <div className="shell">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              className="group grid gap-6 border-b border-border py-10 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <p className="font-display text-4xl text-accent md:col-span-2">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-3xl md:col-span-4 md:text-4xl">{s.title}</h2>
              <div className="md:col-span-6">
                <p className="text-lg">{s.blurb}</p>
                <p className="mt-4 text-muted-foreground">{s.detail}</p>
              </div>
            </Reveal>
          ))}

          <Reveal className="mt-16 rounded-lg bg-secondary/60 p-8 md:p-12">
            <h2 className="font-display text-3xl">Complementary services</h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              When you are telling your story, you may need some additional tools. We have a network
              of experienced professionals who take photographs, make videos, and do graphic and
              website design, as well as digital marketing specialists who handle Adwords, SEO and
              social media advertising. We stick to what we do well and use our networks to deliver a
              comprehensive service.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
