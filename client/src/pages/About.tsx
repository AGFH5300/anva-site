import { CheckCircle2 } from "lucide-react";

import { Container, Section, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

function About() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Company</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">About ANVA Marine</h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            ANVA Marine supports vessel operators and technical teams with practical service, supply, and coordination
            for urgent and planned marine requirements.
          </p>
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <SurfaceCard>
            <h2 className="text-xl font-semibold text-white">Who we are</h2>
            <p className="mt-3 text-gray-300">A marine-focused support company with service and supply experience across vessel technical and commercial requirements.</p>
          </SurfaceCard>
          <SurfaceCard>
            <h2 className="text-xl font-semibold text-white">What we support</h2>
            <p className="mt-3 text-gray-300">Ship repair support, riding squads, project coordination, marine spares, and practical technical-commercial follow-up.</p>
          </SurfaceCard>
          <SurfaceCard>
            <h2 className="text-xl font-semibold text-white">Why clients work with ANVA</h2>
            <p className="mt-3 text-gray-300">Clear response, coordinated execution, and realistic handling of operational timelines.</p>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">Working approach</h2>
            <ul className="mt-4 grid gap-3 text-gray-300 md:grid-cols-2">
              {[
                "Understand the technical requirement early",
                "Align scope with procurement and operational timelines",
                "Coordinate service and supply follow-up clearly",
                "Support completion with practical communication",
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
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Need support from ANVA Marine?</h2>
            <p className="mt-4 text-lg text-gray-300">Share your service or supply requirement and our team will respond.</p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Send Enquiry</a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default About;
