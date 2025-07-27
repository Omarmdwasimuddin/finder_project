'use client';
import { motion } from 'framer-motion';

export default function DonationInfoCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 cursor-pointer"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.div
          whileHover={{ rotate: 10 }}
          className="bg-red-100 text-red-500 p-3 rounded-full group-hover:bg-red-200 transition"
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
