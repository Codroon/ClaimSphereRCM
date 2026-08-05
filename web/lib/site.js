// Central site configuration used for metadata, canonical URLs, sitemap,
// robots, and JSON-LD structured data.

export const SITE_URL = "https://claimspherercm.com";

export const companyInfo = {
  name: "ClaimSphere RCM",
  legalName: "ClaimSphere RCM LLC",
  phone: "+1 (307) 400-1621",
  email: "info@claimspherercm.com",
  address: {
    street: "525 Randall Ave Ste 100",
    city: "Cheyenne",
    region: "WY",
    postalCode: "82001",
    country: "US",
  },
  linkedin: "https://www.linkedin.com/company/claimspherercm/",
};

// Organization / MedicalBusiness JSON-LD for the site root.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  name: companyInfo.name,
  legalName: companyInfo.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo512.png`,
  description:
    "Trusted healthcare revenue cycle management for U.S. providers — medical billing, coding, denial management, and credentialing.",
  telephone: companyInfo.phone,
  email: companyInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: companyInfo.address.street,
    addressLocality: companyInfo.address.city,
    addressRegion: companyInfo.address.region,
    postalCode: companyInfo.address.postalCode,
    addressCountry: companyInfo.address.country,
  },
  sameAs: [companyInfo.linkedin],
};
