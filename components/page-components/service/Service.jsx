import React from 'react';
import Image from 'next/image';

const servicesData = [
  {
    title: 'MEDIA KONVENSIONAL',
    items: ['TV Terestial', 'Pay TV', 'Media Cetak', 'Radio'],
    image: '/media-konvensional.jpg',
    reverse: false, // Gambar kanan, konten kiri
  },
  {
    title: 'DIGITAL',
    items: [
      'Digital Marketing Strategy',
      'Social Media Development & Management',
      'Social Media Monitoring',
      'Web & Apps Design, Development & Content',
    ],
    image: '/digital-services.jpg',
    reverse: true, // Gambar kiri, konten kanan
  },
  {
    title: 'OOH - DOOH',
    items: [
      'Static Billboard',
      'Videotron',
      'Transportation Branding',
      'Airport & Station Branding',
    ],
    image: '/ooh-dooh.jpg',
    reverse: false, // Gambar kanan, konten kiri
  },
];

const Service = () => {
  return (
    <section id="services" className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              service.reverse ? 'md:flex-row-reverse' : ''
            } items-center gap-8 mb-16`}
          >
            {/* Gambar */}
            <div className="w-full md:w-1/2">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Konten */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-2xl font-bold text-main mb-4">{service.title}</h2>
              <ul className="list-disc list-inside text-gray-700">
                {service.items.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
