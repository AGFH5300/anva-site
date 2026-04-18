import { CheckCircle2 } from "lucide-react";

import { Container, Section, SectionHeading, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

const specialtyAreas = [
  "Hard-to-source marine spares",
  "Uncommon and niche OEM references",
  "Specialist sourcing support for low-volume requirements",
  "Support for odd and difficult technical enquiries",
  "Clarification support on specifications and interchangeability",
];

function HardToSourceMarineOemSpares() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <SectionHeading eyebrow="Specialist Supply" title="Hard-to-Source Marine OEM Spares" description="ANVA supports complex spare enquiries involving uncommon OEMs and difficult-to-source items where standard channels are limited." />
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard>
            <h2 className="text-2xl font-semibold">Support focus</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              {specialtyAreas.map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold">Example OEM references</h2>
            <p className="mt-4 text-gray-300">Enquiries may include names such as Sperre, Sunflame, Gali, and other niche OEM references depending on vessel equipment profile.</p>
            <p className="mt-4 text-sm text-gray-400">Note: Brand names are listed only as equipment references for sourcing support and do not imply distributorship status or immediate stock availability.</p>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-marine-800/70 p-8 text-center sm:p-10">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Have a difficult spare enquiry?</h2>
            <p className="mt-4 text-lg text-gray-300">Send part data, maker reference, and vessel timeline for a targeted sourcing response.</p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Request OEM Sourcing Support</a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default HardToSourceMarineOemSpares;
