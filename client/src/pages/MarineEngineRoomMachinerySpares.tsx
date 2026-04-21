import { CheckCircle2 } from "lucide-react";

import { Container, Section, SurfaceCard, primaryButtonClass, secondaryButtonClass } from "../components/site/SitePrimitives";

const coverage = [
  "Main engine parts",
  "Auxiliary engine parts",
  "Pumps",
  "Compressors",
  "Purifiers / separators",
  "Turbochargers",
  "Refrigeration / HVAC",
  "Supporting machinery items",
];

function MarineEngineRoomMachinerySpares() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Marine Spares</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Marine Engine Room & Machinery Spares
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Supply support for vessel engine room and machinery spare requirements with practical handling of part
            details, maker references, documentation, and commercial timelines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={primaryButtonClass} href="/contact">Send your part enquiry</a>
            <a className={secondaryButtonClass} href="/spares/hard-to-source-oem">Need hard-to-source OEM items?</a>
          </div>
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">Category coverage</h2>
          <SurfaceCard className="mt-8">
            <ul className="grid gap-3 text-gray-300 md:grid-cols-2">
              {coverage.map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">How ANVA can help</h2>
            <ul className="mt-4 grid gap-3 text-gray-300 md:grid-cols-2">
              {[
                "Sourcing support based on complete part data",
                "Commercial response with practical lead-time handling",
                "Urgent requirement follow-up where timing is critical",
                "Technical-commercial coordination with vessel and procurement teams",
              ].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-800-50">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-marine-800/70 p-8 text-center sm:p-10">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Send your part enquiry</h2>
            <p className="mt-4 text-lg text-gray-300">Share maker, model, part number, and required timeline for response.</p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Request Machinery Spares Support</a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default MarineEngineRoomMachinerySpares;
