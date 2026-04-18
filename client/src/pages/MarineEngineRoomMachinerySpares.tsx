import { CheckCircle2 } from "lucide-react";

import { Container, Section, SectionHeading, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

const spareCoverage = ["Main engine spares", "Genset spares", "Purifier and separator spares", "Compressor spares", "Pump spares", "Marine valves", "Heat exchanger spares", "Boiler-related spares", "Deck machinery related spares"];

function MarineEngineRoomMachinerySpares() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <SectionHeading eyebrow="Specialist Supply" title="Marine Engine Room & Machinery Spares" description="Structured support for common marine spare requirements across engine room and deck machinery systems, with focus on clear specifications and practical sourcing." />
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold">Coverage areas</h2>
            <ul className="mt-5 grid gap-3 text-gray-300 md:grid-cols-2">
              {spareCoverage.map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-marine-800/70 p-8 text-center sm:p-10">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Send your spare enquiry</h2>
            <p className="mt-4 text-lg text-gray-300">Share part details, maker information, and required timeline for a focused commercial response.</p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Request Machinery Spares Support</a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default MarineEngineRoomMachinerySpares;
