"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cities = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Barisal", "Khulna", "Rangpur", "Comilla"];

export default function LiveDonorTicker() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomDonor = Math.floor(Math.random() * 3) + 1;

      setMessage(`❤️ ${randomDonor} person${randomDonor > 1 ? "s" : ""} just donated in ${randomCity}!`);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-200 text-red-800 font-medium py-3 px-4 rounded-md shadow-md text-center mx-auto max-w-md mt-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {message}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
