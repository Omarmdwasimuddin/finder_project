'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [bloodType, setBloodType] = useState('');
    const [district, setDistrict] = useState('');
    const [cityArea, setCityArea] = useState('');
    const [cityAreas, setCityAreas] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    
    const messages = [
        "Donate Blood, Save Lives",
        "Be a Hero, Donate Today",
        "Your Blood Can Bring Someone's Tomorrow",
        "One Pint Can Save Three Lives"
    ];

    const areaData = [
        {
            district: "Dhaka",
            cityAreas: ["Mirpur", "Uttara", "Dhanmondi", "Banani", "Gulshan", "Motijheel", "Mohammadpur", "Badda", "Lalbagh", "Shyamoli"]
        },
        {
            district: "Chattogram",
            cityAreas: ["Pahartali", "Agrabad", "Panchlaish", "Chawkbazar", "Kotwali", "Halishahar", "Bakalia", "Patenga", "Nasirabad"]
        },
        {
            district: "Sylhet",
            cityAreas: ["Zindabazar", "Ambarkhana", "Dargah Gate", "Shibgonj", "Tilagor", "Subid Bazar", "South Surma", "Uposhohor"]
        },
        {
            district: "Khulna",
            cityAreas: ["KDA Avenue", "Sonadanga", "Khalishpur", "Daulatpur", "Boyra", "Shibbari", "Rupsha", "Khalishpur"]
        },
        {
            district: "Rajshahi",
            cityAreas: ["Shaheb Bazar", "Motihar", "Binodpur", "Uposhohor", "Rajpara", "Boalia", "Nowhata", "Laxmipur"]
        },
        {
            district: "Barishal",
            cityAreas: ["Nathullabad", "Chawkbazar", "Rupatoli", "Kazipara", "Amtala", "Notun Bazar"]
        },
        {
            district: "Rangpur",
            cityAreas: ["Station Road", "College Para", "Medical", "Kachari Bazar", "Kadirganj", "Modern More"]
        },
        {
            district: "Mymensingh",
            cityAreas: ["Chorpara", "Kewatkhali", "Shambhuganj", "Biddyaganj"]
        }
    ];

    const bloodDrops = useMemo(() => {
        return Array(8).fill().map((_, i) => {
            const seed = i * 123.456;
            const top = 10 + (Math.sin(seed) * 80);
            const left = 10 + (Math.cos(seed) * 80);
            const width = 8 + (Math.abs(Math.sin(seed * 2)) * 5);
            const height = 16 + (Math.abs(Math.cos(seed * 3)) * 9);
            const bgColor = 100 + Math.floor(Math.abs(Math.sin(seed)) * 2) * 100;
            const opacity = 10 + Math.floor(Math.abs(Math.sin(seed * 4))) * 15;
            const animationDuration = 5 + (Math.abs(Math.sin(seed * 5)) * 5);
            const animationDelay = Math.abs(Math.sin(seed * 7)) * 4;

            return {
                top: `${top}%`,
                left: `${left}%`,
                width: Math.round(width),
                height: Math.round(height),
                bgColor: `red-${Math.min(900, bgColor)}`,
                opacity: Math.min(100, opacity),
                animationDuration: `${animationDuration.toFixed(1)}s`,
                animationDelay: `${animationDelay.toFixed(1)}s`
            };
        });
    }, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        let timeout;
        
        if (isTyping) {
            if (displayText.length < messages[currentMessageIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayText(messages[currentMessageIndex].substring(0, displayText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000);
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
    }, [displayText, currentMessageIndex, isTyping, messages]);

    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setDistrict(selectedDistrict);
        setCityArea('');
        const selectedCityAreas = areaData.find(area => area.district === selectedDistrict)?.cityAreas || [];
        setCityAreas(selectedCityAreas);
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100 text-red-600 py-16 md:py-24">
            {isMounted && (
                <div className="absolute inset-0 overflow-hidden">
                    {bloodDrops.map((drop, i) => (
                        <div 
                            key={i}
                            className={`absolute w-${drop.width} h-${drop.height} bg-${drop.bgColor} rounded-full opacity-${drop.opacity}`}
                            style={{
                                top: drop.top,
                                left: drop.left,
                                animation: `float ${drop.animationDuration} ease-in-out infinite`,
                                animationDelay: drop.animationDelay
                            }}
                        ></div>
                    ))}
                    
                    <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="heartbeat"></div>
                    </div>
                    
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRjAwMDAiIG9wYWNpdHk9Ii4yIj48cGF0aCBkPSJNMjEgMzkuNjNjMTEuMDQ1LTIuNTI3IDE5LTExLjkwOCAxOS0yMy4wNEM0MCA3LjI4IDMxLjA0NS0yLjUyNyAyMC0uMDFDMTAuOTU1LTIuNTI3IDIgNy4yOCAyIDE2LjU5YzAgMTEuMTMyIDcuOTU1IDIwLjUxMyAxOSAyMy4wNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
                </div>
            )}

            <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[72px] drop-shadow-sm">
                    {displayText}
                    <span className="animate-pulse">|</span>
                </h1>
                <p className="text-xs text-red-500 md:text-xl mb-8 max-w-2xl mx-auto font-medium">
                    Join our network of blood donors and help patients in emergency situations across Bangladesh
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <div className="relative flex-grow">
                        <select
                            className="w-full text-sm p-3 md:p-4 rounded-lg border-2 border-red-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 appearance-none shadow-sm bg-white"
                            value={bloodType}
                            onChange={(e) => setBloodType(e.target.value)}
                        >
                            <option value="">Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        
                    </div>

                    <div className="relative flex-grow">
                        <select
                            className="w-full p-3 md:p-4 rounded-lg border-2 border-red-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 appearance-none shadow-sm bg-white"
                            value={district}
                            onChange={handleDistrictChange}
                        >
                            <option value="">Select District</option>
                            {areaData.map((area, index) => (
                                <option key={index} value={area.district}>
                                    {area.district}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="relative flex-grow">
                        <select
                            className="w-full text-sm p-3 md:p-4 rounded-lg border-2 border-red-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 appearance-none shadow-sm bg-white"
                            value={cityArea}
                            onChange={(e) => setCityArea(e.target.value)}
                            disabled={!district}
                        >
                            <option value="">Select City Area</option>
                            {cityAreas.map((area, index) => (
                                <option key={index} value={area}>
                                    {area}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        Find Donors
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;