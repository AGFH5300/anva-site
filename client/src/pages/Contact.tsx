import { Container, Section, SectionHeading, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-500 transition focus:border-signal-500 focus:outline-none focus:ring-2 focus:ring-signal-500/20";

function Contact() {
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <SectionHeading
            eyebrow="Contact / RFQ"
            title="Request marine service, supply, or technical support"
            description="Send your requirement and ANVA will respond with practical next steps for urgent and planned requirements."
          />
        </Container>
      </section>

      <Section className="bg-slate-100/95 py-12 sm:py-14 lg:py-16" id="rfq">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SurfaceCard className="order-2 border-slate-200 bg-white shadow-[0_12px_30px_rgba(8,14,27,0.12)] lg:order-1">
            <h2 className="text-2xl font-semibold text-marine-900">What to include</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Vessel name / type and current location</li>
              <li>• Service scope or spare part references</li>
              <li>• Required attendance / delivery timeline</li>
              <li>• Any technical photos, model numbers, or documents</li>
            </ul>
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
              <p className="font-semibold text-marine-900">ANVA Marine Office</p>
              <p className="mt-2">F1B-W228, Dubai Maritime City, Dubai, UAE</p>
              <p className="mt-1">Telephone: +971 4 553 5699</p>
              <p className="mt-1">Mobile: +971 52 356 7890</p>
              <p className="mt-1">info@anva-group.com</p>
            </div>
          </SurfaceCard>

          <SurfaceCard className="order-1 border-slate-200 bg-white shadow-[0_12px_30px_rgba(8,14,27,0.12)] lg:order-2">
            <h2 className="text-2xl font-semibold text-marine-900">Send your RFQ</h2>
            <form className="mt-5 space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-600">Full Name</label>
                  <input className={inputClass} type="text" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-600">Company</label>
                  <input className={inputClass} type="text" placeholder="Company name" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-600">Work Email</label>
                  <input className={inputClass} type="email" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-600">Phone / WhatsApp</label>
                  <input className={inputClass} type="tel" placeholder="+971 ..." />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-600">Enquiry Type</label>
                <select className={inputClass}>
                  <option>Ship Repair Support</option>
                  <option>Marine Riding Squads</option>
                  <option>Project Coordination / Consultancy</option>
                  <option>Products / Brands</option>
                  <option>Marine Spares</option>
                  <option>Green Shipping Solutions</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-600">Requirement Details</label>
                <textarea className={`${inputClass} min-h-36`} placeholder="Describe the requirement, timeline, vessel details, and any part references." />
              </div>

              <button type="submit" className={primaryButtonClass}>Submit RFQ</button>
            </form>
          </SurfaceCard>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
