import type { Metadata } from "next";

const fallbackUrl = "https://hoste.ng";

export const siteConfig = {
  name: "Hoste",
  displayName: "Hosté",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  description:
    "Hosté connects brands, clubs, hotels, and event planners in Nigeria with verified event staff, hosts, bartenders, performers, and hospitality talent.",
  ogImage: "/images/hosteabout.jpg",
};

const baseKeywords = [
  "event staffing Nigeria",
  "event staff Lagos",
  "hire hostesses Nigeria",
  "hospitality staffing",
  "bartenders Lagos",
  "verified event staff",
  "Hoste",
  "Hosté",
];

type SeoMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createSeoMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: SeoMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.displayName,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Hosté event staffing marketplace",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export const publicRoutes = [
  {
    path: "/",
    title: "Hire Verified Event Staff in Nigeria",
    description:
      "Book verified hostesses, bartenders, ushers, performers, chefs, and hospitality staff for events across Nigeria.",
    priority: 1,
  },
  {
    path: "/staff",
    title: "Browse Verified Event Staff",
    description:
      "Explore vetted event professionals in Lagos with transparent rates, ratings, skills, and verified profiles.",
    priority: 0.9,
  },
  {
    path: "/find-staff",
    title: "Download Hosté to Book Event Staff",
    description:
      "Get the Hosté app and start booking reliable event staff for hospitality, brand activations, clubs, and private events.",
    priority: 0.8,
  },
  {
    path: "/how-it-works",
    title: "How Hosté Event Staffing Works",
    description:
      "See how Hosté helps organizers discover, book, brief, and pay verified event staff through secure escrow.",
    priority: 0.8,
  },
  {
    path: "/about-us",
    title: "About Hosté",
    description:
      "Learn how Hosté is building Nigeria's premium marketplace for verified hospitality and event staffing.",
    priority: 0.7,
  },
] as const;
