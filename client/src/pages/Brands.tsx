function Brands() {
  return (
    <>
      <section className="bg-[var(--colors-marine-900)] py-[var(--spacing-24)] text-center" id="services">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="mx-auto max-w-[896px]">
            <h2 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-5xl)] font-[var(--fontWeight-bold)] leading-[1]">
              Services
            </h2>
            <div className="mx-auto mb-[var(--spacing-8)] h-[var(--spacing-1)] w-[var(--spacing-24)] bg-[var(--colors-signal-500)]"></div>
            <p className="text-[var(--fontSize-xl)] leading-[28px] text-[var(--colors-gray-300)]">
              Explore our comprehensive portfolio of specialized marine services. From
              engine diagnostics to hydraulic motion control, we bring world-class
              engineering to the UAE maritime sector.
            </p>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-[var(--colors-white)] py-[var(--spacing-24)] text-[var(--colors-marine-900)]">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="grid items-center gap-[var(--spacing-16)] md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="mb-[var(--spacing-4)] flex items-center gap-[var(--spacing-3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[var(--spacing-6)] w-[var(--spacing-6)] text-[var(--colors-signal-600)]"
                >
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
                <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-xl)] tracking-[0.1em] text-[var(--colors-gray-500)]">
                  Engine Performance
                </span>
              </div>
              <h3 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
                MARIDIS GmbH
              </h3>
              <p className="mb-[var(--spacing-6)] leading-[1.625] text-[var(--colors-gray-600)]">
                As the authorized UAE representative, ANVA Marine delivers peak engine
                efficiency through MARIDIS diagnostics. We specialize in combustion
                analysis and cylinder pressure monitoring to optimize fuel consumption
                and prevent failure.
              </p>
              <ul className="mb-[var(--spacing-8)] space-y-[12px]">
                {[
                  "MarIDAn Online Diagnostics",
                  "PPA-01 Peak Pressure Gauges",
                  "LDM-02 Cylinder Pressure Monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-[var(--spacing-3)]">
                    <span className="h-[var(--spacing-1-5)] w-[var(--spacing-1-5)] rounded-[var(--borderRadius-full)] bg-[var(--colors-signal-600)]"></span>
                    <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-medium)] leading-[var(--fontSize-xl)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                className="inline-block border-b-2 border-[var(--colors-marine-900)] pb-[var(--spacing-1)] font-[var(--fontWeight-bold)] transition-colors duration-150 hover:border-[var(--colors-signal-600)] hover:text-[var(--colors-signal-600)]"
                href="/contact"
              >
                Enquire about MARIDIS
              </a>
            </div>
            <div className="relative order-1 flex h-[var(--spacing-96)] items-center justify-center rounded-[var(--borderRadius-lg)] bg-[var(--colors-gray-100)] md:order-2">
              <span className="absolute right-[var(--spacing-4)] top-[var(--spacing-4)] rounded-[var(--borderRadius-DEFAULT)] bg-[var(--colors-white)] px-[var(--spacing-3)] py-[var(--spacing-1)] text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-base)] shadow-[0_1px_2px_0_var(--colors-black-5)]">
                Authorized Rep
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[var(--spacing-32)] w-[var(--spacing-32)] text-[var(--colors-gray-300)]"
              >
                <path d="m12 14 4-4"></path>
                <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[var(--spacing-24)] text-[var(--colors-marine-900)]">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="grid items-center gap-[var(--spacing-16)] md:grid-cols-2">
            <div className="flex h-[var(--spacing-96)] items-center justify-center rounded-[var(--borderRadius-lg)] border border-[var(--colors-gray-200)] bg-[var(--colors-white)] shadow-[0_1px_2px_0_var(--colors-black-5)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[var(--spacing-32)] w-[var(--spacing-32)] text-[var(--colors-gray-300)]"
              >
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div>
              <div className="mb-[var(--spacing-4)] flex items-center gap-[var(--spacing-3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[var(--spacing-6)] w-[var(--spacing-6)] text-[var(--colors-signal-600)]"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-xl)] tracking-[0.1em] text-[var(--colors-gray-500)]">
                  Hydraulic Power
                </span>
              </div>
              <h3 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
                Bosch Rexroth
              </h3>
              <p className="mb-[var(--spacing-6)] leading-[1.625] text-[var(--colors-gray-600)]">
                Powering the heaviest marine lifting and steering applications. ANVA
                provides complete Bosch Rexroth solutions for winches, cranes, and
                thrusters, ensuring precise motion control under extreme loads.
              </p>
              <div className="mb-[var(--spacing-8)] grid grid-cols-2 gap-[var(--spacing-4)]">
                <div className="rounded-[var(--borderRadius-DEFAULT)] border border-[var(--colors-gray-200)] bg-[var(--colors-white)] p-[var(--spacing-4)]">
                  <span className="mb-[var(--spacing-1)] block text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)]">
                    A10VSO / A4VSO
                  </span>
                  <span className="text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Axial Piston Pumps
                  </span>
                </div>
                <div className="rounded-[var(--borderRadius-DEFAULT)] border border-[var(--colors-gray-200)] bg-[var(--colors-white)] p-[var(--spacing-4)]">
                  <span className="mb-[var(--spacing-1)] block text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)]">
                    4WE6 / M4C
                  </span>
                  <span className="text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Directional Valves
                  </span>
                </div>
              </div>
              <a
                className="inline-block border-b-2 border-[var(--colors-marine-900)] pb-[var(--spacing-1)] font-[var(--fontWeight-bold)] transition-colors duration-150 hover:border-[var(--colors-signal-600)] hover:text-[var(--colors-signal-600)]"
                href="/contact"
              >
                Enquire about Rexroth
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-white)] py-[var(--spacing-24)] text-[var(--colors-marine-900)]">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="grid items-center gap-[var(--spacing-16)] md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="mb-[var(--spacing-4)] flex items-center gap-[var(--spacing-3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-xl)] tracking-[0.1em] text-[var(--colors-gray-500)]">
                  Filtration Tech
                </span>
              </div>
              <h3 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
                HYDAC Technology
              </h3>
              <p className="mb-[var(--spacing-6)] leading-[1.625] text-[var(--colors-gray-600)]">
                Fluid conditioning is critical for system longevity. We supply original
                HYDAC elements, housings, and sensors to protect your hydraulic power
                packs and lube oil systems from contamination.
              </p>
              <ul className="mb-[var(--spacing-8)] space-y-[12px]">
                {[
                  "0240D / 0330D Pressure Filters",
                  "Aquamicron Elements",
                  "Contamination Sensors (CS 1000)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-[var(--spacing-3)]">
                    <span className="h-[var(--spacing-1-5)] w-[var(--spacing-1-5)] rounded-[var(--borderRadius-full)] bg-[var(--colors-signal-600)]"></span>
                    <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-medium)] leading-[var(--fontSize-xl)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                className="inline-block border-b-2 border-[var(--colors-marine-900)] pb-[var(--spacing-1)] font-[var(--fontWeight-bold)] transition-colors duration-150 hover:border-[var(--colors-signal-600)] hover:text-[var(--colors-signal-600)]"
                href="/contact"
              >
                Enquire about HYDAC
              </a>
            </div>
            <div className="order-1 flex h-[var(--spacing-96)] items-center justify-center rounded-[var(--borderRadius-lg)] bg-[var(--colors-gray-100)] md:order-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[var(--spacing-32)] w-[var(--spacing-32)] text-[var(--colors-gray-300)]"
              >
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-marine-900)] py-[var(--spacing-24)]">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="grid items-center gap-[var(--spacing-16)] md:grid-cols-2">
            <div className="flex h-[var(--spacing-96)] items-center justify-center rounded-[var(--borderRadius-lg)] border border-[var(--colors-white-5)] bg-[var(--colors-marine-800)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                <path d="M16 9a5 5 0 0 1 0 6"></path>
                <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
              </svg>
            </div>
            <div>
              <div className="mb-[var(--spacing-4)] flex items-center gap-[var(--spacing-3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                  <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                  <path d="M8 6v8"></path>
                </svg>
                <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-xl)] tracking-[0.1em] text-[var(--colors-gray-400)]">
                  Marine Signaling
                </span>
              </div>
              <h3 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px] text-[var(--colors-white)]">
                Kockums Sonics
              </h3>
              <p className="mb-[var(--spacing-6)] leading-[1.625] text-[var(--colors-gray-400)]">
                The industry gold standard for IMO-compliant ship horns. From Tyfon MKT
                series to fully integrated signaling controllers, we ensure your vessel
                is heard when it matters most.
              </p>
              <div className="mb-[var(--spacing-8)] grid grid-cols-2 gap-[var(--spacing-4)]">
                <div className="rounded-[var(--borderRadius-DEFAULT)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-800)] p-[var(--spacing-4)]">
                  <span className="mb-[var(--spacing-1)] block text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)] text-[var(--colors-white)]">
                    Tyfon® Series
                  </span>
                  <span className="text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    MKT 75/150 Whistles
                  </span>
                </div>
                <div className="rounded-[var(--borderRadius-DEFAULT)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-800)] p-[var(--spacing-4)]">
                  <span className="mb-[var(--spacing-1)] block text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)] text-[var(--colors-white)]">
                    TCP-2000
                  </span>
                  <span className="text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Signaling Controller
                  </span>
                </div>
              </div>
              <a
                className="inline-block border-b-2 border-[var(--colors-white)] pb-[var(--spacing-1)] font-[var(--fontWeight-bold)] text-[var(--colors-white)] transition-colors duration-150 hover:border-[var(--colors-signal-500)] hover:text-[var(--colors-signal-500)]"
                href="/contact"
              >
                Enquire about Tyfons
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-white)] py-[var(--spacing-24)] text-[var(--colors-marine-900)]">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="grid items-center gap-[var(--spacing-16)] md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="mb-[var(--spacing-4)] flex items-center gap-[var(--spacing-3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
                <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-xl)] tracking-[0.1em] text-[var(--colors-gray-500)]">
                  Cargo Safety
                </span>
              </div>
              <h3 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
                Loadmaster &amp; Levelmaster
              </h3>
              <p className="mb-[var(--spacing-6)] leading-[1.625] text-[var(--colors-gray-600)]">
                Precision tank gauging and loading computers for product and chemical
                tankers. We support configuration, calibration, and spares for
                Loadmaster 2000 and Levelmaster LGT systems.
              </p>
              <ul className="mb-[var(--spacing-8)] space-y-[12px]">
                {[
                  "Loadmaster 2000 Software Support",
                  "LGT & LS200 Sensors",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-[var(--spacing-3)]">
                    <span className="h-[var(--spacing-1-5)] w-[var(--spacing-1-5)] rounded-[var(--borderRadius-full)] bg-[var(--colors-signal-600)]"></span>
                    <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-medium)] leading-[var(--fontSize-xl)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                className="inline-block border-b-2 border-[var(--colors-marine-900)] pb-[var(--spacing-1)] font-[var(--fontWeight-bold)] transition-colors duration-150 hover:border-[var(--colors-signal-600)] hover:text-[var(--colors-signal-600)]"
                href="/contact"
              >
                Enquire about Loadmaster
              </a>
            </div>
            <div className="order-1 flex h-[var(--spacing-96)] items-center justify-center rounded-[var(--borderRadius-lg)] bg-[var(--colors-gray-100)] md:order-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[var(--spacing-32)] w-[var(--spacing-32)] text-[var(--colors-gray-300)]"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[var(--spacing-24)] text-[var(--colors-marine-900)]">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="grid items-center gap-[var(--spacing-16)] md:grid-cols-2">
            <div className="flex h-[var(--spacing-96)] items-center justify-center rounded-[var(--borderRadius-lg)] border border-[var(--colors-gray-200)] bg-[var(--colors-white)] shadow-[0_1px_2px_0_var(--colors-black-5)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[var(--spacing-32)] w-[var(--spacing-32)] text-[var(--colors-gray-300)]"
              >
                <path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path>
                <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path>
                <path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path>
              </svg>
            </div>
            <div>
              <div className="mb-[var(--spacing-4)] flex items-center gap-[var(--spacing-3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                </svg>
                <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-xl)] tracking-[0.1em] text-[var(--colors-gray-500)]">
                  Tank Cleaning
                </span>
              </div>
              <h3 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
                Polarjet Marine
              </h3>
              <p className="mb-[var(--spacing-6)] leading-[1.625] text-[var(--colors-gray-600)]">
                Advanced programmable rotary jet machines for efficient cargo and slop
                tank cleaning. ANVA supplies and commissions PJ-series machines for
                chemical tankers and industrial applications.
              </p>
              <div className="mb-[var(--spacing-8)] grid grid-cols-2 gap-[var(--spacing-4)]">
                <div className="rounded-[var(--borderRadius-DEFAULT)] border border-[var(--colors-gray-200)] bg-[var(--colors-white)] p-[var(--spacing-4)]">
                  <span className="mb-[var(--spacing-1)] block text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)]">
                    PJ15 / PJ30 / PJ60
                  </span>
                  <span className="text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Rotary Jet Heads
                  </span>
                </div>
                <div className="rounded-[var(--borderRadius-DEFAULT)] border border-[var(--colors-gray-200)] bg-[var(--colors-white)] p-[var(--spacing-4)]">
                  <span className="mb-[var(--spacing-1)] block text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)]">
                    Portable CIP
                  </span>
                  <span className="text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Mobile Cleaning Units
                  </span>
                </div>
              </div>
              <a
                className="inline-block border-b-2 border-[var(--colors-marine-900)] pb-[var(--spacing-1)] font-[var(--fontWeight-bold)] transition-colors duration-150 hover:border-[var(--colors-signal-600)] hover:text-[var(--colors-signal-600)]"
                href="/contact"
              >
                Enquire about Polarjet
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-white)] py-[var(--spacing-24)] text-[var(--colors-marine-900)]">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="grid items-center gap-[var(--spacing-16)] md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="mb-[var(--spacing-4)] flex items-center gap-[var(--spacing-3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[var(--spacing-6)] w-[var(--spacing-6)] text-[var(--colors-signal-600)]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-xl)] tracking-[0.1em] text-[var(--colors-gray-500)]">
                  Propulsion
                </span>
              </div>
              <h3 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
                Subhadra Propellers
              </h3>
              <p className="mb-[var(--spacing-6)] leading-[1.625] text-[var(--colors-gray-600)]">
                Combining hydrodynamic efficiency with rugged durability. We provide
                full propulsion packages including CPP, FPP, nozzles, and rudder
                systems for tugs, workboats, and support vessels.
              </p>
              <ul className="mb-[var(--spacing-8)] space-y-[12px]">
                {[
                  "SR-CP Controllable Pitch Propellers",
                  "Nozzle Propellers (High Bollard Pull)",
                  "Complete Rudder Assemblies",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-[var(--spacing-3)]">
                    <span className="h-[var(--spacing-1-5)] w-[var(--spacing-1-5)] rounded-[var(--borderRadius-full)] bg-[var(--colors-signal-600)]"></span>
                    <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-medium)] leading-[var(--fontSize-xl)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                className="inline-block border-b-2 border-[var(--colors-marine-900)] pb-[var(--spacing-1)] font-[var(--fontWeight-bold)] transition-colors duration-150 hover:border-[var(--colors-signal-600)] hover:text-[var(--colors-signal-600)]"
                href="/contact"
              >
                Enquire about Propulsion
              </a>
            </div>
            <div className="order-1 flex h-[var(--spacing-96)] items-center justify-center rounded-[var(--borderRadius-lg)] bg-[var(--colors-gray-100)] md:order-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[var(--spacing-32)] w-[var(--spacing-32)] text-[var(--colors-gray-300)]"
              >
                <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path>
                <path d="M12 12v.01"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-marine-900)] py-[var(--spacing-24)]">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="grid items-center gap-[var(--spacing-16)] md:grid-cols-2">
            <div className="flex h-[var(--spacing-96)] items-center justify-center rounded-[var(--borderRadius-lg)] border border-[var(--colors-white-5)] bg-[var(--colors-marine-800)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[var(--spacing-32)] w-[var(--spacing-32)] text-[var(--colors-signal-500)]"
              >
                <path d="m11 7-3 5h4l-3 5"></path>
                <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path>
                <path d="M22 14v-4"></path>
                <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path>
              </svg>
            </div>
            <div>
              <div className="mb-[var(--spacing-4)] flex items-center gap-[var(--spacing-3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[var(--spacing-6)] w-[var(--spacing-6)] text-[var(--colors-signal-500)]"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-xl)] tracking-[0.1em] text-[var(--colors-gray-400)]">
                  Corrosion Control
                </span>
              </div>
              <h3 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px] text-[var(--colors-white)]">
                ICCP &amp; MGPS Systems
              </h3>
              <p className="mb-[var(--spacing-6)] leading-[1.625] text-[var(--colors-gray-400)]">
                Protecting your hull and sea chests from corrosion and biofouling. We
                supply and install Impressed Current Cathodic Protection (ICCP) and
                Marine Growth Prevention Systems (MGPS) for newbuilds and retrofits.
              </p>
              <div className="mb-[var(--spacing-8)] grid grid-cols-2 gap-[var(--spacing-4)]">
                <div className="rounded-[var(--borderRadius-DEFAULT)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-800)] p-[var(--spacing-4)]">
                  <span className="mb-[var(--spacing-1)] block text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)] text-[var(--colors-white)]">
                    ICCP
                  </span>
                  <span className="text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Hull Corrosion Protection
                  </span>
                </div>
                <div className="rounded-[var(--borderRadius-DEFAULT)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-800)] p-[var(--spacing-4)]">
                  <span className="mb-[var(--spacing-1)] block text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)] text-[var(--colors-white)]">
                    MGPS
                  </span>
                  <span className="text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Sea Chest Antifouling
                  </span>
                </div>
              </div>
              <a
                className="inline-block border-b-2 border-[var(--colors-white)] pb-[var(--spacing-1)] font-[var(--fontWeight-bold)] text-[var(--colors-white)] transition-colors duration-150 hover:border-[var(--colors-signal-500)] hover:text-[var(--colors-signal-500)]"
                href="/contact"
              >
                Enquire about ICCP/MGPS
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-gray-100)] py-[var(--spacing-24)] text-[var(--colors-marine-900)]">
        <div className="mx-auto max-w-[896px] px-[var(--spacing-6)] text-center">
          <div className="mb-[var(--spacing-6)] inline-block rounded-[var(--borderRadius-full)] bg-[var(--colors-white)] p-[var(--spacing-3)] shadow-[0_1px_2px_0_var(--colors-black-5)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[var(--spacing-8)] w-[var(--spacing-8)] text-[var(--colors-signal-600)]"
            >
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
              <path d="m7.5 4.27 9 5.15"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <line x1="12" x2="12" y1="22" y2="12"></line>
              <circle cx="18.5" cy="15.5" r="2.5"></circle>
              <path d="M20.27 17.27 22 19"></path>
            </svg>
          </div>
          <h2 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
            General Marine Spares
          </h2>
          <p className="mb-[var(--spacing-12)] text-[var(--fontSize-lg)] leading-[28px] text-[var(--colors-gray-600)]">
            Beyond our exclusive representations, we utilize a global network to
            source genuine and OEM-equivalent spares for almost any machinery onboard.
            Pumps, compressors, electrical, and auxiliary systems.
          </p>
          <div className="grid grid-cols-2 gap-[var(--spacing-4)] md:grid-cols-4">
            {["Main Engines", "Auxiliary Engines", "Purifiers", "Compressors"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-[var(--borderRadius-DEFAULT)] bg-[var(--colors-white)] p-[var(--spacing-6)] text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)] shadow-[0_1px_2px_0_var(--colors-black-5)]"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-marine-800)] py-[var(--spacing-24)]" id="brands">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="mx-auto mb-[var(--spacing-16)] max-w-[768px] text-center">
            <h2 className="mb-[var(--spacing-4)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
              Brands
            </h2>
            <p className="text-[var(--colors-gray-400)]">
              ANVA Marine proudly represents and supports leading global OEMs, bringing
              factory-level precision to local waters.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[var(--spacing-6)] md:grid-cols-4">
            {[
              { title: "MARIDIS", subtitle: "Engine Diagnostics" },
              { title: "Rexroth", subtitle: "Bosch Hydraulics" },
              { title: "HYDAC", subtitle: "Fluid Control" },
              { title: "Kockums", subtitle: "Signaling Systems" },
              { title: "Loadmaster", subtitle: "Tank Gauging" },
              { title: "Polarjet", subtitle: "Tank Cleaning" },
              { title: "Subhadra", subtitle: "Propulsion" },
              { title: "ICCP/MGPS", subtitle: "Cathodic Protection" },
            ].map((brand) => (
              <div
                key={brand.title}
                className="group flex flex-col items-center justify-center rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-5)] bg-[var(--colors-marine-900)] p-[var(--spacing-8)] transition-colors duration-150 hover:border-[var(--colors-signal-500-50)]"
              >
                <span className="font-[var(--fontFamily-display)] text-[var(--fontSize-xl)] font-[var(--fontWeight-bold)] leading-[28px] transition-colors duration-150 group-hover:text-[var(--colors-signal-500)]">
                  {brand.title}
                </span>
                <span className="mt-[var(--spacing-2)] text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                  {brand.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Brands;
