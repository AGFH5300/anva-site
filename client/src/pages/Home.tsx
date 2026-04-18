import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  Container,
  Section,
  SectionHeading,
  SurfaceCard,
  mutedPanelClass,
  primaryButtonClass,
  secondaryButtonClass,
} from "../components/site/SitePrimitives";

const serviceBlocks = [
  {
    title: "Drydocking & Ship Repair Support",
    description:
      "Planning, technical follow-up, repair coordination, and support through pre-drydock, dock, and return-to-service stages.",
  },
  {
    title: "Marine Riding Squads & Onboard Repair Teams",
    description:
      "Mechanical, piping, steel, electrical, and technical riding squad support for urgent and planned vessel attendance.",
  },
  {
    title: "Project Management & Technical Consultancy",
    description:
      "Hands-on coordination and practical consultancy for vessel upgrades, equipment decisions, and operational execution.",
  },
];

const whoWeServe = ["Shipowners", "Ship Managers", "Shipyards", "Technical Teams", "Procurement Teams", "Operators"];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28" id="hero">
        <div className="absolute inset-0 -z-20">
          <img
            className="h-full w-full object-cover object-center opacity-35"
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
            alt="Commercial marine vessel support"
          />
          <div className="absolute inset-0 bg-marine-900/55" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(11,18,33,0.95)_0%,rgba(11,18,33,0.9)_45%,rgba(11,18,33,0.2)_100%)]" />
        </div>
        <Container>
          <div className="max-w-3xl rounded-2xl border border-white/10 bg-marine-900/45 p-8 shadow-2xl backdrop-blur sm:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">
              Supporting Vessels with Service, Supply &amp; Technical Expertise
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Real marine understanding. Practical support.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
              ANVA supports shipowners, managers, yards, and technical teams with ship repair support, riding squads,
              project coordination, technical consultancy, specialist supply, and selected green shipping solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className={primaryButtonClass} href="/contact">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a className={secondaryButtonClass} href="/services">Explore Services</a>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-t border-white/10 bg-marine-900">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <SectionHeading
              title="Who we are. What we do."
              description="ANVA Marine is a marine-commercial support company focused on technical and commercial execution. We help clients complete repair, retrofit, and sourcing requirements with practical planning and responsive follow-up."
            />
          </div>
          <div className={mutedPanelClass}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Support scope</p>
            <ul className="mt-5 grid gap-3 text-gray-200 sm:grid-cols-2">
              {["Ship repair support", "Riding squads", "Project coordination", "Technical consultancy", "Specialist spare supply", "Green shipping solutions"].map((item) => (
                <li className="flex items-center gap-2" key={item}><CheckCircle2 className="h-4 w-4 text-signal-500" />{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-800-50">
        <Container>
          <SectionHeading title="Key services" className="mb-10" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceBlocks.map((service) => (
              <SurfaceCard key={service.title}>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-gray-300">{service.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard>
            <SectionHeading
              eyebrow="Products & specialist supply"
              title="Products, brands & specialist sourcing"
              description="ANVA supports procurement and sourcing for marine systems, machinery, and spare parts across common and hard-to-source requirements."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <a className={primaryButtonClass} href="/products-brands">View Products / Brands</a>
              <a className={secondaryButtonClass} href="/spares/engine-room-machinery">Marine Spares Support</a>
            </div>
          </SurfaceCard>

          <SurfaceCard className="bg-[linear-gradient(160deg,rgba(19,31,51,0.85),rgba(11,18,33,0.72))]">
            <SectionHeading
              eyebrow="Green Shipping"
              title="Practical efficiency upgrades"
              description="We support fuel monitoring, flow measurement, bunker measurement, and retrofit-ready vessel efficiency technologies."
            />
            <a className={`${secondaryButtonClass} mt-7 border-signal-500 text-signal-500 hover:bg-signal-500 hover:text-marine-900`} href="/green-shipping-solutions">
              Explore Green Shipping Solutions
            </a>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-800-50">
        <Container className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard>
            <SectionHeading title="Why ANVA" />
            <ul className="mt-5 space-y-3 text-gray-200">
              {[
                "Real marine understanding and practical execution.",
                "Technical and commercial support in one workflow.",
                "Structured response for urgent and planned requirements.",
                "Service attendance backed by material and supply support.",
              ].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
          <SurfaceCard>
            <SectionHeading title="Who we serve" />
            <div className="mt-5 flex flex-wrap gap-2">
              {whoWeServe.map((segment) => (
                <span key={segment} className="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-200">{segment}</span>
              ))}
            </div>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-marine-900">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-signal-500/30 bg-[linear-gradient(145deg,rgba(255,173,1,0.15),rgba(11,18,33,0.9))] p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Need support for an active requirement?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
              Send your requirement and ANVA will respond with practical next steps for service, supply, or technical support.
            </p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Home;
