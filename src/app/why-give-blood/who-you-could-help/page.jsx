'use client';

import { useState } from 'react';

export default function WhoYouCouldHelpPage() {
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
        {language === 'en' ? 'Who You Could Help' : 'আপনি কাদের সাহায্য করতে পারেন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Your blood donation could help accident victims, surgery patients, cancer patients, premature babies, and
          people with blood disorders like thalassemia and hemophilia.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          আপনার রক্তদান দুর্ঘটনার শিকার ব্যক্তি, অপারেশন হওয়া রোগী, ক্যানসার আক্রান্ত, অকালপ্রসূ শিশুরা এবং থ্যালাসেমিয়া বা হিমোফিলিয়ার মতো রোগে ভোগা মানুষদের জীবন বাঁচাতে পারে।
        </p>
      )}
    </div>
  );
}
