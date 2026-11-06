// Test-only provider stub; never included in the deployed website or backend.
const nativeFetch = globalThis.fetch;
globalThis.fetch = async (url, options) => {
  if (String(url) !== "https://api.resend.com/emails") {
    return nativeFetch(url, options);
  }
  const data = JSON.parse(String(options?.body || "{}"));
  if (options?.headers?.Authorization !== "Bearer rfq-ci-test-secret" ||
      !options?.headers?.["Idempotency-Key"] ||
      data.to?.[0] !== "info@anva-group.com" ||
      data.reply_to !== "website-test@example.com") {
    return new Response(JSON.stringify({ message: "Invalid RFQ email payload" }), {
      status: 422, headers: { "Content-Type": "application/json" },
    });
  }
  if (data.text.includes("MOCK_REJECT_ME")) {
    return new Response(JSON.stringify({ message: "Provider rejected message" }), {
      status: 500, headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ id: "ci-provider-confirmation-id" }), {
    status: 200, headers: { "Content-Type": "application/json" },
  });
};
