import assert from "node:assert/strict";
import test from "node:test";
import { buildInquiryText, getInquiryEmailUrl, validateInquiry } from "../src/lib/inquiry.ts";
import { CONTACT_INFO, getWhatsAppUrl } from "../src/lib/contact.ts";

const inquiry = {
  name: "  Test Business  ",
  email: "",
  company: "Clinic & Care",
  whatsapp: "+92 300 0000000",
  service: "Website Development",
  budget: "Under $200",
  message: "A website with services, timings & appointment enquiries.\nاردو content too.",
};

test("an enquiry only requires name, service, and a project description", () => {
  assert.deepEqual(validateInquiry(inquiry), {});
  const errors = validateInquiry({ ...inquiry, name: " ", service: "", message: "   " });
  assert.deepEqual(Object.keys(errors).sort(), ["message", "name", "service"]);
  assert.equal(errors.message, "Please describe your project or requirements.");
});

test("email remains optional, but malformed addresses are rejected", () => {
  assert.equal(validateInquiry(inquiry).email, undefined);
  assert.equal(validateInquiry({ ...inquiry, email: "contact@example.com" }).email, undefined);
  assert.match(validateInquiry({ ...inquiry, email: "not-an-email" }).email, /valid email/);
});

test("WhatsApp keeps the chosen recipient and round-trips special characters and newlines", () => {
  const text = buildInquiryText(inquiry);
  const url = new URL(getWhatsAppUrl(text));
  assert.equal(url.origin + url.pathname, CONTACT_INFO.whatsappUrl);
  assert.equal(url.searchParams.get("text"), text);
  assert.match(text, /\*Name:\* Test Business\n/);
  assert.match(text, /\*Email:\* Not provided/);
  assert.ok(text.endsWith(inquiry.message));
  assert.equal(getWhatsAppUrl(), CONTACT_INFO.whatsappUrl);
});

test("email handoff retains the subject and the same enquiry body", () => {
  const url = new URL(getInquiryEmailUrl(inquiry));
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, CONTACT_INFO.email);
  assert.equal(
    url.searchParams.get("subject"),
    "Project Inquiry: Website Development — Test Business",
  );
  assert.equal(url.searchParams.get("body"), buildInquiryText(inquiry));
});
