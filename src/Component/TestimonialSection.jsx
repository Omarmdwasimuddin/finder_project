'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Nasirul Islam Nahid',
    role: 'Blood Donor',
    story: 'I donated blood for the first time at 22. It felt amazing knowing I saved a life. I’ll continue this journey.',
    image: 'https://i.imgur.com/ieSsJJF.png',
  },
  {
    name: 'Ismail Hossain',
    role: 'Blood Recipient',
    story: 'Thanks to a donor, my son got a second chance at life. Words can’t express my gratitude.',
    image: 'https://i.imgur.com/NOlfLiX.jpg',
  },
  {
    name: 'Sibgatul Rahman Pranto',
    role: 'Regular Donor',
    story: 'Donating blood is a responsibility I feel proud of. It’s easy and life-changing.',
    image: 'https://i.imgur.com/poWnRKr.jpg',
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-12">Blood Donation Stories</h2>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mx-4"
            >
              <div className="flex flex-col items-center">
                {/* Testimonial Image with fallback */}
                <div className="mb-6 w-20 h-20 rounded-full overflow-hidden border-4 border-red-100 bg-red-50 flex items-center justify-center">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://i.imgur.com/JQ9pRoD.png'; // Generic avatar
                      e.currentTarget.className = 'w-full h-full object-contain p-2';
                    }}
                  />
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-800 text-lg mb-6 px-2 sm:px-0">
                  "{testimonials[current].story}"
                </p>
                
                {/* Testimonial Author */}
                <div className="space-y-1">
                  <p className="font-semibold text-red-700">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8 px-4">
            <button
              onClick={handlePrev}
              className="text-red-600 hover:text-red-800 transition p-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={32} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition ${current === index ? 'bg-red-600' : 'bg-red-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="text-red-600 hover:text-red-800 transition p-2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}