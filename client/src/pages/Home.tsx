function Home() {
  return (
    <>
      <section
        className="relative flex min-h-screen items-center overflow-hidden pt-[var(--spacing-20)]"
        id="hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover object-center opacity-40"
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--colors-marine-900)] via-[var(--colors-marine-900-80)] to-transparent"></div>
        </div>
        <div className="relative z-10 mx-auto grid items-center gap-[var(--spacing-12)] px-[var(--spacing-6)] md:grid-cols-2">
          <div className="max-w-[768px]">
            <div className="mb-[var(--spacing-6)] inline-flex items-center gap-[var(--spacing-2)] rounded-[var(--borderRadius-full)] border border-[var(--colors-signal-500-30)] bg-[var(--colors-signal-500-10)] px-[var(--spacing-3)] py-[var(--spacing-1)] text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-base)] tracking-[0.05em] text-[var(--colors-signal-500)]">
              <span className="h-[var(--spacing-2)] w-[var(--spacing-2)] animate-pulse rounded-[var(--borderRadius-full)] bg-[var(--colors-signal-500)]"></span>
              <span>OPERATIONAL 24/7</span>
            </div>
            <h1 className="mb-[var(--spacing-6)] whitespace-pre-wrap font-[var(--fontFamily-display)] text-[var(--fontSize-5xl)] font-[var(--fontWeight-bold)] leading-[1.25] md:text-[var(--fontSize-7xl)] md:leading-[1]">
              Where Marine Meets Mastery
            </h1>
            <p className="mb-[var(--spacing-8)] max-w-[576px] text-[var(--fontSize-lg)] leading-[1.625] text-[var(--colors-gray-400)]">
              ANVA Marine delivers end-to-end solutions that keep fleets moving. From
              complex punch list closures to global OEM sourcing and offshore
              chartering, we are the maritime backbone of the UAE.
            </p>
            <div className="flex flex-wrap gap-[var(--spacing-4)]">
              <a
                className="inline-flex items-center gap-[var(--spacing-2)] rounded-[var(--borderRadius-sm)] bg-[var(--colors-white)] px-[var(--spacing-8)] py-[var(--spacing-4)] font-[var(--fontWeight-bold)] text-[var(--colors-marine-900)] transition-colors duration-150 hover:bg-[var(--colors-gray-100)]"
                href="/#rfq"
              >
                <span>Request a Quote</span>
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
                  className="h-[var(--spacing-4)] w-[var(--spacing-4)]"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
              <a
                className="inline-flex items-center rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-20)] px-[var(--spacing-8)] py-[var(--spacing-4)] font-[var(--fontWeight-bold)] transition-colors duration-150 hover:border-[var(--colors-white)]"
                href="/brands#services"
              >
                View Services
              </a>
            </div>
          </div>
          <div className="hidden grid-cols-2 gap-[var(--spacing-4)] md:grid">
            <div className="rounded-[var(--borderRadius-lg)] border border-[var(--colors-white-5)] bg-[var(--colors-marine-800-50)] p-[var(--spacing-6)] backdrop-blur-[4px]">
              <div className="mb-[var(--spacing-1)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px] text-[var(--colors-signal-500)]">
                50+
              </div>
              <div className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-400)]">
                Years Expertise
              </div>
            </div>
            <div className="rounded-[var(--borderRadius-lg)] border border-[var(--colors-white-5)] bg-[var(--colors-marine-800-50)] p-[var(--spacing-6)] backdrop-blur-[4px]">
              <div className="mb-[var(--spacing-1)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px] text-[var(--colors-white)]">
                24/7
              </div>
              <div className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-400)]">
                Reliability
              </div>
            </div>
            <div className="rounded-[var(--borderRadius-lg)] border border-[var(--colors-white-5)] bg-[var(--colors-marine-800-50)] p-[var(--spacing-6)] backdrop-blur-[4px]">
              <div className="mb-[var(--spacing-1)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px] text-[var(--colors-white)]">
                UAE
              </div>
              <div className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-400)]">
                Port Coverage
              </div>
            </div>
            <div className="rounded-[var(--borderRadius-lg)] border border-[var(--colors-white-5)] bg-[var(--colors-marine-800-50)] p-[var(--spacing-6)] backdrop-blur-[4px]">
              <div className="mb-[var(--spacing-1)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px] text-[var(--colors-signal-500)]">
                100%
              </div>
              <div className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-400)]">
                Compliance
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-marine-900)] py-[var(--spacing-24)]" id="about">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="grid items-start gap-[var(--spacing-16)] md:grid-cols-2">
            <div>
              <h2 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
                50 Years of Nautical Excellence
              </h2>
              <p className="mb-[var(--spacing-8)] leading-[1.625] text-[var(--colors-gray-400)]">
                Advanced Nautical Ventures (ANVA Marine) is a UAE-based powerhouse in
                marine services. We don't just fix ships; we engineer reliability. Our
                strategic goal is to be recognized as the global leader in marine
                services, bridging the gap between intricate engineering problems and
                seamless operational solutions.
              </p>
              <div className="grid gap-[var(--spacing-6)] md:grid-cols-2">
                <div className="border-l-2 border-[var(--colors-signal-500)] pl-[var(--spacing-4)]">
                  <h3 className="mb-[var(--spacing-2)] font-[var(--fontFamily-display)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                    Quality &amp; Reliability
                  </h3>
                  <p className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-500)]">
                    Uncompromising standards in every spare part and service hour.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--colors-signal-500)] pl-[var(--spacing-4)]">
                  <h3 className="mb-[var(--spacing-2)] font-[var(--fontFamily-display)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                    Innovation
                  </h3>
                  <p className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-500)]">
                    Leveraging latest diagnostics and propulsion tech.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--colors-signal-500)] pl-[var(--spacing-4)]">
                  <h3 className="mb-[var(--spacing-2)] font-[var(--fontFamily-display)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                    Safety First
                  </h3>
                  <p className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-500)]">
                    ISO 45001:2018 driven safety protocols.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--colors-signal-500)] pl-[var(--spacing-4)]">
                  <h3 className="mb-[var(--spacing-2)] font-[var(--fontFamily-display)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                    Sustainability
                  </h3>
                  <p className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-500)]">
                    Eco-friendly cleaning and fuel-saving solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-[-16px] translate-x-[16px] translate-y-[16px] rounded-[var(--borderRadius-lg)] border border-[var(--colors-signal-500-20)]"></div>
              <img
                className="relative w-full rounded-[var(--borderRadius-lg)] grayscale transition-all duration-700 shadow-[0_25px_50px_-12px_var(--colors-black-25)] hover:grayscale-0"
                src="https://images.unsplash.com/photo-1566835266472-351119b4b45d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"
              />
              <div className="absolute bottom-[var(--spacing-8)] left-[var(--spacing-8)] max-w-[320px] rounded-[var(--borderRadius-sm)] bg-[var(--colors-marine-800)] p-[var(--spacing-6)] shadow-[0_20px_25px_-5px_var(--colors-black-10),0_8px_10px_-6px_var(--colors-black-10)]">
                <div className="mb-[var(--spacing-2)] flex items-center gap-[var(--spacing-3)]">
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
                    className="text-[var(--colors-signal-500)]"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="font-[var(--fontWeight-bold)]">Dubai Maritime City</span>
                </div>
                <p className="text-[var(--fontSize-xs)] leading-[var(--fontSize-base)] text-[var(--colors-gray-400)]">
                  Strategic Hub for UAE &amp; Global Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-marine-800)] py-[var(--spacing-24)]" id="brands">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="mx-auto mb-[var(--spacing-16)] max-w-[768px] text-center">
            <h2 className="mb-[var(--spacing-4)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
              Authorized Representation
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
      <section className="bg-[var(--colors-white)] py-[var(--spacing-20)] text-[var(--colors-marine-900)]" id="quality">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="flex flex-col items-center justify-between gap-[var(--spacing-12)] md:flex-row">
            <div className="max-w-[672px]">
              <h2 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
                Certified Quality &amp; Compliance
              </h2>
              <p className="mb-[var(--spacing-8)] leading-[1.625] text-[var(--colors-gray-600)]">
                Quality is not a department; it's our doctrine. ANVA Marine adheres to
                the strictest international standards, ensuring that every project
                meets IMO/SOLAS regulations and exceeds client expectations. We are
                committed to operational safety and environmental stewardship.
              </p>
              <div className="flex flex-wrap gap-[var(--spacing-4)]">
                {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-[var(--spacing-3)] rounded-[var(--borderRadius-full)] bg-[var(--colors-gray-100)] px-[var(--spacing-5)] py-[var(--spacing-3)]"
                  >
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
                      className="h-[var(--spacing-5)] w-[var(--spacing-5)] text-[var(--colors-green-600)]"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="text-[var(--fontSize-sm)] font-[var(--fontWeight-bold)] leading-[var(--fontSize-xl)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-[var(--spacing-6)]">
              <div className="flex h-[var(--spacing-44)] w-[var(--spacing-32)] flex-col items-center justify-center border border-[var(--colors-gray-200)] bg-[var(--colors-white)] p-[var(--spacing-4)] shadow-[0_20px_25px_-5px_var(--colors-black-10),0_8px_10px_-6px_var(--colors-black-10)]">
                <div className="mb-[var(--spacing-4)] flex h-[var(--spacing-16)] w-[var(--spacing-16)] items-center justify-center rounded-[var(--borderRadius-full)] bg-[var(--colors-gray-100)]">
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
                    className="text-[var(--colors-marine-900)]"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                </div>
                <div className="mb-[var(--spacing-2)] h-[var(--spacing-2)] w-[var(--spacing-16)] rounded-[var(--borderRadius-DEFAULT)] bg-[var(--colors-gray-200)]"></div>
                <div className="h-[var(--spacing-2)] w-[var(--spacing-10)] rounded-[var(--borderRadius-DEFAULT)] bg-[var(--colors-gray-200)]"></div>
              </div>
              <div className="mt-[-24px] flex h-[var(--spacing-44)] w-[var(--spacing-32)] flex-col items-center justify-center border border-[var(--colors-gray-200)] bg-[var(--colors-white)] p-[var(--spacing-4)] shadow-[0_20px_25px_-5px_var(--colors-black-10),0_8px_10px_-6px_var(--colors-black-10)]">
                <div className="mb-[var(--spacing-4)] flex h-[var(--spacing-16)] w-[var(--spacing-16)] items-center justify-center rounded-[var(--borderRadius-full)] bg-[var(--colors-gray-100)]">
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
                    className="text-[var(--colors-marine-900)]"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="mb-[var(--spacing-2)] h-[var(--spacing-2)] w-[var(--spacing-16)] rounded-[var(--borderRadius-DEFAULT)] bg-[var(--colors-gray-200)]"></div>
                <div className="h-[var(--spacing-2)] w-[var(--spacing-10)] rounded-[var(--borderRadius-DEFAULT)] bg-[var(--colors-gray-200)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[var(--colors-marine-900)] py-[var(--spacing-24)]" id="rfq">
        <div className="relative z-10 mx-auto px-[var(--spacing-6)]">
          <div className="grid gap-[var(--spacing-16)] md:grid-cols-2">
            <div>
              <h2 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[40px]">
                Request a Quotation
              </h2>
              <p className="mb-[var(--spacing-8)] text-[var(--colors-gray-400)]">
                Direct gateway for clients and suppliers. We guarantee a response
                within one business day.
              </p>
              <div className="mb-[var(--spacing-12)] space-y-[24px]">
                <div className="flex items-start gap-[var(--spacing-4)]">
                  <div className="rounded-[var(--borderRadius-sm)] bg-[var(--colors-marine-800)] p-[var(--spacing-3)]">
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
                      className="text-[var(--colors-signal-500)]"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                      Dubai Maritime City
                    </h4>
                    <p className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-400)]">
                      Warehouse 44, Industrial Precinct, Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[var(--spacing-4)]">
                  <div className="rounded-[var(--borderRadius-sm)] bg-[var(--colors-marine-800)] p-[var(--spacing-3)]">
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
                      className="text-[var(--colors-signal-500)]"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                      24/7 Support
                    </h4>
                    <p className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-gray-400)]">
                      +971 4 000 0000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[var(--spacing-4)]">
                  <div className="rounded-[var(--borderRadius-sm)] bg-[var(--colors-marine-800)] p-[var(--spacing-3)]">
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
                      className="text-[var(--colors-signal-500)]"
                    >
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                      WhatsApp Priority
                    </h4>
                    <a
                      className="text-[var(--fontSize-sm)] leading-[var(--fontSize-xl)] text-[var(--colors-signal-500)] hover:underline"
                      href="#"
                    >
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-[16px] rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-5)] bg-[var(--colors-marine-800)] p-[var(--spacing-8)]">
              <div className="grid grid-cols-2 gap-[var(--spacing-4)]">
                <div className="space-y-[4px]">
                  <label className="text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Name
                  </label>
                  <input
                    className="w-full rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] p-[var(--spacing-3)] text-[var(--colors-white)] outline-none transition-colors duration-150 focus:border-[var(--colors-signal-500)]"
                    type="text"
                  />
                </div>
                <div className="space-y-[4px]">
                  <label className="text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Company
                  </label>
                  <input
                    className="w-full rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] p-[var(--spacing-3)] text-[var(--colors-white)] outline-none transition-colors duration-150 focus:border-[var(--colors-signal-500)]"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[var(--spacing-4)]">
                <div className="space-y-[4px]">
                  <label className="text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Email
                  </label>
                  <input
                    className="w-full rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] p-[var(--spacing-3)] text-[var(--colors-white)] outline-none transition-colors duration-150 focus:border-[var(--colors-signal-500)]"
                    type="email"
                  />
                </div>
                <div className="space-y-[4px]">
                  <label className="text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] p-[var(--spacing-3)] text-[var(--colors-white)] outline-none transition-colors duration-150 focus:border-[var(--colors-signal-500)]"
                    type="tel"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[var(--spacing-4)]">
                <div className="space-y-[4px]">
                  <label className="text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Vessel Name
                  </label>
                  <input
                    className="w-full rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] p-[var(--spacing-3)] text-[var(--colors-white)] outline-none transition-colors duration-150 focus:border-[var(--colors-signal-500)]"
                    type="text"
                  />
                </div>
                <div className="space-y-[4px]">
                  <label className="text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                    Port/Location
                  </label>
                  <input
                    className="w-full rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] p-[var(--spacing-3)] text-[var(--colors-white)] outline-none transition-colors duration-150 focus:border-[var(--colors-signal-500)]"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-[4px]">
                <label className="text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-base)] text-[var(--colors-gray-500)]">
                  Message / Scope
                </label>
                <textarea
                  className="w-full rounded-[var(--borderRadius-sm)] border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] p-[var(--spacing-3)] text-[var(--colors-white)] outline-none transition-colors duration-150 focus:border-[var(--colors-signal-500)]"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full rounded-[var(--borderRadius-sm)] bg-[var(--colors-signal-500)] py-[var(--spacing-4)] font-[var(--fontWeight-bold)] text-[var(--colors-marine-900)] transition-colors duration-150 hover:bg-[var(--colors-signal-600)]"
                type="submit"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-[var(--colors-white)] py-[var(--spacing-12)]">
        <div className="mx-auto px-[var(--spacing-6)]">
          <div className="rounded-[var(--borderRadius-lg)] border-2 border-dashed border-[var(--colors-gray-300)] p-[var(--spacing-12)] text-center">
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
              className="mx-auto mb-[var(--spacing-4)] h-[var(--spacing-12)] w-[var(--spacing-12)] text-[var(--colors-gray-400)]"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <h3 className="mb-[var(--spacing-2)] font-[var(--fontFamily-display)] text-[var(--fontSize-2xl)] font-[var(--fontWeight-bold)] leading-[32px] text-[var(--colors-marine-900)]">
              eCommerce Store Coming Soon
            </h3>
            <p className="mx-auto mb-[var(--spacing-6)] max-w-[448px] text-[var(--colors-gray-500)]">
              Direct purchase of Hydraulics, Filters, Valves, and Sensors. Search by
              part number with live stock integration.
            </p>
            <span className="rounded-[var(--borderRadius-full)] bg-[var(--colors-gray-100)] px-[var(--spacing-4)] py-[var(--spacing-1)] text-[var(--fontSize-xs)] font-[var(--fontWeight-bold)] uppercase leading-[var(--fontSize-base)] tracking-[0.025em] text-[var(--colors-gray-600)]">
              Under Development
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
