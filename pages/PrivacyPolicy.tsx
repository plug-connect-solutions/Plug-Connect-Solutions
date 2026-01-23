import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none">
          <p className="mb-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, such as when you fill out a contact form, request customer support, or communicate with us.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Information</h2>
          <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information including confirmations and invoices.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Sharing of Information</h2>
          <p className="mb-4">We do not share your personal information with third parties except as described in this privacy policy or with your consent.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:plugconnectsolutions@proton.me" className="text-accent hover:underline">plugconnectsolutions@proton.me</a>.</p>
        </div>
      </div>
    </div>
  );
};