'use client';

import { useState } from 'react';

export default function CanIGiveBloodPage() {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'bn' : 'en'));

  return (
    <div className="bg-red-300 min-h-[400px] p-6">
      <button
        onClick={toggleLanguage}
        className="mb-4 px-4 py-2 bg-white text-red-600 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        {language === 'en' ? 'বাংলায় দেখুন' : 'See in English'}
      </button>

      <h2 className="text-2xl font-bold text-red-700 mb-4">
        {language === 'en' ? 'Can I give blood?' : 'আমি কি রক্ত দিতে পারি?'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          You can give blood if you meet health, age, and weight criteria. Certain medications or medical conditions
          may make you temporarily or permanently ineligible. Check with your local blood center for detailed guidance.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          যদি আপনার বয়স, ওজন ও স্বাস্থ্য সম্পর্কিত নির্দিষ্ট শর্ত পূরণ হয়, তাহলে আপনি রক্ত দিতে পারেন। কিছু ওষুধ বা
          রোগের কারণে আপনি সাময়িক বা স্থায়ীভাবে অযোগ্য হতে পারেন। বিস্তারিত জানার জন্য স্থানীয় ব্লাড সেন্টারের সাথে যোগাযোগ করুন।
        </p>
      )}
    </div>
  );
}