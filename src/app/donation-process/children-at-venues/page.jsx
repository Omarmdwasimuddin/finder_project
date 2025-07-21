'use client';

import { useState } from 'react';

export default function ChildrenAtVenues() {
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
        {language === 'en' ? 'Children at Venues' : 'অনুষ্ঠানে শিশুদের উপস্থিতি'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Children are welcome at donation venues, but they must be supervised by another adult while you give blood.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদানের সময় শিশুদের সঙ্গে আনা যেতে পারে, তবে একজন প্রাপ্তবয়স্কের তত্ত্বাবধানে থাকতে হবে।
        </p>
      )}
    </div>
  );
}