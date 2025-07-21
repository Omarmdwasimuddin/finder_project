'use client';

import PlainLayout from '@/Component/Plain-Layout';
import Image from 'next/image';
import React from 'react';

const teamMembers = [
  {
    name: 'Muhammad Wasim Uddin Omar',
    role: 'Founder & Full Stack Developer',
    image: '/Img/Wasim.png',
  },
  {
    name: 'Sebgatul Pranto',
    role: 'Idea Maker',
    image: '/Img/prantoimg.jpg',
  },
  {
    name: 'Ismail Hossain',
    role: 'DevOps Engineer',
    image: '/Img/ismalimg.jpg',
  },
];

export default function AboutPage() {
  return (
    <PlainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Img/donorbannar.png"
            alt="About Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="z-10 text-center bg-red-500 bg-opacity-70 p-6 rounded-xl max-w-xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold animate-pulse">
            About Our Blood Donation Mission
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-200">
            Saving lives through technology, compassion, and community.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          We are a community-driven blood and transplant organization committed to saving lives through voluntary blood donations.
          Our mission is to connect donors and patients through a safe, efficient, and compassionate platform.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Our goal is to build awareness about the importance of regular blood donation and provide an accessible network
          where anyone in need of blood or plasma can find help instantly. We support hospitals, patients, and the wider
          community through seamless digital blood and organ donation initiatives.
        </p>
      </section>

      {/* Why It Matters */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Why It Matters</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Every 2 seconds, someone needs blood to survive.</li>
          <li>Voluntary donors save millions of lives each year.</li>
          <li>Blood cannot be manufactured – it must come from healthy donors.</li>
          <li>One donation can save up to 3 lives.</li>
        </ul>
      </section>

      {/* Team Members */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-red-400 rounded-xl shadow-md hover:shadow-lg p-5 text-center transition-shadow"
            >
              <div className="relative w-28 h-28 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="112px"
                  className="rounded-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </PlainLayout>
  );
}
