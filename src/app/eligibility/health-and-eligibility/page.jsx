'use client';

import { useState } from 'react';

export default function HealthEligibilityPage() {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'bn' : 'en'));

  return (
    <div className="bg-red-300 min-h-[400px] p-6">
      <button
        onClick={toggleLanguage}
        className="mb-4 px-4 py-2 bg-white text-red-600 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        {language === 'en' ? 'বাংলায় দেখুন' : 'See in English'}
      </button>

      <h2 className="text-2xl font-bold text-red-700 mb-4">
        {language === 'en' ? 'Health and Eligibility' : 'স্বাস্থ্য ও যোগ্যতা'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Donors should be in good health. Conditions like cold, flu, or infections may delay eligibility. Discuss your
          health condition with staff before donating.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদাতাকে অবশ্যই সুস্থ হতে হবে। ঠান্ডা, জ্বর বা সংক্রমণ থাকলে আপনি রক্ত দিতে পারবেন না। দানের আগে আপনার স্বাস্থ্য
          সম্পর্কে কর্মীদের জানানো গুরুত্বপূর্ণ।
        </p>
      )}
    </div>
  );
}