# ANVA website: direct RFQ email sending

Status: the website/API implementation is staged in PR #68. **Do not merge or enable
the new direct form without verified email delivery.** The current production
website remains functional with its existing Gmail/Outlook fallback.

## Intended user flow

Customer completes https://www.anva-group.com/contact, presses **Send Enquiry**,
and stays on the website. The static site sends the validated submission to
`https://anva-site-c5i4.onrender.com/api/rfq` (ANVA-owned existing web service).
The backend sends it from an ANVA verified domain through Resend's HTTPS
transactional email API to `info@anva-group.com`, with the customer's email as
Reply-To. A successful API response only means the provider accepted the email,
**not** that the inbox definitely received it.

## One-time provider and Render setup

1. Sign up/in to [Resend](https://resend.com/), add and verify the sending
   domain `anva-group.com` under Domains, following the exact displayed DNS
   records. **Do not change or remove the existing Google Workspace MX
   configuration.** Alternatively verify a dedicated subdomain and adjust
   the sender address below to that subdomain.
2. In Resend > API Keys, create a key with **Sending** permission, preferably
   restricted to the verified ANVA sending domain.
3. Open the existing Render ANVA website backend service:
   https://dashboard.render.com/web/srv-d7j5r4vavr4c7385ct60 .
   Set its secret environment variables:
   - `RESEND_API_KEY` = your new Resend sending-only key
   - `RFQ_FROM_EMAIL` = `ANVA Marine Website <website@anva-group.com>`
     (or use a verified sending subdomain address if selected).
   Do **not** put keys into GitHub files, the public client app, or chat.
4. Ensure PR #68 passes all CI checks; merge PR to `main` and manually deploy
   `anva-site` from the latest commit (its auto-deploy is intentionally
   disabled).
5. Submit a separately reviewed and approved Render Blueprint plan to allow
   the exact web-service origin `https://anva-site-c5i4.onrender.com` in the
   static site's Content Security Policy. Apply the plan only after reviewing.
6. The main static site auto-deploys from `main`. Check live
   `GET /api/rfq/status` from allowed `https://www.anva-group.com` origin
   returns `{ "available": true }`.
7. Perform ONE controlled website RFQ from a test address.
   Confirm the ANVA Gmail inbox receives the message, all six fields are
   correct, Reply-To targets the customer, and the on-page confirmation is
   accurate. Also test invalid input, deliberate provider rejection, mobile,
   and duplicate clicking. No visitor's email client should open.

## Safeguards

- No sender API secret is sent to the browser.
- Backend only forwards to the fixed `info@anva-group.com` recipient.
- Requests are limited per IP, validated, and use a honeypot.
- CORS explicitly allows ANVA website origins.
- A retry uses an idempotency key to avoid provider duplicate sends.
- Failures never generate a false success message; customer inputs remain.
- The server is on Render's **free** plan, which may sleep after inactivity
  and take around one minute to restart. A paid always-on Render plan is
  recommended for a business RFQ endpoint if the latency is unacceptable.

## Rollback

Original restore branch:
`backup/anva-before-direct-rfq-20261106` at commit
`ea3d1fe1992604079c98893ba31b6492c989c395`.
Avoid changing the separate ANVA CRM service.
