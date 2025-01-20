import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/BgHero1.jpg"
          alt="Footer Background"
          fill
          style={{ objectFit: 'cover' }}
          className="grayscale"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto relative z-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-main mb-4">MTP Agency</h2>
          <p className="text-gray-300 mb-4 w-[80%]">
            Kami adalah partner terpercaya untuk solusi periklanan Anda, mulai dari media konvensional hingga digital. Dengan pengalaman lebih dari 20 tahun, kami siap membantu meningkatkan jangkauan dan efektivitas kampanye Anda.
          </p>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-main" />
            <p className="text-gray-300">Jl. Media Jaya No. 123, Jakarta</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <FaPhone className="text-main" />
            <p className="text-gray-300">(+62) 812 3456 7890</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <FaEnvelope className="text-main" />
            <p className="text-gray-300">info@mtpagency.com</p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold text-main mb-4">Navigasi</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Beranda</li>
            <li>Tentang Kami</li>
            <li>Layanan</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>

        

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-main ">Ikuti Kami</h3>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="p-3 rounded-full bg-main text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 rounded-full bg-main text-white">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 rounded-full bg-main text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
        
      </div>

      {/* Footer Bottom */}
      <div className="text-center relative text-gray-300 mt-20 bottom-0">
        <p>&copy; {new Date().getFullYear()} MTP. Semua Hak Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;