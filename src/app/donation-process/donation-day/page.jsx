'use client';

import { useState } from 'react';

export default function DonationDayPage() {
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
        {language === 'en' ? 'On the Donation Day' : 'রক্তদানের দিন'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          On the day of your donation, make sure to eat a healthy meal, drink plenty of water, and bring a valid ID. Our team will guide you through the safe and simple donation process.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদানের দিনে স্বাস্থ্যকর খাবার খান, প্রচুর পানি পান করুন এবং একটি বৈধ পরিচয়পত্র নিয়ে আসুন। আমাদের দল আপনাকে নিরাপদ ও সহজ রক্তদান প্রক্রিয়ার মধ্য দিয়ে সহায়তা করবে।
        </p>
      )}
    </div>
  );
}
