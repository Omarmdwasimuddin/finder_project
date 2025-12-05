'use client';

import { useState } from 'react';

export default function BloodTypePage() {
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
        {language === 'en' ? 'Blood Types' : 'রক্তের গ্রুপ সমূহ'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          There are four main blood groups: A, B, AB, and O, each of which can be Rh-positive or Rh-negative. Your blood
          type determines compatibility for donation and transfusion.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          চারটি প্রধান রক্তের গ্রুপ রয়েছে: A, B, AB, এবং O। প্রতিটি গ্রুপ আবার Rh-পজিটিভ অথবা Rh-নেগেটিভ হতে পারে। 
          রক্তের গ্রুপ রক্তদানের এবং গ্রহণের উপযুক্ততা নির্ধারণ করে।
        </p>
      )}
    </div>
  );
}
