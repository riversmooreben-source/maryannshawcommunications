import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-capetown.jpg";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-28 md:py-40">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1200}
        className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover opacity-25"
      />
      <div className="shell text-center text-primary-foreground">
        <Reveal>
          <h2 className="display-lg mx-auto max-w-3xl">Have a story worth telling?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg opacity-80">
            Let's find the right audience and make sure they hear it.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a Conversation →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
