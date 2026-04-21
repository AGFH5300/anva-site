import { CheckCircle2 } from "lucide-react";

import { Container, Section, SurfaceCard, primaryButtonClass, secondaryButtonClass } from "../components/site/SitePrimitives";

function HardToSourceMarineOemSpares() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Marine Spares</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Hard-to-Source Marine OEM Spares
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            For urgent, uncommon, obsolete, or difficult-to-find marine parts, ANVA supports practical sourcing follow-up
            with technical-commercial handling to reduce vessel delay.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={primaryButtonClass} href="/contact">Send difficult spare enquiry</a>
            <a className={secondaryButtonClass} href="/spares/engine-room-machinery">View machinery spare categories</a>
          </div>
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">Common sourcing situations</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Obsolete items",
              "Urgent vessel requirements",
              "Legacy maker or model references",
              "Low local availability",
              "Difficult matching and documentation",
            ].map((item) => (
              <SurfaceCard key={item}><h3 className="text-lg font-semibold text-white">{item}</h3></SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">How ANVA supports difficult sourcing</h2>
            <ul className="mt-4 grid gap-3 text-gray-300 md:grid-cols-2">
              {[
                "OEM and manufacturer follow-up",
                "Sourcing support across practical channels",
                "Equivalent and commercial handling where appropriate",
                "Logistics and response coordination",
              ].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-800-50">
        <Container>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">Why send the enquiry early</h2>
            <p className="mt-4 text-gray-300">
              Early enquiry gives more time for maker confirmation, documentation checks, and shipping planning. This helps
              reduce technical and procurement delays that can impact vessel schedule and downtime.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-marine-800/70 p-8 text-center sm:p-10">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Have a difficult spare enquiry?</h2>
            <p className="mt-4 text-lg text-gray-300">Share part data and timeline for targeted sourcing support.</p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Request OEM Sourcing Support</a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default HardToSourceMarineOemSpares;
