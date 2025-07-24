"use client";
import React, { useState, useEffect } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { motion } from "framer-motion";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.8103,
  lng: 90.4125,
};

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
    <section className="relative bg-gradient-to-br from-red-50 to-red-100 text-red-600 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-1 min-h-[72px]">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-sm md:text-xl text-center text-red-400 mb-8 max-w-2xl mx-auto">
          Join our network of blood donors and help save lives across Bangladesh.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Google Map */}
          <div className="w-full h-full rounded-lg shadow-lg overflow-hidden">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>

          {/* Right: Button with Heartbeat Background */}
          <div className="relative flex flex-col items-center justify-center text-center">
            {/* Heartbeat Image Animation Behind the Button */}
            <motion.div
              className="absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-center bg-no-repeat bg-contain opacity-70"
              style={{ backgroundImage: "url('/Img/heartbeat.png')" }}
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{
                scale: [0.9, 1.1, 0.95, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            <Link
              href="/donor/signup"
              className="relative px-8 py-4 text-white text-sm font-semibold rounded-full bg-red-600 shadow-lg transition-all duration-300 hover:scale-105 z-10"
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
