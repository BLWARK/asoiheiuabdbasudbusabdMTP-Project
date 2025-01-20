"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const successProjectData = {
  'Media Konvensional': [
    {
      subheading: 'Television',
      image: '/television.jpg',
    },
    {
      subheading: 'Print Ad',
      image: '/print-ad.jpg',
    },
  ],
  'Media Digital': [
    {
      subheading: 'Social Media Management',
      image: '/social-media.jpg',
    },
    {
      subheading: 'Digital Ads',
      image: '/digital-ads.jpg',
    },
    {
      subheading: 'Web & APPS',
      image: '/web-apps.jpg',
    },
  ],
  'OOH-DOOH': [
    {
      subheading: 'Billboard-baliho',
      image: '/billboard.jpg',
    },
    {
      subheading: 'Videotron',
      image: '/videotron.jpg',
    },
    {
      subheading: 'Transportation Branding',
      image: '/transportation-branding.jpg',
    },
    {
      subheading: 'Airport & Station Branding',
      image: '/airport-branding.jpg',
    },
    {
      subheading: 'Store Branding - Iscreen',
      image: '/store-branding.jpg',
    },
  ],
  'Event Management': [
    {
      subheading: 'Event',
      image: '/event.jpg',
    },
  ],
};

const SuccessProject = () => {
  const [activeCategory, setActiveCategory] = useState('Media Konvensional');

  return (
    <section id="success-project" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Judul dan Subjudul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-main">Success Projects</h2>
          <p className="text-white">
            Proyek-proyek sukses kami yang mencakup berbagai bidang media dan event management.
          </p>
        </div>

        {/* Pilihan Kategori */}
        <div className="flex gap-4 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide 2xl:justify-center">
          {Object.keys(successProjectData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold flex-shrink-0 ${
                activeCategory === category
                  ? 'bg-main text-white'
                  : 'bg-gray-200 text-gray-700'
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Konten Aktif */}
        <div className="space-y-8">
          {successProjectData[activeCategory].map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-main">{item.subheading}</h3>
              <div className="w-full h-64 relative rounded-lg overflow-hidden shadow">
                <Image
                  src={item.image}
                  alt={item.subheading}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessProject;
