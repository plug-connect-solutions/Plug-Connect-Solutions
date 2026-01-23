import React from 'react';
import { Link } from 'react-router-dom';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
          <p className="mb-6 font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p className="mb-6">
            Welcome to Plug Connect Solutions. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By engaging with Plug Connect Solutions ("we," "us," or "our") for digital services, including but not limited to web development, automation, and social media marketing, you agree to comply with and be bound by these terms. If you do not agree to these terms, you may not use our services.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Services Provided</h2>
          <p className="mb-4">
            We provide digital solutions for businesses, including website design, custom software development, system integrations, and digital marketing. The specific scope of work for each project will be defined in a separate proposal or agreement agreed upon by both parties.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Payments & Fees</h2>
          <p className="mb-4">
            <strong>Project Based:</strong> A deposit (typically 50%) is required before work commences, with the balance due upon project completion or before the final handover of assets.
          </p>
          <p className="mb-4">
            <strong>Monthly Retainers:</strong> Fees for ongoing support, maintenance, or marketing services are billed monthly in advance. Failure to pay may result in a suspension of services.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            Upon full payment, the client owns the final designs and code created specifically for their project. Plug Connect Solutions retains the right to use the work in our portfolio and marketing materials. We also retain ownership of any pre-existing code, libraries, or tools used to create the solution.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. User Responsibilities</h2>
          <p className="mb-4">
            You agree to provide all necessary content (text, images, credentials) in a timely manner. Delays in providing these materials may result in project delays. You are responsible for ensuring you have the legal right to use all content you provide to us.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
            Plug Connect Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services; (ii) any conduct or content of any third party on the service.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at <a href="mailto:plugconnectsolutions@proton.me" className="text-accent hover:underline">plugconnectsolutions@proton.me</a> or via our <Link to="/consultation" className="text-accent hover:underline">contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};