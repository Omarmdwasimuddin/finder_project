'use client';

import { useState } from 'react';

export default function OccupationConsiderationsPage() {
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
        {language === 'en' ? 'Occupation considerations' : 'পেশাগত বিবেচনা'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Some occupations, such as pilots or drivers, may require a delay in returning to duty after donation.
          Check with your supervisor or employer regarding guidelines before donating.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          কিছু পেশা যেমন পাইলট বা ড্রাইভারদের ক্ষেত্রে রক্তদানের পর কাজে ফেরার জন্য অপেক্ষা করতে হতে পারে। রক্তদানের আগে
          নিয়ম জানার জন্য আপনার সুপারভাইজার বা নিয়োগকর্তার সাথে পরামর্শ করুন।
        </p>
      )}
    </div>
  );
}
