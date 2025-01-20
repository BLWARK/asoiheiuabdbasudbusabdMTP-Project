"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
  }, []);

  return (
    <section id="achievements" className="bg-white py-28">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kiri - Deskripsi */}
        <div
          className="space-y-4"
          data-aos="fade-right" // Animasi fade dari kanan
          data-aos-duration="1200" // Durasi animasi deskripsi
        >
          <h4 className="text-main uppercase font-bold text-lg">Pencapaian</h4>
          <h2 className="text-3xl font-bold text-gray-800">
            Pencapaian Kami Sebagai Partner Digital Terpercaya
          </h2>
          <p className="text-gray-600">
            Sebagai mitra terpercaya dalam strategi digital, kami telah membantu
            klien dari berbagai industri mencapai kesuksesan yang luar biasa. Dengan
            pendekatan inovatif, kami terus meningkatkan hasil yang memberikan dampak nyata.
          </p>
        </div>

        {/* Kanan - Data Pencapaian */}
        <div
          className="grid grid-cols-2 gap-4"
          data-aos="fade-left" // Animasi fade dari kiri
          data-aos-duration="1500" // Durasi animasi kontainer
        >
          <div
            className="bg-gray-100 rounded-lg p-6 shadow text-center"
            data-aos="fade-up" // Animasi naik
            data-aos-delay="200" // Delay animasi 200ms
          >
            <h3 className="text-3xl font-bold text-main">100+</h3>
            <p className="text-gray-600">Klien Puas</p>
          </div>
          <div
            className="bg-gray-100 rounded-lg p-6 shadow text-center"
            data-aos="fade-up" // Animasi naik
            data-aos-delay="400" // Delay animasi 400ms
          >
            <h3 className="text-3xl font-bold text-main">100+</h3>
            <p className="text-gray-600">Proyek Selesai</p>
          </div>
          <div
            className="bg-gray-100 rounded-lg p-6 shadow text-center"
            data-aos="fade-up" // Animasi naik
            data-aos-delay="600" // Delay animasi 600ms
          >
            <h3 className="text-3xl font-bold text-main">1 Triliun</h3>
            <p className="text-gray-600">Pendapatan Klien</p>
          </div>
          <div
            className="bg-gray-100 rounded-lg p-6 shadow text-center"
            data-aos="fade-up" // Animasi naik
            data-aos-delay="800" // Delay animasi 800ms
          >
            <h3 className="text-3xl font-bold text-main">10 Juta</h3>
            <p className="text-gray-600">Jangkauan Trafik</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
