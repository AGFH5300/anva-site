import { useEffect, useRef, useState, type FormEvent } from "react";
import { Container, Section, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-500 transition focus:border-signal-500 focus:outline-none focus:ring-2 focus:ring-signal-500/20";

const API_BASE_URL = "https://anva-site-c5i4.onrender.com";

type RfqFields = {
  fullName: string;
  company: string;
  workEmail: string;
  phone: string;
  enquiryType: string;
  requirement: string;
  website: string;
};

const fromForm = (form: HTMLFormElement): RfqFields => {
  const data = new FormData(form);
  const read = (key: string) => String(data.get(key) ?? "").trim();
  return {
    fullName: read("fullName"),
    company: read("company"),
    workEmail: read("workEmail"),
    phone: read("phone"),
    enquiryType: read("enquiryType"),
    requirement: read("requirement"),
    website: read("website"),
  };
};

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const requestIdRef = useRef(crypto.randomUUID());
  const [deliveryStatus, setDeliveryStatus] = useState<"checking" | "ready" | "unavailable">("checking");
  const [sendStatus, setSendStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sendMessage, setSendMessage] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => { setDeliveryStatus("unavailable"); controller.abort(); }, 90000);
    fetch(API_BASE_URL + "/api/rfq/status", { signal: controller.signal })
      .then(async (response) => {
        const data: unknown = await response.json();
        const ready = response.ok && data !== null && typeof data === "object" &&
          "available" in data && data.available === true;
        if (!controller.signal.aborted) setDeliveryStatus(ready ? "ready" : "unavailable");
      })
      .catch(() => {
        if (!controller.signal.aborted) setDeliveryStatus("unavailable");
      })
      .finally(() => window.clearTimeout(timeout));
    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  const composeMessage = (fields: RfqFields) => [
    "Marine Service / Supply Request",
    "",
    "Name: " + fields.fullName,
    "Company: " + fields.company,
    "Email: " + fields.workEmail,
    "Phone / WhatsApp: " + (fields.phone || "Not provided"),
    "Enquiry type: " + fields.enquiryType,
    "",
    "Requirement details:",
    fields.requirement,
  ].join("\n");

  const openFallback = (client: "gmail" | "outlook") => {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    const fields = fromForm(form);
    const subject = "Marine RFQ: " + fields.enquiryType;
    const body = composeMessage(fields);
    const url = client === "gmail"
      ? "https://mail.google.com/mail/?view=cm&fs=1&to=info%40anva-group.com&su=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body)
      : "https://outlook.office.com/mail/deeplink/compose?to=info%40anva-group.com&subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSendEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (deliveryStatus !== "ready" || sendStatus === "sending") return;
    const form = event.currentTarget;
    const fields = fromForm(form);

    setSendStatus("sending");
    setSendMessage("");
    const controller = new AbortController();
    // Render free instances may take up to a minute to wake from idle.
    const timeout = window.setTimeout(() => controller.abort(), 95000);
    try {
      const response = await fetch(API_BASE_URL + "/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({ ...fields, requestId: requestIdRef.current }),
      });
      const payload: unknown = await response.json();
      const data = payload !== null && typeof payload === "object"
        ? payload as Record<string, unknown> : {};
      if (!response.ok || data.ok !== true || typeof data.reference !== "string") {
        throw new Error(typeof data.message === "string" ? data.message : "Unable to verify delivery.");
      }
      setReference(data.reference);
      setSendStatus("sent");
      requestIdRef.current = crypto.randomUUID();
      form.reset();
    } catch {
      // Preserve all fields; do not claim the enquiry was sent on timeout/error.
      setSendStatus("error");
      setSendMessage("Your enquiry could not be confirmed as sent. Please retry, or use the email alternative below.");
    } finally {
      window.clearTimeout(timeout);
    }
  };
  return (
    <>
      <section className="border-b border-white/10 bg-marine-900 py-16 sm:py-20" id="hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">Contact / RFQ</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Request marine service, supply, or technical support</h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">Send your requirement and ANVA will respond with practical next steps for urgent and planned requirements.</p>
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
              <p className="font-semibold text-marine-900">Advanced Nautical Ventures FZE (ANVA Marine)</p>
              <p className="mt-2">F1B-W228, Dubai Maritime City, Dubai, UAE</p>
              <p className="mt-1">Telephone: +971 4 553 5699</p>
              <p className="mt-1">Mobile: +971 52 356 7890</p>
              <p className="mt-1">info@anva-group.com</p>
            </div>
          </SurfaceCard>

          <SurfaceCard className="order-1 border-slate-200 bg-white shadow-[0_12px_30px_rgba(8,14,27,0.12)] lg:order-2">
            <h2 className="text-2xl font-semibold text-marine-900">Send your marine enquiry</h2>
            <form ref={formRef} className="mt-5 space-y-5" onSubmit={handleSendEnquiry} onChange={() => { if (sendStatus === "sent") setSendStatus("idle"); }}>
              <div className="absolute left-[-10000px]" aria-hidden="true"><input type="text" name="website" autoComplete="off" tabIndex={-1} /></div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="rfq-full-name" className="mb-2 block text-sm text-slate-600">Full Name</label>
                  <input className={inputClass} id="rfq-full-name" name="fullName" type="text" autoComplete="name" placeholder="Your name" required maxLength={120} />
                </div>
                <div>
                  <label htmlFor="rfq-company" className="mb-2 block text-sm text-slate-600">Company</label>
                  <input className={inputClass} id="rfq-company" name="company" type="text" autoComplete="organization" placeholder="Company name" required maxLength={180} />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="rfq-email" className="mb-2 block text-sm text-slate-600">Work Email</label>
                  <input className={inputClass} id="rfq-email" name="workEmail" type="email" autoComplete="email" placeholder="name@company.com" required maxLength={254} />
                </div>
                <div>
                  <label htmlFor="rfq-phone" className="mb-2 block text-sm text-slate-600">Phone / WhatsApp</label>
                  <input className={inputClass} id="rfq-phone" name="phone" type="tel" autoComplete="tel" placeholder="+971 ..." maxLength={64} />
                </div>
              </div>

              <div>
                <label htmlFor="rfq-enquiry-type" className="mb-2 block text-sm text-slate-600">Enquiry Type</label>
                <select className={inputClass} id="rfq-enquiry-type" name="enquiryType">
                  <option>Ship Repair Support</option>
                  <option>Marine Riding Squads</option>
                  <option>Project Coordination / Consultancy</option>
                  <option>Products / Brands</option>
                  <option>Marine Spares</option>
                  <option>Green Shipping Solutions</option>
                </select>
              </div>

              <div>
                <label htmlFor="rfq-requirement" className="mb-2 block text-sm text-slate-600">Requirement Details</label>
                <textarea className={`${inputClass} min-h-36`} id="rfq-requirement" name="requirement" placeholder="Describe the requirement, timeline, vessel details, and any part references." required maxLength={1500} />
              </div>

              <button
                type="submit"
                className={primaryButtonClass}
                disabled={deliveryStatus !== "ready" || sendStatus === "sending"}
                aria-busy={sendStatus === "sending"}
              >
                {sendStatus === "sending" ? "Sending enquiry..." : "Send Enquiry"}
              </button>

              {deliveryStatus === "checking" && (
                <p role="status" className="text-sm text-slate-600">
                  Connecting to the secure enquiry service. You can complete the form while it connects.
                </p>
              )}
              {deliveryStatus === "unavailable" && (
                <p role="alert" className="text-sm text-amber-800">
                  Direct website sending is not available yet. Please use one of the email alternatives below.
                </p>
              )}
              {sendStatus === "sent" && (
                <div role="status" className="rounded-md border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
                  Your enquiry has been accepted for email delivery to ANVA Marine.
                  <span className="mt-1 block">Reference: {reference}</span>
                </div>
              )}
              {sendStatus === "error" && (
                <p role="alert" className="rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                  {sendMessage}
                </p>
              )}
              <p className="text-sm text-slate-600">
                We send your enquiry to info@anva-group.com. An external email-delivery service processes
                the details for delivery. Please do not include passwords or highly confidential information.
              </p>
              {(deliveryStatus !== "ready" || sendStatus === "error") && (
                <div className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
                  <p className="font-semibold">Alternative email options</p>
                  <p className="mt-1">Your information stays in the form. These options open a prefilled message in your email account.</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <button type="button" onClick={() => openFallback("gmail")} className="font-semibold text-marine-900 underline">
                      Gmail
                    </button>
                    <button type="button" onClick={() => openFallback("outlook")} className="font-semibold text-marine-900 underline">
                      Outlook
                    </button>
                  </div>
                </div>
              )}
            </form>
          </SurfaceCard>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
