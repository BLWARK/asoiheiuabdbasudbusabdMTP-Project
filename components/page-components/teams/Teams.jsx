"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Teams = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Total slide = 2
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
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
      nextSlide();
    } else if (swipeDistance < -50) {
      prevSlide();
    }
  };

  return (
    <section
      id="team"
      className="bg-black text-white py-16 2xl:px-10 flex justify-center items-center"
    >
      <div className="container  px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Here We Are</h2>

        {/* Slider untuk Mobile */}
        <div
          className="relative w-full h-auto overflow-hidden md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {/* Slide 1 */}
            <div
              className="w-full flex flex-col items-center justify-center text-center px-6 shrink-0"
              data-aos="fade-up"
            >
              <div className="w-full max-w-sm">
                <Image
                  src="/JIL.jpg"
                  alt="Jimmy Lizardo"
                  width={500}
                  height={500}
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-main mb-4">
                  Jimmy Lizardo
                </h3>
                <p className="2xl:text-lg text-[14px] text-white">
                  Praktisi dan konsultasi media selama lebih dari 20 Tahun,
                  Doktor Manajemen Spesialisi dalam Digital Out of Home Media
                  Industry.
                </p>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className="w-full flex flex-col items-center justify-center text-center px-6 shrink-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-full max-w-sm">
                <Image
                  src="/YPB.jpg"
                  alt="Yosafat Pandu Bagaskoro"
                  width={500}
                  height={500}
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-main mb-4">
                  Yosafat Pandu Bagaskoro
                </h3>
                <p className="2xl:text-lg text-[14px] text-white">
                  Berpengalaman lebih dari 20 Tahun dalam penyusunan strategi
                  media. Pernah menjabat sebagai Media Strategic Director Matari
                  Advertising dan Media Manager PT Coca Cola Indonesia.
                </p>
              </div>
            </div>
            {/* Slide 3 */}
            <div
              className="w-full flex flex-col items-center justify-center text-center px-6 shrink-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-full max-w-sm">
                <Image
                  src="/IRAWAN.jpg"
                  alt="Irawan"
                  width={500}
                  height={500}
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-main mb-4">
                  Irawan Soemardjo
                </h3>
                <p className="2xl:text-lg text-[14px] text-white">
                  Berpengalaman lebih dari 26 tahun di bidang merek, pemasaran
                  terintegrasi, dan sektor perbankan. Memiliki peran penting
                  dalam mendukung pertumbuhan dan transformasi organisasi serta
                  merek, dengan keahlian yang mampu menghadapi dinamika dan
                  perubahan zaman secara strategis.
                </p>
              </div>
            </div>
            {/* Slide 4 */}
            <div
              className="w-full flex flex-col items-center justify-center text-center px-6 shrink-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-full max-w-sm">
                <Image
                  src="/RANI.jpg"
                  alt="Rani"
                  width={500}
                  height={500}
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-main mb-4">
                  Rani Indriani
                </h3>
                <p className="2xl:text-lg text-[14px] text-white">
                  Berpengalaman sejak 2007, dengan keahlian di bidang traffic,
                  produksi, dan manajemen keuangan. Berperan sebagai Traffic
                  Manager, Kepala Urusan Umum, hingga CFO, mendalami akuntansi,
                  perpajakan, dan program keuangan untuk mendukung kesuksesan
                  organisasi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid untuk Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-20">
          {/* Member 1 */}
          <div
            className="flex flex-col items-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="/JIL.jpg"
              alt="Jimmy Lizardo"
              width={400}
              height={500}
              className="object-contain rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-bold text-main mt-4">Jimmy Lizardo</h3>
            <p className="text-lg w-full text-white mt-2 text-left">
              Praktisi dan konsultasi media selama lebih dari 20 Tahun, Doktor
              Manajemen Spesialisi dalam Digital Out of Home Media Industry.
            </p>
          </div>
          {/* Member 2 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src="/YPB.jpg"
              alt="Yosafat Pandu Bagaskoro"
              width={400}
              height={500}
              className="object-contain rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-bold text-main mt-4">
              Yosafat Pandu Bagaskoro
            </h3>
            <p className="text-lg w-full text-white mt-2 text-left">
              Berpengalaman lebih dari 20 Tahun dalam penyusunan strategi media.
              Pernah menjabat sebagai Media Strategic Director Matari
              Advertising dan Media Manager PT Coca Cola Indonesia.
            </p>
          </div>
          {/* Member 3 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src="/IRAWAN.jpg"
              alt="Irawan"
              width={400}
              height={500}
              className="object-contain rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-bold text-main mt-4">
              Irawan Soemardjo
            </h3>
            <p className="text-lg w-full text-white mt-2 text-left">
              Berpengalaman lebih dari 26 tahun di bidang merek, pemasaran
              terintegrasi, dan sektor perbankan, membantu organisasi tumbuh dan
              beradaptasi dengan perubahan zaman.
            </p>
          </div>
          {/* Member 4 */}
          <div
            className="flex flex-col items-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src="/RANI.jpg"
              alt="Rani"
              width={400}
              height={500}
              className="object-contain rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-bold text-main mt-4">Rani Indriani</h3>
            <p className="text-lg w-full text-white mt-2 text-left">
              Berpengalaman sejak 2007, dengan keahlian di bidang traffic,
              produksi, dan manajemen keuangan. Berperan sebagai Traffic
              Manager, Kepala Urusan Umum, hingga CFO, mendalami akuntansi,
              perpajakan, dan program keuangan untuk mendukung kesuksesan
              organisasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
