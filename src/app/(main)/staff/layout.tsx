import type { ReactNode } from "react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Browse Verified Event Staff",
  description:
    "Explore vetted event professionals in Lagos with transparent rates, ratings, skills, and verified profiles.",
  path: "/staff",
  keywords: [
    "browse event staff",
    "Lagos event staff",
    "hire bartender Lagos",
    "hire hostess Lagos",
  ],
});

export default function StaffLayout({ children }: { children: ReactNode }) {
  return children;
}
