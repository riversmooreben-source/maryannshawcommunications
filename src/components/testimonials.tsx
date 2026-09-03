import { useState } from "react";
import { testimonials } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;
  const go = (d: number) => setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section className="border-y border-border bg-secondary/50 py-24 md:py-32">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Client words</p>
            <h2 className="display-lg mt-4 max-w-xl">Kind words from people we work with.</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              →
            </button>
          </div>
        </Reveal>

        <Reveal className="relative mt-14 max-w-4xl">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-3 -top-16 font-display text-[9rem] leading-none text-accent/25 md:-left-10 md:text-[14rem]"
          >
            “
          </span>
          <blockquote className="relative">
            <p key={t.quote} className="font-display text-2xl leading-snug md:text-4xl">
              {t.quote}
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              <span className="text-sm font-semibold">{t.name}</span>
              <span className="text-sm text-muted-foreground">{t.role}</span>
            </footer>
          </blockquote>
          <div className="mt-10 flex flex-wrap gap-2">
            {testimonials.map((x, idx) => (
              <button
                key={x.name}
                type="button"
                aria-label={`Show testimonial from ${x.name}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-10 bg-accent" : "w-4 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
