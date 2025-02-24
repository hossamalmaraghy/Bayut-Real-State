import { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleScroll = () => {
      // If user scrolls down 50px, change navbar background
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMobileMenu]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors ${
        isScrolled ? 'bg-black/70 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="h-10 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white font-medium">
          <a href="#Header" className="cursor-pointer hover:text-gray-300">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-300">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-300">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-300">
            Testimonials
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-gray-300">
            Contact
          </a>
        </ul>

        {/* Wrap Sign Up button with Link */}
        <Link to="/auth" className="hidden md:block">
          <button className="bg-white px-8 py-2 rounded-full">Sign Up</button>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? 'fixed' : 'hidden'
        } w-full h-screen top-0 left-0 bg-white z-50`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close"
          />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-10 text-lg font-medium text-gray-700">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2"
          >
            Testimonials
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Contact"
            className="px-4 py-2"
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
