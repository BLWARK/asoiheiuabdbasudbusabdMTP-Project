"use client"; // Diperlukan untuk state di client-side
import React, { useState, useEffect } from "react";
import Hero from "@/components/page-components/hero-sect/Hero";
import Layanan from "@/components/page-components/layanan-Sect/Layanan";
import TentangKami from "@/components/page-components/tentangKami-sect/TentangKami";
import Advantages from "@/components/page-components/advantages/Advantages"
import Services from "@/components/page-components/service/Service"
import Teams from "@/components/page-components/teams/Teams"
import Achievment from "@/components/page-components/achievment/Achievment"
import SuccessProject from "@/components/page-components/succcessProject/SuccessProject"
import LoadingScreen from "@/components/LoadingScreen"; 

const Page = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hilangkan loading setelah 3 detik
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // Tampilkan loading screen
  }
  return (
    <main className="relative w-full h-full">
      {/* Hero Section */}
      <section className=" z-10">
        <Hero />
      </section>

      {/* Layanan Section - Mengapung di tengah */}
      <section className="  w-full">
        <Layanan />
      </section>

      {/* Tentang Kami Section */}
      <section className=" z-10">
        <TentangKami />
      </section>

      <section className="  w-full">
        <Advantages />
      </section>

      <section className="  w-full">
        <Services />
      </section>
      <section className="  w-full">
        <Teams />
      </section>
      <section className="  w-full">
        <Achievment />
      </section>
      <section className="  w-full">
        <SuccessProject />
      </section>
    </main>
  );
};

export default Page;
