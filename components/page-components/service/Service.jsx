"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    title: "MEDIA KONVENSIONAL",
    items: ["TV Terestial", "Pay TV", "Media Cetak", "Radio"],
    image: "/konvensional.jpg",
    reverse: false, // Gambar kanan, konten kiri
    isDark: false, // Tidak menggunakan dark mode
  },
  {
    title: "DIGITAL",
    items: [
      "Digital Marketing Strategy",
      "Social Media Development & Management",
      "Social Media Monitoring",
      "Web & Apps Design, Development & Content",
    ],
    image: "/Digital.jpg",
    reverse: true, // Gambar kiri, konten kanan
    isDark: true, // Gunakan dark mode
  },
  {
    title: "OOH - DOOH",
    items: [
      "Static Billboard",
      "Videotron",
      "Transportation Branding",
      "Airport & Station Branding",
    ],
    image: "/DOOH2.jpg",
    reverse: false, // Gambar kanan, konten kiri
    isDark: false, // Tidak menggunakan dark mode
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
  }, []);

  return (
    <section id="services" className="w-full py-16 bg-gray-50">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`w-full ${
            service.isDark ? "bg-black text-white" : "bg-gray-50 text-gray-700"
          } py-16`}
        >
          <div
            className={`container mx-auto px-4 flex flex-col md:flex-row ${
              service.reverse ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Gambar */}
            <div
              className="w-full md:w-1/2"
              data-aos={service.reverse ? "fade-left" : "fade-right"} // Animasi gambar
              data-aos-duration="1200" // Durasi animasi untuk gambar
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg object-contain"
              />
            </div>

            {/* Konten */}
            <div
              className="w-full md:w-1/2 px-4"
              data-aos={service.reverse ? "fade-right" : "fade-left"} // Animasi konten
              data-aos-duration="1500" // Durasi animasi untuk konten
            >
              <h2 className="text-2xl font-bold text-main mb-4">
                {service.title}
              </h2>
              <ul className="list-disc list-inside">
                {service.items.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;
