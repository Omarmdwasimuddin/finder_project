'use client';

import { useState } from 'react';

export default function DonorRecognition() {
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
        {language === 'en' ? 'Donor Recognition' : 'দাতাদের স্বীকৃতি'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          We honor and celebrate the contributions of our dedicated blood donors.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          আমরা আমাদের নিবেদিতপ্রাণ রক্তদাতাদের অবদানের স্বীকৃতি দিই এবং তাদের উদযাপন করি।
        </p>
      )}
    </div>
  );
}