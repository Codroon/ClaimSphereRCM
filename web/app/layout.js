import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SITE_URL, organizationSchema } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ClaimSphere RCM — Trusted Healthcare Revenue Cycle Solutions",
    template: "%s | ClaimSphere RCM",
  },
  description:
    "ClaimSphere RCM delivers trusted healthcare revenue cycle management for U.S. providers — medical billing, coding, denial management, and credentialing that maximize reimbursements and reduce denials.",
  keywords: [
    "revenue cycle management",
    "medical billing",
    "medical coding",
    "denial management",
    "healthcare RCM",
    "provider credentialing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ClaimSphere RCM",
    title: "ClaimSphere RCM — Trusted Healthcare Revenue Cycle Solutions",
    description:
      "Trusted healthcare revenue cycle management for U.S. providers — billing, coding, denial management, and credentialing.",
    url: SITE_URL,
    images: [{ url: "/logo512.png", width: 512, height: 512, alt: "ClaimSphere RCM" }],
  },
  twitter: {
    card: "summary",
    title: "ClaimSphere RCM — Trusted Healthcare Revenue Cycle Solutions",
    description:
      "Trusted healthcare revenue cycle management for U.S. providers.",
    images: ["/logo512.png"],
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Toaster position="top-right" richColors />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
