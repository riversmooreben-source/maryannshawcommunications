import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { contact } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy & Terms of Use | Maryann Shaw Communications" },
      {
        name: "description",
        content:
          "How Maryann Shaw Communications uses cookies and handles information collected through this website.",
      },
      { property: "og:title", content: "Privacy Policy & Terms of Use" },
      {
        property: "og:description",
        content: "Cookie and privacy information for maryannshawcommunications.co.za.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy & Terms of Use" />
      <section className="py-16 md:py-24">
        <div className="shell max-w-3xl space-y-6 text-muted-foreground">
          <p>
            We only use functional (or required) cookies that are necessary for this site to
            function, including those that are necessary for Google Analytics to work.
          </p>
          <p>
            We do analyse the use of this website to measure the audience, but it is de-identified
            data. In other words, we don't know who you are.
          </p>
          <p>
            Information you submit through our enquiry form is used solely to respond to your
            enquiry and is never sold or shared with third parties for marketing purposes.
          </p>
          <p>
            For any questions about privacy or this website, email us at{" "}
            <a href={`mailto:${contact.email}`} className="link-underline text-foreground">
              {contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
