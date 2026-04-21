import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  Container,
  Section,
  SurfaceCard,
  primaryButtonClass,
  secondaryButtonClass,
} from "../components/site/SitePrimitives";

const supportBlocks = [
  {
    title: "Vessel repair and technical attendance",
    text: "Support for repair attendance, onboard defect handling, and coordination with vessel and technical teams.",
  },
  {
    title: "Riding squads and onboard support",
    text: "Riding manpower for planned and urgent jobs in port, anchorage, and selected voyage windows.",
  },
  {
    title: "Project and procurement coordination",
    text: "Practical technical-commercial follow-up to keep service and supply requirements moving without delay.",
  },
];

const coreServices = [
  {
    title: "Drydocking & Ship Repair Support",
    href: "/contact",
    points: ["Repair scope preparation", "Yard coordination follow-up", "Execution and completion support"],
  },
  {
    title: "Marine Riding Squads & Onboard Repair Teams",
    href: "/services/riding-squads",
    points: ["Onboard manpower attendance", "Urgent and planned repair support", "Port and voyage response windows"],
  },
  {
    title: "Marine Project Management",
    href: "/contact",
    points: ["Project planning and tracking", "Supplier and contractor coordination", "Technical documentation follow-up"],
  },
  {
    title: "Marine Technical Consultancy",
    href: "/contact",
    points: ["Technical review and recommendations", "Troubleshooting support", "Execution-focused guidance"],
  },
  {
    title: "Commercial & Procurement Consultancy",
    href: "/contact",
    points: ["Commercial handling and RFQ follow-up", "Sourcing route support", "Lead-time and cost coordination"],
  },
];

const workflow = [
  "Review requirement",
  "Define service or supply scope",
  "Coordinate attendance and execution",
  "Respond with technical-commercial follow-up",
];

function Services() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Services</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Marine Services & Technical Support
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            ANVA supports vessels, managers, shipyards, and technical teams with practical service response,
            riding squads, repair coordination, project support, and clear technical-commercial follow-up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={primaryButtonClass} href="/contact">Send Enquiry</a>
            <a className={secondaryButtonClass} href="/services/riding-squads">
              View Riding Squads <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      <Section className="bg-marine-800-50">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">What ANVA supports</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportBlocks.map((item) => (
              <SurfaceCard key={item.title}>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-gray-300">{item.text}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <h2 className="font-display text-3xl font-bold text-white">Core service areas</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreServices.map((service) => (
              <SurfaceCard key={service.title}>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal-500 hover:text-signal-400" href={service.href}>
                  Discuss this service <ArrowRight className="h-4 w-4" />
                </a>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-marine-800-50">
        <Container className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">Who we support</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              {[
                "Shipowners",
                "Ship managers",
                "Shipyards",
                "Technical departments",
                "Procurement teams",
              ].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-500" />{item}</li>
              ))}
            </ul>
          </SurfaceCard>
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-white">How ANVA works</h2>
            <ol className="mt-4 space-y-2 text-gray-300">
              {workflow.map((step, index) => (
                <li key={step}>
                  <span className="mr-2 font-semibold text-signal-500">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </SurfaceCard>
        </Container>
      </Section>

      <Section className="bg-marine-900">
        <Container>
          <SurfaceCard className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">Need urgent vessel support?</h2>
              <p className="mt-3 max-w-3xl text-gray-300">Send your requirement and ANVA will respond with practical service and supply next steps.</p>
            </div>
            <a className={primaryButtonClass} href="/contact">Send your requirement</a>
          </SurfaceCard>
        </Container>
      </Section>
    </>
  );
}

export default Services;
