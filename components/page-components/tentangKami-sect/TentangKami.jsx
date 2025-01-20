import React from 'react';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";

const TentangKami = () => {
  return (
    <section id="tentang-kami" className="py-16 bg-gray-750  text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Kiri - Gambar */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/tentang-kami.jpg"
            alt="Tentang Kami"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Kanan - Konten Teks */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-main">Tentang Kami</h2>
          <p className="text-white leading-relaxed mb-6">
          MTP menyediakan layanan event management, perencanaan media, dan pembelian space iklan di media konvensional, digital, serta luar ruang. Sebagai bagian dari Grup Pantarei Communications, kami berkomitmen untuk membantu bisnis Anda menciptakan strategi yang efektif dan berdampak. Hubungi kami untuk mewujudkan rencana media atau event Anda.
          </p>
          {/* <h4 className="font-bold py-4 text-2xl text-main">Kelebihan kami</h4>
          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-main p-3 rounded-full">
                <FaCheck className="text-white" />
              </div>
              <div>
                
                <p className="text-white">MTP memberikan harga yang kompetitif.</p>
              </div>
            </div>

            <div className="flex items-center justify-start jus gap-4">
              <div className="bg-main p-3 rounded-full">
                <FaCheck className="text-white" />
              </div>
              <div>
                
                <p className="text-white">MTP Meningkatkan jangkauan dan penetrasi iklan Anda.</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <div className="bg-main p-3 rounded-full">
                <FaCheck className="text-white" />
              </div>
              <div>
                
                <p className="text-white">Dapat di-customize antara media konvensional, digital, dan 
                media luar ruang sesuai kebutuhan kampanye Anda.</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="bg-main p-3 rounded-full">
                <FaCheck className="text-white" />
              </div>
              <div>
                
                <p className="text-white"> Mengedepankan inovasi, teknologi, dan kualitas 
                yang prima.</p>
              </div>
            </div>
          </div> */}
          {/* <button className="mt-6 px-6 py-2 bg-main text-white rounded-lg shadow-md hover:bg-hover transition duration-300">
            Selengkapnya
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
