'use client';

import { useState } from 'react';

export default function EligibilityPage() {
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
        {language === 'en' ? 'Who can give blood?' : 'কে রক্ত দিতে পারেন?'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          You can give blood if you are healthy, weigh over 50kg, and are between the ages of 18 and 65.
          It’s important to meet the eligibility criteria to ensure the safety of both donors and recipients.
          Before donating, you’ll be asked a few questions about your health and travel history.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          আপনি যদি সুস্থ থাকেন, ওজন ৫০ কেজির বেশি হয় এবং বয়স ১৮ থেকে ৬৫ বছরের মধ্যে হয়, তাহলে আপনি রক্তদান করতে পারেন।
          এটি নিশ্চিত করার জন্য কিছু শারীরিক ও ভ্রমণ সংক্রান্ত প্রশ্ন জিজ্ঞাসা করা হয় যাতে দাতা এবং প্রাপকের নিরাপত্তা নিশ্চিত করা যায়।
        </p>
      )}
    </div>
  );
}
