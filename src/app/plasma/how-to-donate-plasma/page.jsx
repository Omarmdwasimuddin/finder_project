'use client';

import { useState } from 'react';

export default function HowToDonatePlasma() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  return (
    <div className="bg-red-300 min-h-[400px] p-6">
      <button
        onClick={toggleLanguage}
        className="mb-4 px-4 py-2 bg-white text-red-600 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        {language === 'en' ? 'বাংলায় দেখুন' : 'See in English'}
      </button>

      <h2 className="text-2xl font-bold text-red-700 mb-4">
        {language === 'en' ? 'How to Donate Plasma' : 'কিভাবে প্লাজমা দান করবেন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          To donate plasma, visit an authorized plasma donation center. A healthcare professional
          will check your eligibility, collect your plasma using a process called plasmapheresis,
          and guide you through recovery. It usually takes around 45–60 minutes.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          প্লাজমা দানের জন্য একটি অনুমোদিত প্লাজমা ডোনেশন সেন্টারে যান। একজন স্বাস্থ্যকর্মী আপনার যোগ্যতা যাচাই করবেন,
          প্লাজমাফেরেসিস নামক একটি প্রক্রিয়ার মাধ্যমে আপনার প্লাজমা সংগ্রহ করবেন এবং আপনাকে সুস্থ হয়ে উঠতে সহায়তা করবেন।
          পুরো প্রক্রিয়াটি সাধারণত ৪৫ থেকে ৬০ মিনিট সময় নেয়।
        </p>
      )}
    </div>
  );
}
