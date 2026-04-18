import { CheckCircle2 } from "lucide-react";

import { Container, Section, SectionHeading, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

const focusAreas = [
  "Flowmeters and Coriolis flowmeters",
  "Fuel monitoring systems and bunker measurement support",
  "Rotor sails and air lubrication system coordination",
  "Vessel efficiency improvement solutions",
  "Technical and material support for implementation",
  "Retrofit and complete project support",
];

function GreenShippingSolutions() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <SectionHeading
            eyebrow="Green Shipping Solutions"
            title="Practical support for vessel efficiency projects"
            description="ANVA provides enquiry-led support for selected green shipping and vessel efficiency requirements, from technical discussions through project coordination and supply."
          />
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold">Current solution themes</h2>
            <ul className="mt-5 grid gap-3 text-gray-300 md:grid-cols-2">
              {focusAreas.map((topic) => (
                <li key={topic} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{topic}</li>
              ))}
            </ul>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-marine-800/70 p-8 text-center sm:p-10">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Discuss your green shipping requirement</h2>
            <p className="mt-4 text-lg text-gray-300">If you are evaluating efficiency upgrades, ANVA can support technical review, commercial coordination, and practical project execution planning.</p>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Send an Enquiry</a>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default GreenShippingSolutions;
