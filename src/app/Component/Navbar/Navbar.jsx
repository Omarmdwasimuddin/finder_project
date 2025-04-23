'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaDroplet } from "react-icons/fa6";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50">
            <nav className='bg-white shadow-md py-4 px-6 relative'>
                <div className='container mx-auto flex justify-between items-center'>
                    {/* Logo */}
                    <Link href="/" className='flex items-center space-x-2'>
                        <span className='text-xl font-semibold text-gray-900'>Finder</span>
                        <FaDroplet className='text-red-500 text-2xl' />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex space-x-6'>
                        <Link href="/" className='text-gray-950 hover:text-red-500 transition-colors duration-200'>Home</Link>
                        <Link href="/About" className='text-gray-950 hover:text-red-500 transition-colors duration-200'>About</Link>
                        <Link href="/login" className='text-gray-950 hover:text-red-500 transition-colors duration-200'>LogIn</Link>
                        <Link href="/OurConcern" className='text-gray-950 hover:text-red-500 transition-colors duration-200'>Our Concern</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='md:hidden focus:outline-none' 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className=' w-6 h-6' /> : <Menu className='w-6 h-6' />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <>
                    {/* Overlay Background */}
                    <div 
                        className="fixed inset-0 bg-black/30 bg-opacity-50 z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Mobile Menu */}
                    <div className='md:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-50'>
                        <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 animate-slide-down'>
                            <Link 
                                href="/" 
                                className='block text-gray-950 hover:text-red-500 py-2 transition-colors duration-200 pl-4'
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/about" 
                                className='block text-gray-950 hover:text-red-500 py-2 transition-colors duration-200 pl-4'
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link 
                                href="/login" 
                                className='block text-gray-950 hover:text-red-500 py-2 transition-colors duration-200 pl-4'
                                onClick={() => setIsOpen(false)}
                            >
                                LogIn
                            </Link>
                            <Link 
                                href="/contact" 
                                className='block text-gray-950 hover:text-red-500 py-2 transition-colors duration-200 pl-4'
                                onClick={() => setIsOpen(false)}
                            >
                                Our Concern
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;