import { createFileRoute } from "@tanstack/react-router";
import { team } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | Maryann Shaw Communications, Cape Town" },
      {
        name: "description",
        content:
          "Meet the team behind Maryann Shaw Communications: Maryann Shaw, PR strategist and content specialist, and Andrea Joseph, social media manager.",
      },
      { property: "og:title", content: "Our Team | Maryann Shaw Communications" },
      {
        property: "og:description",
        content: "A small, senior team working closely with every client.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="A small team, closely involved."
        intro="You work directly with the people doing the work — no layers, no handovers."
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 sm:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} className="group">
              <div className="overflow-hidden rounded-lg bg-muted">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-[32rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h2 className="mt-6 font-display text-4xl">{m.name}</h2>
              <p className="eyebrow mt-3">{m.role}</p>
              <p className="mt-4 max-w-md text-muted-foreground">{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
