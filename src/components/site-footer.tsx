import { Link } from "@tanstack/react-router";
import { SocialIcon } from "@/components/social-icon";
import { contact, navLinks } from "@/data/site";
import logoUrl from "@/assets/logo-transparent.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt=""
              aria-hidden="true"
              width={354}
              height={130}
              decoding="async"
              loading="lazy"
              className="h-16 w-auto"
            />
            <span className="hidden md:block font-display text-sm uppercase tracking-[0.12em] text-foreground">
              maryann shaw communications
            </span>
          </div>
          <p className="eyebrow mt-4">PUBLIC RELATIONS • COMMUNICATIONS • DIGITAL MARKETING</p>
          <div className="mt-6 flex flex-col gap-2">
            <a
              href={`mailto:${contact.email}`}
              className="link-underline self-start text-sm text-muted-foreground hover:text-foreground"
            >
              {contact.email}
            </a>
            <a
              href={contact.phoneHref}
              className="link-underline self-start text-sm text-muted-foreground hover:text-foreground"
            >
              {contact.phone}
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <p className="eyebrow mb-1">Navigate</p>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="link-underline self-start text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <p className="eyebrow mb-1">Follow</p>
          {contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline flex items-center gap-2 self-start text-muted-foreground hover:text-foreground"
            >
              <SocialIcon platform={s.platform} className="shrink-0" />
              {s.label}
            </a>
          ))}
          <p className="mt-4 text-muted-foreground">{contact.location}</p>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Maryann Shaw Communications. All rights reserved.</p>
        <Link to="/privacy" className="link-underline self-start hover:text-foreground">
          Privacy Policy & Terms of Use
        </Link>
      </div>
    </footer>
  );
}
