import { sectors } from "@/content/sectors";
import { company } from "@/content/site";

export type VisitRequest = {
  name: string;
  organisation: string;
  contact: string;
  sector: string;
  message: string;
};

// Builds the mailto link the contact form opens. Nothing is sent or stored by the site.
export function visitRequestMailto(values: VisitRequest) {
  const sectorName =
    sectors.find((sector) => sector.slug === values.sector)?.name ?? "Other / not sure";
  const body = [
    "Hello AndHub,",
    "",
    "I would like to book a free discovery visit.",
    "",
    `Name: ${values.name.trim()}`,
    `Organisation: ${values.organisation.trim()}`,
    `Email or phone: ${values.contact.trim()}`,
    `Sector: ${sectorName}`,
    "",
    values.message.trim(),
  ].join("\n");
  const subject = `Discovery visit request: ${values.organisation.trim() || values.name.trim()}`;
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
