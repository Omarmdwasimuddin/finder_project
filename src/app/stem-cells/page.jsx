'use client';

import { useState } from 'react';

export default function StemCellsPage() {
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
        {language === 'en' ? 'What are Stem Cells?' : 'স্টেম সেল কী?'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Stem cells are special human cells that have the potential to develop into many different cell
          types — from muscle cells to brain cells. In some cases, they can even repair damaged tissues.
          They are essential for regenerative medicine and are used in treatments for conditions like leukemia,
          lymphoma, and other blood disorders. Stem cells are usually collected from bone marrow, peripheral blood,
          or umbilical cord blood. Donating stem cells can help save lives, particularly for patients who need a
          bone marrow transplant and have no matching donor in their family.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          স্টেম সেল হলো বিশেষ ধরণের মানব কোষ, যেগুলো বিভিন্ন ধরণের কোষে রূপ নিতে পারে — যেমন পেশির কোষ বা মস্তিষ্কের কোষ।
          কিছু ক্ষেত্রে এগুলো ক্ষতিগ্রস্ত টিস্যু মেরামত করতেও সক্ষম। এটি পুনর্জননমূলক চিকিৎসার জন্য অত্যন্ত গুরুত্বপূর্ণ এবং
          লিউকেমিয়া, লিম্ফোমা ও অন্যান্য রক্তজনিত রোগের চিকিৎসায় ব্যবহৃত হয়। সাধারণত স্টেম সেল সংগ্রহ করা হয় অস্থিমজ্জা,
          পার্শ্বীয় রক্ত, অথবা নাভির রক্ত থেকে। স্টেম সেল দান জীবন বাঁচাতে পারে, বিশেষ করে তাদের জন্য যাদের পরিবারে মিল থাকা
          কোনো দাতা নেই এবং যাদের অস্থিমজ্জা প্রতিস্থাপন প্রয়োজন।
        </p>
      )}
    </div>
  );
}
