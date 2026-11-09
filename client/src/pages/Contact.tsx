import { useState, type FormEvent } from "react";
import { Container, Section, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

const RFQ_ENDPOINT = "https://mxdibxggmfdfdgcrzbqy.supabase.co/functions/v1/anva-website-rfq";
const productOptions = [
  { value: "", label: "General requirement" },
  { value: "bildal-airfield-lighting", label: "BILDAL airfield transformers / connectors" },
  { value: "power-rectifiers-semiconductors", label: "Rectifiers / power semiconductors" },
  { value: "welding-cables", label: "Welding cables" },
];
const inputClass = "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-500 transition focus:border-signal-500 focus:outline-none focus:ring-2 focus:ring-signal-500/20";

export default function Contact() {
  const initialProduct = typeof window === "undefined" ? "" : new URLSearchParams(window.location.search).get("product") || "";
  const chosenInitial = productOptions.some((item) => item.value === initialProduct) ? initialProduct : "";
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const value = (key: string) => String(fields.get(key) ?? "").trim();
    if (value("website")) return;
    const payload = {
      fullName: value("fullName"), company: value("company"),
      workEmail: value("workEmail"), phone: value("phone"),
      enquiryType: value("enquiryType"), requirement: value("requirement"),
      product_interest: value("product_interest"),
      source_page: window.location.pathname,
      agreed_to_contact: fields.get("agreed_to_contact") === "on",
      website: value("website"),
    };
    if (!payload.agreed_to_contact || payload.requirement.length < 10) {
      setErrorMessage("Please accept contact permission and describe your requirement in at least 10 characters.");
      setState("error");
      return;
    }
    setState("sending");
    setErrorMessage("");
    try {
      const response = await fetch(RFQ_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || "The submission service could not confirm receipt.");
      setState("sent");
      form.reset();
      const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
      if (Array.isArray(dataLayer)) {
        dataLayer.push({ event: "anva_rfq_submitted", enquiryType: payload.enquiryType });
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Submission unsuccessful. Please retry.");
      setState("error");
    }
  };

  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Contact / RFQ</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Request marine service, supply, or technical support</h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">Submit your requirement directly to ANVA Marine, without opening Gmail or Outlook.</p>
        </Container>
      </section>
      <Section className="bg-slate-100/95 py-12 sm:py-14 lg:py-16" id="rfq">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SurfaceCard className="order-2 border-slate-200 bg-white shadow-[0_12px_30px_rgba(8,14,27,0.12)] lg:order-1">
            <h2 className="text-2xl font-semibold text-marine-900">Helpful quotation details</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Vessel or project name and location, if applicable</li>
              <li>Maker, model, serial number, part reference and quantity</li>
              <li>Requested service scope, materials and required date</li>
              <li>Any technical photos or datasheets (send by reply if needed)</li>
            </ul>
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
              <p className="font-semibold text-marine-900">Advanced Nautical Ventures FZE</p>
              <p className="mt-2">F1B-W228, Dubai Maritime City, Dubai, UAE</p>
              <p className="mt-1">Tel: +971 4 553 5699</p>
              <p className="mt-1">Email: <a className="underline" href="mailto:info@anva-group.com">info@anva-group.com</a></p>
            </div>
          </SurfaceCard>
          <SurfaceCard className="order-1 border-slate-200 bg-white shadow-[0_12px_30px_rgba(8,14,27,0.12)] lg:order-2">
            <h2 className="text-2xl font-semibold text-marine-900">Send an enquiry directly</h2>
            {state === "sent" ? (
              <div role="status" className="mt-6 rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950">
                <h3 className="text-xl font-semibold">Thank you. Your enquiry has been received.</h3>
                <p className="mt-2">ANVA Marine can review the requirement and contact you at your work email. For urgent assistance call +971 4 553 5699.</p>
                <button type="button" className="mt-4 font-semibold underline" onClick={() => setState("idle")}>Send another enquiry</button>
              </div>
            ) : (
              <form className="mt-5 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div><label htmlFor="rfq-full-name" className="mb-2 block text-sm text-slate-600">Full Name</label><input className={inputClass} id="rfq-full-name" name="fullName" type="text" autoComplete="name" placeholder="Your name" required minLength={2} maxLength={120}/></div>
                  <div><label htmlFor="rfq-company" className="mb-2 block text-sm text-slate-600">Company</label><input className={inputClass} id="rfq-company" name="company" type="text" autoComplete="organization" placeholder="Company name" required minLength={2} maxLength={180}/></div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div><label htmlFor="rfq-email" className="mb-2 block text-sm text-slate-600">Work Email</label><input className={inputClass} id="rfq-email" name="workEmail" type="email" autoComplete="email" placeholder="name@company.com" required maxLength={254}/></div>
                  <div><label htmlFor="rfq-phone" className="mb-2 block text-sm text-slate-600">Phone / WhatsApp</label><input className={inputClass} id="rfq-phone" name="phone" type="tel" autoComplete="tel" placeholder="+971..." maxLength={64}/></div>
                </div>
                <div>
                  <label htmlFor="rfq-enquiry-type" className="mb-2 block text-sm text-slate-600">Enquiry type</label>
                  <select className={inputClass} id="rfq-enquiry-type" name="enquiryType" defaultValue={chosenInitial === "bildal-airfield-lighting" ? "BILDAL Transformers" : chosenInitial === "power-rectifiers-semiconductors" ? "Rectifier Components" : chosenInitial === "welding-cables" ? "Welding Cables" : "Ship Repair Support"}>
                    <option>Ship Repair Support</option><option>Marine Riding Squads</option><option>Project Coordination / Consultancy</option><option>Products / Brands</option><option>Marine Spares</option><option>Green Shipping Solutions</option><option>BILDAL Transformers</option><option>Rectifier Components</option><option>Welding Cables</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="rfq-product" className="mb-2 block text-sm text-slate-600">Product / service category (optional)</label>
                  <select id="rfq-product" name="product_interest" className={inputClass} defaultValue={chosenInitial}>
                    {productOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
                  </select>
                </div>
                <div><label htmlFor="rfq-requirement" className="mb-2 block text-sm text-slate-600">Requirement details</label>
                  <textarea className={`${inputClass} min-h-36`} id="rfq-requirement" name="requirement" placeholder="Describe your requirement, technical specifications, quantities and delivery or attendance deadline." required minLength={10} maxLength={1500}/>
                </div>
                <div className="sr-only" aria-hidden="true"><label htmlFor="rfq-web">Leave blank</label><input id="rfq-web" name="website" type="text" tabIndex={-1} autoComplete="off"/></div>
                <label className="flex items-start gap-3 text-sm text-slate-700"><input type="checkbox" name="agreed_to_contact" className="mt-1" required/> <span>I agree to ANVA Marine storing my enquiry and contacting me in response. See our <a className="underline" href="/privacy/">Privacy Notice</a>.</span></label>
                <button type="submit" className={primaryButtonClass} disabled={state === "sending"}>{state === "sending" ? "Submitting enquiry..." : "Submit RFQ to ANVA Marine"}</button>
                {state === "error" && <div role="alert" className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-900">We have not confirmed your enquiry: {errorMessage}. Please retry, or email <a href="mailto:info@anva-group.com" className="underline">info@anva-group.com</a>.</div>}
                <p className="text-sm text-slate-600">The form saves your request securely. It does not attach files yet; ANVA can request drawings or photos during follow-up.</p>
              </form>
            )}
          </SurfaceCard>
        </Container>
      </Section>
    </>
  );
}
