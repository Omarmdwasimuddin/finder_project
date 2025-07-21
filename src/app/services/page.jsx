'use client';

import PlainLayout from '@/Component/Plain-Layout';
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Blood Donation Coordination',
    description: 'Connecting voluntary donors with those in urgent need using smart filtering and fast communication.',
    icon: '💉',
  },
  {
    title: 'Plasma Donation Support',
    description: 'Educating and managing plasma donation requests and donor matching with safety guidelines.',
    icon: '🧪',
  },
  {
    title: 'Emergency Donor Network',
    description: 'A rapid-response donor network accessible during medical emergencies, 24/7.',
    icon: '🚑',
  },
  {
    title: 'Awareness Campaigns',
    description: 'Running events and online campaigns to raise awareness about the importance of regular donation.',
    icon: '📢',
  },
];

export default function ServicesPage() {
  return (
    <PlainLayout>
      <section className="bg-red-300 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h1>
          <p className="text-gray-700 text-sm">
            Our platform offers a range of services designed to make blood and plasma donation more accessible, efficient, and impactful.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PlainLayout>
  );
}
