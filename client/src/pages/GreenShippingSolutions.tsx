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
      <section className="border-b border-white/10 bg-marine-900 pt-28 pb-16" id="hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-signal-500">
            Green Shipping Solutions
          </p>
          <h1 className="mb-4 font-display text-5xl font-bold">Practical support for vessel efficiency projects</h1>
          <p className="max-w-4xl text-lg leading-8 text-gray-300">
            ANVA provides enquiry-led support for selected green shipping and vessel efficiency
            requirements, from technical discussions through project coordination and supply.
          </p>
        </div>
      </section>

      <section className="bg-marine-800-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-white/10 bg-marine-900-60 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Current solution themes</h2>
            <ul className="grid gap-3 text-gray-300 md:grid-cols-2">
              {focusAreas.map((topic) => (
                <li key={topic}>• {topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-marine-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold">Discuss your green shipping requirement</h2>
          <p className="mb-6 text-lg text-gray-300">
            If you are evaluating efficiency upgrades, ANVA can support technical review,
            commercial coordination, and practical project execution planning.
          </p>
          <a className="rounded-sm bg-signal-500 px-8 py-3 font-semibold text-marine-900 hover:bg-signal-600" href="/contact">
            Send an Enquiry
          </a>
        </div>
      </section>
    </>
  );
}

export default GreenShippingSolutions;
