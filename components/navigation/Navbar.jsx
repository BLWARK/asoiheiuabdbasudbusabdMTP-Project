"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Tutup menu setelah klik
  };

  return (
    <nav className="fixed w-full bg-transcluet backdrop-blur-xl shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center 2xl:px-0 px-5  py-6">
        {/* Logo */}
        <div className="flex items-center space-x-10">
          <Image
            src="/MTP_LogoWH_member.png"
            alt="MTP Logo"
            width={80}
            height={50}
            priority
            className="block 2xl:hidden"
          />
          <Image
            src="/MTP_LogoWH_member.png"
            alt="MTP Logo"
            width={90}
            height={50}
            priority
            className="hidden 2xl:block"
          />

          <div className="hidden md:flex space-x-10 font-bold text-white">
            <a
              href="/"
              className="hover:text-blue-600"
            >
              Beranda
            </a>
            <button
              onClick={() => scrollToSection("tentang-kami")}
              className="hover:text-blue-600"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-blue-600"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="hover:text-blue-600"
            >
              Our Teams
            </button>
            <button
              onClick={() => scrollToSection("success-project")}
              className="hover:text-blue-600"
            >
              Project
            </button>
          </div>
        </div>

        {/* Kontak */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Tombol Telepon */}
          <button
            onClick={() => (window.location.href = "tel:+62217223157")}
            className="flex items-center space-x-2 text-white hover:text-blue-600 rounded-lg shadow-md transition duration-300"
          >
            <FaPhoneAlt />
            <span>(021)-7223157</span>
          </button>

          {/* Tombol Email */}
          <button
            onClick={() => (window.location.href = "mailto:ptmtp@mtpagency.id")}
            className="flex items-center space-x-2 text-white hover:text-blue-600  rounded-lg shadow-md transition duration-300"
          >
            <FaEnvelope />
            <span>ptmtp@mtpagency.id</span>
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-white focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-pink-800 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Tombol Close */}
        <div className="absolute top-4 right-6">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="flex-grow flex flex-col items-center py-12 space-y-6 font-bold text-white">
          <a href="/">Beranda</a>
          <button onClick={() => scrollToSection("tentang-kami")}>
            Tentang Kami
          </button>
          <button onClick={() => scrollToSection("services+")}>Layanan</button>
          <button onClick={() => scrollToSection("team")}>Our Teams</button>
          <button onClick={() => scrollToSection("success-project")}>
            Project
          </button>
        </div>

        {/* Kontak dan Logo di Bawah */}
        <div className="flex flex-col items-center py-20 space-y-4 border-gray-300">
          <button
            onClick={() => (window.location.href = "tel:+62217223157")}
            className="flex items-center space-x-2 text-white hover:text-blue-600"
          >
            <FaPhoneAlt />
            <span>(021)-7223157</span>
          </button>
          <a
            href="mailto:info@mtpagency.com"
            className="flex items-center space-x-2 text-white hover:text-blue-600"
          >
            <FaEnvelope />
            <span>ptmtp@mtpagency.id</span>
          </a>

          {/* Logo */}
          <div className="pt-4">
            <Image
              src="/MTP_LogoWH.png"
              alt="MTP Logo"
              width={100}
              height={50}
              priority
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
