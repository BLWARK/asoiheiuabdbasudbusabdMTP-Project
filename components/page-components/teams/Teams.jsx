"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Jimmy Lizardo",
    description:
      "Praktisi dan konsultasi media selama lebih dari 20 Tahun, Doktor Manajemen Spesialisi dalam Digital Out of Home Media Industry.",
    image: "/JL.png",
  },
  {
    name: "Yosafat Pandu Bagaskoro",
    description:
      "Berpengalaman lebih dari 20 Tahun dalam penyusunan strategi media.",
    image: "/PB.png",
  },
  {
    name: "James Manurung",
    description: "Berpengalaman lebih dari 20 Tahun di bidang Event Organisasi.",
    image: "/JM.png",
  },
  {
    name: "Jelly Pazola",
    description:
      "Berpengalaman di bidang Administrasi kurang lebih 10 Tahun.",
    image: "/JP.png",
  },
];

const Teams = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
  }, []);

  // Auto-scroll setiap 7 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval); // Membersihkan interval saat unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) {
      nextSlide(); // Swipe ke kiri
    } else if (swipeDistance < -50) {
      prevSlide(); // Swipe ke kanan
    }
  };

  return (
    <section id="team" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

        {/* Slider untuk Mobile */}
        <div
          className="md:hidden slider-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="slider-item p-4"
                data-aos="fade-up"
                data-aos-delay={index * 200} // Berikan delay untuk setiap item
              >
                <div className="bg-gray-800 h-[510px] rounded-lg overflow-hidden shadow-lg">
                  <div className="relative  w-full h-[350px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain px-5 "
                    />
                  </div>
                  <div className="px-4 py-2 mb-10">
                    <h3 className="text-xl font-bold text-main mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid untuk Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-up" // Animasi dari bawah ke atas
              data-aos-delay={index * 200} // Delay untuk setiap anggota
            >
              <div className="relative w-full h-[350px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale p-5 group-hover:grayscale-0 transition duration-300 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-main mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-300">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
