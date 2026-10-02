import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Hanken_Grotesk, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import { absoluteUrl, createSeoMetadata, siteConfig } from "@/lib/seo";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createSeoMetadata({
    title: "Hosté | Hire Verified Event Staff in Nigeria",
    description: siteConfig.description,
  }),
  title: {
    default: "Hosté | Hire Verified Event Staff in Nigeria",
    template: "%s | Hosté",
  },
  applicationName: siteConfig.displayName,
  authors: [{ name: "Hosté" }],
  creator: "Hosté",
  publisher: "Hosté",
  category: "event staffing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.displayName,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/images/logo.png"),
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.displayName,
      url: absoluteUrl("/"),
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/#service"),
      name: "Verified event staffing",
      serviceType: "Event staffing marketplace",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: {
        "@type": "Country",
        name: "Nigeria",
      },
      description: siteConfig.description,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <GoogleTagManager gtmId="GTM-NFL5DVCS" />
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
