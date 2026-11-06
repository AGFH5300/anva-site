import { useState, type FormEvent } from "react";
import { Container, Section, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-500 transition focus:border-signal-500 focus:outline-none focus:ring-2 focus:ring-signal-500/20";

function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fallbackDraft, setFallbackDraft] = useState("");
  const [gmailComposeUrl, setGmailComposeUrl] = useState("");

  const handleSendEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState === "sending") return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const get = (key: string) => String(fields.get(key) ?? "").trim();
    const subject = "Marine RFQ: " + get("enquiryType");
    const body = [
      "Marine Service / Supply Request",
      "",
      "Name: " + get("fullName"),
      "Company: " + get("company"),
      "Email: " + get("workEmail"),
      "Phone / WhatsApp: " + (get("phone") || "Not provided"),
      "Enquiry type: " + get("enquiryType"),
      "",
      "Requirement details:",
      get("requirement"),
    ].join("\n");

    setFallbackDraft("To: info@anva-group.com\nSubject: " + subject + "\n\n" + body);
    setGmailComposeUrl(
      "https://mail.google.com/mail/?view=cm&fs=1&to=info%40anva-group.com&su=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body),
    );
    setFormState("sending");
    setErrorMessage("");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      // FormSubmit is an external email-delivery service for static websites.
      // A verified receiving mailbox is required before this will deliver email.
      const response = await fetch("https://formsubmit.co/ajax/info@anva-group.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: get("fullName"),
          company: get("company"),
          email: get("workEmail"),
          phone: get("phone") || "Not provided",
          enquiryType: get("enquiryType"),
          message: get("requirement"),
          _subject: subject,
          _template: "table",
          _url: "https://www.anva-group.com/contact",
          _honey: get("_honey"),
        }),
      });
      const result: unknown = await response.json();
      const data = result && typeof result === "object" ? result as Record<string, unknown> : {};
      // FormSubmit can return HTTP 200 and the STRING "false" on errors.
      // Never show a delivery confirmation unless success is explicitly true.
      if (!response.ok || (data.success !== true && data.success !== "true")) {
        throw new Error(typeof data.message === "string" ? data.message : "Submission was not accepted.");
      }
      form.reset();
      setFormState("sent");
    } catch (error) {
      const providerMessage = error instanceof Error ? error.message : "";
      setErrorMessage(
        /activat|verif/i.test(providerMessage)
          ? "This site's email delivery requires one-time activation by ANVA. Please use the Gmail option below until it is activated."
          : "The enquiry could not be sent from the website. Your details are preserved; use the Gmail option below or try again.",
      );
      setFormState("error");
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
            <form className="mt-5 space-y-5" onSubmit={handleSendEnquiry} onChange={() => { if (formState === "sent") setFormState("idle"); }}>
              <div className="hidden" aria-hidden="true"><input type="text" tabIndex={-1} autoComplete="off" name="_honey" /></div>
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

              <button type="submit" className={primaryButtonClass} disabled={formState === "sending"} aria-busy={formState === "sending"}>
                {formState === "sending" ? "Sending enquiry..." : "Send enquiry"}
              </button>
              <p className="text-sm text-slate-600">
                Submit your requirement directly to ANVA Marine. Enquiries are forwarded to info@anva-group.com by a third-party email delivery service.
                Please do not include passwords or highly confidential documents in this form.
              </p>
              {formState === "sent" && (
                <div role="status" className="rounded-md border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
                  Your enquiry was accepted by the delivery service. Thank you for contacting ANVA Marine.
                </div>
              )}
              {formState === "error" && (
                <div role="alert" className="rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
                  <p>{errorMessage}</p>
                  <a className="mt-3 inline-block font-semibold underline" target="_blank" rel="noopener noreferrer" href={gmailComposeUrl}>
                    Open prepared enquiry in Gmail (with Send button)
                  </a>
                  <p className="mt-3">Or copy your enquiry and send it to info@anva-group.com:</p>
                  <label htmlFor="rfq-email-fallback" className="mt-2 block font-medium">Prepared enquiry</label>
                  <textarea
                    id="rfq-email-fallback"
                    className="mt-2 w-full rounded-md border border-amber-300 bg-white p-3 text-sm text-slate-800"
                    value={fallbackDraft}
                    onFocus={(event) => event.currentTarget.select()}
                    rows={9}
                    readOnly
                  />
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
