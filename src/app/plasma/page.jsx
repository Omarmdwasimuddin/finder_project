'use client';

import { useState } from 'react';

export default function WhatIsPlasma() {
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
        {language === 'en' ? 'What is Plasma?' : 'প্লাজমা কী?'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Plasma is the pale yellow, liquid component of blood that makes up about 55% of its total volume.
          It is composed of approximately 90% water and 10% vital substances such as proteins, electrolytes,
          glucose, hormones, carbon dioxide, and clotting factors. Plasma transports blood cells and nutrients
          throughout the body, helps maintain blood pressure and volume, boosts immunity, and regulates body
          temperature and pH balance. It plays a crucial role in treating burn victims, trauma patients, and
          people with rare diseases like hemophilia. As it cannot be synthetically produced, plasma is often
          called “liquid gold” in the medical world.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          প্লাজমা হলো রক্তের ফ্যাকাশে হলুদ রঙের তরল উপাদান, যা সম্পূর্ণ রক্তের প্রায় ৫৫% অংশ। এটি প্রায় ৯০% পানি এবং ১০%
          গুরুত্বপূর্ণ উপাদান যেমন প্রোটিন, লবণ, গ্লুকোজ, হরমোন, কার্বন ডাই-অক্সাইড এবং রক্ত জমাট বাঁধার উপাদান দিয়ে গঠিত।
          প্লাজমা রক্তকণিকা ও পুষ্টি শরীরজুড়ে পরিবহন করে, রক্তচাপ ও রক্তের পরিমাণ নিয়ন্ত্রণে সহায়তা করে, রোগপ্রতিরোধ ক্ষমতা
          বাড়ায় এবং দেহের তাপমাত্রা ও পিএইচ ব্যালান্স ঠিক রাখে। এটি পুড়ে যাওয়া রোগী, দুর্ঘটনার শিকার এবং হিমোফিলিয়া মতো
          বিরল রোগে আক্রান্তদের চিকিৎসায় ব্যবহৃত হয়। যেহেতু প্লাজমা কৃত্রিমভাবে তৈরি করা যায় না, তাই চিকিৎসাবিজ্ঞানে একে
          “তরল সোনা” বলা হয়।
        </p>
      )}
    </div>
  );
}
