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
    }, 1000); // 1 seconds delay
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Plasma', href: '/plasma',
       dropdown: [
        { name: 'What is Plasma', href: '/plasma' },
        { name: 'Who can donate plasma', href: '/plasma' },
        { name: 'Where to donate plasma', href: '/plasma' },
        { name: 'How to donate plasma', href: '/plasma' },
        { name: 'change to plasma donation', href: '/plasma' },
        { name: 'Why we need plasma donors', href: '/plasma' },
        { name: 'The journey of plasma', href: '/plasma' }
      ] },
    { name: 'Stem cells', href: '/stem-cells', dropdown: [{ name: 'Info', href: '/stem-cells' }] },
    { name: 'Why give blood', href: '/why-give-blood', dropdown: [{ name: 'Benefits', href: '/why-give-blood' }] },
    {
      name: 'Who can give blood',
      dropdown: [
        { name: 'Eligibility', href: '/eligibility' },
        { name: 'Requirements', href: '/requirements' }
      ]
    },
    {
      name: 'The donation process',
      dropdown: [
        { name: 'Step-by-step', href: '/step-by-step' },
        { name: 'Preparation', href: '/preparation' }
      ]
    },
    {
      name: 'Where to donate',
      dropdown: [
        { name: 'Centers', href: '/centers' },
        { name: 'Map view', href: '/map' }
      ]
    },
    {
      name: 'News and campaigns',
      dropdown: [
        { name: 'News', href: '/news' },
        { name: 'Campaigns', href: '/campaigns' }
      ]
    }
  ];

  const dropdownBase = isScrolled ? 'bg-red-700 text-white' : 'bg-white text-red-700';
  const dropdownHover = isScrolled ? 'hover:bg-red-600' : 'hover:bg-red-50';

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

            <div className="hidden md:flex space-x-4 text-sm font-medium">
              {navItems.slice(1).map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`px-3 py-2 rounded transition-colors ${
                      isScrolled
                        ? 'text-red-700 hover:bg-red-100'
                        : 'text-white hover:bg-red-600'
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

          {/* Mobile toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-red-700' : 'text-white'} hover:text-red-500`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 py-2 space-y-2 ${
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
