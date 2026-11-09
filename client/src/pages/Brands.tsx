import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container, Section, SurfaceCard, primaryButtonClass, secondaryButtonClass } from "../components/site/SitePrimitives";

const categoryGateway = [
  { title: "BILDAL AGL Transformers & Connectors", href: "/products/bildal-airfield-lighting/", text: "Stocked airfield series isolation transformer lines, L-823 connector kits and leads for UAE aviation projects." },
  { title: "Industrial Rectifier Components", href: "/products/power-rectifiers-semiconductors/", text: "Power diodes, SCR thyristors, bridge rectifiers, generator and welding modules with technical part references." },
  { title: "Marine & Industrial Welding Cables", href: "/products/welding-cables/", text: "Flexible welding cables in 35–95 mm² enquiry sizes for shipyards, workshops and construction." },
  {
    title: "Engine Room & Machinery Spares",
    href: "/spares/engine-room-machinery",
    text: "Navigate core engine room and machinery supply categories for routine and urgent vessel requirements.",
  },
  {
    title: "Hard-to-Source Marine OEM Spares",
    href: "/spares/hard-to-source-oem",
    text: "For obsolete, unclear, or urgent OEM references that need focused sourcing and technical-commercial follow-up.",
  },
  {
    title: "Green Shipping Solutions",
    href: "/green-shipping-solutions",
    text: "View practical decarbonisation and compliance-oriented support areas for marine operations.",
  },
  {
    title: "Supported Product / Brand Areas",
    href: "#supported-families",
    text: "See key brand families and product groups ANVA supports across specialist marine systems.",
  },
];

const supportedFamilies = [
  {
    id: "engine-diagnostics",
    heading: "Engine Diagnostics & Monitoring",
    items: ["MARIDIS engine monitoring and diagnostics references", "Marine diagnostic instruments and related technical support enquiries"],
  },
  {
    id: "cargo-gauging",
    heading: "Cargo, Tank Gauging & Loading Systems",
    items: ["Loadmaster and Levelmaster cargo/tank gauging references", "Level measurement, loading control and associated marine spares"],
  },
  {
    id: "hydraulics",
    heading: "Hydraulics, Filtration & Fluid Control",
    items: ["Bosch Rexroth hydraulic equipment and components", "HYDAC filtration and hydraulic equipment enquiries", "Marine hydraulic hoses, valves and control components"],
  },
  {
    id: "corrosion-protection",
    heading: "ICCP, MGPS & Marine Corrosion Protection",
    items: ["ICCP and MGPS systems, including Arico product enquiries", "Cathelco anodes and associated marine corrosion-protection spares", "Cathodic-protection and anti-fouling system replacement parts"],
  },
  {
    id: "marine-signaling",
    heading: "Marine Signaling & Acoustic Equipment",
    items: ["Kockums Sonics equipment and replacement components", "Shipboard signaling and acoustic system enquiries"],
  },
  {
    id: "propulsion-components",
    heading: "Propellers, Rudders & Marine Propulsion Components",
    items: ["Subhadra Metals propellers, rudders and ejectors", "Replacement propulsion-related components and vessel repair enquiries"],
  },
  {
    id: "tank-cleaning",
    heading: "Tank Cleaning & Marine Washing Systems",
    items: ["Polarmarine and Polarjet cleaning / washing equipment enquiries", "Tank-cleaning system spares and technical replacement requirements"],
  },
  {
    id: "water-treatment",
    heading: "Marine Water Treatment & Pollution Control",
    items: ["HMSA oily water separator (OWS) equipment and spares", "Sewage treatment plant (STP) equipment and spare parts"],
  },
  {
    id: "doors-hatches",
    heading: "Marine Doors, Hatches & Windows",
    items: ["Watertight and weathertight doors, hatches, access covers and windows", "Marine replacement fittings and project-specific procurement support"],
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
                  <p className="mt-3 text-gray-300">{item.text}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-signal-500">
                    Explore route <ArrowRight className="h-4 w-4" />
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
            <ul className="mt-4 grid gap-3 text-gray-300 md:grid-cols-2">
              {[
                "Maker, model, serial, and part number review",
                "Sourcing coordination across OEM, genuine, and suitable equivalent routes where appropriate",
                "Support for difficult, obsolete, and urgent vessel requirements",
                "Technical-commercial fit, documentation, and follow-up before supply confirmation",
                "Internal routing to hard-to-source OEM support when references are incomplete",
              ].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
            <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal-500 hover:text-signal-400" href="/spares/hard-to-source-oem">
              Go to hard-to-source OEM support <ArrowRight className="h-4 w-4" />
            </a>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-800-50" id="supported-families">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">Supported product and brand families</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {supportedFamilies.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <SurfaceCard className="h-full">
                  <h3 className="text-xl font-semibold text-white">{group.heading}</h3>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
                    ))}
                  </ul>
                  <a className="mt-4 inline-flex text-sm font-semibold text-signal-500 hover:text-signal-400" href="/contact">Enquire about this product family</a>
                </SurfaceCard>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">Need RFQ support across brands and spares?</h2>
              <p className="mt-3 max-w-3xl text-gray-300">Send maker, model, serial/part number, vessel name, and required timeline for focused sourcing follow-up.</p>
            </div>
            <a className={primaryButtonClass} href="/contact">Send RFQ / Enquiry</a>
          </SurfaceCard>
        </Container>
      </Section>
    </>
  );
}

export default Brands;
