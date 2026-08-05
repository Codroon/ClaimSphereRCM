import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ClaimSphere RCM. Tell us about your practice and our revenue cycle specialists will connect with you within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact ClaimSphere RCM",
    description:
      "Questions about medical billing or revenue cycle management? Contact our team for a free, no-obligation consultation.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
