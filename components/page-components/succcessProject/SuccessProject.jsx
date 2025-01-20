"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const successProjectData = {
  "Media Konvensional": [
    {
      subheading: "Television",
      image: "/television.png",
    },
    {
      subheading: "Print Ad",
      image: "/PrintAd.png",
    },
  ],
  "Media Digital": [
    {
      subheading: "Social Media Management",
      image: "/SocialMediaManagement.png",
    },
    {
      subheading: "Digital Ads",
      image: "/DigitalAds.png",
    },
    {
      subheading: "Web & APPS",
      image: "/webApp.png",
    },
  ],
  "OOH-DOOH": [
    {
      subheading: "Billboard-baliho",
      image: "/Billboard.png",
    },
    {
      subheading: "Videotron",
      image: "/VideoTron.png",
    },
    {
      subheading: "Transportation Branding",
      image: "/TransportationBranding.png",
    },
    {
      subheading: "Airport & Station Branding",
      image: "/AriportBranding.png",
    },
    {
      subheading: "Store Branding - Iscreen",
      image: "/StoreBranding.png",
    },
  ],
  "Event Management": [
    {
      subheading: "Event",
      image: "/Event.png",
    },
  ],
};

const SuccessProject = () => {
  const [activeCategory, setActiveCategory] = useState("Media Konvensional");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
  }, []);

  return (
    <section id="success-project" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Judul dan Subjudul */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1200" // Durasi animasi judul
        >
          <h2 className="text-3xl font-bold text-main">Success Projects</h2>
          <p className="text-white">
            Proyek-proyek sukses kami yang mencakup berbagai bidang media dan
            event management.
          </p>
        </div>

        {/* Pilihan Kategori */}
        <div
          className="flex gap-4 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide 2xl:justify-center"
          data-aos="fade-up"
          data-aos-duration="1500" // Durasi animasi tombol kategori
        >
          {Object.keys(successProjectData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold flex-shrink-0 ${
                activeCategory === category
                  ? "bg-main text-white"
                  : "bg-gray-200 text-gray-700"
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Konten Aktif */}
        <div className="space-y-8">
          {successProjectData[activeCategory].map((item, index) => (
            <div
              key={index}
              className="space-y-4 mt-20"
              data-aos="fade-up" // Animasi dari bawah ke atas
              data-aos-delay={index * 200} // Delay animasi berdasarkan indeks
            >
              <h3 className="text-xl font-bold text-main">{item.subheading}</h3>
              <div className="w-full 2xl:h-[530px] h-[200px] relative rounded-lg overflow-hidden shadow">
                <Zoom>
                  <Image
                    src={item.image}
                    alt={item.subheading}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-lg"
                  />
                </Zoom>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessProject;
