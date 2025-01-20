"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-transcluet backdrop-blur-xl shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-10">
        <Link href="/">
            <Image
              src="/MTP_LogoWH.png"
              alt="MTP Logo"
              width={80}
              height={50}
              priority
              className='block 2xl:hidden'
            />
          </Link>
          <Link href="/">
            <Image
              src="/MTP_LogoWH.png"
              alt="MTP Logo"
              width={150}
              height={50}
              priority
              className='hidden 2xl:block'
            />
          </Link>
         
          <div className="hidden md:flex space-x-10 font-bold">
            <Link href="#services" className="hover:text-blue-600">Layanan</Link>
            <Link href="#about" className="hover:text-blue-600">Tentang Kami</Link>
            <Link href="#portfolio" className="hover:text-blue-600">Portfolio</Link>
            <Link href="#contact" className="hover:text-blue-600">Kontak</Link>
          </div>
        </div>
        

        {/* Kontak */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+62123456789" className="flex items-center space-x-1 text-white hover:text-blue-600">
            <FaPhoneAlt />
            <span>+62 123 456 789</span>
          </a>
          <a href="mailto:info@mtpagency.com" className="flex items-center space-x-1 text-white hover:text-blue-600">
            <FaEnvelope />
            <span>info@mtpagency.com</span>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-2 space-y-4">
            
            <Link href="#services" onClick={toggleMenu}>Layanan</Link>
            <Link href="#about" onClick={toggleMenu}>Tentang Kami</Link>
            <Link href="#portfolio" onClick={toggleMenu}>Portfolio</Link>
            <Link href="#contact" onClick={toggleMenu}>Kontak</Link>
            <a href="tel:+62123456789" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <FaPhoneAlt />
              <span>+62 123 456 789</span>
            </a>
            <a href="mailto:info@mtpagency.com" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <FaEnvelope />
              <span>info@mtpagency.com</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
