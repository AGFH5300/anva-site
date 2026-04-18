const spareCoverage = [
  "Main engine spares",
  "Genset spares",
  "Purifier and separator spares",
  "Compressor spares",
  "Pump spares",
  "Marine valves",
  "Heat exchanger spares",
  "Boiler-related spares",
  "Deck machinery related spares",
];

function MarineEngineRoomMachinerySpares() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 pt-28 pb-16" id="hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-signal-500">Specialist Supply</p>
          <h1 className="mb-4 font-display text-5xl font-bold">Marine Engine Room &amp; Machinery Spares</h1>
          <p className="max-w-4xl text-lg leading-8 text-gray-300">
            Structured support for common marine spare requirements across engine room and deck
            machinery systems, with focus on clear specifications and practical sourcing.
          </p>
        </div>
      </section>

      <section className="bg-marine-800-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-white/10 bg-marine-900-60 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Coverage areas</h2>
            <ul className="grid gap-3 text-gray-300 md:grid-cols-2">
              {spareCoverage.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-marine-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold">Send your spare enquiry</h2>
          <p className="mb-6 text-lg text-gray-300">
            Share part details, maker information, and required timeline for a focused commercial
            response.
          </p>
          <a className="rounded-sm bg-signal-500 px-8 py-3 font-semibold text-marine-900 hover:bg-signal-600" href="/contact">
            Request Machinery Spares Support
          </a>
        </div>
      </section>
    </>
  );
}

export default MarineEngineRoomMachinerySpares;
