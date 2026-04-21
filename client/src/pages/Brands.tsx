import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container, Section, SurfaceCard, primaryButtonClass, secondaryButtonClass } from "../components/site/SitePrimitives";

const categoryGateway = [
  { title: "Engine Room & Machinery Spares", href: "/spares/engine-room-machinery" },
  { title: "Hard-to-Source Marine OEM Spares", href: "/spares/hard-to-source-oem" },
  { title: "Green Shipping Solutions", href: "/green-shipping-solutions" },
  { title: "Supported Product / Brand Areas", href: "#supported-families" },
];

const supportedFamilies = [
  {
    heading: "Engine Diagnostics and Monitoring",
    items: ["MARIDIS", "Related instrumentation and diagnostic support items"],
  },
  {
    heading: "Cargo, Tank Gauging and Loading Systems",
    items: ["Loadmaster", "Associated marine gauging and control references"],
  },
  {
    heading: "Hydraulics and Fluid Control",
    items: ["Bosch Rexroth", "HYDAC", "Related hydraulic and filtration support"],
  },
  {
    heading: "Signaling and Marine Technical Systems",
    items: ["Kockums Sonics", "ICCP / MGPS", "Subhadra", "Additional specialist references on request"],
  },
];

function Brands() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Products / Brands</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Products, Brands & Specialist Marine Supply Support
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            ANVA supports marine teams with supply coordination across core product categories, specialist brand areas,
            and difficult vessel requirements that need technical and commercial follow-up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={primaryButtonClass} href="/contact">Send Product Enquiry</a>
            <a className={secondaryButtonClass} href="/services">View Service Support</a>
          </div>
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">Category gateway</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {categoryGateway.map((item) => (
              <a key={item.title} href={item.href}>
                <SurfaceCard className="transition-colors hover:border-signal-500/50">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-signal-500">
                    Explore <ArrowRight className="h-4 w-4" />
                  </p>
                </SurfaceCard>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">Supply support approach</h2>
            <p className="mt-4 text-gray-300">
              ANVA supports sourcing, marine supply coordination, OEM and genuine references, and equivalent commercial
              handling where appropriate. Each enquiry is handled with practical response on lead time, documentation,
              and technical-commercial fit for vessel use.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-800-50" id="supported-families">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">Supported product and brand families</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {supportedFamilies.map((group) => (
              <SurfaceCard key={group.heading}>
                <h3 className="text-xl font-semibold text-white">{group.heading}</h3>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
                  ))}
                </ul>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">Need quotation support across brands and spares?</h2>
              <p className="mt-3 max-w-3xl text-gray-300">Send your requirement with maker, model, and timeline for a focused response.</p>
            </div>
            <a className={primaryButtonClass} href="/contact">Send RFQ / Enquiry</a>
          </SurfaceCard>
        </Container>
      </Section>
    </>
  );
}

export default Brands;
