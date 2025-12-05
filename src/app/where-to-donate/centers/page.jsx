'use client';

import { useState } from 'react';

export default function CentersPage() {
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
        {language === 'en' ? 'Donation Centers' : 'রক্তদান কেন্দ্রসমূহ'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Find your nearest blood donation center. Our centers are located across the country and offer a safe and welcoming environment for all donors.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          আপনার নিকটস্থ রক্তদান কেন্দ্র খুঁজে নিন। আমাদের কেন্দ্রগুলো দেশব্যাপী ছড়িয়ে আছে এবং প্রতিটি কেন্দ্রে নিরাপদ ও বন্ধুত্বপূর্ণ পরিবেশে রক্তদান করা যায়।
        </p>
      )}
    </div>
  );
}
