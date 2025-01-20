"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const TentangKami = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
  }, []);

  return (
    <section id="tentang-kami" className="2xl:py-44 py-20 bg-gray-750 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Kiri - Gambar */}
        <div
          className="w-full lg:w-1/2 flex justify-center"
          data-aos="fade-right" // Animasi dari kiri ke kanan
          data-aos-duration="1200" // Durasi animasi untuk gambar
        >
          <Image
            src="/AboutUs.png"
            alt="Tentang Kami"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Kanan - Konten Teks */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left" // Animasi dari kanan ke kiri
          data-aos-duration="1500" // Durasi animasi untuk teks
        >
          <h2 className="text-3xl font-bold mb-4 text-main">Tentang Kami</h2>
          <p className="text-white leading-relaxed mb-6">
            MTP menyediakan layanan event management, perencanaan media, dan pembelian space iklan di media konvensional,
            digital, serta luar ruang. Sebagai bagian dari Grup Pantarei Communications, kami berkomitmen untuk membantu
            bisnis Anda menciptakan strategi yang efektif dan berdampak. Hubungi kami untuk mewujudkan rencana media atau
            event Anda.
          </p>
          {/* Tombol Contact Us */}
          <button className="mt-6 px-6 py-2 bg-main text-white rounded-lg shadow-md hover:bg-hover transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
