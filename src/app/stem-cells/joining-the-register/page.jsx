'use client';

import { useState } from 'react';

export default function JoiningTheRegisterPage() {
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
        {language === 'en' ? 'Joining the Stem Cell Donor Register' : 'স্টেম সেল ডোনার রেজিস্টারে যুক্ত হওয়া'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Joining the stem cell donor register is a simple and meaningful process. Anyone healthy and within the
          eligible age range can sign up. You’ll typically be asked to provide a cheek swab sample, which is used to
          determine your tissue type. Your data will be added to the national or international registry. If you’re ever
          found to be a match for someone in need, you will be contacted to consider donation. Being on the register
          means you're giving someone a fighting chance.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          স্টেম সেল ডোনার রেজিস্টারে যুক্ত হওয়া একটি সহজ এবং তাৎপর্যপূর্ণ প্রক্রিয়া। নির্দিষ্ট বয়সসীমার মধ্যে থাকা
          সুস্থ যে কেউ এই রেজিস্টারে নাম লিখাতে পারেন। সাধারণত একটি গাল ঘষার (cheek swab) নমুনা নেওয়া হয়, যা থেকে আপনার
          টিস্যু টাইপ নির্ধারণ করা হয়। এরপর আপনার তথ্য একটি জাতীয় বা আন্তর্জাতিক রেজিস্টারে যোগ করা হয়। যদি কখনো
          আপনার সাথে মিল পাওয়া যায় এমন কোনো রোগী থাকে, তবে আপনাকে দানের জন্য অনুরোধ জানানো হবে। রেজিস্টারে থাকা
          মানে হলো কারো জীবন বাঁচানোর সম্ভাবনা সৃষ্টি করা।
        </p>
      )}
    </div>
  );
}
