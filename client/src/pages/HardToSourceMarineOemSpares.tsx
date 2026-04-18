const specialtyAreas = [
  "Hard-to-source marine spares",
  "Uncommon and niche OEM references",
  "Specialist sourcing support for low-volume requirements",
  "Support for odd and difficult technical enquiries",
  "Clarification support on specifications and interchangeability",
];

function HardToSourceMarineOemSpares() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 pt-28 pb-16" id="hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-signal-500">Specialist Supply</p>
          <h1 className="mb-4 font-display text-5xl font-bold">Hard-to-Source Marine OEM Spares</h1>
          <p className="max-w-4xl text-lg leading-8 text-gray-300">
            ANVA supports complex spare enquiries involving uncommon OEMs and difficult-to-source
            items where standard channels are limited.
          </p>
        </div>
      </section>

      <section className="bg-marine-800-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-marine-900-60 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Support focus</h2>
            <ul className="space-y-2 text-gray-300">
              {specialtyAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-marine-900-60 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Example OEM references</h2>
            <p className="mb-4 text-gray-300">
              Enquiries may include names such as Sperre, Sunflame, Gali, and other niche OEM
              references depending on vessel equipment profile.
            </p>
            <p className="text-sm text-gray-400">
              Note: Brand names are listed only as equipment references for sourcing support and
              do not imply distributorship status or immediate stock availability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-marine-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold">Have a difficult spare enquiry?</h2>
          <p className="mb-6 text-lg text-gray-300">
            Send part data, maker reference, and vessel timeline for a targeted sourcing response.
          </p>
          <a className="rounded-sm bg-signal-500 px-8 py-3 font-semibold text-marine-900 hover:bg-signal-600" href="/contact">
            Request OEM Sourcing Support
          </a>
        </div>
      </section>
    </>
  );
}

export default HardToSourceMarineOemSpares;
