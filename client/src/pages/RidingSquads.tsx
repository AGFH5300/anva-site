const squadTypes = [
  "Mechanical riding squads",
  "Piping repair squads",
  "Steel and structural teams",
  "Electrical and controls support",
  "Technical supervision support",
];

function RidingSquads() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 pt-28 pb-16" id="hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-signal-500">Service Page</p>
          <h1 className="mb-4 font-display text-5xl font-bold">Marine Riding Squads &amp; Onboard Repair Teams</h1>
          <p className="max-w-4xl text-lg leading-8 text-gray-300">
            Practical riding squad support for urgent and planned vessel repairs, including
            attendance in port, at anchorage, and voyage windows where suitable.
          </p>
        </div>
      </section>

      <section className="bg-marine-800-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-marine-900-60 p-7">
            <h2 className="mb-4 text-2xl font-semibold">Scope of support</h2>
            <ul className="space-y-2 text-gray-300">
              {squadTypes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-marine-900-60 p-7">
            <h2 className="mb-4 text-2xl font-semibold">Execution focus</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Pre-drydock repair preparation and onboard completion support.</li>
              <li>• Reduce downtime through coordinated manpower attendance.</li>
              <li>• Respond to urgent defects and planned maintenance windows.</li>
              <li>• Combine manpower with required materials and spare supply.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-marine-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold">Need riding squad attendance?</h2>
          <p className="mb-7 text-lg text-gray-300">
            Share vessel details, location, and repair scope. ANVA will advise the most practical
            attendance plan and support window.
          </p>
          <a className="rounded-sm bg-signal-500 px-8 py-3 font-semibold text-marine-900 hover:bg-signal-600" href="/contact">
            Request Riding Squad Support
          </a>
        </div>
      </section>
    </>
  );
}

export default RidingSquads;
