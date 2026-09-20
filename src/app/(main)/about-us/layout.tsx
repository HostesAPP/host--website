import type { ReactNode } from "react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "About Hosté",
  description:
    "Learn how Hosté is building Nigeria's premium marketplace for verified hospitality and event staffing.",
  path: "/about-us",
  keywords: [
    "about Hoste",
    "Nigeria event staffing marketplace",
    "hospitality marketplace Nigeria",
  ],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
