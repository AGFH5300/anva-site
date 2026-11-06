import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { resolve } from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const origin = "https://www.anva-group.com";

const fields = () => ({
  fullName: "ANVA Website Test",
  company: "ANVA Quality Assurance",
  workEmail: "website-test@example.com",
  phone: "+971500000000",
  enquiryType: "Ship Repair Support",
  requirement: "Request test marine spare quotation.",
  website: "",
  requestId: randomUUID(),
});

async function withServer(port, enabled, run) {
  const args = enabled
    ? ["--require", resolve("scripts/mock-resend.cjs"), resolve("dist/index.cjs")]
    : [resolve("dist/index.cjs")];
  const child = spawn(process.execPath, args, {
    env: {
      ...process.env,
      NODE_ENV: "production",
      PORT: String(port),
      RESEND_API_KEY: enabled ? "rfq-ci-test-secret" : "",
      RFQ_FROM_EMAIL: enabled ? "ANVA Website <website@anva-group.com>" : "",
    },
    stdio: "pipe",
  });
  let logs = "";
  child.stdout.on("data", (c) => { logs += c.toString(); });
  child.stderr.on("data", (c) => { logs += c.toString(); });
  const base = "http://127.0.0.1:" + port;
  try {
    let started = false;
    for (let i = 0; i < 80; i++) {
      if (child.exitCode !== null) break;
      try {
        const r = await fetch(base + "/api/hello", { signal: AbortSignal.timeout(400) });
        if (r.ok) { started = true; break; }
      } catch { /* startup */ }
      await sleep(150);
    }
    if (!started) throw new Error("RFQ test backend did not start:\n" + logs);
    await run(base);
  } finally {
    child.kill("SIGTERM");
  }
}

const headers = { Origin: origin, "Content-Type": "application/json" };
async function post(base, body, changedHeaders) {
  const response = await fetch(base + "/api/rfq", {
    method: "POST", headers: changedHeaders || headers, body: JSON.stringify(body),
  });
  return { status: response.status, data: await response.json(), headers: response.headers };
}

await withServer(4177, true, async (base) => {
  let res = await fetch(base + "/api/rfq/status", { headers: { Origin: origin } });
  assert.equal(res.status, 200);
  assert.equal((await res.json()).available, true);

  const request = fields();
  const good = await post(base, request);
  assert.equal(good.status, 200);
  assert.equal(good.data.ok, true);
  assert.equal(good.data.reference, "ci-provider-confirmation-id");
  assert.equal(good.headers.get("access-control-allow-origin"), origin);
  console.log("PASS server-side RFQ provider acceptance and fixed ANVA recipient");

  const crossOrigin = await post(base, fields(), { Origin: "https://untrusted.example", "Content-Type": "application/json" });
  assert.equal(crossOrigin.status, 403);
  const missingOrigin = await post(base, fields(), { "Content-Type": "application/json" });
  assert.equal(missingOrigin.status, 403);
  console.log("PASS reject untrusted/missing origins");

  const invalid = await post(base, { ...fields(), workEmail: "invalid-email" });
  assert.equal(invalid.status, 400);
  const invalidType = await post(base, { ...fields(), enquiryType: "Custom Email Injection" });
  assert.equal(invalidType.status, 400);
  console.log("PASS reject malformed email and forged enquiry type");

  const honeypot = await post(base, { ...fields(), website: "spam-site.test" });
  assert.equal(honeypot.status, 202);
  const reject = await post(base, { ...fields(), requirement: "MOCK_REJECT_ME" });
  assert.equal(reject.status, 502);
  assert.equal(reject.data.ok, false);
  console.log("PASS spam honeypot and failed-provider responses never claim delivery");

  const preflight = await fetch(base + "/api/rfq", {
    method: "OPTIONS",
    headers: { Origin: origin, "Access-Control-Request-Method": "POST" },
  });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get("access-control-allow-origin"), origin);
  console.log("PASS cross-origin browser preflight");
});

await withServer(4178, false, async (base) => {
  let res = await fetch(base + "/api/rfq/status", { headers: { Origin: origin } });
  assert.equal((await res.json()).available, false);
  const disabled = await post(base, fields());
  assert.equal(disabled.status, 503);
  assert.equal(disabled.data.ok, false);
  console.log("PASS unconfigured backend refuses to fabricate sent email");
});
console.log("ANVA secure direct RFQ API tests PASSED.");
