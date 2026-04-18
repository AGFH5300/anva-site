function About() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 pt-28 pb-16" id="hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-signal-500">About ANVA Marine</p>
          <h1 className="mb-4 font-display text-5xl font-bold">A practical marine support partner</h1>
          <p className="max-w-4xl text-lg leading-8 text-gray-300">
            ANVA Marine supports shipowners, managers, yards, and technical teams with service,
            supply, and technical expertise. We focus on clear execution, responsive communication,
            and commercially practical solutions.
          </p>
        </div>
      </section>

      <section className="bg-marine-800-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-marine-900-60 p-6">
            <h2 className="mb-3 text-xl font-semibold">What we do</h2>
            <p className="text-gray-300">
              Ship repair support, riding squads, project coordination, technical consultancy, and
              specialist marine spare supply.
            </p>
          </article>
          <article className="rounded-xl border border-white/10 bg-marine-900-60 p-6">
            <h2 className="mb-3 text-xl font-semibold">How we work</h2>
            <p className="text-gray-300">
              We align technical details with commercial requirements so projects move from enquiry
              to execution with less friction.
            </p>
          </article>
          <article className="rounded-xl border border-white/10 bg-marine-900-60 p-6">
            <h2 className="mb-3 text-xl font-semibold">Where we add value</h2>
            <p className="text-gray-300">
              Urgent and planned requirements, cross-discipline coordination, and practical support
              through service windows and project milestones.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-marine-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-white/10 bg-marine-800-50 p-8">
            <h2 className="mb-4 font-display text-3xl font-bold">Built around real marine requirements</h2>
            <p className="mb-4 text-gray-300">
              We are not a template-led operation. Our role is to provide practical marine support
              that helps technical and procurement teams solve operational problems.
            </p>
            <p className="text-gray-300">
              Whether the requirement is service attendance, hard-to-source spares, or green shipping
              project support, ANVA focuses on clear scope, realistic timelines, and credible follow-through.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
