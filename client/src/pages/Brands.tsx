import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container, Section, SectionHeading, SurfaceCard, primaryButtonClass, secondaryButtonClass } from "../components/site/SitePrimitives";

const representedGroups = [
  {
    category: "Engine Diagnostics & Monitoring",
    brands: ["MARIDIS"],
  },
  {
    category: "Cargo / Tank Gauging / Loading Systems",
    brands: ["Loadmaster"],
  },
  {
    category: "Hydraulics & Fluid Control",
    brands: ["Bosch Rexroth", "HYDAC"],
  },
  {
    category: "Signaling / Marine Protection / Technical Systems",
    brands: ["Kockums Sonics", "ICCP / MGPS", "Subhadra"],
  },
];

const supportGroups = [
  {
    category: "Specialist Equipment Support",
    points: ["Polarjet", "Additional OEM and specialist references on request"],
  },
  {
    category: "Marine Spares Support",
    points: ["Engine room & machinery spare support", "Hard-to-source OEM sourcing support"],
  },
];

function Brands() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <SectionHeading
            eyebrow="Products / Brands"
            title="Brands and specialist product support"
            description="ANVA supports represented and selected marine brands through practical technical and commercial coordination. Product groups are organized by operational use so enquiries can be routed quickly."
          />
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <SectionHeading eyebrow="Represented / aligned categories" title="Core product categories" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2">
            {representedGroups.map((group) => (
              <SurfaceCard key={group.category}>
                <h3 className="text-xl font-semibold">{group.category}</h3>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {group.brands.map((brand) => (
                    <li key={brand} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{brand}</li>
                  ))}
                </ul>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SectionHeading eyebrow="Support categories" title="Specialist support and sourcing" className="mb-8" />
          <div className="grid gap-6 lg:grid-cols-2">
            {supportGroups.map((group) => (
              <SurfaceCard key={group.category}>
                <h3 className="text-xl font-semibold">{group.category}</h3>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{point}</li>
                  ))}
                </ul>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-800-50">
        <Container className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard>
            <h2 className="font-display text-3xl font-bold">Marine spares support pages</h2>
            <p className="mt-3 text-gray-300">Explore dedicated pages for engine room machinery spares and hard-to-source OEM references.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className={primaryButtonClass} href="/spares/engine-room-machinery">Engine Room & Machinery</a>
              <a className={secondaryButtonClass} href="/spares/hard-to-source-oem">Hard-to-Source OEM</a>
            </div>
          </SurfaceCard>

          <SurfaceCard>
            <h2 className="font-display text-3xl font-bold">Need product guidance?</h2>
            <p className="mt-3 text-gray-300">Send technical details and vessel context. ANVA will advise the right support route across service, supply, and technical coordination.</p>
            <a className={`${primaryButtonClass} mt-6`} href="/contact">Send Product / Brand Enquiry <ArrowRight className="h-4 w-4" /></a>
          </SurfaceCard>
        </Container>
      </Section>
    </>
  );
}

export default Brands;
