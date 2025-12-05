'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, Home as HomeIcon } from 'lucide-react';

export default function NavHeader() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 1000);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Plasma',
      href: '/plasma',
      dropdown: [
        { name: 'What is Plasma', href: '/plasma' },
        { name: 'Who can donate plasma', href: '/plasma/who-can-donate-plasma' },
        { name: 'Where to donate plasma', href: '/plasma/where-to-donate-plasma' },
        { name: 'How to donate plasma', href: '/plasma/how-to-donate-plasma' },
        { name: 'change to plasma donation', href: '/plasma/change-to-plasma-donation' },
        { name: 'Why we need plasma donors', href: '/plasma/why-we-need-plasma-donors' },
        { name: 'The journey of plasma', href: '/plasma/the-journey-of-plasma' }
      ]
    },
    { name: 'Stem cells', href: '/stem-cells', 
      dropdown: [
        { name: 'Stem cells', href: '/stem-cells' },
        { name: 'About stem cells', href: '/stem-cells/about-stem-cells' },
        { name: 'Donation stem cells', href: '/stem-cells/donation-stem-cells' },
        { name: 'Joining the register', href: '/stem-cells/joining-the-register' },
        { name: 'Matching process', href: '/stem-cells/matching-process' }
      ] },
    { name: 'Why give blood', href: '/why-give-blood', 
      dropdown: [
        { name: 'Why give blood', href: '/why-give-blood' },
        { name: 'Demand for different blood type', href: '/why-give-blood/demand-for-different-blood-type' },
        { name: 'Blood type', href: '/why-give-blood/blood-type' },
        { name: 'How blood is used', href: '/why-give-blood/how-blood-is-used' },
        { name: 'Who you could help', href: '/why-give-blood/who-you-could-help' }
      ] },
    {
      name: 'Who can give blood',
      dropdown: [
        { name: 'Who can give blood', href: '/eligibility' },
        { name: 'Can I give blood?', href: '/eligibility/can-i-give-blood' },
        { name: 'Getting an appointment', href: '/eligibility/getting-an-appointment' },
        { name: 'Health and Eligibility', href: '/eligibility/health-and-eligibility' },
        { name: 'Travel considerations', href: '/eligibility/travel-considerations' },
        { name: 'Occupation considerations', href: '/eligibility/occupation-considerations' },
        { name: 'Donors and disability', href: '/eligibility/donors-and-disability' }
      ]
    },
    {
      name: 'The donation process',
      dropdown: [
        { name: 'The donation process', href: '/donation-process' },
        { name: 'Giving blood for the first time', href: '/donation-process/first-time-donors' },
        { name: 'Registering online', href: '/donation-process/register-online' },
        { name: 'Preparing to give blood', href: '/donation-process/prepare-to-donate' },
        { name: 'What happens on tha day', href: '/donation-process/donation-day' },
        { name: 'After your donation', href: '/donation-process/after-donation' },
        { name: 'About our donation venues', href: '/donation-process/donation-venues' },
        { name: 'Children at donation venues', href: '/donation-process/children-at-venues' },
        { name: 'Further information', href: '/donation-process/donation-faq' },
        { name: 'Recognising donors', href: '/donation-process/donor-recognition' },
      ]
    },
    {name: 'Where to donate',
      dropdown: [
        { name: 'Centers', href: '/where-to-donate/centers' },
        { name: 'Map view', href: '/where-to-donate/map' }
      ]
    },
  ];

  const dropdownBase = isScrolled ? 'bg-red-700 text-white' : 'bg-white text-red-700';
  const dropdownHover = isScrolled ? 'hover:bg-red-600' : 'hover:bg-red-200';

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white text-red-700 shadow-sm' : 'bg-red-700 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className={`flex items-center space-x-1 font-medium text-sm ${
                isScrolled ? 'text-red-700 hover:text-red-500' : 'text-white hover:text-red-200'
              }`}
            >
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>

            {/* Desktop Menu (visible from lg and up) */}
            <div className="hidden lg:flex space-x-4 text-sm font-medium">
              {navItems.slice(1).map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`px-3 py-2 rounded transition-colors ${
                      isScrolled ? 'text-red-700 hover:bg-red-100' : 'text-white hover:bg-red-600'
                    }`}
                  >
                    {item.name}
                  </button>

                  {hoveredMenu === item.name && (
                    <div className={`absolute left-0 mt-1 shadow-lg rounded w-48 z-10 ${dropdownBase}`}>
                      {item.dropdown?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-4 py-2 transition-colors ${dropdownHover}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Toggle button for mobile and md devices */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden ${isScrolled ? 'text-red-700' : 'text-white'} hover:text-red-500`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown until lg) */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-4 py-2 space-y-2 ${
            isScrolled ? 'bg-white text-red-700' : 'bg-red-600 text-white'
          }`}
        >
          {navItems.map((item) =>
            item.name === 'Home' ? (
              <Link key={item.name} href={item.href} className="block py-2 border-b border-red-200">
                <div className="flex items-center space-x-1">
                  <HomeIcon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ) : (
              <div key={item.name}>
                <button
                  onClick={() =>
                    setOpenDropdownMobile(openDropdownMobile === item.name ? null : item.name)
                  }
                  className="w-full text-left py-2 border-b border-red-200"
                >
                  {item.name}
                </button>
                {openDropdownMobile === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block py-1 text-sm transition-colors ${
                          isScrolled ? 'hover:text-red-500' : 'hover:text-red-200'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}
    </nav>
  );
}
