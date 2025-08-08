import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            This Privacy Policy describes how we collect, use, and protect your information when you use our application that integrates with QuickBooks Online (QBO). We are committed to protecting your privacy and ensuring the security of your personal and financial data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Company information</li>
            <li>Account credentials for QBO integration</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Financial Data</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>QuickBooks Online account data (with your explicit consent)</li>
            <li>Transaction information</li>
            <li>Customer and vendor data</li>
            <li>Financial reports and analytics</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Technical Information</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Usage patterns and analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>To provide and maintain our QBO integration services</li>
            <li>To process your requests and transactions</li>
            <li>To communicate with you about our services</li>
            <li>To improve our application and user experience</li>
            <li>To comply with legal obligations</li>
            <li>To prevent fraud and ensure security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>QuickBooks Online:</strong> We share data with Intuit's QBO platform as necessary to provide our integration services</li>
            <li><strong>Service Providers:</strong> We may share data with trusted third-party service providers who assist us in operating our application</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational security measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Secure authentication and authorization</li>
            <li>Regular security audits and updates</li>
            <li>Access controls and monitoring</li>
            <li>Compliance with industry security standards</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your personal information only for as long as necessary to provide our services and comply with legal obligations. Financial data from QBO is processed in real-time and not stored longer than necessary for the specific operation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Access:</strong> Request access to your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Objection:</strong> Object to processing of your data</li>
            <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cookies and Tracking</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to improve your experience on our website and application. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            Our application integrates with QuickBooks Online and may use other third-party services. Each of these services has their own privacy policy, and we encourage you to review them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. International Data Transfers</h2>
          <p className="text-gray-700 mb-4">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us through the contact information provided on our website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

