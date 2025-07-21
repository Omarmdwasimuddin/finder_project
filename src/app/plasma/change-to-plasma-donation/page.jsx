'use client';

import { useState } from 'react';

export default function ChangeToPlasmaDonation() {
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
        {language === 'en' ? 'Change to Plasma Donation' : 'প্লাজমা দানে পরিবর্তন করুন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          If you’ve donated whole blood before, switching to plasma donation is easy. Plasma donation
          takes longer but helps patients in need of treatments for immune disorders and burns.
          Discuss with your donation center to make the switch.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          আপনি যদি আগেও সম্পূর্ণ রক্ত দান করে থাকেন, তাহলে প্লাজমা দানে পরিবর্তন করাটা সহজ। প্লাজমা দানে একটু বেশি সময় লাগে,
          কিন্তু এটি রোগ প্রতিরোধজনিত অসুস্থতা ও দগ্ধ রোগীদের জন্য অত্যন্ত উপকারী। পরিবর্তনের জন্য আপনার রক্তদান কেন্দ্রের
          সঙ্গে পরামর্শ করুন।
        </p>
      )}
    </div>
  );
}
