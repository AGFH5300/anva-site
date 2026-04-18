const services = [
  {
    title: "Drydocking & Ship Repair Support",
    points: [
      "Repair planning and scope coordination",
      "Pre-drydock technical preparation",
      "Yard coordination and progress follow-up",
      "Punch list and completion support",
    ],
  },
  {
    title: "Marine Riding Squads & Onboard Repair Teams",
    points: [
      "Mechanical, piping, steel, and electrical riding squads",
      "Support in port, anchorage, and voyage windows where suitable",
      "Urgent attendance and planned work packs",
      "Manpower backed by material and spare support",
    ],
  },
  {
    title: "Marine Project Management",
    points: [
      "Project planning and timeline tracking",
      "Supplier and contractor coordination",
      "Technical documentation follow-up",
      "Execution support for retrofit and operational projects",
    ],
  },
  {
    title: "Marine Technical Consultancy",
    points: [
      "Technical assessments and practical recommendations",
      "Troubleshooting and root-cause support",
      "Equipment selection and retrofit planning",
      "On-the-ground support through implementation",
    ],
  },
  {
    title: "Commercial & Procurement Consultancy",
    points: [
      "Commercially practical sourcing guidance",
      "Bid and quotation comparison support",
      "Specification alignment and lead-time strategy",
      "Urgent and planned procurement coordination",
    ],
  },
];

function Services() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 pt-28 pb-16" id="hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-signal-500">Services</p>
          <h1 className="mb-4 font-display text-5xl font-bold">Marine technical and commercial support services</h1>
          <p className="max-w-4xl text-lg leading-8 text-gray-300">
            ANVA provides practical marine support across repair, riding squad attendance,
            project coordination, consultancy, and procurement activities.
          </p>
        </div>
      </section>

      <section className="bg-marine-800-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-white/10 bg-marine-900-60 p-6">
              <h2 className="mb-4 text-2xl font-semibold">{service.title}</h2>
              <ul className="space-y-2 text-gray-300">
                {service.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-marine-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-white/10 bg-marine-800-50 p-8">
            <h2 className="mb-3 font-display text-3xl font-bold">Dedicated page</h2>
            <p className="mb-6 max-w-3xl text-gray-300">
              For vessel attendance planning, visit our dedicated service page for marine riding
              squads and onboard repair teams.
            </p>
            <a className="rounded-sm bg-signal-500 px-6 py-3 font-semibold text-marine-900 hover:bg-signal-600" href="/services/riding-squads">
              Marine Riding Squads &amp; Onboard Repair Teams
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
