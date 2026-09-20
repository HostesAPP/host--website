import type { ReactNode } from "react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Download Hosté to Book Event Staff",
  description:
    "Get the Hosté app and start booking reliable event staff for hospitality, brand activations, clubs, and private events.",
  path: "/find-staff",
  keywords: [
    "book event staff app",
    "event staffing app Nigeria",
    "hire hospitality staff",
  ],
});

export default function FindStaffLayout({ children }: { children: ReactNode }) {
  return children;
}
