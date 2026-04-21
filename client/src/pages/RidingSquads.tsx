import { CheckCircle2 } from "lucide-react";

import { Container, Section, SurfaceCard, primaryButtonClass, secondaryButtonClass } from "../components/site/SitePrimitives";

const useCases = [
  "Voyage repairs",
  "Urgent onboard jobs",
  "Pre-drydock support",
  "Port attendance",
  "Manpower reinforcement",
];

const capabilities = [
  "Onboard repairs",
  "Steel and repair attendance where appropriate",
  "Maintenance support",
  "Technical manpower",
  "Coordination of attendance and execution",
];

function RidingSquads() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Services</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Marine Riding Squads & Onboard Repair Support
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Practical riding squad support for vessel teams that need immediate manpower response, repair attendance,
            or pre-drydock onboard work completion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={primaryButtonClass} href="/contact">Send Riding Squad Enquiry</a>
            <a className={secondaryButtonClass} href="/services">Back to Services</a>
          </div>
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">When clients use riding squads</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((item) => (
              <SurfaceCard key={item}><h3 className="text-lg font-semibold text-white">{item}</h3></SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">Support scope and capabilities</h2>
          <SurfaceCard className="mt-8">
            <ul className="grid gap-3 text-gray-300 md:grid-cols-2">
              {capabilities.map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-800-50">
        <Container>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">Why clients use ANVA for this support</h2>
            <ul className="mt-4 grid gap-3 text-gray-300 md:grid-cols-2">
              {[
                "Practical response based on vessel timelines",
                "Clear coordination with onboard and shore teams",
                "Technical-commercial handling for smoother execution",
                "Vessel-focused support from enquiry through attendance",
              ].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-marine-800/70 p-8 text-center sm:p-10">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Need riding squad attendance?</h2>
            <p className="mt-4 text-lg text-gray-300">Share vessel details, location, and work scope for a practical attendance plan.</p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Request Riding Squad Support</a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default RidingSquads;
