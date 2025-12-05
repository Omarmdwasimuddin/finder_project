"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MapWrapper from "./MapWrapper"; // Change this import

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    "A single donation can light up three lives",
    "Your 45 minutes = Someone's lifetime",
    "Plasma donors heal patients day by day",
    "Blood has no substitute - only donors can help",
    "The hospital bed waiting for blood won't wait forever",
  ];

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (displayText.length < messages[currentMessageIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            messages[currentMessageIndex].substring(0, displayText.length + 1)
          );
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentMessageIndex]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden text-white min-h-[100vh] flex items-center">
      <div
        className="absolute inset-0 bg-center bg-cover brightness-[0.4] blur-[1px]"
        style={{ backgroundImage: "url('https://i.imgur.com/AyKAK1O.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-red-800/50 to-black/70 mix-blend-multiply"></div>

      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-3 min-h-[80px] leading-snug">
          {displayText}
          <span className="animate-pulse text-red-300">|</span>
        </h1>
        <p className="text-base md:text-xl text-center text-gray-200 mb-10 max-w-2xl mx-auto">
          Join our network of blood donors and help save lives across Bangladesh.
        </p>

        <div className="grid grid-col-1 lg:grid-cols-2 gap-10 items-center">
          {/* Leaflet Map - Use MapWrapper instead of Map */}
          <div className="w-full h-[300px] md:h-[400px] rounded-xl shadow-lg overflow-hidden border border-white/10">
            <MapWrapper /> {/* Change this line */}
          </div>

          {/* CTA */}
          <div className="relative flex flex-col items-center justify-center text-center h-full min-h-[200px]">
            <motion.div
              className="absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-center bg-no-repeat bg-contain opacity-70"
              style={{ backgroundImage: "url('/Img/heartbeat.png')" }}
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{
                scale: [0.9, 1.1, 0.95, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <Link
              href="/donor/signup"
              className="relative px-8 py-4 text-white text-sm md:text-base font-semibold rounded-full bg-red-600 shadow-xl transition-all duration-300 hover:scale-105 z-10"
            >
              Sign Up to Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;