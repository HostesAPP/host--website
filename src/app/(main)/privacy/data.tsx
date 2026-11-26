export const sections = [
  {
    title: "1. Agreement and Acceptance",
    content: (
      <>
        <p>
          These Terms of Use form a legally binding agreement between you and
          Hosté Technology Limited. They govern your access to and use of the
          Hosté platform and related services.
        </p>
        <p>
          By creating an account, booking, being listed, or using the platform,
          you confirm that you have read, understood, and agreed to these Terms
          and our Privacy Policy. If you do not agree, you must not use Hosté.
        </p>
      </>
    ),
  },
  {
    title: "2. Eligibility",
    content: (
      <>
        <p>
          Hosté is strictly for individuals aged 18 and above. Anyone under 18
          is prohibited from registering, creating a profile, making bookings,
          or using any part of the platform.
        </p>
        <p>
          You must provide accurate, complete, and current information when
          creating an account. You are responsible for keeping your account
          information and login credentials secure.
        </p>
      </>
    ),
  },
  {
    title: "3. What Hosté Does",
    content: (
      <>
        <p>
          Hosté is a technology platform and marketplace that connects brands
          with event professionals. We provide the infrastructure that allows
          users to discover one another and arrange bookings.
        </p>
        <p>
          Hosté is not an employer, staffing agency, recruiter, event organiser,
          venue operator, or insurer. A booking creates a direct agreement
          between the Brand and the Hosté.
        </p>
        <p>
          Hostés operate as independent service providers and are responsible
          for their own taxes, licences, insurance, and legal compliance.
        </p>
      </>
    ),
  },
  {
    title: "4. Bookings and Engagements",
    content: (
      <>
        <p>
          Brands must provide accurate booking details, including the event
          date, time, venue, location, role, dress code, and agreed payment.
        </p>
        <p>
          Hostés may accept or reject booking requests at their discretion. A
          booking is confirmed only when the Hosté accepts the request and the
          Brand's payment is successfully received.
        </p>
        <p>
          Both parties are expected to honour the agreed booking terms. Neither
          party may change the agreed price, scope, or duration outside the
          platform to avoid Hosté's fees.
        </p>
      </>
    ),
  },
  {
    title: "5. Accounts and Verification",
    content: (
      <>
        <p>
          Hosté may carry out limited identity and administrative checks using
          information provided by users, including identity details and
          submitted documents.
        </p>
        <p>
          Verification and the Circle badge are not background checks, criminal
          record checks, character references, or guarantees of anyone's safety,
          honesty, or qualifications.
        </p>
        <p>
          Users are responsible for carrying out their own checks before
          entering into bookings or engagements. We may suspend or remove
          accounts where verification fails or suspicious activity is detected.
        </p>
        <p>
          Being listed, verified, or holding a Circle badge does not guarantee
          bookings, income, visibility, or employment opportunities.
        </p>
      </>
    ),
  },
  {
    title: "6. Fees and Commission",
    content: (
      <>
        <p>
          Hosté charges commission on bookings arranged through the platform.
          Current commission rates are:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border-subtle">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary">
              <tr className="text-white">
                <th className="px-4 py-3 font-semibold">Booking type</th>
                <th className="px-4 py-3 font-semibold">Commission</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["One-time / Per event", "20%"],
                ["Part-time", "20%"],
                ["Contract", "30%"],
                ["Full-time", "35%"],
              ].map(([type, rate]) => (
                <tr key={type} className="border-t border-border-sublte">
                  <td className="px-4 py-3">{type}</td>
                  <td className="px-4 py-3 font-semibold">{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Paid features, including the Circle badge, are charged at the prices
          displayed when purchased. Fees are generally non-refundable unless
          these Terms or applicable law provide otherwise.
        </p>
        <p>
          Hosté may update its fees, commissions, and paid features with notice.
          Updated rates apply to future bookings and purchases.
        </p>
      </>
    ),
  },
  {
    title: "7. Payments and Payouts",
    content: (
      <>
        <p>
          Brands must pay the full booking amount upfront through the platform's
          supported payment processor, currently Paystack.
        </p>
        <p>
          Booking funds are held until the event is completed and confirmed by
          the Brand, or automatically released seven days after the event ends
          if no dispute is raised, subject to these Terms.
        </p>
        <p>
          Hosté receives the booking amount after deduction of applicable
          commission and processing charges. Payouts are made only to a Nigerian
          bank account in the Hosté's verified legal name.
        </p>
        <p>
          Payments may be withheld or delayed where fraud, disputes,
          chargebacks, legal requirements, or other irregularities are
          suspected.
        </p>
      </>
    ),
  },
  {
    title: "8. Cancellations and Refunds",
    content: (
      <>
        <p>
          Cancellation terms apply differently depending on which party cancels
          and when the cancellation occurs.
        </p>
        <div className="space-y-3">
          {[
            {
              title: "Hosté cancels",
              description:
                "The Brand receives a full refund, less any non-refundable payment processor charge. The Hosté receives no payment.",
            },
            {
              title: "Brand cancels 48 hours or more before the event",
              description:
                "The Brand receives a full refund, less any non-refundable processor charge.",
            },
            {
              title: "Brand cancels within 48 hours of the event",
              description:
                "The Brand receives 50% of the booking amount. The remaining 50% is paid to the Hosté, less Hosté's commission.",
            },
            {
              title: "Brand fails to show up",
              description:
                "Where the Brand fails to show up, the venue is closed, or the event does not take place because of the Brand, no refund is issued and the Hosté is paid less commission.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-testimony-card p-4">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="mt-1">{item.description}</p>
            </div>
          ))}
        </div>
        <p>
          Approved refunds are processed within 24 hours to three business days.
          Banks and payment providers may require additional time.
        </p>
        <p>
          Booking disputes relating to non-performance, lateness, appearance, or
          conduct must be reported within 48 hours after the event ends.
        </p>
      </>
    ),
  },
  {
    title: "9. Safety and User Responsibilities",
    content: (
      <>
        <p>
          Every user is responsible for their own safety, conduct, belongings,
          and decisions before, during, and after a booking.
        </p>
        <p>Hostés should:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Verify the Brand and venue before accepting a booking.</li>
          <li>Confirm the event location, role, and working conditions.</li>
          <li>Share booking details and live location with someone trusted.</li>
          <li>Arrange safe transportation to and from events.</li>
          <li>Leave any event where they feel unsafe or pressured.</li>
        </ul>
        <p>
          Brands must provide a safe and lawful working environment, adequate
          security, and reasonable arrangements for safe transportation after
          late events.
        </p>
        <p>
          Hosté is not an emergency service and does not supervise, attend, or
          control events or venues.
        </p>
      </>
    ),
  },
  {
    title: "10. Conduct and Prohibited Activities",
    content: (
      <>
        <p>
          Users must comply with applicable laws and must not use Hosté to
          arrange or promote:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Sexual services, exploitation, trafficking, or prostitution.</li>
          <li>Any activity involving persons under 18.</li>
          <li>
            Fraud, money laundering, illegal drugs, or criminal activities.
          </li>
          <li>
            Harassment, threats, violence, discrimination, or intimidation.
          </li>
          <li>False identities, fake reviews, or fraudulent bookings.</li>
          <li>Unauthorised sharing of private information or images.</li>
          <li>Attempts to bypass platform fees or payment processes.</li>
          <li>
            Unauthorised copying, scraping, or interference with the platform.
          </li>
        </ul>
        <p>
          Hosté may investigate suspected violations and suspend accounts,
          remove content, withhold payments, or report matters to relevant
          authorities where appropriate.
        </p>
      </>
    ),
  },
  {
    title: "11. Content and Intellectual Property",
    content: (
      <>
        <p>
          Users retain ownership of the content they submit. However, by
          submitting content, users grant Hosté permission to host, display,
          reproduce, and use it in connection with operating and promoting the
          platform.
        </p>
        <p>
          Users must own or have permission to share submitted content and must
          ensure that it does not violate another person's rights or applicable
          laws.
        </p>
        <p>
          Hosté's name, logo, designs, software, and platform materials belong
          to Hosté or its licensors. They may not be copied, sold, or
          redistributed without permission.
        </p>
      </>
    ),
  },
  {
    title: "12. Non-Circumvention",
    content: (
      <>
        <p>
          Where Hosté introduces a Brand and a Hosté, both parties must not
          arrange subsequent bookings or payments outside the platform for
          twelve months after the introduction.
        </p>
        <p>
          Violations may result in recovery of the commission that would have
          been earned, reasonable recovery costs, and suspension or removal from
          the platform.
        </p>
      </>
    ),
  },
  {
    title: "13. Third-Party Services",
    content: (
      <>
        <p>
          Hosté may integrate third-party services for payments, identity
          verification, hosting, messaging, and other platform functions. These
          providers operate under their own terms and policies.
        </p>
        <p>
          External websites, event pages, and services are not controlled by
          Hosté. Users are responsible for their interactions and transactions
          with third parties.
        </p>
      </>
    ),
  },
  {
    title: "14. Account Suspension and Termination",
    content: (
      <>
        <p>
          Hosté may suspend, restrict, or terminate accounts for violations of
          these Terms, suspected fraud, safety concerns, repeated cancellations,
          or other legitimate platform-related reasons.
        </p>
        <p>
          Users may close their accounts after completing or cancelling any
          outstanding bookings. Closing an account does not remove outstanding
          payment obligations or ongoing disputes.
        </p>
      </>
    ),
  },
  {
    title: "15. Disclaimers and Limitation of Liability",
    content: (
      <>
        <p>
          The platform is provided on an "as is" and "as available" basis. Hosté
          does not guarantee uninterrupted service, error-free operation, or the
          accuracy of user profiles and information.
        </p>
        <p>
          Hosté is not responsible for disputes, incidents, injuries, losses, or
          damages arising from interactions between users, bookings, events, or
          venues.
        </p>
        <p>
          To the fullest extent permitted by Nigerian law, Hosté's total
          liability is limited to the fees paid by you during the three months
          preceding the event giving rise to the claim, or ₦50,000, whichever is
          less. This does not exclude liability that cannot legally be excluded.
        </p>
      </>
    ),
  },
  {
    title: "16. Privacy and Personal Information",
    content: (
      <>
        <p>
          Our Privacy Policy explains how we collect, use, store, and share
          personal information, including information used for identity
          verification.
        </p>
        <p>
          Users who receive another user's information through the platform may
          use it only for the relevant booking and must not misuse or disclose
          it without authorisation.
        </p>
      </>
    ),
  },
  {
    title: "17. Governing Law and Dispute Resolution",
    content: (
      <>
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria.
        </p>
        <p>
          Before starting legal proceedings, parties must provide written notice
          of the dispute and attempt to resolve it in good faith within 30 days.
        </p>
        <p>
          Disputes that remain unresolved will be settled by arbitration under
          the Arbitration and Mediation Act 2023. The seat of arbitration is
          Lagos, Nigeria, and the proceedings will be conducted in English.
        </p>
      </>
    ),
  },
];
