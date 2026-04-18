import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container, Section, SectionHeading, SurfaceCard, primaryButtonClass, secondaryButtonClass } from "../components/site/SitePrimitives";

const services = [
  {
    id: "drydocking-ship-repair-support",
    title: "Drydocking & Ship Repair Support",
    points: ["Repair planning and scope coordination", "Pre-drydock technical preparation", "Yard coordination and progress follow-up", "Punch list and completion support"],
  },
  {
    id: "marine-riding-squads-onboard-repair-teams",
    title: "Marine Riding Squads & Onboard Repair Teams",
    points: ["Mechanical, piping, steel, and electrical riding squads", "Support in port, anchorage, and voyage windows where suitable", "Urgent attendance and planned work packs", "Manpower backed by material and spare support"],
  },
  {
    id: "marine-project-management",
    title: "Marine Project Management",
    points: ["Project planning and timeline tracking", "Supplier and contractor coordination", "Technical documentation follow-up", "Execution support for retrofit and operational projects"],
  },
  {
    id: "marine-technical-consultancy",
    title: "Marine Technical Consultancy",
    points: ["Technical assessments and practical recommendations", "Troubleshooting and root-cause support", "Equipment selection and retrofit planning", "On-the-ground support through implementation"],
  },
  {
    id: "commercial-procurement-consultancy",
    title: "Commercial & Procurement Consultancy",
    points: ["Commercially practical sourcing guidance", "Bid and quotation comparison support", "Specification alignment and lead-time strategy", "Urgent and planned procurement coordination"],
  },
];

function Services() {
  return (
    <>
      <section className="scroll-mt-24 border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <SectionHeading eyebrow="Services" title="Marine technical and commercial support services" description="ANVA provides practical marine support across repair, riding squad attendance, project coordination, consultancy, and procurement activities." />
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} id={service.id} className="scroll-mt-28">
                <SurfaceCard>
                  <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{point}</li>
                    ))}
                  </ul>
                </SurfaceCard>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold">Dedicated team page</h2>
              <p className="mt-3 max-w-3xl text-gray-300">For vessel attendance planning, visit our dedicated page for marine riding squads and onboard repair teams.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className={primaryButtonClass} href="/services/riding-squads">Marine Riding Squads <ArrowRight className="h-4 w-4" /></a>
              <a className={secondaryButtonClass} href="/contact">Discuss your requirement</a>
            </div>
          </SurfaceCard>
        </Container>
      </Section>
    </>
  );
}

export default Services;
