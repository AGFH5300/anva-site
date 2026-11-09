// One-time integration smoke test on the approved growth PR. No real customer data.
import assert from "node:assert/strict";
const host = "https://mxdibxggmfdfdgcrzbqy.supabase.co/functions/v1";
const email = `qa-rfq+${process.env.GITHUB_RUN_ID || Date.now()}@example.invalid`;
const form = {
  fullName: "ANVA Website QA", company: "Automated Integration Test",
  workEmail: email, phone: "", enquiryType: "BILDAL Transformers",
  product_interest: "bildal-airfield-lighting", source_page: "/contact",
  requirement: "This is an automated website submission test, no commercial action required.",
  agreed_to_contact: true,
};
const submit = await fetch(host+"/anva-website-rfq",{
 method: "POST",
 headers: {"Origin":"https://www.anva-group.com","Content-Type":"application/json","User-Agent":"Mozilla/5.0 Chrome/158.0"},
 body: JSON.stringify(form)
});
const result = await submit.json();
assert.equal(submit.status,200,"RFQ endpoint must accept valid direct submission");
assert.equal(result.ok,true,"RFQ endpoint must confirm persistence");
const noConsent=await fetch(host+"/anva-website-rfq",{
 method:"POST",headers:{"Origin":"https://www.anva-group.com","Content-Type":"application/json"},
 body:JSON.stringify({...form,agreed_to_contact:false})
});
assert.equal(noConsent.status,422,"RFQ must reject missing consent");
const wrongOrigin=await fetch(host+"/anva-website-rfq",{
 method:"POST",headers:{"Origin":"https://unexpected.example","Content-Type":"application/json"},
 body:JSON.stringify(form)
});
assert.equal(wrongOrigin.status,403,"RFQ must reject unapproved origins");
const page=await fetch(host+"/public-site-analytics",{
 method:"POST",headers:{"Origin":"https://www.anva-group.com","Content-Type":"application/json","User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/158.0 Safari/537.36"},
 body:JSON.stringify({path:"/products/bildal-airfield-lighting/",referrer_host:"google.com",utm_source:"github-qa",utm_medium:"test"})
});
assert.equal(page.status,200,"Traffic endpoint must accept privacy-minimized event");
assert.equal((await page.json()).ok,true);
console.log("PASS actual ANVA RFQ and traffic edge submissions, CORS and consent validation; QA email:",email);
