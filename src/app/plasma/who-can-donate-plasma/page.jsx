'use client';

import { useState } from 'react';

export default function WhoCanDonatePlasma() {
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
        {language === 'en' ? 'Who Can Donate Plasma' : 'কারা প্লাজমা দান করতে পারেন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Healthy individuals aged 18 to 65, weighing at least 50 kg, who meet specific criteria,
          can usually donate plasma. Eligibility may vary based on local guidelines.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          ১৮ থেকে ৬৫ বছর বয়সী সুস্থ ব্যক্তি, যাদের ওজন কমপক্ষে ৫০ কেজি এবং নির্দিষ্ট কিছু শর্ত পূরণ করেন,
          তারা সাধারণত প্লাজমা দান করতে পারেন। যোগ্যতা স্থানীয় নীতিমালার ওপর নির্ভর করতে পারে।
        </p>
      )}
    </div>
  );
}

