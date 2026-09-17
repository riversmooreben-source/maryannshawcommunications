import { createFileRoute, Link } from "@tanstack/react-router";
import { images, services, work } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PR Agency Cape Town | Maryann Shaw Communications" },
      {
        name: "description",
        content:
          "Maryann Shaw Communications is a Cape Town PR agency specialising in lifestyle, events, sports and sustainability public relations, content and social media.",
      },
      { property: "og:title", content: "PR Agency Cape Town | Maryann Shaw Communications" },
      {
        property: "og:description",
        content:
          "Strategic public relations, communications and content for brands, people and businesses that have something worth saying.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const reasons = [
  {
    n: "01",
    title: "20+ years of industry experience",
    body: "Maryann has worked across photography, writing, photo editing, photo library management and public relations.",
  },
  {
    n: "02",
    title: "Relationships that matter",
    body: "Strong relationships with relevant media help clients reach the audiences that matter to them.",
  },
  {
    n: "03",
    title: "Integrated thinking",
    body: "PR, social media, content and marketing work together rather than existing in isolation.",
  },
  {
    n: "04",
    title: "Personal approach",
    body: "We work closely with clients to understand their businesses, find their stories and communicate them authentically.",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
        <img
          src={images.heroImg}
          alt="Cape Town coastline with Table Mountain at golden hour"
          width={1920}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/35 to-black/45" />
        <div className="shell pb-16 pt-40 text-primary-foreground md:pb-24">
          <p className="eyebrow text-primary-foreground/70">Cape Town • South Africa</p>
          <h1 className="display-xl mt-6 max-w-5xl">We tell stories that get people talking.</h1>
          <p className="mt-8 max-w-2xl text-lg opacity-85 md:text-xl">
            Strategic public relations, communications and content for brands, people and businesses
            that have something worth saying.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Let's Work Together
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center rounded-full border border-primary-foreground/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Explore Our Work
            </Link>
          </div>
          <p className="mt-14 border-t border-primary-foreground/20 pt-6 text-xs uppercase tracking-[0.22em] opacity-75">
            Public Relations • Communications • Content • Social Media
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32">
        <div className="shell grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Introduction</p>
            <h2 className="display-lg mt-5">Good stories deserve to be seen.</h2>
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal className="text-xl leading-relaxed md:text-2xl">
              Maryann Shaw Communications is a Cape Town-based public relations consultancy
              specialising in lifestyle, events, sports, sustainability and the built environment.
            </Reveal>
            <Reveal delay={80} className="mt-8 space-y-5 text-muted-foreground">
              <p>
                We build the profile of our clients by finding their story and telling it in the
                right places — giving brands direct contact with the media relevant to their goals.
              </p>
              <p>
                We tap into the passion of our clients and help them get that message across to
                their audiences, with social media management as part of an integrated approach to
                PR and marketing.
              </p>
            </Reveal>
            <Reveal delay={140} className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              {[
                ["2018", "Founded in Cape Town"],
                ["20+", "Years in the industry"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="font-display text-5xl">{k}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{v}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border bg-secondary/40 py-24 md:py-32">
        <div className="shell">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="display-lg mt-5 max-w-xl">Services built around your story.</h2>
            </div>
            <Link to="/services" className="link-underline text-sm font-semibold">
              All services →
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 40}
                className="group bg-background p-8 transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
              >
                <p className="font-display text-3xl text-accent transition-colors group-hover:text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/75">
                  {s.blurb}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Why Maryann Shaw Communications</p>
            <h2 className="display-lg mt-5 max-w-2xl">Strategy first. Story always.</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={i * 70} className="flex gap-6 border-t border-border pt-8">
                <span className="font-display text-5xl text-accent md:text-6xl">{r.n}</span>
                <div>
                  <h3 className="text-xl font-semibold">{r.title}</h3>
                  <p className="mt-3 text-muted-foreground">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="shell">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected clients</p>
              <h2 className="display-lg mt-5">Stories we've helped tell.</h2>
            </div>
            <Link to="/work" className="link-underline text-sm font-semibold">
              View all work →
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {work.slice(0, 6).map((w, i) => (
              <Reveal key={w.slug} delay={i * 60} className="group">
                <Link to="/work" className="block">
                  <div
                    className={`overflow-hidden rounded-lg ${w.contained ? "bg-secondary" : "bg-muted"}`}
                  >
                    <img
                      src={w.image}
                      alt={w.alt}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className={`h-72 w-full transition-transform duration-[900ms] ease-out group-hover:scale-105 ${
                        w.contained ? "object-contain p-10 md:p-14" : "object-cover"
                      }`}
                    />
                  </div>
                  <p className="eyebrow mt-6">{w.category}</p>
                  <h3 className="mt-3 font-display text-3xl">{w.client}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{w.description}</p>
                  <span className="link-underline mt-4 inline-block text-sm font-semibold">
                    View story →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Founder */}
      <section className="py-24 md:py-32">
        <div className="shell grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <img
              src={images.maryannImg}
              alt="Portrait of Maryann Shaw, founder of Maryann Shaw Communications"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full rounded-lg object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">The founder</p>
            <h2 className="display-lg mt-5">Meet Maryann.</h2>
            <p className="mt-8 text-lg text-muted-foreground">
              Maryann Shaw established Maryann Shaw Communications in 2018 after working in a number
              of PR agency environments, bringing more than twenty years of industry experience
              across photography, writing, photo editing, photo library management and public
              relations.
            </p>
            <p className="mt-8 font-display text-3xl leading-snug">
              Discover the story. Find the audience. Make the connection.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center rounded-full border border-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              More About Maryann →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
