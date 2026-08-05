import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy & SMS Terms",
  description:
    "ClaimSphere RCM privacy policy and SMS terms — how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PrivacyPolicy />;
}
