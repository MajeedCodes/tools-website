import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="w-full max-w-[90%] mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Privacy Policy
        </h1>

        <section className="mb-8">
         
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>Web Tools</strong>, we are committed to protecting your privacy and ensuring the security of the information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit or use our platform.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Information We Collect
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 pl-6">
            <li>
              <strong>Non-Personal Data:</strong>
              <ul className="list-disc pl-6">
                <li>Browser type and version.</li>
                <li>Operating system and device information.</li>
                <li>Usage statistics (e.g., pages visited, time spent on the site).</li>
              </ul>
            </li>
            <li>
              <strong>Voluntarily Provided Information:</strong>
              <ul className="list-disc pl-6">
                <li>Contact information (e.g., name, email) when you use our Contact Page.</li>
              </ul>
            </li>
            <li>
              <strong>Tool Usage Data:</strong>
              <p>
                Input data for tools (e.g., text for minification or formatting) is processed locally in your browser and is not stored on our servers.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            How We Use Your Information
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            The data we collect is used for the following purposes:
          </p>
          <ul className="space-y-4 text-lg text-gray-700 pl-6">
            <li>To provide, maintain, and improve our tools and services.</li>
            <li>To respond to user inquiries or feedback.</li>
            <li>To analyze website performance and usage trends.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            We do not sell, rent, or share your information with third parties for marketing purposes.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Cookies and Tracking Technologies
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We may use cookies and similar technologies to enhance your experience on our platform:
          </p>
          <ul className="space-y-4 text-lg text-gray-700 pl-6">
            <li><strong>Session Cookies:</strong> Temporary cookies used to ensure smooth navigation.</li>
            <li><strong>Analytics Cookies:</strong> To track usage statistics and improve our services.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            You can manage or disable cookies in your browser settings, though this may affect the functionality of our platform.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Security
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We employ industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission or storage is entirely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Third-Party Services
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We may use trusted third-party services (e.g., Google Analytics) to monitor and analyze website performance. These services may collect anonymized data, subject to their own privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Rights
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 pl-6">
            <li><strong>Access:</strong> Request a copy of any personal data you’ve provided.</li>
            <li><strong>Correction:</strong> Update or correct your personal information.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data.</li>
          </ul>
         
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Retention
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We only retain personal information for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Changes to This Policy
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We may update this Privacy Policy to reflect changes in our practices or for legal and regulatory reasons. Updates will be posted on this page, and the “Effective Date” will be revised accordingly.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us 
          </p>
         
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
