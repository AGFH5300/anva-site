import { CheckCircle2 } from "lucide-react";

import { Container, Section, SectionHeading, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

function About() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <SectionHeading
            eyebrow="About ANVA Marine"
            title="A practical marine support partner"
            description="ANVA Marine supports shipowners, managers, yards, and technical teams with service, supply, and technical expertise. We focus on clear execution, responsive communication, and commercially practical solutions."
          />
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            ["What we do", "Ship repair support, riding squads, project coordination, technical consultancy, and specialist marine spare supply."],
            ["How we work", "We align technical details with commercial requirements so projects move from enquiry to execution with less friction."],
            ["Where we add value", "Urgent and planned requirements, cross-discipline coordination, and practical support through service windows and project milestones."],
          ].map(([title, body]) => (
            <SurfaceCard key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-gray-300">{body}</p>
            </SurfaceCard>
          ))}
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard>
            <h2 className="font-display text-3xl font-bold">Built around real marine requirements</h2>
            <p className="mt-4 max-w-4xl text-gray-300">We are not a template-led operation. Our role is to provide practical marine support that helps technical and procurement teams solve operational problems.</p>
            <ul className="mt-5 space-y-3 text-gray-300">
              {["Clear scope and specifications", "Realistic timelines and planning", "Credible follow-through from enquiry to execution"].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
            <a className={`${primaryButtonClass} mt-7`} href="/contact">Talk to ANVA</a>
          </SurfaceCard>
        </Container>
      </Section>
    </>
  );
}

export default About;
