import React from 'react';

const EULA: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">End User License Agreement</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using this application ("the App"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            The App provides integration services with QuickBooks Online (QBO) API, allowing users to connect their accounting data and perform various financial operations. The App acts as an intermediary between users and the QBO platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>You must have a valid QuickBooks Online account to use this service</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You agree to use the App only for lawful purposes and in accordance with this Agreement</li>
            <li>You must not attempt to gain unauthorized access to any part of the service</li>
            <li>You are responsible for all activities that occur under your account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data and Privacy</h2>
          <p className="text-gray-700 mb-4">
            The App may access and process your QuickBooks Online data in accordance with our Privacy Policy. By using the App, you consent to such access and processing. We are committed to protecting your data and will handle it in accordance with applicable data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The App and its original content, features, and functionality are and will remain the exclusive property of the App provider and its licensors. The App is protected by copyright, trademark, and other laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall the App provider, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the App.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The App is provided on an "AS IS" and "AS AVAILABLE" basis. The App provider makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Termination</h2>
          <p className="text-gray-700 mb-4">
            We may terminate or suspend your account and bar access to the App immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms shall be interpreted and governed by the laws of the jurisdiction in which the App provider operates, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this End User License Agreement, please contact us through the contact information provided on our website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default EULA;

