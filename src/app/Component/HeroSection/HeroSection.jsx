'use client';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    
    const messages = [
        "Donate Blood, Save Lives",
        "Be a Hero, Donate Today",
        "Your Blood Can Bring Someone's Tomorrow",
        "One Pint Can Save Three Lives"
    ];

    useEffect(() => {
        let timeout;
        
        if (isTyping) {
            // Typing effect
            if (displayText.length < messages[currentMessageIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayText(messages[currentMessageIndex].substring(0, displayText.length + 1));
                }, 100); // Typing speed
            } else {
                // Pause after typing complete
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000); // Pause duration
            }
        } else {
            // Deleting effect
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                }, 50); // Deleting speed
            } else {
                // Move to next message
                setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, currentMessageIndex, isTyping, messages]);

    return (
        <section className="bg-gray-100 text-red-600 py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[72px]">
                    {displayText}
                    <span className="animate-pulse">...|</span> {/* Cursor */}
                </h1>
                <p className="text-sm text-red-400 md:text-xl mb-8 max-w-2xl mx-auto">
                    Join our network of blood donors and help patients in emergency situations across Bangladesh
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
                    <div className="relative flex-grow">
                        <select 
                            className="w-full p-3 md:p-4 rounded-lg border-2 border-red-200 outline-2 outline-offset-2 outline-red-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 appearance-none shadow-sm"
                        >
                            <option value="">Select Blood Type</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500" />
                    </div>
                    <button 
                        className="bg-red-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-red-700 transition duration-300 shadow-md hover:shadow-lg"
                    >
                        Find Donors
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;










/* 

import React from 'react';
import { FaSearch } from 'react-icons/fa';
const HeroSection = () => {
    return (
        <div>
        <section className="bg-gray-300 text-red-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Donate Blood, Save Lives
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our network of blood donors and help patients in emergency situations across Bangladesh
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <select className="w-full p-4 rounded-lg outline-2 outline-red-400/30 outline-offset-5 outline-solid appearance-none shadow-sm">
                <option>Select Blood Type</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500" />
            </div>
            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition">
              Find Donors
            </button>
          </div>
        </div>
      </section>
        </div>
    );
};

export default HeroSection;

*/