import { FaDroplet } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-6">
                {/* Brand Info */}
                <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                        <FaDroplet className='text-red-500 text-3xl' />
                        <h2 className="text-2xl font-bold text-gray-900">Finder</h2>
                    </div>
                    <p className="text-gray-600 text-sm text-justify">
                        Connecting blood donors with recipients in emergency situations across Bangladesh.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        <FaFacebookF className="text-md cursor-pointer text-gray-600 hover:text-red-500 transition-colors"/>
                        <FaTwitter className="text-md cursor-pointer text-gray-600 hover:text-red-500"/>
                        <FaLinkedinIn className="text-md cursor-pointer text-gray-600 hover:text-red-500"/>
                        <FaInstagram className="text-md cursor-pointer text-gray-600 hover:text-red-500"/>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm">Find Donors</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm">Donation Centers</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm">Eligibility</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm">About Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <FaPhone className="mt-1 text-red-500" />
                            <div>
                                <p className="text-gray-600 text-sm">Emergency Hotline</p>
                                <a href="tel:+8801712345678" className="font-medium hover:text-red-500">01712-345678</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="mt-1 text-red-500" />
                            <p className="text-gray-600 text-sm">123 Medical Road, Dhaka 1206</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <FaRegClock className="mt-1 text-red-500" />
                            <p className="text-gray-600 text-sm">24/7 Emergency Service</p>
                        </div>
                    </div>
                </div>

                {/* Emergency Call-to-Action */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Need Blood Urgently?</h3>
                    <button className="bg-red-500 hover:bg-red-600 text-white  text-sm font-semibold py-3 px-6 rounded-lg shadow-md transition-colors w-full">
                        Request Blood Now
                    </button>
                    <p className="text-sm text-gray-600 text-justify">
                        Our network of donors can help in emergency situations within minutes.
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 py-4">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
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









/*

import { FaDroplet } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import React from 'react';
import { Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white shadow-md mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-100 py-10 px-5">
                <div className="px-5">
                    <div className="flex items-center space-x-2 py-5">
                    <h2 className="text-xl font-semibold text-gray-950">Finder</h2>
                    <FaDroplet className='text-red-500 text-2xl' />
                    </div>
                    <p className="text-sm text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa eum, doloremque ipsa, officiis asperiores suscipit enim quidem reprehenderit aut ex debitis, minus illum totam nihil facere nulla quas quo.</p>
                    
                </div>

                <div className=" space-y-4">
                    <FaFacebookF className="text-md cursor-pointer hover:text-blue-500"/>
                    <FaTwitter className="text-md cursor-pointer hover:text-blue-400 "/>
                    <FaLinkedinIn className="text-md cursor-pointer hover:text-blue-600"/>
                    <FaInstagram className="text-md cursor-pointer hover:text-pink-500"/>
                    </div>

                <div>
                <div className="flex items-center space-x-2">
                    <h1 className="text-md font-semibold">Emergency Blood Request</h1>
                    <Phone className="text-sm text-green-500 fill-green-500"/>
                </div>

                <div className="space-y-2">
                    <h1 className="text-sm font-semibold">Need Emergency Blood?</h1>
                    <button className="bg-red-500 text-sm py-1.5 px-4 text-white rounded-2xl">Call Me!</button>
                </div>

                </div>

            </div>

            <div className="text-center text-gray-600 text-sm py-4 bg-gray-200">
            &copy; {new Date().getFullYear()} Finder. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;

*/
/* 

<div>
                    <h2 className="text-md font-semibold mb-3">Quick Links</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Concern</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

*/