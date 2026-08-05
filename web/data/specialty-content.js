// Enriched, rephrased per-specialty page content (modeled on reference structure,
// written in ClaimSphere's voice). Keyed by specialty slug.
export const specialtyContent = {
  cardiology: {
    heroSubtitle:
      "Purpose-built cardiology billing that captures every diagnostic, interventional, and device procedure so your practice collects the full value of the care it delivers.",
    intro: [
      "Cardiology billing lives at the intersection of high procedure volume and unforgiving payer rules, from diagnostic caths and echocardiograms to EP studies and device implants. ClaimSphere RCM pairs AAPC-certified cardiology coders with intelligent claim scrubbing so charges are captured accurately and submitted clean the first time.",
      "We manage your revenue cycle end to end, resolving component-versus-global questions, professional and technical splits, and the modifier logic that trips up most in-house teams. The result is faster reimbursement, fewer write-offs, and a clearer view of the revenue your cardiologists have already earned.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "35%", label: "Collections Boost" },
      { value: "<7 days", label: "Avg. Claim Turnaround" },
    ],
    offers: [
      { title: "Diagnostic Coding", desc: "Accurate coding for echocardiography, stress testing, Holter monitoring, and nuclear cardiology with correct professional and technical component splits." },
      { title: "Interventional Billing", desc: "Precise capture of cardiac catheterization, PCI, and electrophysiology procedures using current CPT and payer-specific bundling rules." },
      { title: "Device Reimbursement", desc: "Complete billing support for pacemaker, ICD, and loop recorder implants, including remote monitoring and device interrogation codes." },
      { title: "Denial Management", desc: "Root-cause analysis and rapid appeals on medical-necessity and modifier denials common to cardiology claims." },
      { title: "Credentialing", desc: "Payer enrollment and re-credentialing for cardiologists and mid-level providers so revenue is never delayed by paperwork." },
    ],
    whyChoose: [
      "AAPC-certified coders who specialize in cardiovascular procedures and diagnostics.",
      "Modifier and bundling expertise that prevents costly downcoding and denials.",
      "Seamless integration with your existing cardiology EHR and PM system.",
      "Transparent reporting that shows exactly where every claim stands.",
      "HIPAA-compliant workflows and rigorous pre-submission audits.",
    ],
    faqs: [
      { q: "How do you handle the professional and technical components of cardiac diagnostics?", a: "We determine whether your practice bills globally or splits the professional and technical components based on where the service was performed and who owns the equipment. Applying modifier 26 or TC correctly protects you from denials and underpayment on studies like echocardiograms and nuclear scans." },
      { q: "Can you bill remote cardiac device monitoring?", a: "Yes. We code and submit remote interrogation and monitoring services for pacemakers, ICDs, and loop recorders, tracking the required monitoring intervals so each billable period is captured. This is a frequently missed revenue stream that we help practices recover." },
      { q: "Do you support both hospital-based and office-based cardiology?", a: "Absolutely. We tailor coding and place-of-service logic to your setting, whether you perform procedures in an inpatient cath lab, an ambulatory surgery center, or your own office. Each environment carries different reimbursement rules that our coders apply accurately." },
    ],
  },
  orthopedics: {
    heroSubtitle:
      "Specialized orthopedic billing that turns complex surgical, fracture, and musculoskeletal documentation into clean, fully reimbursed claims.",
    intro: [
      "Orthopedic billing is among the most detail-intensive in medicine, spanning global surgical packages, fracture care, injections, and durable medical equipment. ClaimSphere RCM combines certified orthopedic coders with disciplined documentation review to ensure every session, procedure, and supply is captured and coded correctly.",
      "From arthroscopy and joint replacement to spine and sports medicine, we manage prior authorizations, global periods, and the modifier sequences that determine whether claims are paid in full. Our approach reduces denials, accelerates cash flow, and lets your surgeons focus on the operating room instead of the billing office.",
    ],
    metrics: [
      { value: "97%", label: "First-Pass Acceptance" },
      { value: "40%", label: "Denial Reduction" },
      { value: "30%", label: "Revenue Increase" },
    ],
    offers: [
      { title: "Surgical Coding", desc: "Expert coding for joint replacement, arthroscopy, and fracture repair with correct global-period and staged-procedure handling." },
      { title: "Prior Authorization", desc: "Proactive authorization management for imaging, surgery, and DME to prevent avoidable denials before care is delivered." },
      { title: "Fracture & Injection Care", desc: "Accurate billing for cast application, fracture management, and joint injections including the supplies and imaging involved." },
      { title: "Modifier Precision", desc: "Correct application of modifiers 25, 59, 78, and 79 to separate distinct services and protect surgical reimbursement." },
      { title: "Denial Recovery", desc: "Targeted appeals and A/R follow-up on bundling and medical-necessity denials common to orthopedic claims." },
    ],
    whyChoose: [
      "Certified coders fluent in ICD-10, CPT, and HCPCS for musculoskeletal care.",
      "Deep command of global surgical packages and staged-procedure billing.",
      "Prior-authorization workflows that stop denials before they start.",
      "Real-time A/R visibility across every surgeon and location.",
      "Compliance-first processes with pre-submission claim audits.",
    ],
    faqs: [
      { q: "How do you manage global surgical periods for orthopedic procedures?", a: "We track each procedure's global period and apply the correct modifiers to distinguish unrelated visits, staged procedures, and returns to the operating room. This ensures you are paid for services outside the global package rather than having them incorrectly bundled." },
      { q: "Can you handle prior authorizations for surgeries and imaging?", a: "Yes. Our team secures authorizations for MRIs, surgical procedures, and durable medical equipment before services are rendered. Proactive authorization is one of the most effective ways to prevent the denials that plague orthopedic practices." },
      { q: "Do you bill for durable medical equipment dispensed in the office?", a: "We do. Braces, splints, and other DME supplied in your office are coded with the appropriate HCPCS codes and modifiers. We also verify coverage in advance so these items are reimbursed rather than written off." },
    ],
  },
  dermatology: {
    heroSubtitle:
      "Dermatology billing that documents every lesion, biopsy, and procedure with precision so both medical and cosmetic services are reimbursed accurately.",
    intro: [
      "Dermatology billing demands exacting documentation of lesion size, count, location, and pathology to support each code and defend it against payer scrutiny. ClaimSphere RCM brings certified dermatology coders and structured documentation review to capture the full detail of biopsies, excisions, destructions, and Mohs surgery.",
      "Modern dermatology spans medical, surgical, and cosmetic care, each with distinct coverage and coding rules. We manage the global surgical packages, pathology billing, and payer nuances that determine reimbursement, helping your practice reduce denials and collect faster across the full range of services you provide.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "38%", label: "Collections Boost" },
      { value: "<6 days", label: "Avg. Claim Turnaround" },
    ],
    offers: [
      { title: "Lesion & Excision Coding", desc: "Precise coding driven by lesion size, count, and anatomical site for biopsies, excisions, and destructions." },
      { title: "Mohs Surgery Billing", desc: "Accurate staging and reporting of Mohs micrographic surgery including tissue blocks and reconstruction." },
      { title: "Dermatopathology", desc: "Correct billing of pathology specimens with proper professional and technical component handling." },
      { title: "Cosmetic vs. Medical", desc: "Clear separation of covered medical services from self-pay cosmetic procedures to protect compliance and revenue." },
      { title: "Denial Management", desc: "Rapid appeals on medical-necessity and bundling denials that frequently affect dermatology claims." },
    ],
    whyChoose: [
      "AAPC-certified coders experienced in medical, surgical, and cosmetic dermatology.",
      "Documentation review that ties every code to lesion detail and pathology.",
      "Expertise in global periods and dermatopathology component billing.",
      "Clear handling of cosmetic self-pay versus insurance-covered care.",
      "HIPAA-compliant workflows with pre-submission accuracy checks.",
    ],
    faqs: [
      { q: "How does lesion documentation affect my reimbursement?", a: "Excision and destruction codes are selected based on lesion size, count, and whether the lesion is benign or malignant. We ensure your notes capture these details so the correct code is billed and supported, which prevents downcoding and denials on audit." },
      { q: "Can you bill both the surgery and the pathology?", a: "Yes. When your practice performs and reads specimens, we bill the professional and technical components of dermatopathology correctly. If a specimen is sent out, we code only the services you rendered to avoid duplicate or improper billing." },
      { q: "How do you handle cosmetic procedures?", a: "Cosmetic services are generally not covered by insurance, so we clearly separate them from medically necessary care and support your self-pay workflow. When a procedure has both medical and cosmetic elements, we document and code the covered portion appropriately." },
    ],
  },
  pediatrics: {
    heroSubtitle:
      "Pediatric billing built around vaccines, well-child visits, and age-specific coding so growing practices capture every dollar of earned revenue.",
    intro: [
      "Pediatric billing carries its own rulebook, from vaccine administration and counseling codes to well-child visit bundling and newborn care. ClaimSphere RCM applies certified pediatric coding expertise to capture immunizations, developmental screenings, and preventive services that in-house teams routinely miss.",
      "With thin margins and heavy Medicaid participation, pediatric practices need clean claims and fast turnaround to stay healthy. We manage eligibility, coding, and denial prevention across commercial and state Medicaid payers so your practice is reimbursed accurately for the full scope of care.",
    ],
    metrics: [
      { value: "97%", label: "Clean Claim Rate" },
      { value: "25%", label: "Revenue Increase" },
      { value: "35%", label: "Denial Reduction" },
    ],
    offers: [
      { title: "Vaccine Billing", desc: "Accurate capture of vaccine product and administration codes, including counseling and multiple-component immunizations." },
      { title: "Well-Child Visits", desc: "Correct coding of preventive visits, developmental screenings, and any separately billable sick-visit services." },
      { title: "Newborn Care", desc: "Precise billing for newborn and inpatient pediatric services across the initial days of care." },
      { title: "Medicaid Expertise", desc: "State-specific Medicaid coding and eligibility handling to reduce denials on your largest payer mix." },
      { title: "Denial Prevention", desc: "Proactive claim scrubbing and appeals focused on the bundling and modifier issues common in pediatrics." },
    ],
    whyChoose: [
      "Certified coders who understand vaccine, screening, and age-based coding rules.",
      "Deep experience with commercial and state Medicaid payer requirements.",
      "Correct use of modifier 25 to bill preventive and sick visits together.",
      "Fast, accurate claim submission that protects thin pediatric margins.",
      "Transparent reporting and HIPAA-compliant, audit-ready workflows.",
    ],
    faqs: [
      { q: "How do you bill a sick visit performed during a well-child exam?", a: "When a significant, separately identifiable problem is addressed during a preventive visit, we append modifier 25 to the office visit so both services are reimbursed. Proper documentation of the two distinct services is essential, and we review notes to ensure the claim holds up." },
      { q: "Can you handle vaccine administration coding correctly?", a: "Yes. We bill both the vaccine product and its administration, including the additional administration codes for multi-component vaccines and the counseling codes for younger patients. Missing these is a common source of lost pediatric revenue that we help you recover." },
      { q: "Do you work with state Medicaid programs?", a: "We do. Because pediatric practices depend heavily on Medicaid, our coders stay current with state-specific rules, fee schedules, and eligibility requirements. This reduces denials and keeps reimbursement flowing from your highest-volume payers." },
    ],
  },
  neurology: {
    heroSubtitle:
      "Neurology billing engineered for complex diagnostics and chronic care, maximizing reimbursement on EEGs, EMGs, and long-term management.",
    intro: [
      "Neurology billing blends time-based evaluation and management with technically demanding diagnostics such as EEGs, EMGs, and nerve conduction studies. ClaimSphere RCM combines certified neurology coders with intelligent claim review to capture study components, prolonged services, and chronic care management accurately.",
      "From stroke care to epilepsy and neuromuscular disease, we handle the documentation, modifiers, and payer rules that govern neurological reimbursement end to end. Our process reduces denials, shortens the payment cycle, and gives your practice full visibility into every claim.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "40%", label: "Collections Boost" },
      { value: "<7 days", label: "Avg. Claim Turnaround" },
    ],
    offers: [
      { title: "Diagnostic Testing", desc: "Accurate coding of EEG, EMG, and nerve conduction studies with correct professional and technical components." },
      { title: "E/M Optimization", desc: "Precise evaluation and management coding for complex, time-based neurology encounters and prolonged services." },
      { title: "Chronic Care Management", desc: "Capture of care management and monitoring services for patients with ongoing neurological conditions." },
      { title: "Denial Management", desc: "Targeted appeals on medical-necessity denials that frequently affect neurological diagnostics." },
      { title: "EHR Integration", desc: "Seamless connection to your neurology EHR for clean charge capture and real-time claim tracking." },
    ],
    whyChoose: [
      "AAPC-certified coders specialized in neurological diagnostics and E/M.",
      "Correct component splitting on EEG, EMG, and nerve conduction billing.",
      "Expertise in time-based and prolonged-service documentation.",
      "Proactive claim scrubbing that catches errors before submission.",
      "Scalable, HIPAA-compliant support for solo and group practices.",
    ],
    faqs: [
      { q: "How do you bill EMG and nerve conduction studies?", a: "These studies have specific unit and component rules, and we code the professional and technical portions based on where the test was performed and who owns the equipment. We also track the number of studies and muscles tested so the correct units are billed and supported by documentation." },
      { q: "Can you optimize time-based E/M coding for neurology?", a: "Yes. Many neurology encounters qualify for higher-level or prolonged-service codes based on total time and complexity. We review documentation to ensure the visit level accurately reflects the work performed, which protects revenue without overcoding." },
      { q: "Do you support chronic care management billing?", a: "We do. Patients with ongoing neurological conditions often qualify for care management services, and we capture the required time and care-coordination elements. This is a recurring revenue stream that many neurology practices underutilize." },
    ],
  },
  oncology: {
    heroSubtitle:
      "Oncology billing that masters chemotherapy administration, drug reimbursement, and complex modifiers so cancer practices protect every dollar of margin.",
    intro: [
      "Oncology billing is uniquely high-stakes, combining expensive infused drugs, precise administration timing, and strict payer authorization requirements. ClaimSphere RCM deploys certified oncology coders who accurately capture drug units, administration hierarchies, and the modifiers that determine whether costly claims are paid in full.",
      "Across medical, surgical, and radiation oncology, we manage prior authorizations, clean-claim submission, and aggressive denial recovery to safeguard thin drug margins. Our end-to-end approach shortens the revenue cycle and keeps your practice financially strong while your team focuses on patient care.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "40%", label: "Denial Reduction" },
      { value: "<7 days", label: "Avg. Claim Turnaround" },
    ],
    offers: [
      { title: "Chemotherapy Coding", desc: "Accurate infusion and injection coding with correct initial, sequential, and concurrent administration hierarchy." },
      { title: "Drug Reimbursement", desc: "Precise J-code unit calculation and wastage documentation to protect margins on high-cost oncology drugs." },
      { title: "Prior Authorization", desc: "Proactive authorization for chemotherapy, radiation, and imaging to prevent denials on expensive services." },
      { title: "Radiation Oncology", desc: "Correct coding of treatment planning, delivery, and management across the radiation therapy course." },
      { title: "Denial Recovery", desc: "Aggressive appeals and A/R follow-up on high-dollar denials that materially affect cash flow." },
    ],
    whyChoose: [
      "AAPC-certified coders experienced in medical, surgical, and radiation oncology.",
      "Exact J-code unit and drug wastage billing that defends your margins.",
      "Mastery of infusion administration hierarchy and timing rules.",
      "Prior-authorization workflows that stop high-dollar denials upfront.",
      "Compliance-driven, audit-ready processes with pre-submission review.",
    ],
    faqs: [
      { q: "How do you handle chemotherapy administration coding?", a: "Infusion and injection services follow a strict hierarchy of initial, sequential, and concurrent administrations tied to start and stop times. We code these based on documented timing so each administration is captured correctly, which is critical for both compliance and full reimbursement." },
      { q: "Can you bill for drug wastage?", a: "Yes. When a single-dose vial is partially used, the discarded amount is billable with the JW modifier and proper documentation. We ensure wastage is captured accurately so your practice is reimbursed for the full cost of expensive oncology drugs." },
      { q: "How do you reduce denials on high-cost claims?", a: "We secure prior authorizations before treatment, verify J-code units against orders, and scrub claims for modifier and medical-necessity issues before submission. When denials do occur, our team pursues rapid, documented appeals because a single high-dollar oncology denial can significantly impact cash flow." },
    ],
  },
  urology: {
    heroSubtitle:
      "Urology billing that untangles overlapping surgical, diagnostic, and oncology codes so your practice is fully reimbursed for complex procedures.",
    intro: [
      "Urology billing is complicated by procedures that overlap with oncology, gastroenterology, and gynecology, along with high-cost surgeries and specialized terminology. ClaimSphere RCM applies certified urology coders and rigorous documentation review to bill cystoscopies, lithotripsy, prostate procedures, and diagnostics accurately.",
      "Without dedicated expertise, urology claims are prone to denials, bundling errors, and payer underpayment on advanced procedures. We manage the full revenue cycle, from eligibility and authorization to coding and denial recovery, so your practice collects the complete value of every service.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "35%", label: "Collections Boost" },
      { value: "40%", label: "Denial Reduction" },
    ],
    offers: [
      { title: "Surgical Coding", desc: "Accurate coding for cystoscopy, lithotripsy, TURP, and prostate procedures with correct bundling and modifier logic." },
      { title: "Diagnostic Billing", desc: "Precise capture of urodynamics, imaging, and in-office diagnostics including professional and technical components." },
      { title: "Global Period Handling", desc: "Correct management of surgical global packages and separately billable post-operative services." },
      { title: "Prior Authorization", desc: "Proactive authorization for advanced procedures to prevent denials and underpayment on high-cost care." },
      { title: "Denial Management", desc: "Focused appeals on bundling and medical-necessity denials that commonly affect urology claims." },
    ],
    whyChoose: [
      "AAPC-certified coders fluent in urology's overlapping surgical and diagnostic codes.",
      "Expertise that prevents payer underpayment on advanced procedures.",
      "Correct global-period and modifier handling to protect surgical revenue.",
      "Authorization and eligibility workflows that reduce avoidable denials.",
      "HIPAA-compliant processes with transparent, real-time reporting.",
    ],
    faqs: [
      { q: "How do you handle codes that overlap with other specialties?", a: "Urology shares procedures and diagnoses with oncology, gastroenterology, and gynecology, so we apply the correct code and modifier for the service actually performed. This precision prevents bundling errors and ensures the right specialty context, which protects reimbursement and compliance." },
      { q: "Can you prevent underpayment on high-cost urology procedures?", a: "Yes. We verify authorization, confirm correct coding, and audit payer remittances against contracted rates to catch underpayments. When a payer reimburses below the expected amount, we pursue the difference so advanced procedures are paid at their full value." },
      { q: "Do you code in-office diagnostics correctly?", a: "We do. In-office services such as urodynamics and cystoscopy carry professional and technical components that must be billed based on setting and equipment ownership. Our coders apply the correct components and modifiers so office-based diagnostics are fully reimbursed." },
    ],
  },
  gastroenterology: {
    heroSubtitle:
      "Specialized gastroenterology billing that captures every endoscopic procedure accurately and turns clean claims into faster, fuller reimbursement.",
    intro: [
      "Gastroenterology revenue depends on getting nuanced procedural coding right the first time. From screening versus diagnostic colonoscopies to modifier selection and moderate sedation, small coding missteps can quietly drain 15 to 20 percent of your annual collections.",
      "ClaimSphere RCM manages your entire gastroenterology revenue cycle so your providers can focus on patients, not paperwork. Our certified coders and dedicated GI team handle eligibility, coding, submission, and denial recovery with the precision this specialty demands.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "35%", label: "Collections Boost" },
      { value: "<7 days", label: "Average Claim Turnaround" },
    ],
    offers: [
      { title: "Screening vs. Diagnostic Coding", desc: "We correctly distinguish preventive screening colonoscopies from diagnostic procedures and apply the right modifiers to protect reimbursement." },
      { title: "Endoscopy & Procedure Coding", desc: "Accurate CPT capture for colonoscopies, EGDs, ERCPs, biopsies, and polyp removals, including moderate sedation reporting." },
      { title: "Modifier Management", desc: "Precise use of modifiers such as 33, 52, 53, and 59 to prevent bundling errors and avoidable denials." },
      { title: "Prior Authorization", desc: "Proactive authorization for advanced diagnostics and therapeutic procedures before the patient is scheduled." },
      { title: "Denial Recovery", desc: "Root-cause analysis and appeals on denied GI claims to recapture revenue that would otherwise be written off." },
    ],
    whyChoose: [
      "Certified coders with deep gastroenterology and endoscopy expertise",
      "Correct screening-to-diagnostic conversions that safeguard reimbursement",
      "Proactive prior authorization to prevent scheduling and payment delays",
      "Transparent reporting and real-time visibility into your revenue cycle",
      "Aggressive AR follow-up and denial prevention built around GI payer rules",
    ],
    faqs: [
      { q: "How do you handle a screening colonoscopy that becomes diagnostic?", a: "When a polyp is found and removed during a screening exam, the procedure shifts to diagnostic and requires modifier 33 or PT depending on the payer. Our coders apply the correct combination so the patient's preventive benefit is honored and your practice is paid accurately." },
      { q: "Do you code moderate sedation separately?", a: "Yes, when the gastroenterologist personally provides moderate sedation and documentation supports it, we report the appropriate sedation codes based on patient age and time. We verify each payer's policy so nothing billable is left uncaptured." },
      { q: "Can you reduce our high GI denial rate?", a: "Absolutely. Most gastroenterology denials trace back to modifier misuse, medical-necessity gaps, or missing authorizations. We correct these upstream and appeal existing denials, typically producing a measurable drop in denial rates within the first few months." },
    ],
  },
  dental: {
    heroSubtitle:
      "Streamlined dental billing that verifies benefits up front, codes treatments cleanly, and accelerates collections for your practice.",
    intro: [
      "Dental billing carries its own complexity, from CDT coding and annual maximums to attachment requirements and frequent plan limitations. When verification and claims are handled loosely, practices lose revenue to preventable denials and slow reimbursement.",
      "ClaimSphere RCM delivers a personalized, end-to-end dental billing solution that keeps your front desk focused on patients. We manage insurance verification, coding, claim submission, and appeals so payments arrive faster and more predictably.",
    ],
    metrics: [
      { value: "32%", label: "Collections Boost" },
      { value: "99%", label: "Clean Claim Rate" },
      { value: "<48 hrs", label: "Payment Posting" },
    ],
    offers: [
      { title: "Insurance Verification", desc: "We confirm coverage, annual maximums, frequency limits, and pre-authorization needs before the patient sits in the chair." },
      { title: "CDT Coding & Claims", desc: "Accurate CDT code selection and clean claim submission through EDI or ADA forms with the right supporting documentation." },
      { title: "Attachment Management", desc: "We attach X-rays, narratives, and perio charts so payers have what they need to approve claims on the first pass." },
      { title: "Payment Posting", desc: "Fast, reconciled remittance posting with write-off verification to catch underpayments and adjustment errors." },
      { title: "Denial Appeals", desc: "Structured review and resubmission of denied dental claims with the documentation needed to overturn them." },
    ],
    whyChoose: [
      "Dedicated dental billing specialists fluent in CDT coding",
      "Up-front benefit verification that prevents surprise denials",
      "Proper attachment handling for higher first-pass approvals",
      "Fast, reconciled payment posting with underpayment detection",
      "Personalized service tailored to your practice's plan mix",
    ],
    faqs: [
      { q: "Do you handle both dental and medical cross-coding?", a: "Yes. Many procedures such as extractions, exams for trauma, and appliances for sleep apnea are billable to medical insurance. We identify cross-coding opportunities and submit to the correct payer to maximize your reimbursement." },
      { q: "How do you reduce claim denials tied to missing X-rays?", a: "Our team knows which procedures require radiographs, narratives, or periodontal charting and attaches them before submission. This proactive approach significantly reduces the documentation-related denials that slow dental practices down." },
      { q: "Will you verify benefits before every appointment?", a: "We verify eligibility, remaining annual maximums, and frequency limitations ahead of each visit. That means accurate patient estimates, fewer billing surprises, and cleaner claims that pay the first time." },
    ],
  },
  obgyn: {
    heroSubtitle:
      "OB/GYN billing and coding solutions that master global maternity packages, surgical procedures, and every phase of your revenue cycle.",
    intro: [
      "OB/GYN practices juggle some of the most intricate billing in medicine, from global maternity packages and split obstetric care to gynecologic surgeries and preventive screenings. Each requires careful coding across multiple care settings and shifting payer rules.",
      "ClaimSphere RCM applies proven best practices to every stage of your OB/GYN revenue cycle, from patient access through denial management. Our certified coders keep collections strong and denials low while your team stays focused on women's health.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "34%", label: "Collections Boost" },
      { value: "30%", label: "Fewer Denials" },
    ],
    offers: [
      { title: "Global Maternity Billing", desc: "We correctly bundle and unbundle antepartum, delivery, and postpartum services and split care when patients change providers." },
      { title: "Surgical & Procedure Coding", desc: "Accurate CPT coding for hysterectomies, laparoscopies, C-sections, and gynecologic procedures, including component and add-on rules." },
      { title: "Global Period Management", desc: "We identify services billable outside the global period so separately reimbursable care isn't lost to bundling." },
      { title: "Eligibility & Authorization", desc: "Verification of pregnancy coverage, benefits, and prior authorizations across each patient's care journey." },
      { title: "Denial Management", desc: "Targeted appeals on maternity and surgical denials to recover revenue and prevent recurring errors." },
    ],
    whyChoose: [
      "Certified coders versed in ICD-10, CPT, and HCPCS for women's health",
      "Expert handling of global maternity and split obstetric billing",
      "Compliance aligned with CMS and AMA guidelines",
      "Accurate global-period tracking that protects billable services",
      "Proactive denial prevention and strong AR follow-up",
    ],
    faqs: [
      { q: "How do you bill global maternity when a patient transfers care?", a: "When a patient begins care with one provider and delivers with another, the global package must be split into antepartum, delivery, and postpartum components. We code each portion based on the visits actually provided so every practice is paid fairly for its share of care." },
      { q: "Can you bill services provided during the global period?", a: "Yes. Problems unrelated to the pregnancy or complications beyond routine care can often be billed separately with the correct modifiers. Our coders review documentation to capture these services without triggering bundling denials." },
      { q: "Do you handle both obstetric and gynecologic surgical claims?", a: "We code the full OB/GYN spectrum, from maternity care to laparoscopic and hysterectomy procedures. Our team applies the correct component, bilateral, and add-on coding rules so complex surgical claims are reimbursed accurately." },
    ],
  },
  "mental-health": {
    heroSubtitle:
      "Mental and behavioral health billing that masters time-based coding, authorizations, and parity rules to optimize every dollar of your revenue cycle.",
    intro: [
      "Behavioral health billing hinges on precise, time-based coding and meticulous documentation. Session length, add-on codes for interactive complexity, and constantly changing payer rules make this one of the most error-prone specialties to bill.",
      "ClaimSphere RCM provides end-to-end mental health billing with certified coders who prioritize accurate coding, timely submission, and denial reduction. From insurance verification to payment posting, we protect your revenue so your clinicians can focus on care.",
    ],
    metrics: [
      { value: "97%", label: "First-Pass Claim Rate" },
      { value: "33%", label: "Revenue Boost" },
      { value: "34%", label: "Lower AR Days" },
    ],
    offers: [
      { title: "Time-Based Coding", desc: "Correct selection of psychotherapy codes such as 90832, 90834, and 90837 based on documented session length." },
      { title: "Add-On & Complexity Codes", desc: "Accurate use of add-on codes like +90785 for interactive complexity and E/M pairings when clinically supported." },
      { title: "Prior Authorization", desc: "Managed authorizations and re-authorizations, including compliance with emergency response timeframes." },
      { title: "Eligibility & Parity Checks", desc: "Verification of behavioral health benefits and coverage limits in line with mental health parity requirements." },
      { title: "Denial Management", desc: "Appeals and root-cause fixes for denials tied to documentation, medical necessity, or coding errors." },
    ],
    whyChoose: [
      "Certified coders specialized in behavioral and mental health billing",
      "Precise time-based coding that maximizes appropriate reimbursement",
      "Compliance with parity laws, CMS, and state regulations",
      "Proactive authorization management to prevent lapses in coverage",
      "HIPAA-secure workflows and transparent revenue reporting",
    ],
    faqs: [
      { q: "How do you choose between the different psychotherapy time codes?", a: "We select codes like 90832, 90834, or 90837 based on the total face-to-face time documented for each session. Because payers scrutinize the 60-minute code closely, we ensure documentation clearly supports the billed duration to avoid downcoding and denials." },
      { q: "Do you bill for interactive complexity and add-on services?", a: "Yes. When the clinical situation involves added complexity, such as third-party involvement or communication barriers, we report add-on code +90785 alongside the primary service. Every add-on is supported by documentation so the claim withstands payer review." },
      { q: "How do you handle prior authorizations for therapy?", a: "We track authorization requirements and session limits for each payer and submit renewals before they lapse. This keeps care uninterrupted and prevents the denials that occur when sessions exceed an expired authorization." },
    ],
  },
  "home-health": {
    heroSubtitle:
      "Home health billing that keeps OASIS coding, PDGM, and Medicare episode claims accurate for stronger revenue and faster reimbursement.",
    intro: [
      "Home health billing runs on precision, from OASIS-driven coding to PDGM episode management and strict Medicare submission timelines. A single documentation or coding gap can delay an entire episode's payment and disrupt agency cash flow.",
      "ClaimSphere RCM delivers end-to-end home health billing designed around the regulatory realities of the industry. We streamline eligibility, coding, and claim submission so your agency gets paid accurately and on time, without the administrative burden.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "30%", label: "Faster Reimbursement" },
      { value: "35%", label: "Fewer Denials" },
    ],
    offers: [
      { title: "OASIS-Based Coding", desc: "Accurate diagnosis coding aligned with OASIS data to optimize case mix and support quality metrics." },
      { title: "PDGM Episode Management", desc: "Proper period grouping, admission source, and clinical grouping to maximize appropriate PDGM reimbursement." },
      { title: "Medicare Claim Submission", desc: "Timely NOA and end-of-period claim submission that keeps episodes compliant and cash flowing." },
      { title: "Eligibility & Authorization", desc: "Verification of Medicare and payer eligibility plus authorizations before care begins." },
      { title: "AR & Denial Management", desc: "Active accounts receivable follow-up and claim corrections to resolve errors and recover payment." },
    ],
    whyChoose: [
      "Coders trained in OASIS, PDGM, and home health regulations",
      "Accurate demographic and insurance entry that prevents downstream errors",
      "Timely NOA and episode claim submission for faster Medicare payment",
      "Proactive eligibility and authorization to reduce workload and denials",
      "Transparent reporting on every episode and outstanding claim",
    ],
    faqs: [
      { q: "How does PDGM affect our home health reimbursement?", a: "Under PDGM, payment is driven by 30-day periods and factors like admission source, timing, and clinical grouping rather than therapy volume. We code and group each period accurately so your agency captures the reimbursement it has earned under the model." },
      { q: "Do you handle Notice of Admission submissions?", a: "Yes. We submit the Notice of Admission within the required timeframe to avoid the payment penalties that accrue for late filing. Staying ahead of these deadlines protects your agency's cash flow across every episode." },
      { q: "How do you keep OASIS coding compliant?", a: "Our coders align diagnosis coding with OASIS assessment data to support both accurate case-mix weighting and quality reporting. This consistency reduces audit risk while ensuring your reimbursement reflects the true acuity of your patients." },
    ],
  },
  chiropractic: {
    heroSubtitle:
      "Chiropractic billing that codes spinal manipulation precisely, proves medical necessity, and maximizes payouts for your practice.",
    intro: [
      "Chiropractic billing demands accuracy on two fronts: detailed clinical documentation and correct translation of care into ICD-10 and CPT codes. From spinal region specificity to bundling rules around manipulation and therapy, small errors can significantly reduce reimbursement.",
      "ClaimSphere RCM serves as your dedicated billing partner, handling clean claim submission and rigorous follow-up so you receive maximum appropriate payouts. While we manage the administrative workflow, your team stays focused on patient outcomes.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "30%", label: "Collections Boost" },
      { value: "<7 days", label: "Claim Turnaround" },
    ],
    offers: [
      { title: "Spinal Manipulation Coding", desc: "Correct CMT code selection by number of spinal regions treated, with accurate documentation of manipulation type." },
      { title: "ICD-10 Diagnosis Coding", desc: "Precise coding of subluxations, facet syndrome, and myofascial pain to establish clear medical necessity." },
      { title: "Modifier & Bundling Rules", desc: "Proper modifier use for manipulation combined with therapeutic exercise or muscle stimulation to prevent revenue loss." },
      { title: "Medical Necessity Support", desc: "Documentation review and treatment-plan alignment to support ongoing care and reduce payer pushback." },
      { title: "Denial & AR Management", desc: "Appeals and persistent follow-up on denied and aging chiropractic claims to recover full reimbursement." },
    ],
    whyChoose: [
      "Coders experienced in chiropractic ICD-10 and CPT coding",
      "Accurate spinal-region and manipulation coding for full payment",
      "Strong medical-necessity documentation that reduces denials",
      "Correct bundling and modifier handling on combined services",
      "Persistent AR follow-up and transparent revenue reporting",
    ],
    faqs: [
      { q: "How do you code spinal manipulation correctly?", a: "Chiropractic manipulative treatment codes are selected by the number of spinal regions treated, so accurate documentation of each region is essential. We match the code to what the record supports, avoiding both undercoding that loses revenue and overcoding that triggers audits." },
      { q: "Why do chiropractic claims get denied for medical necessity?", a: "Payers often deny care they view as maintenance rather than active treatment toward a functional goal. We help align your documentation and treatment plans to clearly demonstrate medical necessity, which reduces these denials and supports continued reimbursement." },
      { q: "Can you bill therapies alongside adjustments?", a: "Yes. Services like therapeutic exercise or electrical muscle stimulation can be billed with manipulation, but they require the correct modifiers to avoid bundling denials. Our coders apply these rules precisely so every distinct service is reimbursed." },
    ],
  },
  "family-practice": {
    heroSubtitle:
      "ClaimSphere RCM helps family practices capture every earned dollar across preventive, chronic, and acute care with clean claims and faster reimbursement.",
    intro: [
      "Family practice billing spans a remarkably broad service mix, from well visits and immunizations to chronic disease management and same-day sick visits. Each encounter carries its own coverage rules, and even small documentation gaps can turn a legitimate claim into a denial.",
      "ClaimSphere RCM builds a revenue cycle around your practice's full scope of care. We align coding, eligibility checks, and payer-specific edits so preventive and problem-oriented services are billed correctly the first time, protecting your cash flow while your team focuses on patients.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "30%", label: "Collections Boost" },
      { value: "<7 days", label: "Average Claim Turnaround" },
    ],
    offers: [
      { title: "Preventive Care Coding", desc: "We apply the correct wellness, screening, and immunization codes with the right frequency and coverage rules to prevent avoidable denials." },
      { title: "Same-Day Visit Modifiers", desc: "We handle Modifier 25 and split preventive-plus-problem visits so both services are captured and paid appropriately." },
      { title: "Multi-Payer Management", desc: "Our team tracks each payer's unique requirements across Medicare, Medicaid, and commercial plans so claims meet every guideline." },
      { title: "Chronic Care Billing", desc: "We support chronic care management and transitional care coding to unlock recurring revenue that many practices leave uncaptured." },
      { title: "Denial Management", desc: "We work root-cause analysis on every denial, correct the issue, and resubmit quickly to recover revenue that would otherwise be lost." },
    ],
    whyChoose: [
      "Certified coders who know the full breadth of family medicine services",
      "Real-time eligibility and benefits verification before every visit",
      "Payer-specific claim scrubbing that catches errors before submission",
      "Transparent reporting so you always see your practice's financial health",
      "Fully HIPAA-compliant workflows and secure data handling",
    ],
    faqs: [
      { q: "Can you bill a preventive visit and a problem visit on the same day?", a: "Yes. When a patient's wellness visit uncovers a separate condition that requires additional evaluation, both services can often be billed using the appropriate modifier. We ensure the documentation supports both codes so the claim is paid rather than denied." },
      { q: "How do you reduce denials for immunizations and screenings?", a: "We verify each payer's coverage frequency and diagnosis requirements before the claim goes out. This upfront checking, combined with accurate coding, keeps preventive services from bouncing back for eligibility or medical-necessity reasons." },
      { q: "Do you help capture chronic care management revenue?", a: "Absolutely. Many family practices provide chronic care coordination without billing for it. We set up the coding and documentation workflow so eligible care management services are captured and reimbursed each month." },
    ],
  },
  "primary-care": {
    heroSubtitle:
      "ClaimSphere RCM delivers precise, code-intensive primary care billing that turns high visit volume into predictable, maximized revenue.",
    intro: [
      "Primary care is one of the most code-intensive and heavily regulated specialties, with detailed documentation demands on even routine visits. High patient volume magnifies every small error, and staff overload often means denials pile up faster than they can be worked.",
      "ClaimSphere RCM takes that burden off your team while keeping you in full control. We combine accurate coding, proactive eligibility verification, and disciplined denial follow-up to keep your cash flow steady and your revenue climbing.",
    ],
    metrics: [
      { value: "98%", label: "First-Pass Acceptance" },
      { value: "35%", label: "Revenue Increase" },
      { value: "40%", label: "Fewer Denials" },
    ],
    offers: [
      { title: "E/M Level Coding", desc: "We code evaluation and management visits to the correct level based on documentation, protecting you from both underbilling and audit risk." },
      { title: "Eligibility Verification", desc: "We confirm coverage and benefits before each visit so claims are not lost to inactive plans or missed authorizations." },
      { title: "Modifier Accuracy", desc: "Our coders apply the right modifiers for bundled and multi-service encounters so every billable service is reimbursed." },
      { title: "EHR Integration", desc: "We connect directly to your EHR or accept manual charge entry, capturing demographics and charges without disrupting your workflow." },
      { title: "Denial Recovery", desc: "We analyze, correct, and resubmit denied claims quickly, then fix the upstream cause to keep them from recurring." },
    ],
    whyChoose: [
      "Expertise in Medicare, Medicaid, and commercial payer rules",
      "High clean-claim rates that speed up reimbursement",
      "Detailed documentation review to support every code billed",
      "Scalable support that keeps pace with high patient volume",
      "Clear financial reporting and dedicated account support",
    ],
    faqs: [
      { q: "How do you make sure E/M visits are coded correctly?", a: "Our certified coders review each visit's documentation against current E/M guidelines to assign the accurate level of service. This protects your revenue from underbilling while keeping you compliant and audit-ready." },
      { q: "Will outsourcing billing mean losing visibility into my practice?", a: "Not at all. You retain full control and gain transparent, real-time reporting on collections, denials, and A/R. We act as an extension of your team, not a black box." },
      { q: "How quickly can you turn around claims?", a: "Most clean claims are submitted within a day or two of charge capture, and our average turnaround stays under a week. Faster submission means faster payment and a healthier cash flow." },
    ],
  },
  "internal-medicine": {
    heroSubtitle:
      "ClaimSphere RCM optimizes internal medicine billing for complex, multi-condition patients so your documentation and coding fully reflect the care you deliver.",
    intro: [
      "Internal medicine often involves medically complex patients with multiple chronic conditions managed in a single visit. That complexity makes accurate E/M leveling, diagnosis coding, and time-based documentation essential to being paid for the full scope of your work.",
      "ClaimSphere RCM structures your revenue cycle around this complexity. We ensure that co-morbidities, care coordination, and higher-acuity encounters are coded and documented correctly, so your reimbursement matches the intensity of care your practice provides.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "32%", label: "Collections Boost" },
      { value: "<7 days", label: "Claim Turnaround" },
    ],
    offers: [
      { title: "Complex E/M Coding", desc: "We accurately level high-acuity visits involving multiple chronic conditions so the care's true complexity is reflected and reimbursed." },
      { title: "Chronic Care Management", desc: "We capture CCM and remote monitoring services that generate recurring revenue for managing your patients' ongoing conditions." },
      { title: "Diagnosis Coding Depth", desc: "Our coders document all relevant co-morbidities with specific ICD-10 codes to support medical necessity and risk-adjusted care." },
      { title: "Prior Authorizations", desc: "We manage authorizations for advanced testing and specialty referrals so services are approved before they are performed." },
      { title: "Denial Management", desc: "We investigate and resolve denials at the root cause, recovering revenue and preventing the same issues from repeating." },
    ],
    whyChoose: [
      "Coders experienced with high-acuity, multi-condition encounters",
      "Accurate risk and diagnosis coding that supports medical necessity",
      "Recurring revenue capture through chronic care and monitoring programs",
      "Proactive eligibility and authorization to prevent front-end denials",
      "Detailed reporting and fully HIPAA-compliant processes",
    ],
    faqs: [
      { q: "How do you handle billing for patients with multiple chronic conditions?", a: "We code every relevant co-morbidity with the appropriate specificity and level the visit to reflect the true medical complexity. This ensures you are reimbursed for the depth of care these patients require rather than defaulting to a lower level." },
      { q: "Can you help us bill for chronic care management?", a: "Yes. Internal medicine practices are ideally positioned for CCM and remote patient monitoring revenue. We build the documentation and coding workflow so these recurring services are captured and paid each month." },
      { q: "How do you support medical necessity for advanced testing?", a: "We verify coverage and secure prior authorizations before testing, and we pair each order with supporting diagnosis codes. This upfront work sharply reduces medical-necessity denials on higher-cost services." },
    ],
  },
  anesthesia: {
    heroSubtitle:
      "ClaimSphere RCM delivers precise anesthesia billing built on accurate base and time units, correct modifiers, and full concurrency compliance for faster, cleaner reimbursement.",
    intro: [
      "Anesthesia billing follows a unique formula of base units, time units, and physical status modifiers that few billing teams truly master. A miscalculated time unit or a misapplied concurrency modifier can quietly erode revenue on nearly every case.",
      "ClaimSphere RCM specializes in the mechanics of anesthesia reimbursement. Our certified coders calculate units accurately, apply the correct medical direction and monitored-care modifiers, and file within payer deadlines so your group is paid fully and on time.",
    ],
    metrics: [
      { value: "99%", label: "Coding Accuracy" },
      { value: "30%", label: "Revenue Improvement" },
      { value: "<7 days", label: "Claim Submission" },
    ],
    offers: [
      { title: "Base & Time Units", desc: "We calculate base and time units precisely from anesthesia records so every minute of care is captured and billed correctly." },
      { title: "Modifier Application", desc: "We apply physical status, medical direction, and monitored anesthesia care modifiers accurately to protect both revenue and compliance." },
      { title: "Concurrency Compliance", desc: "We follow Medicare concurrency and medical-direction rules so supervised and directed cases are billed within regulatory limits." },
      { title: "All Anesthesia Types", desc: "We code local, regional, epidural, spinal, nerve block, and monitored anesthesia care cases with equal precision." },
      { title: "Timely Filing", desc: "We track each payer's filing deadlines and submit promptly so no case is lost to a missed timely-filing window." },
    ],
    whyChoose: [
      "Certified coders fluent in CPT, HCPCS, and ICD-10 anesthesia coding",
      "Accurate unit calculation that captures full case value",
      "Strict adherence to CMS concurrency and medical-direction rules",
      "Correct modifier usage that safeguards revenue and compliance",
      "Support for solo anesthesiologists, groups, and CRNAs alike",
    ],
    faqs: [
      { q: "How are anesthesia charges calculated?", a: "Anesthesia reimbursement is based on base units for the procedure plus time units for case duration, adjusted by applicable modifiers. We calculate these precisely from your records so every case is billed for its full, accurate value." },
      { q: "Do you handle Medicare medical direction and concurrency rules?", a: "Yes. We track how many concurrent cases a provider is directing and apply the correct medical-direction modifiers accordingly. This keeps your billing compliant with CMS rules while capturing the appropriate reimbursement." },
      { q: "Can you bill for CRNA and physician services together?", a: "We handle care-team arrangements by applying the correct modifiers to each provider's portion of the case. This ensures both the anesthesiologist and the CRNA are reimbursed correctly without triggering concurrency denials." },
    ],
  },
  "sleep-medicine": {
    heroSubtitle:
      "ClaimSphere RCM keeps sleep medicine practices reimbursed accurately for studies, titrations, and follow-up care with clean claims and proactive denial prevention.",
    intro: [
      "Sleep medicine billing hinges on precise coding for in-lab and home sleep studies, titrations, and follow-up management, each with strict medical-necessity and prior-authorization requirements. Denial rates in this specialty are notoriously high when documentation and coding are not tightly aligned.",
      "ClaimSphere RCM pairs experienced coders with disciplined front-end verification to keep your claims clean. We confirm authorizations, code studies accurately, and manage denials aggressively so your practice is paid promptly for the diagnostics it performs.",
    ],
    metrics: [
      { value: "98%", label: "Initial Resolution Rate" },
      { value: "25%", label: "Revenue Boost" },
      { value: "<10%", label: "Denial Rate" },
    ],
    offers: [
      { title: "Sleep Study Coding", desc: "We accurately code in-lab polysomnography and home sleep tests with the correct CPT and diagnosis codes to support medical necessity." },
      { title: "Prior Authorization", desc: "We secure authorizations for studies and titrations upfront so services are approved before they are performed." },
      { title: "Titration Billing", desc: "We handle CPAP titration and split-night study coding correctly so these high-value services are fully captured." },
      { title: "Denial Management", desc: "We analyze every denial for its root cause, correct it, and resubmit quickly to recover revenue and prevent repeats." },
      { title: "Eligibility Verification", desc: "We verify coverage and benefits before each study so claims are not lost to inactive plans or missing authorizations." },
    ],
    whyChoose: [
      "Coders well-versed in ICD-10-CM and CPT sleep medicine protocols",
      "Front-end authorization and eligibility checks that stop denials early",
      "Accurate coding for both in-lab and home sleep testing",
      "Aggressive denial follow-up that recovers otherwise lost revenue",
      "Full HIPAA compliance with regular audits and secure data handling",
    ],
    faqs: [
      { q: "Do you handle prior authorizations for sleep studies?", a: "Yes. Most payers require authorization before an in-lab or home sleep study, and missing it is a leading cause of denials. We secure and document authorizations upfront so your studies are approved and payable." },
      { q: "How do you code home sleep tests versus in-lab studies?", a: "Home sleep tests and attended polysomnography use different CPT codes with distinct coverage rules. Our coders select the correct code for each setting and pair it with supporting diagnoses to satisfy medical-necessity requirements." },
      { q: "How can you lower our denial rate?", a: "We combine upfront eligibility and authorization checks with accurate, well-documented coding before claims go out. When denials do occur, we work them at the root cause, which steadily drives your denial rate down over time." },
    ],
  },
  dme: {
    heroSubtitle:
      "ClaimSphere RCM streamlines durable medical equipment billing from intake to reimbursement with complete documentation, accurate HCPCS coding, and fewer denials.",
    intro: [
      "DME billing is uniquely documentation-driven, requiring detailed prescriptions, medical necessity notes, and certificates of medical necessity before a claim can even be considered. Missing paperwork, incorrect HCPCS codes, and rental-versus-purchase confusion cause denials that stall cash flow for suppliers and home health agencies.",
      "ClaimSphere RCM manages the full DME revenue cycle so nothing falls through the cracks. We verify documentation, secure authorizations, code equipment correctly, and follow up on aging claims to keep your reimbursement fast and predictable.",
    ],
    metrics: [
      { value: "98%", label: "Clean Claim Rate" },
      { value: "35%", label: "Faster Cash Flow" },
      { value: "<7 days", label: "Claim Turnaround" },
    ],
    offers: [
      { title: "HCPCS Coding & Modifiers", desc: "We assign the correct HCPCS codes and modifiers for each item so claims reflect exactly what was dispensed." },
      { title: "Documentation Review", desc: "We validate prescriptions, medical necessity notes, and CMNs before submission to prevent the most common DME denials." },
      { title: "Prior Authorization", desc: "We manage authorizations across Medicare, Medicaid, and commercial payers so equipment is approved before delivery." },
      { title: "Rental vs. Purchase Billing", desc: "We handle capped rental and purchase billing correctly, tracking rental months so recurring claims are filed accurately." },
      { title: "A/R Follow-Up", desc: "We monitor claim aging and pursue every open balance with timely follow-up, payment posting, and denial resolution." },
    ],
    whyChoose: [
      "Deep expertise in DME-specific documentation and coding rules",
      "Complete CMN and medical-necessity validation before submission",
      "Accurate HCPCS and modifier coding across all equipment types",
      "Prior-authorization management for Medicare, Medicaid, and commercial plans",
      "Disciplined A/R follow-up that shortens payment cycles",
    ],
    faqs: [
      { q: "Why do so many DME claims get denied?", a: "Most DME denials trace back to incomplete documentation, missing CMNs, incorrect HCPCS codes, or absent prior authorizations. We review each of these before the claim goes out, which sharply reduces denials and speeds up payment." },
      { q: "How do you handle rental versus purchase billing?", a: "Certain equipment is billed as a capped rental over several months while other items are purchased outright, and mixing them up causes denials. We track rental schedules and apply the correct billing method so each recurring claim is filed accurately." },
      { q: "Do you support a wide range of equipment types?", a: "Yes. We bill for CPAP and BiPAP units, oxygen equipment, wheelchairs, hospital beds, orthotics, prosthetics, diabetic and wound-care supplies, and more. Each category is coded to its specific HCPCS and coverage rules." },
    ],
  },
};
