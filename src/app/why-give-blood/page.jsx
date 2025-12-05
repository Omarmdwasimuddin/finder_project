'use client';

import { useState } from 'react';

export default function WhyGiveBloodPage() {
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
        {language === 'en' ? 'Why Give Blood?' : 'রক্তদান কেন গুরুত্বপূর্ণ?'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Giving blood is one of the most generous things you can do. Every donation can help save up to three lives.
          Blood is needed every day for patients undergoing surgery, cancer treatments, accidents, and for those with
          chronic illnesses. Since blood cannot be manufactured, voluntary donations are the only source. Your
          contribution could be the difference between life and death for someone in need.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদান একটি মহৎ কাজ, যা আপনি অন্যের জীবনের জন্য করতে পারেন। আপনার একবারের দানে তিনজন পর্যন্ত মানুষের জীবন
          বাঁচতে পারে। প্রতিদিনই অপারেশন, ক্যানসারের চিকিৎসা, দুর্ঘটনা এবং দীর্ঘস্থায়ী রোগে আক্রান্ত রোগীদের জন্য রক্তের
          প্রয়োজন হয়। যেহেতু রক্ত কৃত্রিমভাবে তৈরি করা যায় না, তাই স্বেচ্ছায় রক্তদানই একমাত্র উপায়। আপনার দান কারো
          জীবনের শেষ আশার আলো হতে পারে।
        </p>
      )}
    </div>
  );
}
