import React, { useEffect, useState } from "react";
import Image from "next/image";


const LoadingScreen = () => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true); // Mulai animasi keluar
    }, 2500); // Waktu loading 2,5 detik

    return () => clearTimeout(timer); // Bersihkan timer
  }, []);

  return (
    <div className={`loading-screen ${isExiting ? "exit-animation" : ""}`}>
      {/* Tirai Kiri */}
      <div className={`tirai tirai-kiri ${isExiting ? "tirai-exit" : ""}`}></div>

      {/* Tirai Kanan */}
      <div className={`tirai tirai-kanan ${isExiting ? "tirai-exit" : ""}`}></div>

      {/* Konten Loading */}
      <div className={`loading-content ${isExiting ? "content-fade-out" : ""}`}>
        <Image
          src="/mtpLS.gif" // Path file GIF
          alt="Loading..."
          width={1250}
          height={450}
          className="object-contain animate-pulse"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
