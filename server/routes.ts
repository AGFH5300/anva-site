import { randomUUID } from "node:crypto";
import type { Express, Request, Response } from "express";
import type { Server } from "http";

const allowedProductionOrigins = new Set([
  "https://www.anva-group.com",
  "https://anva-group.com",
  "https://anva-site-static.onrender.com",
]);
const allowedEnquiryTypes = new Set([
  "Ship Repair Support",
  "Marine Riding Squads",
  "Project Coordination / Consultancy",
  "Products / Brands",
  "Marine Spares",
  "Green Shipping Solutions",
]);

const windowMilliseconds = 15 * 60 * 1000;
const requestsByIp = new Map<string, { count: number; resetAt: number }>();
const maxRequestsPerWindow = 8;

function field(input: unknown, maxLength: number): string | null {
  if (typeof input !== "string") return null;
  const text = input.trim();
  return text.length > 0 && text.length <= maxLength ? text : null;
}

function cors(req: Request, res: Response): boolean {
  const origin = req.get("origin");
  const permitted = Boolean(origin && (
    allowedProductionOrigins.has(origin) ||
    (process.env.NODE_ENV !== "production" && /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin))
  ));
  res.setHeader("Vary", "Origin");
  res.setHeader("Cache-Control", "no-store");
  if (permitted) {
    res.setHeader("Access-Control-Allow-Origin", origin!);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  return permitted;
}

function isConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.RFQ_FROM_EMAIL);
}

function rateLimit(req: Request, res: Response): boolean {
  const now = Date.now();
  if (requestsByIp.size > 5000) {
    requestsByIp.forEach((state, key) => {
      if (state.resetAt <= now) requestsByIp.delete(key);
    });
  }
  const key = req.ip || req.socket.remoteAddress || "unknown";
  const existing = requestsByIp.get(key);
  const state = !existing || existing.resetAt <= now
    ? { count: 0, resetAt: now + windowMilliseconds }
    : existing;
  state.count += 1;
  requestsByIp.set(key, state);
  if (state.count > maxRequestsPerWindow) {
    res.setHeader("Retry-After", String(Math.ceil((state.resetAt - now) / 1000)));
    res.status(429).json({ ok: false, message: "Too many enquiries. Please try again later." });
    return false;
  }
  return true;
}

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  // Render terminates HTTPS at its reverse proxy; one trusted proxy hop gives
  // rate limiting the visitor IP instead of treating every visitor as Render.
  app.set("trust proxy", 1);

  app.get("/api/hello", (_req, res) => {
    res.json({ message: "Hello World" });
  });

  app.options("/api/rfq", (req, res) => {
    if (!cors(req, res)) return res.sendStatus(403);
    return res.status(204).end();
  });

  app.get("/api/rfq/status", (req, res) => {
    if (!cors(req, res)) return res.sendStatus(403);
    return res.json({ available: isConfigured() });
  });

  app.post("/api/rfq", async (req, res) => {
    if (!cors(req, res)) return res.status(403).json({ ok: false, message: "Origin not allowed." });
    if (!rateLimit(req, res)) return;

    if (!req.is("application/json") || typeof req.body !== "object" || !req.body || Array.isArray(req.body)) {
      return res.status(415).json({ ok: false, message: "Expected a JSON enquiry." });
    }

    const input = req.body as Record<string, unknown>;
    // The hidden field discourages casual automated spam, without leaking
    // whether a sender reached the real email provider.
    if (typeof input.website === "string" && input.website.trim()) {
      return res.status(202).json({ ok: true, reference: "received" });
    }

    const fullName = field(input.fullName, 120);
    const company = field(input.company, 180);
    const workEmail = field(input.workEmail, 254);
    const phone = input.phone === "" || input.phone == null ? "" : field(input.phone, 64);
    const enquiryType = field(input.enquiryType, 80);
    const requirement = field(input.requirement, 1500);
    const requestId = field(input.requestId, 64);
    if (!fullName || !company || !workEmail || phone === null || !enquiryType ||
        !allowedEnquiryTypes.has(enquiryType) || !requirement || !requestId ||
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId) ||
        !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(workEmail)) {
      return res.status(400).json({ ok: false, message: "Please check the enquiry fields and try again." });
    }

    if (!isConfigured()) {
      return res.status(503).json({
        ok: false,
        message: "Direct email delivery is not yet configured. Please use the email alternative.",
      });
    }

    const subject = "Marine RFQ: " + enquiryType;
    const body = [
      "Marine Service / Supply Request",
      "",
      "Name: " + fullName,
      "Company: " + company,
      "Reply email: " + workEmail,
      "Phone / WhatsApp: " + (phone || "Not provided"),
      "Enquiry type: " + enquiryType,
      "",
      "Requirement details:",
      requirement,
      "",
      "Request ID: " + requestId,
      "Submitted via https://www.anva-group.com/contact",
    ].join("\n");

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + process.env.RESEND_API_KEY,
          "Content-Type": "application/json",
          "Idempotency-Key": requestId,
        },
        body: JSON.stringify({
          from: process.env.RFQ_FROM_EMAIL,
          to: ["info@anva-group.com"],
          reply_to: workEmail,
          subject,
          text: body,
        }),
        signal: AbortSignal.timeout(15000),
      });

      if (!response.ok) {
        // Never expose the provider response or account metadata to a visitor.
        console.error("RFQ provider rejected request", { code: response.status });
        return res.status(502).json({
          ok: false,
          message: "Email delivery was not accepted. Please retry or use the email alternative.",
        });
      }
      const payload: unknown = await response.json();
      const id = payload && typeof payload === "object" && "id" in payload &&
        typeof payload.id === "string" ? payload.id : null;
      if (!id) {
        console.error("RFQ provider did not return a message id");
        return res.status(502).json({ ok: false, message: "Delivery status is uncertain. Please contact ANVA." });
      }
      return res.status(200).json({ ok: true, reference: id });
    } catch (error) {
      console.error("RFQ provider request failed", error instanceof Error ? error.name : "unknown");
      return res.status(502).json({
        ok: false,
        message: "Email service is temporarily unavailable. Please try again.",
      });
    }
  });

  return httpServer;
}
