import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Maryann Shaw | Public Relations Cape Town" },
      {
        name: "description",
        content:
          "Maryann Shaw established Maryann Shaw Communications in 2018, bringing over twenty years of media, photography, writing and public relations experience to Cape Town clients.",
      },
      { property: "og:title", content: "About Maryann Shaw | Public Relations Cape Town" },
      {
        property: "og:description",
        content:
          "Over twenty years in the industry: photography, writing, photo editing, photo library management and public relations.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Meet Maryann."
        intro="Maryann Shaw established Maryann Shaw Communications in 2018 after working in a number of PR agency environments where she obtained a solid grounding in the workings of public relations."
      />

      <section className="py-20 md:py-28">
        <div className="shell grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <img
              src={images.maryannImg}
              alt="Maryann Shaw, PR strategist and content specialist, Cape Town"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full rounded-lg object-cover"
            />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <blockquote className="font-display text-2xl leading-snug md:text-3xl">
                “I grew up with media as part of my world and have worked for over twenty years in
                the industry, as a photographer and writer, as a photo editor and in photo library
                management, and for over five years in Public Relations. I love what I do and I love
                helping my clients be seen by the most appropriate audiences to achieve their
                marketing goals. I do this by discovering and telling their stories, and by building
                relationships on their behalf with the media that matters to them.”
              </blockquote>
              <p className="mt-6 text-sm font-semibold">Maryann Shaw, Founder</p>
            </Reveal>

            <Reveal delay={80} className="mt-12 space-y-6 text-muted-foreground">
              <p>
                We take an integrated approach to PR and can work closely with your marketing team to
                ensure that your PR goals are aligned with your overall marketing strategy. We can
                assist with common sense insights into your marketing to ensure that your PR strategy
                is furthering your business goals.
              </p>
              <p>
                In some cases, where we work with smaller or start-up brands, we can be the sounding
                board you share your story with in order to help you find your voice.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-12 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-3">
              {[
                ["Discover", "the story"],
                ["Find", "the audience"],
                ["Make", "the connection"],
              ].map(([a, b]) => (
                <div key={a} className="bg-background p-6">
                  <p className="font-display text-3xl text-accent">{a}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{b}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={180}>
              <Link
                to="/services"
                className="mt-12 inline-flex items-center rounded-full border border-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                See how we work →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
