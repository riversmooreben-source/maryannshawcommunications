import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import logoUrl from "@/assets/logo-transparent.png";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="shell flex items-center justify-between gap-6 py-4 md:py-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt=""
            aria-hidden="true"
            width={1584}
            height={672}
            decoding="async"
            fetchPriority="high"
            className="h-10 w-auto md:h-12"
          />
          <span className="hidden md:block font-display text-sm uppercase tracking-[0.12em] text-foreground">
            maryann shaw communications
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-muted-foreground transition-colors hover:text-foreground"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent"
          >
            Let's Talk
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-border"
          >
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className="h-px origin-left bg-accent transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="shell flex flex-col py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border/60 py-4 font-display text-3xl"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
