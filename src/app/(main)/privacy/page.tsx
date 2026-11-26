"use client";

import Button from "@/components/button";
import { sections } from "./data";
import { useRouter } from "next/navigation";

export default function TermsOfUsePage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background px-6 py-20 text- md:py-28">
        <div className="absolute -right-32 -top-40 h-112.5 w-112.5 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-48 left-1/2 h-87.5 w-87.5 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <span className="inline-flex rounded-full border border-primary px-4 py-1.5 text-xs font-medium text-primary">
            LEGAL
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Terms of <span className="text-primary">Use</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            The rules and guidelines for using Hosté, the platform connecting
            brands with event professionals.
          </p>

          <p className="mt-8 text-sm text-slate-400">
            Last updated: 8 October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          {/* Important notice */}
          <div className="mb-12 rounded-2xl border border-primary bg-secondary p-6 md:p-8">
            <h2 className="text-lg font-bold">Important things to know</h2>

            <ul className="mt-5 space-y-3 text-sm leading-7">
              {[
                "You must be at least 18 years old to use Hosté.",
                "Hosté is a marketplace, not an employer or staffing agency.",
                "Being listed or verified does not guarantee bookings or income.",
                "Users are responsible for their own safety and must verify brands and venues.",
                "Cancellations, refunds, commissions, and payouts are subject to these Terms.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Terms sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 md:text-base">
                  {section.content}
                </div>
              </article>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 rounded-2xl bg-card p-8 md:p-10">
            <h2 className="text-2xl font-bold">Questions about our Terms?</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 mb-5">
              If you have questions, need clarification, or wish to report a
              concern regarding these Terms, please contact our team.
            </p>

            <Button
              text="Contact →"
              className="bg-primary w-fit text-white"
              onClick={() => router.push("mailto:hello@bookhostes.com")}
            />

            <p className="mt-6 text-xs">
              Hosté Technology Limited · Lagos, Nigeria
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
