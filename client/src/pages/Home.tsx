function Home() {
  return (
    <>
      <section

        className="relative flex min-h-screen items-center overflow-hidden pt-20"
        id="hero"
      >
        <div className="absolute inset-0 z-0">
          <img

            className="h-full w-full object-cover object-center opacity-40"
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"
          />
          <div

            className="absolute inset-0 bg-gradient-to-r from-marine-900 via-marine-900-80 to-transparent"
          ></div>
        </div>
        <div

          className="relative z-10 mx-auto grid items-center gap-12 px-6 md:grid-cols-2"
        >
          <div className="max-w-2xl">
            <div

              className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal-500-30 bg-signal-500-10 px-3 py-1 text-xs font-bold tracking-[0.05em] text-signal-500"
            >
              <span

                className="h-2 w-2 animate-pulse rounded-full bg-signal-500"
              ></span>
              <span>OPERATIONAL 24/7</span>
            </div>
            <h1

              className="mb-6 whitespace-pre-wrap font-display text-5xl font-bold leading-tight md:text-7xl md:leading-none"
            >
              Where Marine Meets Mastery
            </h1>
            <p

              className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400"
            >
              ANVA Marine delivers end-to-end solutions that keep fleets moving. From
              complex punch list closures to global OEM sourcing and offshore
              chartering, we are the maritime backbone of the UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <a

                className="inline-flex items-center gap-2 rounded-sm bg-white px-8 py-4 font-bold text-marine-900 transition-colors hover:bg-gray-100"
                href="/#rfq"
              >
                <span>Request a Quote</span>
                <svg

                  className="h-4 w-4"
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
              <a

                className="rounded-sm border border-white/20 px-8 py-4 font-bold text-white transition-colors hover:border-white"
                href="/brands#services"
              >
                View Services
              </a>
            </div>
          </div>
          <div className="hidden grid-cols-2 gap-4 md:grid">
            <div

              className="rounded-lg border border-white/5 bg-marine-800-50 p-6 backdrop-blur-sm"
            >
              <div>50+</div>
              <div>Years Expertise</div>
            </div>
            <div

              className="rounded-lg border border-white/5 bg-marine-800-50 p-6 backdrop-blur-sm"
            >
              <div>24/7</div>
              <div>Reliability</div>
            </div>
            <div

              className="rounded-lg border border-white/5 bg-marine-800-50 p-6 backdrop-blur-sm"
            >
              <div>UAE</div>
              <div>Port Coverage</div>
            </div>
            <div

              className="rounded-lg border border-white/5 bg-marine-800-50 p-6 backdrop-blur-sm"
            >
              <div>100%</div>
              <div>Compliance</div>
            </div>
          </div>
        </div>
      </section>
      <section

        className="bg-marine-900 py-24"
        id="about"
      >
        <div className="mx-auto px-6">
          <div

            className="grid items-start gap-16 md:grid-cols-2"
          >
            <div className="">
              <h2

                className="mb-6 font-display text-4xl font-bold leading-10"
              >
                50 Years of Nautical Excellence
              </h2>
              <p

                className="mb-8 text-gray-400 leading-relaxed"
              >
                Advanced Nautical Ventures (ANVA Marine) is a UAE-based powerhouse in
                marine services. We don't just fix ships; we engineer reliability. Our
                strategic goal is to be recognized as the global leader in marine
                services, bridging the gap between intricate engineering problems and
                seamless operational solutions.
              </p>
              <div

                className="grid gap-6 md:grid-cols-2"
              >
                <div

                  className="border-l-2 border-signal-500 pl-4"
                >
                  <h3

                    className="mb-2 font-display font-bold text-white"
                  >
                    Quality &amp; Reliability
                  </h3>
                  <p className="text-sm leading-5 text-gray-500">
                    Uncompromising standards in every spare part and service hour.
                  </p>
                </div>
                <div

                  className="border-l-2 border-signal-500 pl-4"
                >
                  <h3

                    className="mb-2 font-display font-bold text-white"
                  >
                    Innovation
                  </h3>
                  <p className="text-sm leading-5 text-gray-500">
                    Leveraging latest diagnostics and propulsion tech.
                  </p>
                </div>
                <div

                  className="border-l-2 border-signal-500 pl-4"
                >
                  <h3

                    className="mb-2 font-display font-bold text-white"
                  >
                    Safety First
                  </h3>
                  <p className="text-sm leading-5 text-gray-500">
                    ISO 45001:2018 driven safety protocols.
                  </p>
                </div>
                <div

                  className="border-l-2 border-signal-500 pl-4"
                >
                  <h3

                    className="mb-2 font-display font-bold text-white"
                  >
                    Sustainability
                  </h3>
                  <p className="text-sm leading-5 text-gray-500">
                    Eco-friendly cleaning and fuel-saving solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div

                className="pointer-events-none absolute -inset-4 translate-x-4 translate-y-4 rounded-lg border border-signal-500-20"
              ></div>
              <img

                className="relative w-full rounded-lg grayscale shadow-2xl transition duration-700 hover:grayscale-0"
                src="https://images.unsplash.com/photo-1566835266472-351119b4b45d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"
              />
              <div

                className="absolute bottom-8 left-8 max-w-xs rounded-sm bg-marine-800 p-6 shadow-lg"
              >
                <div className="mb-2 flex items-center gap-3">
                  <svg

                    className="text-signal-500"
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
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="font-bold">
                    Dubai Maritime City
                  </span>
                </div>
                <p className="text-xs leading-4 text-gray-400">
                  Strategic Hub for UAE &amp; Global Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section

        className="bg-marine-800 py-24"
        id="brands"
      >
        <div className="mx-auto px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2

              className="mb-4 font-display text-4xl font-bold leading-10"
            >
              Authorized Representation
            </h2>
            <p className="text-gray-400">
              ANVA Marine proudly represents and supports leading global OEMs, bringing
              factory-level precision to local waters.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div

              className="group flex flex-col items-center justify-center rounded-sm border border-white/5 bg-marine-900 p-8 transition-colors hover:border-signal-500-50"
            >
              <span

                className="font-display text-xl font-bold leading-7 transition-colors group-hover:text-signal-500"
              >
                MARIDIS
              </span>
              <span className="mt-2 text-xs leading-4 text-gray-500">
                Engine Diagnostics
              </span>
            </div>
            <div

              className="group flex flex-col items-center justify-center rounded-sm border border-white/5 bg-marine-900 p-8 transition-colors hover:border-signal-500-50"
            >
              <span

                className="font-display text-xl font-bold leading-7 transition-colors group-hover:text-signal-500"
              >
                Rexroth
              </span>
              <span className="mt-2 text-xs leading-4 text-gray-500">
                Bosch Hydraulics
              </span>
            </div>
            <div

              className="group flex flex-col items-center justify-center rounded-sm border border-white/5 bg-marine-900 p-8 transition-colors hover:border-signal-500-50"
            >
              <span

                className="font-display text-xl font-bold leading-7 transition-colors group-hover:text-signal-500"
              >
                HYDAC
              </span>
              <span className="mt-2 text-xs leading-4 text-gray-500">
                Fluid Control
              </span>
            </div>
            <div

              className="group flex flex-col items-center justify-center rounded-sm border border-white/5 bg-marine-900 p-8 transition-colors hover:border-signal-500-50"
            >
              <span

                className="font-display text-xl font-bold leading-7 transition-colors group-hover:text-signal-500"
              >
                Kockums
              </span>
              <span className="mt-2 text-xs leading-4 text-gray-500">
                Signaling Systems
              </span>
            </div>
            <div

              className="group flex flex-col items-center justify-center rounded-sm border border-white/5 bg-marine-900 p-8 transition-colors hover:border-signal-500-50"
            >
              <span

                className="font-display text-xl font-bold leading-7 transition-colors group-hover:text-signal-500"
              >
                Loadmaster
              </span>
              <span className="mt-2 text-xs leading-4 text-gray-500">
                Tank Gauging
              </span>
            </div>
            <div

              className="group flex flex-col items-center justify-center rounded-sm border border-white/5 bg-marine-900 p-8 transition-colors hover:border-signal-500-50"
            >
              <span

                className="font-display text-xl font-bold leading-7 transition-colors group-hover:text-signal-500"
              >
                Polarjet
              </span>
              <span className="mt-2 text-xs leading-4 text-gray-500">
                Tank Cleaning
              </span>
            </div>
            <div

              className="group flex flex-col items-center justify-center rounded-sm border border-white/5 bg-marine-900 p-8 transition-colors hover:border-signal-500-50"
            >
              <span

                className="font-display text-xl font-bold leading-7 transition-colors group-hover:text-signal-500"
              >
                Subhadra
              </span>
              <span className="mt-2 text-xs leading-4 text-gray-500">
                Propulsion
              </span>
            </div>
            <div

              className="group flex flex-col items-center justify-center rounded-sm border border-white/5 bg-marine-900 p-8 transition-colors hover:border-signal-500-50"
            >
              <span

                className="font-display text-xl font-bold leading-7 transition-colors group-hover:text-signal-500"
              >
                ICCP/MGPS
              </span>
              <span className="mt-2 text-xs leading-4 text-gray-500">
                Cathodic Protection
              </span>
            </div>
          </div>
        </div>
      </section>
      <section

        className="bg-white py-20 text-marine-900"
        id="quality"
      >
        <div className="mx-auto px-6">
          <div

            className="flex flex-col items-center justify-between gap-12 md:flex-row"
          >
            <div className="max-w-2xl">
              <h2

                className="mb-6 font-display text-4xl font-bold leading-10"
              >
                Certified Quality &amp; Compliance
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                Quality is not a department; it's our doctrine. ANVA Marine adheres to
                the strictest international standards, ensuring that every project
                meets IMO/SOLAS regulations and exceeds client expectations. We are
                committed to operational safety and environmental stewardship.
              </p>
              <div className="flex flex-wrap gap-4">
                <div

                  className="flex items-center gap-3 rounded-full bg-gray-100 px-5 py-3"
                >
                  <svg

                    className="h-5 w-5 text-green-600"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm font-bold leading-5">
                    ISO 9001:2015
                  </span>
                </div>
                <div

                  className="flex items-center gap-3 rounded-full bg-gray-100 px-5 py-3"
                >
                  <svg

                    className="h-5 w-5 text-green-600"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm font-bold leading-5">
                    ISO 14001:2015
                  </span>
                </div>
                <div

                  className="flex items-center gap-3 rounded-full bg-gray-100 px-5 py-3"
                >
                  <svg

                    className="h-5 w-5 text-green-600"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm font-bold leading-5">
                    ISO 45001:2018
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div

                className="flex h-44 w-32 flex-col items-center justify-center rounded border border-gray-200 bg-white p-4 shadow-lg"
              >
                <div

                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"
                >
                  <svg

                    className="text-marine-900"
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
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                </div>
                <div className="mb-2 h-2 w-16 rounded bg-gray-200"></div>
                <div className="h-2 w-10 rounded bg-gray-200"></div>
              </div>
              <div

                className="mt-[-24px] flex h-44 w-32 flex-col items-center justify-center rounded border border-gray-200 bg-white p-4 shadow-lg"
              >
                <div

                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"
                >
                  <svg

                    className="text-marine-900"
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="mb-2 h-2 w-16 rounded bg-gray-200"></div>
                <div className="h-2 w-10 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section

        className="relative bg-marine-900 py-24"
        id="rfq"
      >
        <div className="relative z-10 mx-auto px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="">
              <h2

                className="mb-6 font-display text-4xl font-bold leading-10"
              >
                Request a Quotation
              </h2>
              <p className="mb-8 text-gray-400">
                Direct gateway for clients and suppliers. We guarantee a response
                within one business day.
              </p>
              <div className="mb-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div

                    className="rounded-sm bg-marine-800 p-3"
                  >
                    <svg

                      className="text-signal-500"
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="">
                    <h4 className="font-bold text-white">
                      Office Address
                    </h4>
                    <p className="text-sm leading-5 text-gray-400">
                      F1B-W228, Dubai Maritime City, Dubai, UAE.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div

                    className="rounded-sm bg-marine-800 p-3"
                  >
                    <svg

                      className="text-signal-500"
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
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                  </div>
                  <div className="">
                    <h4 className="font-bold text-white">
                      Phone
                    </h4>
                    <p className="text-sm leading-5 text-gray-400">
                      +971 52 356 7890 | +971 58 535 3890
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div

                    className="rounded-sm bg-marine-800 p-3"
                  >
                    <svg

                      className="text-signal-500"
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
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="">
                    <h4 className="font-bold text-white">
                      WhatsApp Priority
                    </h4>
                    <a

                      className="text-sm leading-5 text-signal-500 hover:underline"
                      href="#"
                    >
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <form

              className="space-y-4 rounded-sm border border-white/5 bg-marine-800 p-8"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Name
                  </label>
                  <input

                    className="w-full rounded-sm border border-white/10 bg-marine-900 p-3 text-white transition-colors focus:border-signal-500 focus:outline-none"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Company
                  </label>
                  <input

                    className="w-full rounded-sm border border-white/10 bg-marine-900 p-3 text-white transition-colors focus:border-signal-500 focus:outline-none"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Email
                  </label>
                  <input

                    className="w-full rounded-sm border border-white/10 bg-marine-900 p-3 text-white transition-colors focus:border-signal-500 focus:outline-none"
                    type="email"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Phone
                  </label>
                  <input

                    className="w-full rounded-sm border border-white/10 bg-marine-900 p-3 text-white transition-colors focus:border-signal-500 focus:outline-none"
                    type="tel"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Vessel Name
                  </label>
                  <input

                    className="w-full rounded-sm border border-white/10 bg-marine-900 p-3 text-white transition-colors focus:border-signal-500 focus:outline-none"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Port/Location
                  </label>
                  <input

                    className="w-full rounded-sm border border-white/10 bg-marine-900 p-3 text-white transition-colors focus:border-signal-500 focus:outline-none"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">
                  Message / Scope
                </label>
                <textarea

                  className="w-full rounded-sm border border-white/10 bg-marine-900 p-3 text-white transition-colors focus:border-signal-500 focus:outline-none"
                  rows={4}
                ></textarea>
              </div>
              <button

                className="w-full rounded-sm bg-signal-500 py-4 font-bold text-marine-900 transition-colors hover:bg-signal-600"
                type="submit"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto px-6">
          <div

            className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center"
          >
            <svg

              className="mx-auto mb-4 h-12 w-12 text-gray-400"
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
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <h3

              className="mb-2 font-display text-2xl font-bold text-marine-900"
            >
              eCommerce Store Coming Soon
            </h3>
            <p

              className="mx-auto mb-6 max-w-md text-gray-500"
            >
              Direct purchase of Hydraulics, Filters, Valves, and Sensors. Search by
              part number with live stock integration.
            </p>
            <span

              className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-gray-600"
            >
              Under Development
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
