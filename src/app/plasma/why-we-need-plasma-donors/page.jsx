'use client';

import { useState } from 'react';

export default function WhyWeNeedPlasmaDonors() {
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

      <h2 className="text-2xl font-semibold text-red-700 mb-2">
        {language === 'en' ? 'Why We Need Plasma Donors' : 'আমাদের কেন প্লাজমা দাতার প্রয়োজন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-700 leading-relaxed">
          Plasma plays a vital role in treating immune deficiencies, hemorrhagic conditions, and various chronic diseases.
          It contains antibodies and proteins essential for patient recovery. The demand for plasma is increasing globally,
          making plasma donors essential for saving lives.
        </p>
      ) : (
        <p className="text-gray-700 leading-relaxed">
          প্লাজমা রোগ প্রতিরোধ ক্ষমতা দুর্বলতা, রক্তপাতজনিত সমস্যা এবং বিভিন্ন দীর্ঘস্থায়ী রোগের চিকিৎসায় গুরুত্বপূর্ণ ভূমিকা পালন করে।
          এতে রয়েছে রোগপ্রতিরোধকারী অ্যান্টিবডি এবং রোগীর সুস্থতায় প্রয়োজনীয় প্রোটিন। বিশ্বব্যাপী প্লাজমার চাহিদা বৃদ্ধি পাচ্ছে,
          তাই জীবন বাঁচাতে প্লাজমা দাতারা অপরিহার্য।
        </p>
      )}
    </div>
  );
}

