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

const anvaPillars = [
  {
    title: "Service",
    description: "Ship repair support, drydock coordination, and riding squad attendance for planned and urgent needs.",
  },
  {
    title: "Supply",
    description: "Marine machinery, specialist spares, and practical sourcing support across common and hard-to-source items.",
  },
  {
    title: "Technical expertise",
    description: "Project coordination and consultancy for upgrades, repairs, and operational technical execution.",
  },
];

const gatewayLinks = [
  {
    title: "Services",
    description: "Ship repair support, riding squads, and technical delivery for planned and urgent jobs.",
    href: "/services",
    cta: "Explore Services",
  },
  {
    title: "Products / Brands",
    description: "Marine products, represented brands, and practical sourcing support for vessel requirements.",
    href: "/products-brands",
    cta: "View Products / Brands",
  },
  {
    title: "Green Shipping Solutions",
    description: "Efficiency and monitoring solutions that support measurable vessel performance improvements.",
    href: "/green-shipping-solutions",
    cta: "Explore Green Shipping",
  },
  {
    title: "Contact / RFQ",
    description: "Send your requirement and get a clear commercial and technical response from ANVA.",
    href: "/contact",
    cta: "Request a Quote",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24" id="hero">
        <div className="absolute inset-0 -z-20">
          <img
            className="h-full w-full object-cover object-center opacity-35"
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
            alt="Commercial marine vessel support"
          />
          <div className="absolute inset-0 bg-marine-900/45" />
          <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(15,29,54,0.86)_0%,rgba(18,36,66,0.78)_42%,rgba(240,244,250,0.18)_100%)]" />
        </div>
        <Container>
          <div className="max-w-3xl rounded-2xl border border-white/45 bg-[rgba(12,25,46,0.62)] p-8 shadow-[0_24px_42px_rgba(7,16,31,0.38)] backdrop-blur-md sm:p-10 lg:p-11">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">
              Supporting Vessels with Service, Supply &amp; Technical Expertise
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Real marine understanding. Practical support.
            </h1>
            <p className="mt-5 max-w-[62ch] text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
              ANVA Marine is a marine support company serving shipowners, managers, yards, and technical teams with
              service response, specialist supply, and technical execution.
            </p>
            <p className="mt-4 text-sm font-medium text-gray-300 sm:text-base">
              Use the main navigation or choose a section below to go directly to the right ANVA team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className={primaryButtonClass} href="/contact">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a className={secondaryButtonClass} href="/services">
                Explore Services
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-t border-slate-300/70 bg-slate-100/95 py-10 sm:py-12 lg:py-14">
        <Container className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10">
          <SectionHeading
            title="ANVA Marine in one view"
            description="Commercial and technical support for active vessel requirements through one clear workflow covering service, supply, and follow-up."
            className="[&_h2]:text-marine-900 [&_p]:text-slate-700"
          />
          <div className={`${mutedPanelClass} border-slate-200 bg-white shadow-[0_10px_26px_rgba(8,14,27,0.12)]`}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Who we support</p>
            <p className="mt-4 leading-7 text-slate-700">
              Shipowners, ship managers, shipyards, technical teams, and procurement teams requiring practical commercial
              and technical response.
            </p>
          </div>
        </Container>
        <Container className="mt-8 lg:mt-9">
          <SectionHeading
            title="Service. Supply. Technical expertise."
            className="mb-7 text-marine-900 [&_h2]:text-marine-900 [&_p]:text-slate-700 lg:mb-8"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {anvaPillars.map((pillar) => (
              <SurfaceCard key={pillar.title} className="flex flex-col border-slate-200 bg-white shadow-[0_12px_30px_rgba(8,14,27,0.12)]">
                <h3 className="text-xl font-semibold text-marine-900">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{pillar.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-100/95 py-12 sm:py-14 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Gateway"
            title="Go directly to the right section"
            description="Quick routes into the core ANVA pages for direct action."
            className="mb-8 [&_h2]:text-marine-900 [&_p]:text-slate-700 lg:mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {gatewayLinks.map((item) => (
              <a key={item.title} href={item.href} className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-marine-700/40">
                <SurfaceCard className="flex h-full flex-col border-slate-200 bg-white shadow-[0_12px_30px_rgba(8,14,27,0.1)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-marine-900/25 group-hover:shadow-[0_18px_36px_rgba(8,14,27,0.16)]">
                  <h3 className="text-xl font-semibold text-marine-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.description}</p>
                  <div className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-marine-900">
                    {item.cta} <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </SurfaceCard>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-slate-300/70 bg-white py-12 sm:py-14 lg:py-16">
        <Container className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-marine-900">Why ANVA</h2>
            <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
              {[
                "Marine-first response backed by practical execution.",
                "Combined commercial and technical support.",
                "Structured handling for urgent and planned requirements.",
                "Field attendance backed by dependable supply support.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a className={primaryButtonClass} href="/contact">
            Discuss Your Requirement <ArrowRight className="h-4 w-4" />
          </a>
        </Container>
      </Section>
    </>
  );
}

export default Home;
