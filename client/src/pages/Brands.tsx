const brandGroups = [
  {
    category: "Engine Diagnostics & Monitoring",
    brands: ["MARIDIS", "Loadmaster"],
  },
  {
    category: "Hydraulics & Fluid Control",
    brands: ["Bosch Rexroth", "HYDAC"],
  },
  {
    category: "Signaling, Protection & Marine Systems",
    brands: ["Kockums Sonics", "ICCP / MGPS", "Subhadra"],
  },
  {
    category: "Specialist Equipment Support",
    brands: ["Polarjet", "Additional OEM and specialist references on request"],
  },
];

function Brands() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 pt-28 pb-16" id="hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-signal-500">Products / Brands</p>
          <h1 className="mb-4 font-display text-5xl font-bold">Brands and specialist product support</h1>
          <p className="max-w-4xl text-lg leading-8 text-gray-300">
            ANVA supports represented and selected marine brands through practical technical and
            commercial coordination. The structure below is organized for easier navigation and
            future brand detail expansion.
          </p>
        </div>
      </section>

      <section className="bg-marine-800-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 rounded-xl border border-white/10 bg-marine-900-60 p-6">
            <h2 className="mb-3 text-2xl font-semibold">How this page is structured</h2>
            <p className="text-gray-300">
              Product and brand references are grouped by practical application areas. Specific
              model availability and lead times are handled case-by-case through enquiry.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {brandGroups.map((group) => (
              <article key={group.category} className="rounded-xl border border-white/10 bg-marine-900-60 p-6">
                <h3 className="mb-4 text-xl font-semibold">{group.category}</h3>
                <ul className="space-y-2 text-gray-300">
                  {group.brands.map((brand) => (
                    <li key={brand}>• {brand}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-marine-900 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-marine-800-50 p-6">
            <h2 className="mb-3 text-2xl font-semibold">Marine spare support pages</h2>
            <p className="mb-5 text-gray-300">Explore dedicated pages for core and hard-to-source marine spare requirements.</p>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-sm bg-signal-500 px-5 py-2.5 text-sm font-semibold text-marine-900 hover:bg-signal-600" href="/spares/engine-room-machinery">
                Engine Room &amp; Machinery Spares
              </a>
              <a className="rounded-sm border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:border-white" href="/spares/hard-to-source-oem">
                Hard-to-Source OEM Spares
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-marine-800-50 p-6">
            <h2 className="mb-3 text-2xl font-semibold">Need product guidance?</h2>
            <p className="mb-5 text-gray-300">
              Send technical details and vessel context. ANVA will advise the most suitable support
              route across service, supply, and technical coordination.
            </p>
            <a className="rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-marine-900 hover:bg-gray-100" href="/contact">
              Send Product / Brand Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brands;
