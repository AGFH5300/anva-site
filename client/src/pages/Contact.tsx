import { useState, type FormEvent } from "react";
import { Container, Section, SurfaceCard, primaryButtonClass } from "../components/site/SitePrimitives";

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-500 transition focus:border-signal-500 focus:outline-none focus:ring-2 focus:ring-signal-500/20";

function Contact() {
  const [draftPrepared, setDraftPrepared] = useState(false);
  const [draftText, setDraftText] = useState("");
  const [webmailLinks, setWebmailLinks] = useState({ gmail: "", outlook: "" });
  const handleEmailDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
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

    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=info%40anva-group.com&su=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    const outlookUrl = "https://outlook.office.com/mail/deeplink/compose?to=info%40anva-group.com&subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    const mailtoUrl = "mailto:info@anva-group.com?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    setDraftText("To: info@anva-group.com\nSubject: " + subject + "\n\n" + body);
    setDraftPrepared(true);
    setWebmailLinks({ gmail: gmailUrl, outlook: outlookUrl });
    const clicked = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const client = clicked?.value ?? "gmail";
    if (client === "default") {
      window.location.href = mailtoUrl;
    } else {
      // A direct user click opens an actual email composer with a Send button.
      // We do not claim this static website itself can send email.
      window.open(client === "outlook" ? outlookUrl : gmailUrl, "_blank", "noopener,noreferrer");
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
            <h2 className="text-2xl font-semibold text-marine-900">Send your RFQ email</h2>
            <form className="mt-5 space-y-5" onSubmit={handleEmailDraft}>
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

              <div className="flex flex-wrap gap-3">
                <button type="submit" name="mailClient" value="gmail" className={primaryButtonClass}>
                  Continue to Gmail to send
                </button>
                <button type="submit" name="mailClient" value="outlook" className="rounded-md border border-marine-800 bg-white px-5 py-3 font-semibold text-marine-900 transition hover:bg-slate-100">
                  Continue to Outlook to send
                </button>
              </div>
              <p className="text-sm text-slate-600">
                Your selected email service opens a real compose window with your RFQ filled in.
                Click <strong>Send</strong> there. You must be signed in to that email service; the website itself does not send enquiries automatically.
              </p>
              <button type="submit" name="mailClient" value="default" className="text-sm font-semibold text-marine-900 underline">
                Use my device's default email application
              </button>
              {draftPrepared && (
                <div role="status" className="rounded-md bg-slate-100 p-3 text-sm text-slate-800">
                  <p className="font-medium">Composer not opening? Use these direct links:</p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    <a className="font-semibold underline" href={webmailLinks.gmail} target="_blank" rel="noopener noreferrer">Open Gmail compose</a>
                    <a className="font-semibold underline" href={webmailLinks.outlook} target="_blank" rel="noopener noreferrer">Open Outlook compose</a>
                  </div>
                  <p className="mt-3">Or copy the prepared enquiry and send it to info@anva-group.com.</p>
                  <label htmlFor="rfq-email-fallback" className="mt-3 block font-medium">Prepared enquiry (select and copy)</label>
                  <textarea
                    id="rfq-email-fallback"
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white p-3 text-sm text-slate-800"
                    value={draftText}
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
