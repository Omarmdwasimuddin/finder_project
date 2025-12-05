'use client';

import { useState } from 'react';

export default function GettingAppointmentPage() {
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
        {language === 'en' ? 'Getting an appointment' : 'অ্যাপয়েন্টমেন্ট পাওয়া'}
      </h2>

      {language === 'en' ? (
        <p className="text-gray-800 leading-relaxed">
          Booking a blood donation appointment is easy and quick. Most centers allow online booking or you can call to
          schedule. It helps reduce wait time and ensures efficient service.
        </p>
      ) : (
        <p className="text-gray-800 leading-relaxed">
          রক্তদানের জন্য অ্যাপয়েন্টমেন্ট বুক করা সহজ। আপনি অনলাইনে বুক করতে পারেন অথবা ফোন করে অ্যাপয়েন্টমেন্ট নিতে পারেন।
          এটি অপেক্ষার সময় কমায় এবং পরিষেবাকে আরও কার্যকর করে।
        </p>
      )}
    </div>
  );
}