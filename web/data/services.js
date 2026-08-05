// ClaimSphere RCM — service offerings.
//
// NOTE: metrics and marketing copy below are placeholder data. Replace with
// the client's verified numbers before launch.

export const services = [
  {
    slug: "revenue-cycle-management",
    title: "Revenue Cycle Management",
    shortTitle: "Revenue Cycle Management (RCM)",
    icon: "RefreshCw",
    description:
      "End-to-end revenue cycle management covering every stage from patient intake through final payment reconciliation.",
    metric: "Full-cycle coverage",
    longDescription:
      "A complete revenue cycle program run as one connected process. We take ownership of eligibility, charge capture, claim scrubbing, submission, payment posting, and accounts receivable follow-up — so nothing falls between the cracks of separate vendors or internal handoffs.",
    features: ["Charge capture & reconciliation", "Claim scrubbing & submission", "Payment posting & AR follow-up"],
  },
  {
    slug: "medical-billing-services",
    title: "Medical Billing Services",
    shortTitle: "Medical Billing Services",
    icon: "FileText",
    description:
      "Full-cycle billing that gets claims out accurately the first time and accelerates your reimbursement.",
    metric: "24–48 hr submission",
    longDescription:
      "Day-to-day billing operations handled by specialists who know your payers. Charges are reconciled against the schedule, claims go out within one to two business days with payer-specific edits already applied, and every unpaid claim is worked until it is resolved.",
    features: ["Electronic claim submission", "Payer-specific edit rules", "Secondary & tertiary billing"],
  },
  {
    slug: "medical-billing-audit",
    title: "Medical Billing Audit",
    shortTitle: "Medical Billing Audit",
    icon: "Search",
    description:
      "In-depth audits that surface billing errors, tighten your processes, and keep your practice compliant.",
    metric: "Revenue leakage found",
    longDescription:
      "A structured review of your coding, documentation, and billing workflow that identifies where revenue is being lost and where compliance risk is building. You get a prioritized findings report with the dollar impact of each issue and a practical remediation plan.",
    features: ["Coding & documentation review", "Compliance risk assessment", "Prioritized remediation plan"],
  },
  {
    slug: "eligibility-verification",
    title: "Eligibility Verification",
    shortTitle: "Eligibility Verification Services",
    icon: "ShieldCheck",
    description:
      "Real-time insurance verification that stops denials before they happen and gives patients cost clarity upfront.",
    metric: "98% clean intake",
    longDescription:
      "Most denials trace back to bad data captured before the visit. We verify demographics and run real-time eligibility and benefits checks against the payer ahead of the appointment, so coverage gaps and authorization requirements surface early — not after the claim is rejected.",
    features: ["Real-time eligibility & benefits checks", "Prior authorization tracking", "Patient responsibility estimates"],
  },
  {
    slug: "denial-management",
    title: "Denial Management",
    shortTitle: "Denial Management Services",
    icon: "RotateCcw",
    description:
      "Root-cause denial analysis and persistent appeals that recover the revenue your practice has already earned.",
    metric: "Up to 40% recovery",
    longDescription:
      "Denials are tracked by reason code to expose recurring patterns. We work appeals aggressively and feed root-cause fixes back upstream so the same denials stop recurring — turning revenue that would have been written off into revenue collected.",
    features: ["Root-cause denial analysis", "Appeal preparation & submission", "Recurring-issue prevention"],
  },
  {
    slug: "credentialing-services",
    title: "Credentialing Services",
    shortTitle: "Credentialing Services",
    icon: "BadgeCheck",
    description:
      "Provider enrollment and payer credentialing handled end to end, so your clinicians can bill without delay.",
    metric: "Enrollment managed",
    longDescription:
      "Credentialing delays mean clinicians who cannot bill. We manage payer enrollment, CAQH profiles, revalidations, and follow-up from application through approval, tracking every submission so nothing stalls in a payer queue unnoticed.",
    features: ["Payer enrollment & re-credentialing", "CAQH profile management", "Application status tracking"],
  },
  {
    slug: "medical-coding",
    title: "Medical Coding",
    shortTitle: "Medical Coding",
    icon: "Code",
    description:
      "Certified ICD-10, CPT, and HCPCS coding that captures every billable service without inviting audit risk.",
    metric: "99% coding accuracy",
    longDescription:
      "Our credentialed coders translate clinical documentation into compliant, audit-ready codes. The focus is capturing every legitimately billable service the first time while minimizing the audit exposure that comes with over- or under-coding.",
    features: ["ICD-10 / CPT / HCPCS coding", "Specialty-specific expertise", "Coding audits & education"],
  },
];

// Three-step onboarding journey shown in the "How It Works" section.
export const howItWorks = [
  {
    step: 1,
    title: "Free Consultation & Audit",
    description:
      "We start with a no-cost review of your current billing operation — where claims are stalling, how your denials trend, and how much revenue is sitting uncollected in aging AR.",
  },
  {
    step: 2,
    title: "Tailored Onboarding",
    description:
      "Findings from the audit shape a transition plan built around your existing team, software, and workflow. No rip-and-replace, and no gap in cash flow while we take over.",
  },
  {
    step: 3,
    title: "Full-Service Billing & Optimization",
    description:
      "Once live, we run your revenue cycle end to end and keep tuning it — tightening clean-claim rates, shortening days in AR, and reporting on it all transparently.",
  },
];
