import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] bg-gradient-to-r from-red-300 to-gray-100">
            {/* Main Footer Content */}
            <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-12 px-4 sm:px-6">
                {/* Brand Info */}
                <div className="space-y-4 px-2">
                    <div className="flex items-center space-x-2">
                        <a href="/">
                            <img 
                                src="/Img/FinderLogo2.png" 
                                alt="Finder Logo" 
                                className="h-8 w-auto" 
                            />
                        </a>
                        <h2 className="text-2xl font-bold text-gray-900">Finder</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Connecting blood donors with recipients in emergency situations across Bangladesh.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                            <FaFacebookF className="text-lg" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                            <FaTwitter className="text-lg" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                            <FaLinkedinIn className="text-lg" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                            <FaInstagram className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-3 px-2">
                    <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="text-gray-600 hover:text-red-500 transition-colors text-sm block py-1">Find Donors</a></li>
                        <li><a href="/where-to-donate/centers" className="text-gray-600 hover:text-red-500 transition-colors text-sm block py-1">Donation Centers</a></li>
                        <li><a href="/eligibility/can-i-give-blood" className="text-gray-600 hover:text-red-500 transition-colors text-sm block py-1">Eligibility</a></li>
                        <li><a href="/about" className="text-gray-600 hover:text-red-500 transition-colors text-sm block py-1">About Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 px-2">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
                    <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                            <FaPhone className="mt-1 text-red-500 text-sm flex-shrink-0" />
                            <div>
                                <p className="text-gray-600 text-sm">Emergency Hotline</p>
                                <a href="tel:+8801712345678" className="font-medium hover:text-red-500 text-sm">01712-345678</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <FaMapMarkerAlt className="mt-1 text-red-500 text-sm flex-shrink-0" />
                            <p className="text-gray-600 text-sm">123 Medical Road, Dhaka 1206</p>
                        </div>
                        <div className="flex items-start space-x-2">
                            <FaRegClock className="mt-1 text-red-500 text-sm flex-shrink-0" />
                            <p className="text-gray-600 text-sm">24/7 Emergency Service</p>
                        </div>
                    </div>
                </div>

                {/* Emergency Call-to-Action */}
                <div className="space-y-3 px-2">
                    <h3 className="text-lg font-semibold text-gray-900">Need Blood Urgently?</h3>
                    <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md transition-colors w-full">
                        Request Blood Now
                    </button>
                    <p className="text-sm text-gray-600">
                        Our network of donors can help in emergency situations within minutes.
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 py-4">
                <div className="container max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Finder. All rights reserved. 
                    <span className="block md:inline-block mt-1 md:mt-0 md:ml-2">
                        A lifesaving initiative by Health Bangladesh.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;