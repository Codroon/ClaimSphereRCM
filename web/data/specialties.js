// ClaimSphere RCM — specialty-specific billing landing pages.
// Content is themed placeholder copy modeled on common specialty billing pain
// points. Replace specifics with verified positioning before launch.

export const specialties = [
  {
    slug: "mental-health",
    name: "Mental Health",
    icon: "Brain",
    blurb: "Time-based codes, telehealth, and prior auth handled accurately.",
    intro:
      "Behavioral and mental health billing lives and dies on time-based coding, session documentation, and authorization tracking. We make sure every session is captured and reimbursed correctly.",
    challenges: [
      "Complex time-based and add-on CPT coding",
      "Frequent prior-authorization requirements",
      "Telehealth and parity-rule reimbursement",
    ],
    solutions: [
      "Accurate session and time-based coding",
      "Proactive authorization tracking",
      "Telehealth-compliant claim submission",
    ],
  },
  {
    slug: "home-health",
    name: "Home Health",
    icon: "Home",
    blurb: "OASIS, episodic billing, and PDGM compliance done right.",
    intro:
      "Home health billing under PDGM demands precise OASIS documentation and episodic claim management. We keep your episodes clean and your cash flow predictable.",
    challenges: [
      "PDGM and episodic payment complexity",
      "OASIS documentation accuracy",
      "RAP and final claim timing",
    ],
    solutions: [
      "PDGM-aligned coding and grouping",
      "OASIS documentation review",
      "Timely RAP and final claim submission",
    ],
  },
  {
    slug: "chiropractic",
    name: "Chiropractic",
    icon: "Activity",
    blurb: "Medical-necessity documentation and capped-visit tracking.",
    intro:
      "Chiropractic claims face heavy scrutiny on medical necessity and visit limits. We document and code defensibly so adjustments get paid.",
    challenges: [
      "Medical-necessity denials",
      "Visit caps and payer limits",
      "Modifier-heavy CPT coding",
    ],
    solutions: [
      "Defensible medical-necessity documentation",
      "Visit-limit tracking per payer",
      "Accurate modifier application",
    ],
  },
  {
    slug: "family-practice",
    name: "Family Practice",
    icon: "Users",
    blurb: "High-volume E/M coding and preventive-care capture.",
    intro:
      "Family practices juggle high patient volume across every age group. We capture every E/M level and preventive service correctly, the first time.",
    challenges: [
      "High-volume E/M leveling",
      "Preventive vs. problem-oriented visits",
      "Wide payer and plan mix",
    ],
    solutions: [
      "Accurate E/M leveling",
      "Preventive-care charge capture",
      "Payer-specific claim rules",
    ],
  },
  {
    slug: "primary-care",
    name: "Primary Care",
    icon: "Stethoscope",
    blurb: "Chronic-care management and value-based billing support.",
    intro:
      "Primary care increasingly runs on chronic-care management and value-based programs. We make sure these revenue streams are billed and tracked correctly.",
    challenges: [
      "Chronic-care and remote-monitoring billing",
      "Value-based and quality reporting",
      "Annual wellness visit coding",
    ],
    solutions: [
      "CCM and RPM billing workflows",
      "Quality-program documentation",
      "Wellness-visit charge capture",
    ],
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    icon: "HeartPulse",
    blurb: "Complex, multi-condition encounters coded to full value.",
    intro:
      "Internal medicine encounters are often complex and multi-condition. We capture the full clinical picture so documentation translates into appropriate reimbursement.",
    challenges: [
      "Complex multi-diagnosis encounters",
      "Risk-adjustment / HCC capture",
      "Under-coded high-acuity visits",
    ],
    solutions: [
      "Complete diagnosis capture",
      "HCC / risk-adjustment coding",
      "Acuity-appropriate E/M leveling",
    ],
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "Heart",
    blurb: "Procedure-heavy coding and device billing precision.",
    intro:
      "Cardiology billing spans complex diagnostics, procedures, and device management. Our coders capture every billable component without triggering audits.",
    challenges: [
      "Complex procedure and diagnostic coding",
      "Device and implant billing",
      "Global-period and modifier rules",
    ],
    solutions: [
      "Specialized cardiology coding",
      "Accurate device/implant capture",
      "Correct global-period management",
    ],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    icon: "Bone",
    blurb: "Surgical bundling, implants, and global periods handled.",
    intro:
      "Orthopedic surgical billing is bundling-heavy and implant-intensive. We unbundle correctly, capture implants, and manage global periods to protect revenue.",
    challenges: [
      "Surgical bundling and unbundling rules",
      "Implant and hardware billing",
      "Global-surgical-period tracking",
    ],
    solutions: [
      "Correct surgical bundling",
      "Implant and hardware capture",
      "Global-period and modifier accuracy",
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "Sparkles",
    blurb: "Pathology, lesion coding, and cosmetic/medical splits.",
    intro:
      "Dermatology mixes medical and cosmetic services with detailed lesion and pathology coding. We keep the lines clean and the claims compliant.",
    challenges: [
      "Lesion size and count coding",
      "Pathology and biopsy billing",
      "Cosmetic vs. medical separation",
    ],
    solutions: [
      "Precise lesion/biopsy coding",
      "Integrated pathology billing",
      "Clear cosmetic/medical splits",
    ],
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    icon: "Baby",
    blurb: "Vaccines, well-child visits, and age-based coding.",
    intro:
      "Pediatric billing centers on immunizations, well-child visits, and age-specific codes. We make sure every vaccine and visit is reimbursed in full.",
    challenges: [
      "Vaccine and administration coding",
      "Well-child and EPSDT visits",
      "Age-based code selection",
    ],
    solutions: [
      "Complete vaccine/admin capture",
      "Well-child visit coding",
      "Age-appropriate code selection",
    ],
  },
  {
    slug: "obgyn",
    name: "OB/GYN",
    icon: "Flower2",
    blurb: "Global maternity packages and surgical GYN billing.",
    intro:
      "OB/GYN billing combines global maternity packages with surgical and diagnostic GYN services. We manage the global periods and carve-outs accurately.",
    challenges: [
      "Global maternity package billing",
      "Antepartum/postpartum carve-outs",
      "Surgical GYN coding",
    ],
    solutions: [
      "Accurate global-package management",
      "Correct antepartum/postpartum splits",
      "Specialized GYN surgical coding",
    ],
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "BrainCircuit",
    blurb: "EMG, EEG, and time-intensive E/M reimbursement.",
    intro:
      "Neurology billing spans complex diagnostics like EMG and EEG alongside time-intensive cognitive care. We capture the full value of every encounter.",
    challenges: [
      "EMG / EEG diagnostic coding",
      "Prolonged and cognitive-care services",
      "Prior authorization for testing",
    ],
    solutions: [
      "Accurate diagnostic-test coding",
      "Prolonged-service capture",
      "Authorization management",
    ],
  },
  {
    slug: "oncology",
    name: "Oncology",
    icon: "Ribbon",
    blurb: "Chemotherapy, infusion, and drug-unit billing accuracy.",
    intro:
      "Oncology billing demands exact drug-unit, infusion, and chemotherapy administration coding. We protect against costly underpayments on high-dollar claims.",
    challenges: [
      "Drug-unit (J-code) accuracy",
      "Infusion and administration timing",
      "High-dollar claim scrutiny",
    ],
    solutions: [
      "Precise drug-unit billing",
      "Correct infusion/admin coding",
      "Underpayment detection on drug claims",
    ],
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "Droplets",
    blurb: "In-office procedures and diagnostic billing optimized.",
    intro:
      "Urology blends office procedures, diagnostics, and surgery. We code each setting correctly so nothing is left unbilled.",
    challenges: [
      "In-office procedure coding",
      "Diagnostic and imaging billing",
      "Surgical global periods",
    ],
    solutions: [
      "Accurate office-procedure capture",
      "Diagnostic billing optimization",
      "Global-period management",
    ],
  },
  {
    slug: "dental",
    name: "Dental",
    icon: "Smile",
    blurb: "Medical-dental cross-coding and benefit coordination.",
    intro:
      "Dental practices increasingly bill medical insurance for qualifying procedures. We handle medical-dental cross-coding and benefit coordination cleanly.",
    challenges: [
      "Medical-dental cross-coding",
      "Coordination of benefits",
      "Pre-authorization requirements",
    ],
    solutions: [
      "Accurate cross-coding (CDT/CPT)",
      "Benefit coordination",
      "Pre-auth management",
    ],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    icon: "Pill",
    blurb: "Endoscopy, screening vs. diagnostic, and modifier rules.",
    intro:
      "GI billing hinges on endoscopy coding and the screening-vs-diagnostic distinction that drives patient cost-share. We get the modifiers and intent right.",
    challenges: [
      "Endoscopy and procedure coding",
      "Screening vs. diagnostic colonoscopy",
      "Modifier and bundling rules",
    ],
    solutions: [
      "Accurate endoscopy coding",
      "Correct screening/diagnostic billing",
      "Proper modifier application",
    ],
  },
  {
    slug: "anesthesia",
    name: "Anesthesia",
    icon: "Syringe",
    blurb: "Time-unit calculations, modifiers, and medical direction billing.",
    intro:
      "Anesthesia billing runs on base units, time units, and physical-status modifiers that few billers get right. We calculate every claim precisely and bill medical direction correctly.",
    challenges: [
      "Base + time unit calculations",
      "Medical direction / supervision modifiers",
      "Physical-status and qualifying circumstances",
    ],
    solutions: [
      "Accurate time-unit billing",
      "Correct direction/supervision modifiers",
      "Full modifier and add-on capture",
    ],
  },
  {
    slug: "sleep-medicine",
    name: "Sleep Medicine",
    icon: "Moon",
    blurb: "Sleep study coding, prior auth, and facility-vs-home billing.",
    intro:
      "Sleep medicine billing hinges on prior authorization and correct coding for in-lab versus home sleep studies. We keep authorizations current and claims compliant.",
    challenges: [
      "Prior authorization for sleep studies",
      "In-lab vs. home study coding",
      "Titration and split-night billing",
    ],
    solutions: [
      "Proactive authorization management",
      "Accurate study-type coding",
      "Compliant titration billing",
    ],
  },
  {
    slug: "dme",
    name: "DME",
    icon: "Package",
    blurb: "HCPCS coding, documentation, and Medicare DMEPOS compliance.",
    intro:
      "Durable medical equipment billing is documentation-heavy and unforgiving on compliance. We manage HCPCS coding, medical necessity, and DMEPOS rules so claims hold up.",
    challenges: [
      "HCPCS Level II coding accuracy",
      "Medical-necessity documentation",
      "Medicare DMEPOS compliance",
    ],
    solutions: [
      "Precise HCPCS coding",
      "Documentation and CMN management",
      "DMEPOS-compliant submission",
    ],
  },
];
