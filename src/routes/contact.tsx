import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SocialIcon } from "@/components/social-icon";
import { sendEnquiry } from "@/lib/enquiry.functions";
import { contact, services } from "@/data/site";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Maryann Shaw Communications" },
      {
        name: "description",
        content:
          "Get in touch with Maryann Shaw Communications in Cape Town to discuss public relations, media relations and content for your brand or event.",
      },
      { property: "og:title", content: "Contact | Maryann Shaw Communications" },
      {
        property: "og:description",
        content: "Start a conversation about PR, media relations and storytelling in Cape Town.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const submit = useServerFn(sendEnquiry);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);


  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        intro="Tell us a little about your brand, event or story and we'll come back to you with how we'd approach it."
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-8">
            <div>
              <p className="eyebrow">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="link-underline mt-2 inline-block font-display text-2xl"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <p className="eyebrow">Phone</p>
              <a href={contact.phoneHref} className="link-underline mt-2 inline-block font-display text-2xl">
                {contact.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow">Studio</p>
              <p className="mt-2 text-muted-foreground">{contact.location}</p>
            </div>
            <div>
              <p className="eyebrow">Follow</p>
              <div className="mt-2 flex flex-col gap-2">
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
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            {sent ? (
              <div className="rounded-lg border border-border bg-secondary/50 p-10">
                <h2 className="font-display text-3xl">Thank you.</h2>
                <p className="mt-4 text-muted-foreground">
                  Your enquiry has been sent to our team. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  setError(null);
                  setSending(true);
                  try {
                    await submit({
                      data: {
                        name: String(data.get("name") ?? ""),
                        email: String(data.get("email") ?? ""),
                        interest: String(data.get("interest") ?? ""),
                        message: String(data.get("message") ?? ""),
                      },
                    });
                    form.reset();
                    setSent(true);
                  } catch {
                    setError(
                      "Sorry — your enquiry couldn't be sent. Please try again or email us directly.",
                    );
                  } finally {
                    setSending(false);
                  }
                }}
              >

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow">Name</span>
                    <input
                      name="name"
                      required
                      className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow">Email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="eyebrow">What can we help with?</span>
                  <select
                    name="interest"
                    className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
                  >
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Something else">Something else</option>
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow">Your story</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 outline-none focus:border-foreground"
                  />
                </label>
                {error && (
                  <p role="alert" className="text-sm text-destructive">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Enquiry"}

                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
