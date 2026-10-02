import type { ReactNode } from "react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "How Hosté Event Staffing Works",
  description:
    "See how Hosté helps organizers discover, book, brief, and pay verified event staff through secure escrow.",
  path: "/how-it-works",
  keywords: [
    "event staffing process",
    "secure event staff booking",
    "event staffing escrow",
  ],
});

export default function HowItWorksLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
