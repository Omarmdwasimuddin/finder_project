'use client';

import { useState } from 'react';

export default function AboutStemCellsPage() {
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
        {language === 'en' ? 'About Stem Cells' : 'স্টেম সেল সম্পর্কে'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Stem cells are the foundation of every organ and tissue in the body. They can divide and create either more
          stem cells or differentiate into specialized cells like blood cells, heart cells, or nerve cells. This unique
          ability makes them vital for growth, healing, and research. Scientists use stem cells to understand disease
          development, test drugs, and explore new therapies. There are different types of stem cells, such as
          embryonic, adult, and induced pluripotent stem cells, each with its own role and potential.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          স্টেম সেল হলো শরীরের প্রতিটি অঙ্গ এবং টিস্যুর ভিত্তি। এই কোষগুলো বিভাজিত হয়ে নতুন স্টেম সেল তৈরি করতে পারে
          অথবা বিশেষায়িত কোষে রূপ নিতে পারে — যেমন রক্তকোষ, হৃদযন্ত্রের কোষ বা স্নায়ুকোষ। এই বিশেষ ক্ষমতার কারণে
          স্টেম সেল বৃদ্ধি, নিরাময় এবং গবেষণার জন্য গুরুত্বপূর্ণ। বিজ্ঞানীরা রোগের বিকাশ বোঝা, ওষুধ পরীক্ষা এবং নতুন
          চিকিৎসা পদ্ধতি আবিষ্কারে স্টেম সেল ব্যবহার করেন। বিভিন্ন ধরণের স্টেম সেল রয়েছে — যেমন এমব্রায়োনিক,
          প্রাপ্তবয়স্ক এবং ইনডিউসড প্লুরিপোটেন্ট স্টেম সেল — যেগুলোর প্রতিটির নিজস্ব ভূমিকা ও সম্ভাবনা আছে।
        </p>
      )}
    </div>
  );
}
