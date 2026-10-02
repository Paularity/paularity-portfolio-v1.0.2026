import type { Metadata } from "next";
import { PROFILE } from "@/lib/content";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${PROFILE.displayName} handles personal information on this portfolio site.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="October 2, 2026"
    >
      <section>
        <p>
          This Privacy Policy describes how{" "}
          <strong>{PROFILE.displayName}</strong> (&quot;I&quot;, &quot;me&quot;,
          or &quot;my&quot;) collects, uses, and protects information when you
          visit this personal portfolio site (the &quot;Site&quot;). This Site
          is operated as a personal portfolio and is not a commercial service.
        </p>
      </section>

      <section>
        <h2>1. Information I collect</h2>
        <p>
          I aim to collect as little information as possible. The following may
          be collected:
        </p>
        <ul>
          <li>
            <strong>Information you provide directly</strong> — for example,
            your name, email address, and message content when you contact me
            via the email link on this Site.
          </li>
          <li>
            <strong>Technical information</strong> — standard server logs
            (IP address, user agent, referring URL, timestamps) and aggregated
            analytics such as page views and country-level location, collected
            automatically by the hosting provider (Vercel).
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How I use information</h2>
        <ul>
          <li>To respond to inquiries and professional outreach.</li>
          <li>
            To understand how the Site is used so I can improve performance and
            content.
          </li>
          <li>
            To secure the Site and investigate suspected abuse or misuse.
          </li>
        </ul>
        <p>
          I do not sell, rent, or trade personal information, and I do not use
          your information for advertising.
        </p>
      </section>

      <section>
        <h2>3. Cookies and similar technologies</h2>
        <p>
          This Site does not set tracking cookies for advertising. The hosting
          platform may set minimal cookies required for Site functionality,
          security, and anonymized analytics.
        </p>
      </section>

      <section>
        <h2>4. Third-party services</h2>
        <p>
          The Site is hosted on <a href="https://vercel.com">Vercel</a>, which
          processes requests and may collect standard log and analytics data as
          described in its own privacy policy. Email sent to me is handled by
          my email provider.
        </p>
      </section>

      <section>
        <h2>5. Data retention</h2>
        <p>
          Emails you send are retained for as long as needed to communicate
          with you or until you request deletion. Server and analytics logs are
          retained for a limited period in accordance with the hosting
          provider&apos;s defaults.
        </p>
      </section>

      <section>
        <h2>6. Your rights</h2>
        <p>
          You may contact me at{" "}
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a> to request
          access to, correction of, or deletion of any personal information you
          have shared with me, subject to applicable law.
        </p>
      </section>

      <section>
        <h2>7. Children&apos;s privacy</h2>
        <p>
          This Site is not directed to children under 13, and I do not
          knowingly collect personal information from children.
        </p>
      </section>

      <section>
        <h2>8. Changes to this policy</h2>
        <p>
          I may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date above indicates when the latest changes took
          effect.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
