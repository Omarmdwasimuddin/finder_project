'use client';
import { motion } from 'framer-motion';
import { FaTint, FaHospital, FaClock, FaUsers } from 'react-icons/fa';

export default function OurConcernPage() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const concerns = [
    {
      icon: <FaTint className="text-red-500 text-3xl" />,
      title: "Blood Shortages",
      description: "Every day, hospitals face critical shortages of blood supply, putting patients' lives at risk."
    },
    {
      icon: <FaHospital className="text-red-500 text-3xl" />,
      title: "Emergency Needs",
      description: "Accidents and emergencies require immediate blood availability which is often unavailable."
    },
    {
      icon: <FaClock className="text-red-500 text-3xl" />,
      title: "Time Sensitivity",
      description: "Blood has a limited shelf life, making constant donations necessary to maintain supply."
    },
    {
      icon: <FaUsers className="text-red-500 text-3xl" />,
      title: "Donor Awareness",
      description: "Many potential donors are unaware of how and where to donate blood regularly."
    }
  ];

  const impacts = [
    {
      number: "1",
      title: "Mortality Rate",
      description: "Blood shortages contribute to 25% of preventable deaths in emergency situations."
    },
    {
      number: "2",
      title: "Maternal Health",
      description: "Postpartum hemorrhage accounts for 27% of maternal deaths in developing countries."
    },
    {
      number: "3",
      title: "Accident Victims",
      description: "Road accident victims require 5+ units of blood on average for survival."
    },
    {
      number: "4",
      title: "Chronic Patients",
      description: "Thalassemia patients need regular transfusions every 2-4 weeks throughout their lives."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-red-600 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Blood Donation Matters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Understanding the critical need for blood donations and how you can help save lives in Bangladesh.
          </motion.p>
        </div>
      </motion.section>

      {/* Key Concerns */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="container mx-auto px-6">
          <motion.h2 variants={item} className="text-3xl font-bold text-center text-red-600 mb-12">
            The Critical Concerns We Address
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {concerns.map((concern, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-6">{concern.icon}</div>
                <h3 className="text-xl font-bold text-red-600 mb-4">{concern.title}</h3>
                <p className="text-gray-700">{concern.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Impact Statistics */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img 
                src="/Img/img01.jpg" 
                alt="Blood donation concerns" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div 
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-red-600 mb-6">The Harsh Reality</h2>
              <div className="space-y-6">
                {impacts.map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 font-bold text-xl">
                      {impact.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-red-600">{impact.title}</h3>
                      <p className="text-gray-700">{impact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-red-50"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={item} className="text-3xl font-bold text-red-600 mb-6">
            You Can Make a Difference
          </motion.h2>
          <motion.p variants={item} className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            A single donation can save up to three lives. Join our movement to ensure no one dies due to lack of blood.
          </motion.p>
          <motion.div variants={item}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
            >
              Become a Donor Today
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}