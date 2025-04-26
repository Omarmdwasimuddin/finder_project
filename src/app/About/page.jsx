'use client';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUsers, FaHandHoldingHeart, FaAmbulance } from 'react-icons/fa';

export default function AboutPage() {
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

  const stats = [
    { value: "10,000+", label: "Lives Saved", icon: <FaHeartbeat className="text-red-500 text-3xl" /> },
    { value: "5,000+", label: "Active Donors", icon: <FaUsers className="text-red-500 text-3xl" /> },
    { value: "24/7", label: "Emergency Service", icon: <FaAmbulance className="text-red-500 text-3xl" /> },
    { value: "100+", label: "Partnerships", icon: <FaHandHoldingHeart className="text-red-500 text-3xl" /> }
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
            About Our Blood Donation Initiative
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Connecting donors with those in need since 2015. Our mission is to create a reliable blood donation network across Bangladesh.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story */}
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
                src="/Img/imgbloodhand.jpg" 
                alt="Blood donation" 
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, our blood donation platform began with a simple mission: to bridge the gap between blood donors and recipients in emergency situations.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small initiative in Dhaka has now grown into a nationwide network of donors, hospitals, and volunteers working together to save lives.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be Bangladesh's most trusted blood donation platform, recognized for our transparency and rapid response system.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-red-50"
      >
        <div className="container mx-auto px-6">
          <motion.h2 variants={item} className="text-3xl font-bold text-center text-red-600 mb-12">
            Our Core Values
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Mission</h3>
              <p className="text-gray-700">
                To create a sustainable blood donation ecosystem that ensures no patient dies due to lack of blood. We connect voluntary donors with recipients through technology while maintaining the highest standards of safety and ethics.
              </p>
            </motion.div>
            
            <motion.div 
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Vision</h3>
              <p className="text-gray-700">
                To become Bangladesh's most comprehensive blood management platform, reducing preventable deaths by ensuring blood availability within 30 minutes of request through our nationwide network of donors and partners.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Meet Our Team</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-red-50 rounded-lg overflow-hidden shadow-md text-center"
              >
                <div className="h-48 bg-red-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-1">Team Member {item}</h3>
                  <p className="text-gray-600">Position/Role</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-red-600 text-white text-center"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our community of lifesavers today. Whether you want to donate blood or volunteer with us, your contribution matters.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg shadow-lg"
          >
            Join Us Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}