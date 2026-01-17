function Contact() {
  return (
    <>
      <div

        className="bg-marine-900 font-body text-gray-300 selection:bg-signal-500 selection:text-white"
      >
        <main className="">
          <section

            className="relative flex min-h-[70vh] w-full items-center overflow-hidden border-b border-marine-700"
            id="hero"
          >
            <div className="absolute inset-0 z-0">
              <img

                className="h-full w-full object-cover object-center opacity-40"
                src="https://images.unsplash.com/photo-1558509355-6545199859f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"
              />
              <div

                className="absolute inset-0 bg-gradient-to-r from-marine-900 via-marine-900-90 to-[rgba(11,18,33,0.4)]"
              ></div>
              <div

                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMzAsIDQ1LCA3NCwgMC4zKSIvPjwvc3ZnPg==')] opacity-30"
              ></div>
            </div>
          <div className="relative z-10 mx-auto px-6 pt-20">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-12 bg-signal-500"></div>
                <span

                  className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-signal-500"
                >
                  Global Contact
                </span>
              </div>
              <h1

                className="mb-6 whitespace-pre-wrap font-display text-5xl font-bold leading-tight text-white md:text-7xl"
              >
                Connect with Marine Mastery
              </h1>
              <p

                className="mb-10 max-w-2xl text-xl font-light leading-relaxed text-gray-400"
              >
                Your gateway to unparalleled marine engineering and offshore solutions.
                We operate where the ocean is deepest and the stakes are highest.
              </p>
            </div>
          </div>
        </section>
        <section className="relative bg-marine-900 py-24">
          <div className="mx-auto px-6">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="flex flex-col justify-between md:col-span-4">
                <div className="">
                  <h2

                    className="mb-6 font-display text-3xl font-semibold text-white"
                  >
                    Initiate Protocol
                  </h2>
                  <p className="mb-8 leading-relaxed text-gray-400">
                    Use the secure channel to submit detailed project requirements. Our
                    technical procurement team analyzes all specifications within 24
                    hours.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm">
                      <svg

                        className="h-5 w-5 text-signal-500"
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
                      <span>Encrypted Transmission</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <svg

                        className="h-5 w-5 text-signal-500"
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
                      <span>Direct Engineering Review</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <svg

                        className="h-5 w-5 text-signal-500"
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
                      <span>Priority B2B Support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-8">
                <div

                  className="relative overflow-hidden border border-marine-700 bg-marine-800 p-8 md:p-12"
                >
                  <div

                    className="absolute right-0 top-0 h-20 w-20 border-r-2 border-t-2 border-signal-500-20"
                  ></div>
                  <form className="space-y-8">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="">
                        <label

                          className="mb-2 block font-display text-xs uppercase tracking-[0.05em] text-gray-400"
                        >
                          Full Name
                        </label>
                        <input

                          className="w-full border border-marine-700 bg-marine-900 px-4 py-3 text-white transition duration-300 focus:border-signal-500 focus:outline-none"
                          type="text"
                          placeholder="E.g. Jonathan Smith"
                        />
                      </div>
                      <div className="">
                        <label

                          className="mb-2 block font-display text-xs uppercase tracking-[0.05em] text-gray-400"
                        >
                          Company Designation
                        </label>
                        <input

                          className="w-full border border-marine-700 bg-marine-900 px-4 py-3 text-white transition duration-300 focus:border-signal-500 focus:outline-none"
                          type="text"
                          placeholder="E.g. Lead Engineer, Apex Corp"
                        />
                      </div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="">
                        <label

                          className="mb-2 block font-display text-xs uppercase tracking-[0.05em] text-gray-400"
                        >
                          Corporate Email
                        </label>
                        <input

                          className="w-full border border-marine-700 bg-marine-900 px-4 py-3 text-white transition duration-300 focus:border-signal-500 focus:outline-none"
                          type="email"
                          placeholder="name@company.com"
                        />
                      </div>
                      <div className="">
                        <label

                          className="mb-2 block font-display text-xs uppercase tracking-[0.05em] text-gray-400"
                        >
                          Direct Phone
                        </label>
                        <input

                          className="w-full border border-marine-700 bg-marine-900 px-4 py-3 text-white transition duration-300 focus:border-signal-500 focus:outline-none"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label

                        className="mb-2 block font-display text-xs uppercase tracking-[0.05em] text-gray-400"
                      >
                        Inquiry Classification
                      </label>
                      <div className="relative">
                        <select

                          className="w-full appearance-none border border-marine-700 bg-marine-900 px-4 py-3 text-white transition duration-300 focus:border-signal-500 focus:outline-none"
                        >
                          <option>
                            Technical Sales &amp; Procurement
                          </option>
                          <option>Offshore Support Services</option>
                          <option>Strategic Partnership</option>
                          <option>
                            Engineering Career Opportunities
                          </option>
                        </select>
                        <svg

                          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
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
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="">
                      <label

                        className="mb-2 block font-display text-xs uppercase tracking-[0.05em] text-gray-400"
                      >
                        Project Specifications
                      </label>
                      <textarea

                        className="w-full border border-marine-700 bg-marine-900 px-4 py-3 text-white transition duration-300 focus:border-signal-500 focus:outline-none"
                        rows={4}
                        placeholder="Describe technical requirements, vessel types, or operational scope..."
                      ></textarea>
                    </div>
                    <div className="pt-4">
                      <button

                        className="flex w-full items-center justify-center gap-3 bg-signal-600 px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.05em] text-white transition duration-150 hover:bg-signal-500 md:w-auto"
                        type="submit"
                      >
                        <span>Submit Inquiry</span>
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
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section

          className="relative overflow-hidden border-y border-marine-700 bg-marine-800 py-24"
        >
          <div

            className="absolute inset-0 bg-[radial-gradient(#64748B_1px,transparent_1px)] opacity-10 [background-size:40px_40px]"
          ></div>
          <div className="relative z-10 mx-auto px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2

                className="mb-4 font-display text-4xl font-bold text-white"
              >
                Our Global Footprint
              </h2>
              <p className="text-gray-400">
                Operational hubs strategically positioned for rapid deployment to major
                offshore zones.
              </p>
            </div>
            <div

              className="relative w-full overflow-hidden border border-marine-700 bg-marine-900 shadow-2xl aspect-[16/9] md:aspect-[2/1]"
            >
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                           <path d='M150,150 Q180,100 250,120 T350,180 T500,150 T650,180 T800,150 T900,200' stroke='none' fill='#2A3F66'></path>
                           <path d='M50,100 L150,100 L150,300 L50,300 Z' fill='#1E2D4A' opacity='0.5'></path>
                           <path d='M400,80 L600,80 L600,250 L400,250 Z' fill='#1E2D4A' opacity='0.5'></path>
                           <path d='M700,100 L900,100 L900,300 L700,300 Z' fill='#1E2D4A' opacity='0.5'></path>
                        </svg>
              </div>
              <div className="absolute inset-0" id="map-overlay">
                <div

                  className="absolute left-[20%] top-[35%] cursor-pointer"
                  data-location="Houston Hub"
                  data-details="North American Operations HQ\n+1 713 555 0199"
                >
                  <div className="relative h-3 w-3 rounded-full bg-signal-500 animate-pulse"></div>
                  <div

                    className="absolute -inset-2 h-7 w-7 rounded-full border border-signal-500-30 animate-ping"
                  ></div>
                </div>
                <div

                  className="absolute left-[48%] top-[28%] cursor-pointer"
                  data-location="Rotterdam Port"
                  data-details="European Logistics Center\n+31 10 555 0122"
                >
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div

                  className="absolute left-[78%] top-[55%] cursor-pointer"
                  data-location="Singapore Tech"
                  data-details="APAC Engineering Division\n+65 6 555 0188"
                >
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div

                  className="pointer-events-none absolute bottom-8 left-8 min-w-[240px] translate-y-4 border-l-4 border-signal-500 bg-[rgba(19,31,51,0.9)] p-6 opacity-100 backdrop-blur-md transition-all"
                  id="map-card"
                >
                  <h3

                    className="mb-1 font-display text-lg font-bold text-white"
                    id="map-card-title"
                  >
                    Select a Region
                  </h3>
                  <p

                    className="text-sm font-light text-gray-400"
                    id="map-card-details"
                  >
                    Interactive operational data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-marine-900 py-24">
          <div className="mx-auto px-6">
            <div

              className="mb-16 flex flex-col items-start justify-between gap-6 border-b border-marine-800 pb-8 md:flex-row md:items-end"
            >
              <div className="max-w-2xl">
                <h2

                  className="mb-2 font-display text-3xl font-bold text-white"
                >
                  Direct Lines to Expertise
                </h2>
                <p className="text-gray-400">
                  Bypass the queue. Connect directly with department heads.
                </p>
              </div>
              <div className="hidden md:block">
                <svg

                  className="h-12 w-12 text-marine-700"
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
                  <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
                  <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
                  <circle cx="12" cy="9" r="2"></circle>
                  <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
                  <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
                  <path d="M9.5 18h5"></path>
                  <path d="m8 22 4-11 4 11"></path>
                </svg>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div

                className="group border border-marine-700 bg-marine-800-50 p-8 transition-colors duration-300 hover:border-signal-500"
              >
                <div

                  className="mb-6 flex h-12 w-12 items-center justify-center border border-marine-900 bg-marine-900 transition-colors duration-150 group-hover:border-signal-500-50"
                >
                  <svg

                    className="h-5 w-5 text-white"
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
                <h3 className="mb-4 font-display text-lg font-bold text-white">
                  Voice Channels
                </h3>
                <ul className="space-y-3">
                  <li

                    className="flex items-center justify-between border-b border-marine-700 pb-2 text-sm"
                  >
                    <span className="text-gray-400">
                      Global Sales
                    </span>
                    <span className="font-mono text-white">
                      +1 800 555 0101
                    </span>
                  </li>
                  <li

                    className="flex items-center justify-between border-b border-marine-700 pb-2 text-sm"
                  >
                    <span className="text-gray-400">
                      Tech Support
                    </span>
                    <span className="font-mono text-white">
                      +1 800 555 0102
                    </span>
                  </li>
                  <li

                    className="flex items-center justify-between border-b border-marine-700 pb-2 text-sm"
                  >
                    <span className="text-gray-400">
                      Emergency (24/7)
                    </span>
                    <span className="font-mono text-signal-500">
                      +1 800 999 9111
                    </span>
                  </li>
                </ul>
              </div>
              <div

                className="group border border-marine-700 bg-marine-800-50 p-8 transition-colors duration-300 hover:border-signal-500"
              >
                <div

                  className="mb-6 flex h-12 w-12 items-center justify-center border border-marine-900 bg-marine-900 transition-colors duration-150 group-hover:border-signal-500-50"
                >
                  <svg

                    className="h-5 w-5 text-white"
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
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="mb-4 font-display text-lg font-bold text-white">
                  Digital Correspondence
                </h3>
                <ul className="space-y-3">
                  <li className="">
                    <span

                      className="mb-1 block text-xs uppercase tracking-[0.05em] text-gray-400"
                    >
                      Project Inquiries
                    </span>
                    <a

                      className="text-white transition-colors duration-150 hover:text-signal-500"
                      href="#"
                    >
                      projects@anvamarine.com
                    </a>
                  </li>
                  <li className="">
                    <span

                      className="mb-1 block text-xs uppercase tracking-[0.05em] text-gray-400"
                    >
                      Media &amp; Press
                    </span>
                    <a

                      className="text-white transition-colors duration-150 hover:text-signal-500"
                      href="#"
                    >
                      press@anvamarine.com
                    </a>
                  </li>
                </ul>
              </div>
              <div

                className="group border border-marine-700 bg-marine-800-50 p-8 transition-colors duration-300 hover:border-signal-500"
              >
                <div

                  className="mb-6 flex h-12 w-12 items-center justify-center border border-marine-900 bg-marine-900 transition-colors duration-150 group-hover:border-signal-500-50"
                >
                  <svg

                    className="h-5 w-5 text-white"
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
                <h3 className="mb-4 font-display text-lg font-bold text-white">
                  Global Headquarters
                </h3>
                <address className="text-sm leading-relaxed text-gray-400 not-italic">
                  <strong className="mb-1 block text-white">
                    ANVA Tower
                  </strong>
                  <span>
                    Maritime District, Pier 42 3011 Rotterdam, Netherlands
                  </span>
                  <a

                    className="mt-2 inline-flex items-center gap-1 text-signal-500 transition-colors duration-150 hover:text-white"
                    href="#"
                  >
                    <span>Get Directions </span>
                    <svg

                      className="h-3 w-3"
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
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </address>
              </div>
            </div>
          </div>
        </section>
        <section className="relative bg-marine-800 py-24">
          <div className="mx-auto px-6">
            <h2

              className="mb-12 text-center font-display text-3xl font-bold text-white"
            >
              Tailored Connections
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <a

                className="group relative block h-64 overflow-hidden border border-marine-700 bg-marine-900 transition-all duration-500 hover:border-signal-500"
                href="#"
              >
                <div

                  className="absolute inset-0 z-10 bg-marine-900-80 transition-colors duration-150 group-hover:bg-marine-900-60"
                ></div>
                <img

                  className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"
                />
                <div className="relative z-20 flex h-full flex-col justify-end p-8">
                  <div

                    className="mb-4 flex h-10 w-10 translate-y-4 items-center justify-center bg-signal-500 text-marine-900 transition-all duration-500 group-hover:translate-y-0"
                  >
                    <svg

                      className="h-5 w-5"
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
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                    </svg>
                  </div>
                  <h3

                    className="mb-2 font-display text-xl font-bold text-white transition-transform duration-150 group-hover:-translate-y-2"
                  >
                    Request Technical Expert
                  </h3>
                  <p

                    className="text-sm text-gray-400 transition-colors duration-150 group-hover:text-white"
                  >
                    Consult with senior marine engineers for specialized project
                    scoping.
                  </p>
                </div>
              </a>
              <a

                className="group relative block h-64 overflow-hidden border border-marine-700 bg-marine-900 transition-all duration-500 hover:border-signal-500"
                href="#"
              >
                <div

                  className="absolute inset-0 z-10 bg-marine-900-80 transition-colors duration-150 group-hover:bg-marine-900-60"
                ></div>
                <img

                  className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"
                />
                <div className="relative z-20 flex h-full flex-col justify-end p-8">
                  <div

                    className="mb-4 flex h-10 w-10 translate-y-4 items-center justify-center bg-signal-500 text-marine-900 transition-all duration-500 group-hover:translate-y-0"
                  >
                    <svg

                      className="h-5 w-5"
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
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                  </div>
                  <h3

                    className="mb-2 font-display text-xl font-bold text-white transition-transform duration-150 group-hover:-translate-y-2"
                  >
                    Partnership Opportunities
                  </h3>
                  <p

                    className="text-sm text-gray-400 transition-colors duration-150 group-hover:text-white"
                  >
                    Explore joint ventures, supply chain integration, and vendor
                    enrollment.
                  </p>
                </div>
              </a>
              <a

                className="group relative block h-64 overflow-hidden border border-marine-700 bg-marine-900 transition-all duration-500 hover:border-signal-500"
                href="#"
              >
                <div

                  className="absolute inset-0 z-10 bg-marine-900-80 transition-colors duration-150 group-hover:bg-marine-900-60"
                ></div>
                <img

                  className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"
                />
                <div className="relative z-20 flex h-full flex-col justify-end p-8">
                  <div

                    className="mb-4 flex h-10 w-10 translate-y-4 items-center justify-center bg-signal-500 text-marine-900 transition-all duration-500 group-hover:translate-y-0"
                  >
                    <svg

                      className="h-5 w-5"
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3

                    className="mb-2 font-display text-xl font-bold text-white transition-transform duration-150 group-hover:-translate-y-2"
                  >
                    Career Inquiries
                  </h3>
                  <p

                    className="text-sm text-gray-400 transition-colors duration-150 group-hover:text-white"
                  >
                    Join the elite. View current openings for engineers and operators.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section

          className="border-t border-marine-800 bg-marine-900 py-32"
        >
          <div className="mx-auto px-6">
            <div className="flex flex-col items-center gap-16 md:flex-row">
              <div className="w-full md:w-1/2">
                <div

                  className="mb-6 inline-block rounded-full border border-signal-500-30 bg-signal-500-10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-signal-500"
                >
                  Our Commitment
                </div>
                <h2

                  className="mb-8 font-display text-4xl font-bold leading-tight text-white md:text-5xl"
                >
                  <span>Committed to Your </span>
                  <span

                    className="bg-gradient-to-r from-signal-500 to-white bg-clip-text text-transparent"
                  >
                    Operational Success
                  </span>
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-400">
                  In the marine sector, downtime is not an option. Our global support
                  infrastructure ensures that expert assistance is never more than a
                  call away, regardless of your vessel's coordinates.
                </p>
                <div className="flex gap-8">
                  <div className="">
                    <p

                      className="mb-1 font-display text-3xl font-bold text-white"
                    >
                      24/7
                    </p>
                    <p

                      className="text-sm uppercase tracking-wide text-gray-500"
                    >
                      Response Readiness
                    </p>
                  </div>
                  <div className="w-px bg-marine-700"></div>
                  <div className="">
                    <p

                      className="mb-1 font-display text-3xl font-bold text-white"
                    >
                      98%
                    </p>
                    <p

                      className="text-sm uppercase tracking-wide text-gray-500"
                    >
                      First-Call Resolution
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-1/2">
                <div

                  className="relative border border-marine-700 bg-marine-800 p-8"
                >
                  <div className="absolute -left-6 -top-6 text-marine-700">
                    <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.067 14.929 15.513C15.537 14.959 16.487 14.681 17.779 14.681L19.929 14.681L19.929 10.932L17.616 10.932C16.578 10.932 15.729 10.635 15.068 10.042C14.407 9.449 14.077 8.529 14.077 7.283L14.077 2L22.017 2L22.017 12.283C22.017 14.939 21.077 17.066 19.197 18.663C17.737 19.904 15.934 20.683 13.787 21L14.017 21ZM2 21L2 18C2 16.896 2.304 16.067 2.912 15.513C3.52 14.959 4.47 14.681 5.762 14.681L7.912 14.681L7.912 10.932L5.599 10.932C4.561 10.932 3.712 10.635 3.051 10.042C2.39 9.449 2.06 8.529 2.06 7.283L2.06 2L10 2L10 12.283C10 14.939 9.06 17.066 7.18 18.663C5.72 19.904 3.917 20.683 1.77 21L2 21Z"></path>
                    </svg>
                  </div>
                  <p className="relative z-10 mb-6 text-xl italic text-gray-300">
                    "ANVA's technical team didn't just troubleshoot our hydraulic
                    failure; they re-engineered the fail-safe protocol remotely, saving
                    us three weeks of dry-dock time."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <img

                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"
                      />
                    </div>
                    <div className="">
                      <p className="font-bold text-white">
                        Marcus Thorn
                      </p>
                      <p className="text-sm text-signal-500">
                        Fleet Director, Oceanic Heavy Lift
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>
    </>
  );
}

export default Contact;
