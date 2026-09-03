import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border pb-16 pt-36 md:pb-24 md:pt-48">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-xl mt-6 max-w-4xl">{title}</h1>
          {intro && <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
