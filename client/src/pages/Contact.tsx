function Contact() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 pt-28 pb-16" id="hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-signal-500">Contact / RFQ</p>
          <h1 className="mb-4 font-display text-5xl font-bold">Request marine service, supply, or technical support</h1>
          <p className="max-w-4xl text-lg leading-8 text-gray-300">
            Send your requirement and ANVA will respond with practical next steps for urgent and
            planned requirements.
          </p>
        </div>
      </section>

      <section className="bg-marine-800-50 py-16" id="rfq">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-xl border border-white/10 bg-marine-900-60 p-7">
            <h2 className="mb-4 text-2xl font-semibold">What to include</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Vessel name / type and current location</li>
              <li>• Service scope or spare part references</li>
              <li>• Required attendance / delivery timeline</li>
              <li>• Any technical photos, model numbers, or documents</li>
            </ul>
            <div className="mt-8 border-t border-white/10 pt-6 text-gray-400">
              <p>Dubai Maritime City, Dubai, UAE</p>
              <p>+971 52 356 7890 | +971 58 535 3890</p>
              <p>info@anva-group.com</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-marine-900-60 p-7">
            <form className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-300">Full Name</label>
                  <input className="w-full rounded-sm border border-white/20 bg-marine-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-signal-500 focus:outline-none" type="text" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-300">Company</label>
                  <input className="w-full rounded-sm border border-white/20 bg-marine-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-signal-500 focus:outline-none" type="text" placeholder="Company name" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-300">Work Email</label>
                  <input className="w-full rounded-sm border border-white/20 bg-marine-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-signal-500 focus:outline-none" type="email" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-300">Phone / WhatsApp</label>
                  <input className="w-full rounded-sm border border-white/20 bg-marine-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-signal-500 focus:outline-none" type="tel" placeholder="+971 ..." />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">Enquiry Type</label>
                <select className="w-full rounded-sm border border-white/20 bg-marine-900 px-4 py-3 text-white focus:border-signal-500 focus:outline-none">
                  <option>Ship Repair Support</option>
                  <option>Marine Riding Squads</option>
                  <option>Project Coordination / Consultancy</option>
                  <option>Products / Brands</option>
                  <option>Marine Spares</option>
                  <option>Green Shipping Solutions</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">Requirement Details</label>
                <textarea className="min-h-36 w-full rounded-sm border border-white/20 bg-marine-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-signal-500 focus:outline-none" placeholder="Describe the requirement, timeline, vessel details, and any part references."></textarea>
              </div>

              <button type="submit" className="rounded-sm bg-signal-500 px-8 py-3 font-semibold text-marine-900 hover:bg-signal-600">
                Submit RFQ
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
