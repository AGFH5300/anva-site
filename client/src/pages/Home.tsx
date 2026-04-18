import { ArrowRight } from "lucide-react";

const serviceBlocks = [
  {
    title: "Drydocking & Ship Repair Support",
    description:
      "Planning, technical follow-up, repair coordination, and support through pre-drydock, dock, and return-to-service stages.",
  },
  {
    title: "Marine Riding Squads & Onboard Repair Teams",
    description:
      "Mechanical, piping, steel, electrical, and technical riding squad support for urgent and planned vessel attendance.",
  },
  {
    title: "Project Management & Technical Consultancy",
    description:
      "Hands-on coordination and practical consultancy for vessel upgrades, equipment decisions, and operational execution.",
  },
];

const whoWeServe = ["Shipowners", "Ship Managers", "Shipyards", "Technical Teams", "Procurement Teams", "Operators"];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20" id="hero">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover object-center opacity-35"
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
            alt="Commercial marine vessel support"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-marine-900 via-marine-900-90 to-marine-900-10"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-signal-500">
            Supporting Vessels with Service, Supply &amp; Technical Expertise
          </p>
          <h1 className="mb-6 max-w-4xl font-display text-5xl font-bold leading-tight md:text-7xl md:leading-none">
            Real marine understanding. Practical support.
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-gray-300">
            ANVA supports shipowners, managers, yards, and technical teams with ship repair
            support, riding squads, project coordination, technical consultancy, specialist
            supply, and selected green shipping solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="inline-flex items-center gap-2 rounded-sm bg-white px-8 py-4 font-bold text-marine-900 hover:bg-gray-100" href="/contact">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a className="rounded-sm border border-white/20 px-8 py-4 font-bold text-white hover:border-white" href="/services">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-marine-900 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-4xl font-bold">Who we are. What we do.</h2>
            <p className="text-lg leading-8 text-gray-300">
              ANVA Marine is a marine-commercial support company focused on technical and
              commercial execution. We help clients complete repair, retrofit, and sourcing
              requirements with practical planning and responsive follow-up.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-marine-800-50 p-6">
            <p className="text-sm uppercase tracking-[0.08em] text-signal-500">Support scope</p>
            <ul className="mt-4 grid gap-3 text-gray-300 sm:grid-cols-2">
              <li>Ship repair support</li>
              <li>Riding squads</li>
              <li>Project coordination</li>
              <li>Technical consultancy</li>
              <li>Specialist spare supply</li>
              <li>Green shipping solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-marine-800-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 font-display text-4xl font-bold">Key services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceBlocks.map((service) => (
              <article key={service.title} className="rounded-xl border border-white/10 bg-marine-900-60 p-6">
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="leading-7 text-gray-400">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-marine-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 font-display text-4xl font-bold">Products, brands &amp; specialist supply</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            Beyond service attendance, ANVA supports procurement and specialist sourcing for
            marine systems, machinery, and spare parts, including common and hard-to-source
            requirements.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="rounded-sm bg-signal-500 px-6 py-3 font-semibold text-marine-900 hover:bg-signal-600" href="/products-brands">
              View Products / Brands
            </a>
            <a className="rounded-sm border border-white/20 px-6 py-3 font-semibold text-white hover:border-white" href="/spares/engine-room-machinery">
              Marine Spares Support
            </a>
          </div>
        </div>
      </section>

      <section className="bg-marine-800-50 py-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 px-6 py-10">
          <h2 className="mb-4 font-display text-4xl font-bold">Green Shipping Solutions</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            We support practical efficiency projects covering fuel monitoring, flow measurement,
            bunker measurement, and retrofit-ready vessel efficiency technologies.
          </p>
          <a className="mt-6 inline-block rounded-sm border border-signal-500 px-6 py-3 font-semibold text-signal-500 hover:bg-signal-500 hover:text-marine-900" href="/green-shipping-solutions">
            Explore Green Shipping Solutions
          </a>
        </div>
      </section>

      <section className="bg-marine-900 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-4xl font-bold">Why ANVA</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Real marine understanding and practical execution.</li>
              <li>Technical and commercial support in one workflow.</li>
              <li>Structured response for urgent and planned requirements.</li>
              <li>Service attendance backed by material and supply support.</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-4xl font-bold">Who we serve</h2>
            <div className="flex flex-wrap gap-3">
              {whoWeServe.map((segment) => (
                <span key={segment} className="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300">
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-marine-800-50 py-20" id="rfq">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold">Need support for an active requirement?</h2>
          <p className="mb-8 text-lg text-gray-300">
            Send your requirement and ANVA will respond with practical next steps for service,
            supply, or technical support.
          </p>
          <a className="inline-flex items-center gap-2 rounded-sm bg-signal-500 px-8 py-4 font-bold text-marine-900 hover:bg-signal-600" href="/contact">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
