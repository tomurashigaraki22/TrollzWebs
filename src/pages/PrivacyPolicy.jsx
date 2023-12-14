import React from "react";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-[#fde7d9] to-[#fee5d7]">
        <Navbar/>
    <div className="max-w-2xl mx-auto p-20 bg-black text-white">
      <h1 className="text-4xl mb-6 font-bold">Privacy Policy</h1>

      <p className="mb-6">
        Last updated: 12/02/2023 20:35 UTC+1
      </p>

      <p className="mb-6">
        Welcome to Trollz Ecommerce. We are committed to
        protecting your privacy. This Privacy Policy explains how your personal
        information is collected, used, and disclosed by Trollz Ecommerce
      </p>

      <h2 className="text-2xl mb-4 font-bold">1. Information We Collect</h2>

      <p className="mb-6">
        We may collect personal information that you provide directly to us.
        This information may include your name, email address, and any other
        information you choose to provide.
      </p>

      <h2 className="text-2xl mb-4 font-bold">2. Use of Your Information</h2>

      <p className="mb-6">
        We may use the information we collect from you to:
        <ul className="list-disc pl-8">
          <li>Provide, maintain, and improve our services.</li>
          <li>Respond to your comments, questions, and requests.</li>
          <li>Send you updates, newsletters, and marketing materials.</li>
        </ul>
      </p>

      <h2 className="text-2xl mb-4 font-bold">3. Sharing Your Information</h2>

      <p className="mb-6">
        We do not sell, trade, or otherwise transfer your personal
        information to third parties without your consent.
      </p>

      <h2 className="text-2xl mb-4 font-bold">4. Security</h2>

      <p className="mb-6">
        We take reasonable measures to help protect your personal information
        from unauthorized access, use, or disclosure.
      </p>

      <h2 className="text-2xl mb-4 font-bold">5. Changes to This Privacy Policy</h2>

      <p className="mb-6">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2 className="text-2xl mb-4 font-bold">6. Contact Us</h2>

      <p className="mb-6">
        If you have any questions about this Privacy Policy, please contact us
        at [Your Contact Information].
      </p>

      <h2 className="text-2xl mb-4 font-bold">7. Consent</h2>

      <p className="mb-6">
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
