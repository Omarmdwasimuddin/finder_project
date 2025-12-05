'use client';

import { useState } from 'react';


export default function RegisterOnlinePage() {
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
        {language === 'en' ? 'Register to Donate' : 'রক্তদানের জন্য নিবন্ধন করুন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Save time by registering online before you arrive at a donation venue. This helps streamline your visit.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদানের স্থানে যাওয়ার আগে অনলাইনে নিবন্ধন করে সময় বাঁচান। এটি আপনার সফরকে আরও সহজ করে তোলে।
        </p>
      )}
    </div>
  );
}
