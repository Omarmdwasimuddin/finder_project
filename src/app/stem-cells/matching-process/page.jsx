'use client';

import { useState } from 'react';

export default function MatchingProcessPage() {
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
        {language === 'en' ? 'The Matching Process' : 'ম্যাচিং প্রক্রিয়া'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          The matching process for stem cell donation is based on human leukocyte antigen (HLA) tissue typing. This
          means doctors look for a close match between a donor’s and a patient’s tissue types to reduce the risk of
          complications. Once you’re on the register, your HLA type is stored and compared with patients in need.
          Finding a match can take days or years, depending on the diversity of your tissue type. If you’re a match, you
          will be contacted and guided through the next steps.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          স্টেম সেল দানের ম্যাচিং প্রক্রিয়া হিউম্যান লিউকোসাইট অ্যান্টিজেন (HLA) টিস্যু টাইপিং এর উপর নির্ভর করে। অর্থাৎ,
          রোগী ও দাতার টিস্যুর মধ্যে যত বেশি মিল থাকবে, জটিলতার ঝুঁকি তত কমবে। আপনি রেজিস্টারে যুক্ত হওয়ার পর, আপনার
          HLA তথ্য সংরক্ষণ করা হয় এবং তা রোগীদের তথ্যের সাথে মিলিয়ে দেখা হয়। কখনো কখনো মিল পেতে দিন লাগতে পারে, আবার
          কখনো বছরের পর বছরও লাগতে পারে। আপনি যদি ম্যাচ হন, তবে আপনাকে যোগাযোগ করে পরবর্তী ধাপগুলো জানানো হবে।
        </p>
      )}
    </div>
  );
}
