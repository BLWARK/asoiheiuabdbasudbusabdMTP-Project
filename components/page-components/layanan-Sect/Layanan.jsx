import React from 'react';
import { FaProjectDiagram, FaShoppingCart, FaChartLine, FaComments } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Perencanaan Media',
      icon: <FaProjectDiagram size={40} />, 
      description: 'Strategi efektif dalam merancang dan mengelola media untuk mencapai target audiens.'
    },
    {
      title: 'Pembelian Media',
      icon: <FaShoppingCart size={40} />, 
      description: 'Pengadaan ruang iklan di media konvensional dan digital secara optimal.'
    },
    {
      title: 'Monitoring Media',
      icon: <FaChartLine size={40} />, 
      description: 'Pemantauan performa kampanye media untuk hasil yang maksimal.'
    },
    {
      title: 'Konsultan Media',
      icon: <FaComments size={40} />, 
      description: 'Layanan konsultasi media untuk strategi pemasaran yang lebih efektif.'
    },
  ];

  return (
    <section id="services" className="py-16  mx-auto w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-gray-50 px-10 py-6 rounded-lg shadow-md overflow-hidden relative text-center group"
            >
              <div className="overlay"></div>
              <div className="flex justify-center mb-4 text-main group-hover:text-white z-10 relative">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-main group-hover:text-white z-10 relative">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-white z-10 relative">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
