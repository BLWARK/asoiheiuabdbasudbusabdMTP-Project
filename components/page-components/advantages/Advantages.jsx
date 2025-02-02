"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Advantages = () => {
  const AdvantagesList = [
    "MTP memberikan harga yang kompetitif.",
    "MTP meningkatkan jangkauan dan penetrasi iklan Anda.",
    "Dapat di-customize antara media konvensional, digital, dan media luar ruang sesuai kebutuhan kampanye Anda.",
    "Mengedepankan inovasi, teknologi, dan kualitas yang prima.",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
  }, []);

  return (
    <section id="Advantages" className="w-full h-full flex items-center bg-secondary text-foreground">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Kiri - Gambar dengan Overlay dan Teks di Depan */}
        <div
          className="w-full lg:w-1/2 relative flex items-center justify-center"
          data-aos="fade-right" // Animasi dari kiri ke kanan
          data-aos-duration="1200" // Durasi animasi bagian kiri
        >
          {/* Background Image */}
          <Image
            src="/BgHero2.jpg"
            alt="Kelebihan"
            fill
            style={{ objectFit: "cover", filter: "grayscale(100%)" }}
            className="absolute inset-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-85"></div>
          {/* Teks di Depan */}
          <div className="relative z-10 text-left px-8 lg:px-16">
            <p className="2xl:text-4xl text-2xl py-10 font-bold text-white leading-relaxed">
              Dengan <span className="text-main"> pengalaman dan keunggulan </span> dalam berbagai media, kami
              memberikan <span className="text-main"> solusi terbaik </span> untuk kebutuhan Anda.
            </p>
          </div>
        </div>

        {/* Kanan - Point Kelebihan */}
        <div
          className="w-full lg:w-1/2 2xl:py-40 py-10 flex flex-col justify-center items-start px-8 lg:px-16"
          data-aos="fade-left" // Animasi dari kanan ke kiri
          data-aos-duration="1500" // Durasi animasi bagian kanan
        >
          <ul className="space-y-4">
            {AdvantagesList.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="bg-main p-3 rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-lg text-gray-600">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
