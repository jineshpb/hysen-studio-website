export type EnquiryPayload = {
  fullName: string;
  workEmail: string;
  companyName: string;
  serviceInterest: string;
  budgetRange: string;
  timeline: string;
  message: string;
  website?: string;
};

export const SERVICE_INTEREST_OPTIONS = [
  "Industrial design and product development",
  "Functional prototyping",
  "Product strategy and pitch deck consultation",
  "Visualization and CGI",
  "Limited volume production",
  "Premium prototypes and display models",
];

export const BUDGET_OPTIONS = ["Below $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"];

export const TIMELINE_OPTIONS = ["ASAP", "Within 30 days", "1-3 months", "Exploring options"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export function validateEnquiryPayload(input: unknown) {
  if (!input || typeof input !== "object") {
    return { ok: false as const, error: "Invalid request payload." };
  }

  const payload = input as Record<string, unknown>;
  const fullName = clean(payload.fullName);
  const workEmail = clean(payload.workEmail).toLowerCase();
  const companyName = clean(payload.companyName);
  const serviceInterest = clean(payload.serviceInterest);
  const budgetRange = clean(payload.budgetRange);
  const timeline = clean(payload.timeline);
  const message = clean(payload.message);
  const website = clean(payload.website);

  if (website) {
    return { ok: false as const, error: "Spam detected." };
  }

  if (fullName.length < 2) {
    return { ok: false as const, error: "Please enter your full name." };
  }

  if (!EMAIL_REGEX.test(workEmail)) {
    return { ok: false as const, error: "Please enter a valid work email." };
  }

  if (companyName.length < 2) {
    return { ok: false as const, error: "Please enter your company name." };
  }

  if (!SERVICE_INTEREST_OPTIONS.includes(serviceInterest)) {
    return { ok: false as const, error: "Please choose a service." };
  }

  if (!BUDGET_OPTIONS.includes(budgetRange)) {
    return { ok: false as const, error: "Please choose a budget range." };
  }

  if (!TIMELINE_OPTIONS.includes(timeline)) {
    return { ok: false as const, error: "Please choose a timeline." };
  }

  if (message.length < 20) {
    return { ok: false as const, error: "Please share more detail about your enquiry." };
  }

  if (message.length > 2000) {
    return { ok: false as const, error: "Message is too long." };
  }

  return {
    ok: true as const,
    payload: {
      fullName,
      workEmail,
      companyName,
      serviceInterest,
      budgetRange,
      timeline,
      message,
      website,
    } satisfies EnquiryPayload,
  };
}

export function formatEnquiryEmail(payload: EnquiryPayload) {
  const subject = `New enquiry: ${payload.serviceInterest} - ${payload.companyName}`;

  const text = [
    "New enquiry from hysenforge.com",
    "",
    `Name: ${payload.fullName}`,
    `Email: ${payload.workEmail}`,
    `Company: ${payload.companyName}`,
    `Service: ${payload.serviceInterest}`,
    `Budget: ${payload.budgetRange}`,
    `Timeline: ${payload.timeline}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = `
    <h2>New enquiry from hysenforge.com</h2>
    <p><strong>Name:</strong> ${payload.fullName}</p>
    <p><strong>Email:</strong> ${payload.workEmail}</p>
    <p><strong>Company:</strong> ${payload.companyName}</p>
    <p><strong>Service:</strong> ${payload.serviceInterest}</p>
    <p><strong>Budget:</strong> ${payload.budgetRange}</p>
    <p><strong>Timeline:</strong> ${payload.timeline}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message.replace(/\n/g, "<br />")}</p>
  `;

  return { subject, text, html };
}
