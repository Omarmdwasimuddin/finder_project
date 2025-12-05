'use client';

import { useState } from 'react';

export default function FirstTimeDonorsPage() {
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
        {language === 'en' ? 'First-time Donors' : 'প্রথমবারের দাতারা'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          If you're donating blood for the first time, it's normal to feel a little nervous. Our team is here to guide and support you every step of the way.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          আপনি যদি প্রথমবার রক্তদান করতে আসেন, একটু নার্ভাস লাগতে পারে। আমাদের টিম প্রতিটি ধাপে আপনাকে সহযোগিতা করবে।
        </p>
      )}
    </div>
  );
}
