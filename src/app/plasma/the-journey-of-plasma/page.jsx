'use client';

import { useState } from 'react';

export default function TheJourneyOfPlasma() {
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
        {language === 'en' ? 'The Journey of Plasma' : 'প্লাজমার যাত্রা'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          After donation, your plasma is tested for safety, processed, and stored. It is then used in 
          hospitals to treat patients with clotting disorders, immune deficiencies, and more.
          Every donation can save multiple lives.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          দানের পর আপনার প্লাজমা নিরাপত্তার জন্য পরীক্ষা করা হয়, প্রক্রিয়াজাত করা হয় এবং সংরক্ষণ করা হয়।
          পরে এটি হাসপাতালগুলোতে রক্ত জমাট বাঁধার সমস্যা, ইমিউন দুর্বলতা এবং অন্যান্য রোগের চিকিৎসায় ব্যবহার করা হয়।
          প্রতিটি প্লাজমা দান অনেকগুলো জীবন বাঁচাতে পারে।
        </p>
      )}
    </div>
  );
}

