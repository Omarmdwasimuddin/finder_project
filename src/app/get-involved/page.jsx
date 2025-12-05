'use client';

import PlainLayout from '@/Component/Plain-Layout';
import { motion } from 'framer-motion';
import { Heart, HandHelping, Users } from 'lucide-react';

const cards = [
  {
    icon: <Heart className="w-8 h-8 text-red-600" />,
    title: 'Donate Blood',
    description: 'Your donation can save lives. Give blood today to help someone tomorrow.'
  },
  {
    icon: <HandHelping className="w-8 h-8 text-blue-600" />,
    title: 'Become a Volunteer',
    description: 'Join our team and help organize donation drives and events.'
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: 'Spread Awareness',
    description: 'Educate your community about the importance of blood donation.'
  }
];

export default function GetInvolvedPage() {
  return (
    <PlainLayout>
      <div className="bg-red-300  py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading Animation */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How You Can Help
          </motion.h2>

          {/* Responsive Icon Cards with Framer Motion */}
          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PlainLayout>
  );
}
