'use client';

import PlainLayout from '@/Component/Plain-Layout';
import React from 'react';
import { motion } from 'framer-motion';

const helps = [
  {
    title: 'Connecting Donors & Patients',
    description:
      'We bridge the gap between those who want to donate blood and those who need it most, ensuring life-saving resources reach the right people quickly.',
    icon: '🔗',
  },
  {
    title: 'Emergency Support System',
    description:
      'Our real-time alert system ensures that emergency blood needs are quickly matched with available donors in the nearest location.',
    icon: '⚡',
  },
  {
    title: 'Educational Resources',
    description:
      'We provide valuable materials to educate the public about the importance of safe and regular blood and plasma donation.',
    icon: '📚',
  },
  {
    title: 'Community Outreach',
    description:
      'We run programs and collaborate with institutions to create awareness and organize donation drives.',
    icon: '🤝',
  },
];

export default function HelpPage() {
  return (
    <PlainLayout>
      <section className="bg-red-300 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How We Help</h1>
          <p className="text-gray-700 text-sm">
            Every drop counts. Here’s how we contribute to building a safer, healthier, and more connected world through blood donation.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {helps.map((help, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{help.icon}</div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{help.title}</h2>
              <p className="text-gray-600 text-sm">{help.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PlainLayout>
  );
}
