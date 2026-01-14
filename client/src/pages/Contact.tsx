function Contact() {
  return (
    <>
      <main>
        <section
          className="relative flex min-h-[70vh] w-full items-center overflow-hidden border-b border-[var(--colors-marine-700)]"
          id="hero"
        >
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full object-cover object-center opacity-40"
              src="https://images.unsplash.com/photo-1558509355-6545199859f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--colors-marine-900)] via-[var(--colors-marine-900-90)] to-[var(--colors-marine-900-40)]"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMzAsIDQ1LCA3NCwgMC4zKSIvPjwvc3ZnPg==')] opacity-30"></div>
          </div>
          <div className="relative z-10 mx-auto px-[var(--spacing-6)] pt-[var(--spacing-20)]">
            <div className="max-w-[896px]">
              <div className="mb-[var(--spacing-6)] flex items-center gap-[var(--spacing-3)]">
                <div className="h-px w-[var(--spacing-12)] bg-[var(--colors-signal-500)]"></div>
                <span className="font-[var(--fontFamily-display)] text-[var(--fontSize-sm)] font-[var(--fontWeight-semibold)] uppercase tracking-[0.1em] text-[var(--colors-signal-500)]">
                  Global Contact
                </span>
              </div>
              <h1 className="mb-[var(--spacing-6)] whitespace-pre-wrap font-[var(--fontFamily-display)] text-[var(--fontSize-5xl)] font-[var(--fontWeight-bold)] leading-[1.25] text-[var(--colors-white)] md:text-[var(--fontSize-7xl)]">
                Connect with Marine Mastery
              </h1>
              <p className="mb-[var(--spacing-10)] max-w-[672px] text-[var(--fontSize-xl)] font-[var(--fontWeight-light)] leading-[1.625] text-[var(--colors-gray-400)]">
                Your gateway to unparalleled marine engineering and offshore solutions.
                We operate where the ocean is deepest and the stakes are highest.
              </p>
            </div>
          </div>
        </section>
        <section className="relative bg-[var(--colors-marine-900)] py-[var(--spacing-24)]">
          <div className="mx-auto px-[var(--spacing-6)]">
            <div className="grid grid-cols-1 gap-[var(--spacing-16)] md:grid-cols-12">
              <div className="flex flex-col justify-between md:col-span-4">
                <div>
                  <h2 className="mb-[var(--spacing-6)] font-[var(--fontFamily-display)] text-[var(--fontSize-3xl)] font-[var(--fontWeight-semibold)] text-[var(--colors-white)]">
                    Initiate Protocol
                  </h2>
                  <p className="mb-[var(--spacing-8)] leading-[1.625] text-[var(--colors-gray-400)]">
                    Use the secure channel to submit detailed project requirements. Our
                    technical procurement team analyzes all specifications within 24
                    hours.
                  </p>
                  <ul className="space-y-[16px]">
                    {[
                      "Encrypted Transmission",
                      "Direct Engineering Review",
                      "Priority B2B Support",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-[var(--spacing-3)] text-[var(--fontSize-sm)]"
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
                          className="h-[var(--spacing-5)] w-[var(--spacing-5)] text-[var(--colors-signal-500)]"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="relative overflow-hidden border border-[var(--colors-marine-700)] bg-[var(--colors-marine-800)] p-[var(--spacing-8)] md:p-[var(--spacing-12)]">
                  <div className="absolute right-0 top-0 h-[var(--spacing-20)] w-[var(--spacing-20)] border-r-2 border-t-2 border-[var(--colors-signal-500-20)]"></div>
                  <form className="space-y-[32px]">
                    <div className="grid grid-cols-1 gap-[var(--spacing-8)] md:grid-cols-2">
                      <div>
                        <label className="mb-[var(--spacing-2)] block font-[var(--fontFamily-display)] text-[var(--fontSize-xs)] uppercase tracking-[0.05em] text-[var(--colors-gray-400)]">
                          Full Name
                        </label>
                        <input
                          className="w-full border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] px-[var(--spacing-4)] py-[var(--spacing-3)] text-[var(--colors-white)] transition-colors duration-300 focus:border-[var(--colors-signal-500)] focus:outline-none"
                          type="text"
                          placeholder="E.g. Jonathan Smith"
                        />
                      </div>
                      <div>
                        <label className="mb-[var(--spacing-2)] block font-[var(--fontFamily-display)] text-[var(--fontSize-xs)] uppercase tracking-[0.05em] text-[var(--colors-gray-400)]">
                          Company Designation
                        </label>
                        <input
                          className="w-full border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] px-[var(--spacing-4)] py-[var(--spacing-3)] text-[var(--colors-white)] transition-colors duration-300 focus:border-[var(--colors-signal-500)] focus:outline-none"
                          type="text"
                          placeholder="E.g. Lead Engineer, Apex Corp"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-[var(--spacing-8)] md:grid-cols-2">
                      <div>
                        <label className="mb-[var(--spacing-2)] block font-[var(--fontFamily-display)] text-[var(--fontSize-xs)] uppercase tracking-[0.05em] text-[var(--colors-gray-400)]">
                          Corporate Email
                        </label>
                        <input
                          className="w-full border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] px-[var(--spacing-4)] py-[var(--spacing-3)] text-[var(--colors-white)] transition-colors duration-300 focus:border-[var(--colors-signal-500)] focus:outline-none"
                          type="email"
                          placeholder="name@company.com"
                        />
                      </div>
                      <div>
                        <label className="mb-[var(--spacing-2)] block font-[var(--fontFamily-display)] text-[var(--fontSize-xs)] uppercase tracking-[0.05em] text-[var(--colors-gray-400)]">
                          Direct Phone
                        </label>
                        <input
                          className="w-full border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] px-[var(--spacing-4)] py-[var(--spacing-3)] text-[var(--colors-white)] transition-colors duration-300 focus:border-[var(--colors-signal-500)] focus:outline-none"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-[var(--spacing-2)] block font-[var(--fontFamily-display)] text-[var(--fontSize-xs)] uppercase tracking-[0.05em] text-[var(--colors-gray-400)]">
                        Inquiry Classification
                      </label>
                      <div className="relative">
                        <select className="w-full appearance-none border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] px-[var(--spacing-4)] py-[var(--spacing-3)] text-[var(--colors-white)] transition-colors duration-300 focus:border-[var(--colors-signal-500)] focus:outline-none">
                          <option>Technical Sales &amp; Procurement</option>
                          <option>Offshore Support Services</option>
                          <option>Strategic Partnership</option>
                          <option>Engineering Career Opportunities</option>
                        </select>
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
                          className="pointer-events-none absolute right-[var(--spacing-4)] top-1/2 h-[var(--spacing-4)] w-[var(--spacing-4)] -translate-y-1/2 text-[var(--colors-gray-400)]"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <label className="mb-[var(--spacing-2)] block font-[var(--fontFamily-display)] text-[var(--fontSize-xs)] uppercase tracking-[0.05em] text-[var(--colors-gray-400)]">
                        Project Specifications
                      </label>
                      <textarea
                        className="w-full border border-[var(--colors-white-10)] bg-[var(--colors-marine-900)] px-[var(--spacing-4)] py-[var(--spacing-3)] text-[var(--colors-white)] transition-colors duration-300 focus:border-[var(--colors-signal-500)] focus:outline-none"
                        rows={4}
                        placeholder="Describe technical requirements, vessel types, or operational scope..."
                      ></textarea>
                    </div>
                    <div className="pt-[var(--spacing-4)]">
                      <button
                        className="flex w-full items-center justify-center gap-[var(--spacing-3)] bg-[var(--colors-signal-600)] px-[var(--spacing-10)] py-[var(--spacing-4)] font-[var(--fontWeight-semibold)] uppercase tracking-[0.05em] text-[var(--colors-white)] transition-all duration-150 hover:bg-[var(--colors-signal-500)] md:w-auto"
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
                          className="h-[var(--spacing-5)] w-[var(--spacing-5)]"
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
        <section className="relative overflow-hidden border-y border-[var(--colors-marine-700)] bg-[var(--colors-marine-800)] py-[var(--spacing-24)]">
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#64748B_1px,transparent_1px)] [background-size:40px_40px]"></div>
          <div className="relative z-10 mx-auto px-[var(--spacing-6)]">
            <div className="mx-auto mb-[var(--spacing-16)] max-w-[768px] text-center">
              <h2 className="mb-[var(--spacing-4)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                Our Global Footprint
              </h2>
              <p className="text-[var(--colors-gray-400)]">
                Operational hubs strategically positioned for rapid deployment to major
                offshore zones.
              </p>
            </div>
            <div className="relative w-full overflow-hidden border border-[var(--colors-marine-900)] bg-[var(--colors-marine-900)] shadow-[0_25px_50px_-12px_var(--colors-black-25)] aspect-[16/9] md:aspect-[2/1]">
              <div className="absolute inset-0 opacity-20">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 1000 500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M150,150 Q180,100 250,120 T350,180 T500,150 T650,180 T800,150 T900,200"
                    stroke="none"
                    fill="#2A3F66"
                  ></path>
                  <path
                    d="M50,100 L150,100 L150,300 L50,300 Z"
                    fill="#1E2D4A"
                    opacity="0.5"
                  ></path>
                  <path
                    d="M400,80 L600,80 L600,250 L400,250 Z"
                    fill="#1E2D4A"
                    opacity="0.5"
                  ></path>
                  <path
                    d="M700,100 L900,100 L900,300 L700,300 Z"
                    fill="#1E2D4A"
                    opacity="0.5"
                  ></path>
                </svg>
              </div>
              <div className="absolute inset-0" id="map-overlay">
                <div
                  className="absolute left-[20%] top-[35%] cursor-pointer"
                  data-location="Houston Hub"
                  data-details="North American Operations HQ\n+1 713 555 0199"
                >
                  <div className="h-[var(--spacing-3)] w-[var(--spacing-3)] animate-pulse rounded-[var(--borderRadius-full)] bg-[var(--colors-signal-500)]"></div>
                  <div className="absolute inset-[-8px] h-[var(--spacing-7)] w-[var(--spacing-7)] animate-ping rounded-[var(--borderRadius-full)] border border-[var(--colors-signal-500-30)]"></div>
                </div>
                <div
                  className="absolute left-[48%] top-[28%] cursor-pointer"
                  data-location="Rotterdam Port"
                  data-details="European Logistics Center\n+31 10 555 0122"
                >
                  <div className="h-[var(--spacing-3)] w-[var(--spacing-3)] rounded-[var(--borderRadius-full)] bg-[var(--colors-white)]"></div>
                </div>
                <div
                  className="absolute left-[78%] top-[55%] cursor-pointer"
                  data-location="Singapore Tech"
                  data-details="APAC Engineering Division\n+65 6 555 0188"
                >
                  <div className="h-[var(--spacing-3)] w-[var(--spacing-3)] rounded-[var(--borderRadius-full)] bg-[var(--colors-white)]"></div>
                </div>
                <div
                  className="pointer-events-none absolute bottom-[var(--spacing-8)] left-[var(--spacing-8)] min-w-[240px] translate-y-[16px] border-l-4 border-[var(--colors-signal-500)] bg-[var(--colors-marine-800-90)] p-[var(--spacing-6)] text-left opacity-100 backdrop-blur-[12px] transition-all duration-150"
                  id="map-card"
                >
                  <h3
                    className="mb-[var(--spacing-1)] font-[var(--fontFamily-display)] text-[var(--fontSize-lg)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]"
                    id="map-card-title"
                  >
                    Select a Region
                  </h3>
                  <p
                    className="text-[var(--fontSize-sm)] font-[var(--fontWeight-light)] text-[var(--colors-gray-400)]"
                    id="map-card-details"
                  >
                    Interactive operational data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[var(--colors-marine-900)] py-[var(--spacing-24)]">
          <div className="mx-auto px-[var(--spacing-6)]">
            <div className="mb-[var(--spacing-16)] flex flex-col items-end justify-between gap-[var(--spacing-8)] border-b border-[var(--colors-marine-800)] pb-[var(--spacing-8)] md:flex-row">
              <div className="max-w-[672px]">
                <h2 className="mb-[var(--spacing-2)] font-[var(--fontFamily-display)] text-[var(--fontSize-3xl)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                  Direct Lines to Expertise
                </h2>
                <p className="text-[var(--colors-gray-400)]">
                  Bypass the queue. Connect directly with department heads.
                </p>
              </div>
              <div className="hidden md:block">
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
                  className="h-[var(--spacing-12)] w-[var(--spacing-12)] text-[var(--colors-marine-700)]"
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
            <div className="grid grid-cols-1 gap-[var(--spacing-8)] md:grid-cols-3">
              <div className="group border border-[var(--colors-marine-700)] bg-[var(--colors-marine-800-50)] p-[var(--spacing-8)] transition-colors duration-300 hover:border-[var(--colors-signal-500)]">
                <div className="mb-[var(--spacing-6)] flex h-[var(--spacing-12)] w-[var(--spacing-12)] items-center justify-center border border-[var(--colors-marine-900)] bg-[var(--colors-marine-900)] transition-colors duration-150 group-hover:border-[var(--colors-signal-500-50)]">
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
                    className="h-[var(--spacing-5)] w-[var(--spacing-5)] text-[var(--colors-white)]"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </div>
                <h3 className="mb-[var(--spacing-4)] font-[var(--fontFamily-display)] text-[var(--fontSize-lg)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                  Voice Channels
                </h3>
                <ul className="space-y-[12px]">
                  <li className="flex items-center justify-between border-b border-[var(--colors-marine-700)] pb-[var(--spacing-2)] text-[var(--fontSize-sm)]">
                    <span className="text-[var(--colors-gray-400)]">Global Sales</span>
                    <span className="font-[var(--fontFamily-mono)] text-[var(--colors-white)]">
                      +1 800 555 0101
                    </span>
                  </li>
                  <li className="flex items-center justify-between border-b border-[var(--colors-marine-700)] pb-[var(--spacing-2)] text-[var(--fontSize-sm)]">
                    <span className="text-[var(--colors-gray-400)]">Tech Support</span>
                    <span className="font-[var(--fontFamily-mono)] text-[var(--colors-white)]">
                      +1 800 555 0102
                    </span>
                  </li>
                  <li className="flex items-center justify-between pt-[var(--spacing-1)] text-[var(--fontSize-sm)]">
                    <span className="text-[var(--colors-gray-400)]">Emergency (24/7)</span>
                    <span className="font-[var(--fontFamily-mono)] text-[var(--colors-signal-500)]">
                      +1 800 999 9111
                    </span>
                  </li>
                </ul>
              </div>
              <div className="group border border-[var(--colors-marine-700)] bg-[var(--colors-marine-800-50)] p-[var(--spacing-8)] transition-colors duration-300 hover:border-[var(--colors-signal-500)]">
                <div className="mb-[var(--spacing-6)] flex h-[var(--spacing-12)] w-[var(--spacing-12)] items-center justify-center border border-[var(--colors-marine-900)] bg-[var(--colors-marine-900)] transition-colors duration-150 group-hover:border-[var(--colors-signal-500-50)]">
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
                    className="h-[var(--spacing-5)] w-[var(--spacing-5)] text-[var(--colors-white)]"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="mb-[var(--spacing-4)] font-[var(--fontFamily-display)] text-[var(--fontSize-lg)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                  Digital Correspondence
                </h3>
                <ul className="space-y-[12px]">
                  <li className="flex flex-col border-b border-[var(--colors-marine-700)] pb-[var(--spacing-2)] text-[var(--fontSize-sm)]">
                    <span className="mb-[var(--spacing-1)] text-[var(--fontSize-xs)] uppercase tracking-[0.05em] text-[var(--colors-gray-400)]">
                      Project Inquiries
                    </span>
                    <a
                      className="text-[var(--colors-white)] transition-colors duration-150 hover:text-[var(--colors-signal-500)]"
                      href="#"
                    >
                      projects@anvamarine.com
                    </a>
                  </li>
                  <li className="flex flex-col border-b border-[var(--colors-marine-700)] pb-[var(--spacing-2)] text-[var(--fontSize-sm)]">
                    <span className="mb-[var(--spacing-1)] text-[var(--fontSize-xs)] uppercase tracking-[0.05em] text-[var(--colors-gray-400)]">
                      Media &amp; Press
                    </span>
                    <a
                      className="text-[var(--colors-white)] transition-colors duration-150 hover:text-[var(--colors-signal-500)]"
                      href="#"
                    >
                      press@anvamarine.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="group border border-[var(--colors-marine-700)] bg-[var(--colors-marine-800-50)] p-[var(--spacing-8)] transition-colors duration-300 hover:border-[var(--colors-signal-500)]">
                <div className="mb-[var(--spacing-6)] flex h-[var(--spacing-12)] w-[var(--spacing-12)] items-center justify-center border border-[var(--colors-marine-900)] bg-[var(--colors-marine-900)] transition-colors duration-150 group-hover:border-[var(--colors-signal-500-50)]">
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
                    className="h-[var(--spacing-5)] w-[var(--spacing-5)] text-[var(--colors-white)]"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="mb-[var(--spacing-4)] font-[var(--fontFamily-display)] text-[var(--fontSize-lg)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                  Global Headquarters
                </h3>
                <address className="text-[var(--fontSize-sm)] not-italic leading-[1.625] text-[var(--colors-gray-400)]">
                  <strong className="mb-[var(--spacing-1)] block text-[var(--colors-white)]">
                    ANVA Tower
                  </strong>
                  <span>Maritime District, Pier 42 3011 Rotterdam, Netherlands</span>
                  <a
                    className="mt-[var(--spacing-2)] inline-flex items-center gap-[var(--spacing-1)] text-[var(--colors-signal-500)] transition-colors duration-150 hover:text-[var(--colors-white)]"
                    href="#"
                  >
                    <span>Get Directions </span>
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
                      className="h-[var(--spacing-3)] w-[var(--spacing-3)]"
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
        <section className="relative bg-[var(--colors-marine-800)] py-[var(--spacing-24)]">
          <div className="mx-auto px-[var(--spacing-6)]">
            <h2 className="mb-[var(--spacing-12)] text-center font-[var(--fontFamily-display)] text-[var(--fontSize-3xl)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
              Tailored Connections
            </h2>
            <div className="grid grid-cols-1 gap-[var(--spacing-6)] md:grid-cols-3">
              {[
                {
                  title: "Request Technical Expert",
                  description:
                    "Consult with senior marine engineers for specialized project scoping.",
                  image:
                    "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop",
                  icon: (
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                  ),
                },
                {
                  title: "Partnership Opportunities",
                  description:
                    "Explore joint ventures, supply chain integration, and vendor enrollment.",
                  image:
                    "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop",
                  icon: (
                    <>
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </>
                  ),
                },
                {
                  title: "Career Inquiries",
                  description:
                    "Join the elite. View current openings for engineers and operators.",
                  image:
                    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop",
                  icon: (
                    <>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </>
                  ),
                },
              ].map((card) => (
                <a
                  key={card.title}
                  className="group relative block h-[var(--spacing-64)] overflow-hidden border border-[var(--colors-marine-700)] bg-[var(--colors-marine-900)] transition-all duration-500 hover:border-[var(--colors-signal-500)]"
                  href="#"
                >
                  <div className="absolute inset-0 z-10 bg-[var(--colors-marine-900-80)] transition-colors duration-150 group-hover:bg-[var(--colors-marine-900-60)]"></div>
                  <img
                    className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                    src={card.image}
                  />
                  <div className="relative z-20 flex h-full flex-col justify-end p-[var(--spacing-8)]">
                    <div className="mb-[var(--spacing-4)] flex h-[var(--spacing-10)] w-[var(--spacing-10)] translate-y-[16px] items-center justify-center bg-[var(--colors-signal-500)] text-[var(--colors-marine-900)] transition-all duration-500 group-hover:translate-y-0">
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
                        className="h-[var(--spacing-5)] w-[var(--spacing-5)]"
                      >
                        {card.icon}
                      </svg>
                    </div>
                    <h3 className="mb-[var(--spacing-2)] font-[var(--fontFamily-display)] text-[var(--fontSize-xl)] font-[var(--fontWeight-bold)] text-[var(--colors-white)] transition-transform duration-150 group-hover:-translate-y-2">
                      {card.title}
                    </h3>
                    <p className="text-[var(--fontSize-sm)] text-[var(--colors-gray-400)] transition-colors duration-150 group-hover:text-[var(--colors-white)]">
                      {card.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-[var(--colors-marine-800)] bg-[var(--colors-marine-900)] py-[var(--spacing-32)]">
          <div className="mx-auto px-[var(--spacing-6)]">
            <div className="flex flex-col items-center gap-[var(--spacing-16)] md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="mb-[var(--spacing-6)] inline-block rounded-[var(--borderRadius-full)] border border-[var(--colors-signal-500-30)] bg-[var(--colors-signal-500-10)] px-[var(--spacing-3)] py-[var(--spacing-1)] text-[var(--fontSize-xs)] font-[var(--fontWeight-semibold)] uppercase tracking-[0.1em] text-[var(--colors-signal-500)]">
                  Our Commitment
                </div>
                <h2 className="mb-[var(--spacing-8)] font-[var(--fontFamily-display)] text-[var(--fontSize-4xl)] font-[var(--fontWeight-bold)] leading-[1.25] text-[var(--colors-white)] md:text-[var(--fontSize-5xl)]">
                  <span>Committed to Your </span>
                  <span className="bg-gradient-to-r from-[var(--colors-signal-500)] to-[var(--colors-white)] bg-clip-text text-transparent">
                    Operational Success
                  </span>
                </h2>
                <p className="mb-[var(--spacing-8)] text-[var(--fontSize-lg)] leading-[1.625] text-[var(--colors-gray-400)]">
                  In the marine sector, downtime is not an option. Our global support
                  infrastructure ensures that expert assistance is never more than a
                  call away, regardless of your vessel's coordinates.
                </p>
                <div className="flex gap-[var(--spacing-8)]">
                  <div>
                    <p className="mb-[var(--spacing-1)] font-[var(--fontFamily-display)] text-[var(--fontSize-3xl)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                      24/7
                    </p>
                    <p className="text-[var(--fontSize-sm)] uppercase tracking-[0.025em] text-[var(--colors-gray-500)]">
                      Response Readiness
                    </p>
                  </div>
                  <div className="w-[var(--spacing-px)] bg-[var(--colors-marine-700)]"></div>
                  <div>
                    <p className="mb-[var(--spacing-1)] font-[var(--fontFamily-display)] text-[var(--fontSize-3xl)] font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                      98%
                    </p>
                    <p className="text-[var(--fontSize-sm)] uppercase tracking-[0.025em] text-[var(--colors-gray-500)]">
                      First-Call Resolution
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-1/2">
                <div className="relative border border-[var(--colors-marine-700)] bg-[var(--colors-marine-800)] p-[var(--spacing-8)]">
                  <div className="absolute left-[-24px] top-[-24px] text-[var(--colors-marine-700)]">
                    <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.067 14.929 15.513C15.537 14.959 16.487 14.681 17.779 14.681L19.929 14.681L19.929 10.932L17.616 10.932C16.578 10.932 15.729 10.635 15.068 10.042C14.407 9.449 14.077 8.529 14.077 7.283L14.077 2L22.017 2L22.017 12.283C22.017 14.939 21.077 17.066 19.197 18.663C17.737 19.904 15.934 20.683 13.787 21L14.017 21ZM2 21L2 18C2 16.896 2.304 16.067 2.912 15.513C3.52 14.959 4.47 14.681 5.762 14.681L7.912 14.681L7.912 10.932L5.599 10.932C4.561 10.932 3.712 10.635 3.051 10.042C2.39 9.449 2.06 8.529 2.06 7.283L2.06 2L10 2L10 12.283C10 14.939 9.06 17.066 7.18 18.663C5.72 19.904 3.917 20.683 1.77 21L2 21Z"></path>
                    </svg>
                  </div>
                  <p className="relative z-10 mb-[var(--spacing-6)] text-[var(--fontSize-xl)] italic text-[var(--colors-gray-300)]">
                    "ANVA's technical team didn't just troubleshoot our hydraulic
                    failure; they re-engineered the fail-safe protocol remotely, saving
                    us three weeks of dry-dock time."
                  </p>
                  <div className="flex items-center gap-[var(--spacing-4)]">
                    <div className="h-[var(--spacing-12)] w-[var(--spacing-12)] overflow-hidden rounded-[var(--borderRadius-full)]">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"
                      />
                    </div>
                    <div>
                      <p className="font-[var(--fontWeight-bold)] text-[var(--colors-white)]">
                        Marcus Thorn
                      </p>
                      <p className="text-[var(--fontSize-sm)] text-[var(--colors-signal-500)]">
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
    </>
  );
}

export default Contact;
