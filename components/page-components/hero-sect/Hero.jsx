"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // Inisialisasi AOS langsung di komponen
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/BgHero1.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: "cover", filter: "grayscale(100%)" }} // Tambahkan efek grayscale
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay hitam dengan transparansi */}

      {/* Left Arrow */}
      <div
        data-aos="fade-right"
        className="absolute -left-60 transform opacity-30 -translate-y-1/2"
      >
        <Image
          src="/HeroArrowLeft.png"
          alt="Left Arrow"
          width={900}
          height={900}
          className="animate-leftArrow 2xl:block hidden"
        />
      </div>
      <div
        data-aos="fade-right"
        className="absolute -left-[500px] mt-20 transform opacity-30 -translate-y-1/2"
      >
        <Image
          src="/HeroArrowLeft.png"
          alt="Left Arrow"
          width={600}
          height={200}
          className="animate-leftArrow 2xl:hidden block"
        />
      </div>

      {/* Right Arrow */}
      <div
        data-aos="fade-left"
        className="absolute -right-60 transform opacity-60 -translate-y-1/2"
      >
        <Image
          src="/HeroArrowRight.png"
          alt="Right Arrow"
          width={900}
          height={900}
          className="animate-rightArrow 2xl:block hidden"
        />
      </div>
      <div
        data-aos="fade-left"
        className="absolute -right-[500px] mt-20 transform opacity-30 -translate-y-1/2"
      >
        <Image
          src="/HeroArrowRight.png"
          alt="Left Arrow"
          width={600}
          height={200}
          className="animate-leftArrow 2xl:hidden block"
        />
      </div>

      {/* Overlay Logo */}
      <div
        data-aos="fade-up"
        className="absolute inset-0 flex items-center justify-center float float-animation transform transition-all"
      >
        <Image
          src="/MTP_LogoWH.png"
          alt="Logo MTP"
          width={1000}
          height={900}
          className="absolute"
        />
      </div>
    </div>
  );
};

export default Hero;
