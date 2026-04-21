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
              {
                title: "Obsolete or discontinued parts",
                text: "Legacy items no longer in standard catalogues and requiring additional maker or market tracing.",
              },
              {
                title: "Incomplete part references",
                text: "Enquiries received with partial maker, model, serial, or part details that need identification support.",
              },
              {
                title: "Urgent vessel schedule pressure",
                text: "Requirements linked to near-term ETA, attendance windows, or imminent operational deadlines.",
              },
              {
                title: "Low local stock or long lead time",
                text: "Limited regional availability requiring wider sourcing coordination and delivery planning.",
              },
              {
                title: "Old references needing current match",
                text: "Cross-checking older numbers and superseded data against current supply options.",
              },
            ].map((item) => (
              <SurfaceCard key={item.title}>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-gray-300">{item.text}</p>
              </SurfaceCard>
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
                "Review of all available reference data before routing",
                "Maker or OEM follow-up where practical and available",
                "Cross-reference and identification support for unclear items",
                "Equivalent or alternative commercial handling where appropriate",
                "Lead-time, logistics, and delivery coordination",
                "Technical-commercial follow-up to reduce vessel delay risk",
              ].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-800-50">
        <Container className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">Why send the enquiry early</h2>
            <p className="mt-4 text-gray-300">
              Early submission gives time for identification, reference confirmation, and route validation before supply
              commitment. This reduces wrong-supply risk, improves lead-time planning, and helps protect vessel schedule.
            </p>
          </SurfaceCard>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">What to send with your enquiry</h2>
            <ul className="mt-4 grid gap-3 text-gray-300">
              {[
                "Maker and model",
                "Serial number and part number",
                "Equipment name",
                "Vessel name",
                "Port or delivery location",
                "Required timeline",
                "Photos, nameplate, or old reference if available",
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
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Have a difficult spare enquiry?</h2>
            <p className="mt-4 text-lg text-gray-300">Share maker, model, serial/part details, vessel, and timeline for targeted sourcing support.</p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Send difficult spare enquiry</a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default HardToSourceMarineOemSpares;
