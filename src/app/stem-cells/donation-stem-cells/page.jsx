'use client';

import { useState } from 'react';

export default function DonationStemCellsPage() {
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
        {language === 'en' ? 'Donation of Stem Cells' : 'স্টেম সেল দান'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Donating stem cells is a safe and generous act that can save lives. The two most common methods for donation
          are peripheral blood stem cell (PBSC) donation and bone marrow donation. PBSC is a non-surgical process where
          blood is drawn from one arm, stem cells are collected using a machine, and the rest is returned through the
          other arm. Bone marrow donation is a surgical procedure under anesthesia where marrow is collected from the
          back of the pelvic bone. Both methods are safe, and donors typically recover quickly. Your stem cell donation
          could be a life-saving gift for someone with blood cancer or other serious illnesses.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          স্টেম সেল দান একটি নিরাপদ এবং মহান কাজ যা জীবন রক্ষা করতে পারে। সাধারণত দুটি পদ্ধতিতে দান করা হয় —
          পেরিফেরাল ব্লাড স্টেম সেল (PBSC) এবং অস্থিমজ্জা দান। PBSC হলো একটি অ-সার্জিক্যাল প্রক্রিয়া যেখানে এক বাহু থেকে
          রক্ত সংগ্রহ করা হয়, একটি যন্ত্রের মাধ্যমে স্টেম সেল আলাদা করা হয় এবং বাকি রক্ত অন্য বাহু দিয়ে ফেরত দেওয়া হয়।
          অস্থিমজ্জা দান একটি সার্জিক্যাল পদ্ধতি যেখানে অস্থিমজ্জা কোমরের হাড় (pelvic bone) থেকে অ্যানেসথেশিয়ার মাধ্যমে
          সংগ্রহ করা হয়। উভয় পদ্ধতিই নিরাপদ এবং দাতারা সাধারণত দ্রুত সুস্থ হয়ে ওঠেন। আপনার স্টেম সেল দান কারও জন্য
          জীবনদায়ক উপহার হতে পারে, বিশেষ করে যারা রক্ত ক্যান্সার বা গুরুতর রোগে ভুগছেন।
        </p>
      )}
    </div>
  );
}
