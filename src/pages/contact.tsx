import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Faq11 } from "@/components/blocks/faq11";
import { sectors } from "@/content/sectors";
import { company, primaryCta } from "@/content/site";
import { visitRequestMailto } from "@/lib/visit-request";

const emptyForm = { name: "", organisation: "", contact: "", sector: "", message: "" };

export function ContactPage() {
  const [values, setValues] = useState(emptyForm);

  // A sector page links here with ?sector=<slug>. Read it after hydration so the
  // pre-rendered HTML (which has no query) still matches.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("sector");
    if (slug && sectors.some((sector) => sector.slug === slug)) {
      setValues((previous) => ({ ...previous, sector: slug }));
    }
  }, []);

  function update(field: keyof typeof emptyForm, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = visitRequestMailto(values);
  }

  return (
    <>
      <PageHero eyebrow="CONTACT" title="Book a free discovery visit.">
        We visit your factory, office, school or site, learn how you work today and suggest a
        small pilot. There is no cost for the visit.
      </PageHero>

      <section className="section" id="contact-form" aria-labelledby="form-title">
        <div className="container contact-layout">
          <aside className="home-card contact-details" aria-labelledby="details-title">
            <h2 id="details-title">Contact details</h2>
            <p>
              <MapPin size={18} aria-hidden="true" />
              {company.location}
            </p>
            <p>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            {company.phones.map((phone) => (
              <p key={phone.href}>
                <Phone size={18} aria-hidden="true" />
                <a href={phone.href}>{phone.label}</a>
              </p>
            ))}
          </aside>

          <form className="inquiry-form contact-form" onSubmit={submit}>
            <h2 id="form-title">{primaryCta.label}</h2>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  value={values.name}
                  onChange={(event) => update("name", event.target.value)}
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </label>
              <label>
                Company, school or organisation
                <input
                  name="organisation"
                  value={values.organisation}
                  onChange={(event) => update("organisation", event.target.value)}
                  autoComplete="organization"
                  maxLength={150}
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email or phone
                <input
                  name="contact"
                  value={values.contact}
                  onChange={(event) => update("contact", event.target.value)}
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </label>
              <label>
                Your sector
                <select
                  name="sector"
                  value={values.sector}
                  onChange={(event) => update("sector", event.target.value)}
                >
                  <option value="">Other / not sure</option>
                  {sectors.map((sector) => (
                    <option key={sector.slug} value={sector.slug}>
                      {sector.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              What would you like to improve?
              <textarea
                name="message"
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                rows={5}
                required
                maxLength={5000}
              />
            </label>
            <Button size="lg" type="submit">
              Send request by email
              <ArrowUpRight />
            </Button>
            <p className="form-note">
              This opens your email app with the request filled in. The website does not store
              your details.
            </p>
          </form>
        </div>
      </section>

      <Faq11 />
    </>
  );
}
