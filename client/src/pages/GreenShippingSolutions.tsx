import { CheckCircle2 } from "lucide-react";

import { Container, Section, SurfaceCard, primaryButtonClass, secondaryButtonClass } from "../components/site/SitePrimitives";

const solutionAreas = [
  "Flowmeters",
  "Coriolis flowmeters",
  "Fuel monitoring",
  "Bunker measurement",
  "Rotor sails",
  "Air lubrication",
  "Efficiency and retrofit support",
];

function GreenShippingSolutions() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Green Shipping</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Green Shipping Solutions
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Practical support for vessel efficiency, retrofit evaluation, and monitoring requirements with focus on
            technical-commercial clarity and workable implementation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={primaryButtonClass} href="/contact">Send Green Shipping Enquiry</a>
            <a className={secondaryButtonClass} href="/products-brands">View Products & Supply Support</a>
          </div>
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">Solution areas</h2>
          <SurfaceCard className="mt-8">
            <ul className="grid gap-3 text-gray-300 md:grid-cols-2">
              {solutionAreas.map((topic) => (
                <li key={topic} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{topic}</li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">Where ANVA helps</h2>
            <ul className="mt-4 grid gap-3 text-gray-300 md:grid-cols-2">
              {[
                "Technical-commercial coordination",
                "Product and project sourcing support",
                "Retrofit support planning",
                "Practical assistance for owners, managers, and technical teams",
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
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Discuss your requirement</h2>
            <p className="mt-4 text-lg text-gray-300">Send vessel context and project intent for practical next steps.</p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Send an Enquiry</a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default GreenShippingSolutions;
