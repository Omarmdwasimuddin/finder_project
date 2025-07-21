'use client';

import { useState } from 'react';

export default function DonorsAndDisabilityPage() {
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
        {language === 'en' ? 'Donors and disability' : 'রক্তদাতা ও প্রতিবন্ধিতা'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Having a disability does not automatically disqualify someone from donating blood. If you meet the general
          health requirements, you may be eligible. Speak with donation staff for specific accommodations.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          প্রতিবন্ধিতা থাকলে তা রক্তদানে অযোগ্যতা নির্ধারণ করে না। যদি আপনার স্বাস্থ্য শর্ত পূরণ করে, তাহলে আপনি রক্ত দিতে পারেন।
          নির্দিষ্ট সহায়তার জন্য কর্মীদের সঙ্গে কথা বলুন।
        </p>
      )}
    </div>
  );
}
