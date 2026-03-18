import { ArrowRight, CheckCircle2, Clock3, Compass, LifeBuoy, ShieldCheck, Wrench } from "lucide-react";

const offerings = [
  {
    icon: Wrench,
    title: "Technical supply & marine systems support",
    description:
      "Responsive sourcing and supply coordination for marine machinery, hydraulics, propulsion, automation, and essential vessel equipment.",
  },
  {
    icon: Compass,
    title: "OEM representation & product expertise",
    description:
      "Commercial and technical guidance backed by authorized brand relationships, helping clients specify the right solution with confidence.",
  },
  {
    icon: Clock3,
    title: "Operational response for time-critical needs",
    description:
      "Fast turnaround for urgent procurement requirements, punch list support, and practical coordination that keeps projects moving.",
  },
];

const values = [
  {
    title: "Reliability in execution",
    description:
      "We focus on clear commitments, practical timelines, and dependable follow-through from first enquiry to final delivery.",
  },
  {
    title: "Technical understanding",
    description:
      "Our approach combines commercial responsiveness with an informed understanding of marine and industrial operating environments.",
  },
  {
    title: "Quality-first sourcing",
    description:
      "We prioritize credible products, correct specifications, and fit-for-purpose recommendations that support long-term performance.",
  },
  {
    title: "Responsive partnership",
    description:
      "Clients work with ANVA because we stay accessible, move quickly, and make complex requirements easier to execute.",
  },
];

const reasons = [
  "Professional communication and commercially practical support.",
  "Marine and industrial product knowledge aligned with operational realities.",
  "Efficient sourcing support for urgent and planned requirements.",
  "A solution-oriented team focused on clarity, speed, and accountability.",
];

function About() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden pt-20" id="hero">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover object-center opacity-35"
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
            alt="Marine industrial operations"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-marine-900 via-marine-900-90 to-marine-900-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-marine-900 via-transparent to-marine-900-10"></div>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal-500-30 bg-signal-500-10 px-3 py-1 text-xs font-bold tracking-[0.05em] text-signal-500">
              <LifeBuoy className="h-3.5 w-3.5" />
              <span>MARINE &amp; INDUSTRIAL SOLUTIONS</span>
            </div>
            <h1 className="mb-6 font-display text-5xl font-bold leading-tight md:text-7xl md:leading-none">
              About ANVA Marine
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              ANVA is a marine and industrial solutions company built to support vessel
              operators, shipyards, contractors, and technical buyers with credible
              sourcing, dependable execution, and responsive commercial support.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-2 rounded-sm bg-white px-8 py-4 font-bold text-marine-900 transition-colors hover:bg-gray-100"
                href="/contact"
              >
                <span>Contact ANVA</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="rounded-sm border border-white/20 px-8 py-4 font-bold text-white transition-colors hover:border-white"
                href="/brands"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
            {[
              ["Marine", "Solutions-led sourcing"],
              ["Industrial", "Practical technical support"],
              ["Responsive", "Fast commercial follow-up"],
              ["Trusted", "Execution with accountability"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-lg border border-white/10 bg-marine-800-50 p-6 backdrop-blur-sm"
              >
                <div className="mb-2 font-display text-2xl font-bold text-white">{title}</div>
                <div className="text-sm font-medium uppercase tracking-[0.08em] text-gray-400">
                  {detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-marine-900 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-bold tracking-[0.08em] text-gray-300">
              <span className="h-2 w-2 rounded-full bg-signal-500"></span>
              COMPANY OVERVIEW
            </div>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              Built for serious marine and industrial requirements
            </h2>
            <p className="mb-6 max-w-3xl text-lg leading-8 text-gray-300">
              ANVA supports clients who need more than quotations. We help organize the
              technical, commercial, and sourcing side of marine and industrial supply
              so projects move forward with less friction and greater confidence.
            </p>
            <p className="max-w-3xl text-lg leading-8 text-gray-400">
              From routine procurement to urgent operational demands, our role is to be
              a dependable support partner that understands specifications, lead time
              pressures, and the importance of getting the right solution delivered at
              the right moment.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-marine-800/60 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-white/5 bg-marine-900-40 p-5">
                <ShieldCheck className="mb-4 h-8 w-8 text-signal-500" />
                <h3 className="mb-2 text-xl font-semibold text-white">Credible delivery</h3>
                <p className="text-sm leading-7 text-gray-400">
                  Professional execution grounded in clear communication, realistic
                  commitments, and accountability.
                </p>
              </div>
              <div className="rounded-lg border border-white/5 bg-marine-900-40 p-5">
                <Clock3 className="mb-4 h-8 w-8 text-signal-500" />
                <h3 className="mb-2 text-xl font-semibold text-white">Fast response</h3>
                <p className="text-sm leading-7 text-gray-400">
                  Rapid support for enquiries, urgent sourcing requirements, and active
                  project coordination.
                </p>
              </div>
              <div className="rounded-lg border border-white/5 bg-marine-900-40 p-5 sm:col-span-2">
                <Compass className="mb-4 h-8 w-8 text-signal-500" />
                <h3 className="mb-2 text-xl font-semibold text-white">Commercially practical</h3>
                <p className="text-sm leading-7 text-gray-400">
                  We balance technical understanding with pragmatic commercial support,
                  helping clients make effective decisions without unnecessary delay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-marine-800-50 py-24" id="what-we-do">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-signal-500-20 bg-signal-500-10 px-3 py-1 text-xs font-bold tracking-[0.08em] text-signal-500">
              WHAT WE DO
            </div>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              Solutions that support procurement, operations, and project delivery
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              Our work is centered on helping clients source and execute marine and
              industrial requirements with speed, accuracy, and a clear understanding of
              operational priorities.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {offerings.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-marine-900-60 p-8 transition-colors duration-200 hover:border-signal-500-30 hover:bg-marine-800-90"
              >
                <div className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-3 text-signal-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">{title}</h3>
                <p className="leading-8 text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-marine-900 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-bold tracking-[0.08em] text-gray-300">
              OUR APPROACH
            </div>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              A working philosophy based on clarity, quality, and responsiveness
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              ANVA is structured around practical support. We listen carefully, assess
              requirements properly, and respond with recommendations that are relevant,
              achievable, and aligned with the client&apos;s operational context.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-white/10 bg-marine-800-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">{value.title}</h3>
                <p className="leading-7 text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-marine-800-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-signal-500-20 bg-signal-500-10 px-3 py-1 text-xs font-bold tracking-[0.08em] text-signal-500">
              WHY CLIENTS WORK WITH US
            </div>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              Trusted when speed, professionalism, and practical execution matter
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              Clients rely on ANVA because we combine responsive commercial support with
              sector understanding. We help reduce procurement friction, improve
              clarity, and keep execution aligned with real operating needs.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-marine-900-60 p-8">
            <div className="grid gap-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-4 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                  <p className="leading-7 text-gray-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-marine-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-marine-800 to-marine-700 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold tracking-[0.08em] text-gray-200">
                  START THE CONVERSATION
                </div>
                <h2 className="mb-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                  Talk to ANVA about your next requirement
                </h2>
                <p className="max-w-3xl text-lg leading-8 text-gray-300">
                  Whether you need technical sourcing support, brand-specific guidance,
                  or a responsive commercial partner for marine and industrial supply,
                  our team is ready to help.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  className="inline-flex items-center gap-2 rounded-sm bg-signal-500 px-6 py-3.5 text-sm font-bold text-marine-900 transition-colors duration-150 hover:bg-signal-600"
                  href="/contact"
                >
                  Request Support
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors duration-150 hover:border-white"
                  href="/brands"
                >
                  View Services &amp; Brands
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
