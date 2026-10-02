import type { Metadata } from "next";
import { PROFILE } from "@/lib/content";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of ${PROFILE.displayName}'s portfolio site.`,
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="October 2, 2026"
    >
      <section>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of this personal portfolio site (the &quot;Site&quot;) operated
          by <strong>{PROFILE.displayName}</strong>. By accessing or using the
          Site, you agree to these Terms. If you do not agree, please do not
          use the Site.
        </p>
      </section>

      <section>
        <h2>1. Purpose of the Site</h2>
        <p>
          The Site is a personal portfolio showcasing professional experience,
          projects, and writing. It is provided for informational purposes
          only. Nothing on the Site constitutes professional advice or a
          commitment to deliver services.
        </p>
      </section>

      <section>
        <h2>2. Intellectual property</h2>
        <p>
          All content on the Site — including text, graphics, logos, photos,
          design, and code shown as examples — is owned by{" "}
          {PROFILE.displayName} or respective rights holders and is protected
          by applicable copyright and intellectual property laws. You may view
          and share the content for personal, non-commercial purposes with
          proper attribution. You may not copy, modify, redistribute, or use
          the content for commercial purposes without prior written consent.
        </p>
      </section>

      <section>
        <h2>3. Third-party trademarks and content</h2>
        <p>
          Company names, product names, and logos referenced on this Site
          belong to their respective owners. Their appearance does not imply
          endorsement or affiliation unless explicitly stated.
        </p>
      </section>

      <section>
        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Site in a way that violates any law or regulation.
          </li>
          <li>
            Attempt to gain unauthorized access to the Site, its servers, or
            related infrastructure.
          </li>
          <li>
            Interfere with or disrupt the Site, including by introducing
            malware, bots, scrapers, or automated tools without consent.
          </li>
          <li>
            Misrepresent your affiliation with any person or entity when
            contacting me through the Site.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. External links</h2>
        <p>
          The Site may link to third-party websites or services. I do not
          control these external resources and am not responsible for their
          content, policies, or practices. Visit them at your own risk.
        </p>
      </section>

      <section>
        <h2>6. Disclaimer of warranties</h2>
        <p>
          The Site is provided <strong>&quot;as is&quot;</strong> and{" "}
          <strong>&quot;as available&quot;</strong>, without warranties of any
          kind, whether express or implied, including warranties of
          merchantability, fitness for a particular purpose, non-infringement,
          or that the Site will be uninterrupted, timely, secure, or
          error-free.
        </p>
      </section>

      <section>
        <h2>7. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {PROFILE.displayName} shall
          not be liable for any indirect, incidental, special, consequential,
          or punitive damages, or any loss of profits or revenues, arising from
          or related to your use of or inability to use the Site.
        </p>
      </section>

      <section>
        <h2>8. Changes to the Site and Terms</h2>
        <p>
          I may change, suspend, or discontinue any part of the Site at any
          time without notice. I may also update these Terms. Continued use of
          the Site after changes become effective constitutes your acceptance
          of the revised Terms.
        </p>
      </section>

      <section>
        <h2>9. Governing law</h2>
        <p>
          These Terms are governed by and construed in accordance with the
          laws of the Republic of the Philippines, without regard to its
          conflict of laws principles.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Questions about these Terms? Email{" "}
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
