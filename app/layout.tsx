import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
});

// Metadata API (SEO Optimization)
export const metadata: Metadata = {
  title: "MTP - Media That Penetrates",
  description: "Perusahaan Agency terpercaya yang bergerak di bidang Event Management, Perencanaan Media, dan Pembelian Space Iklan di Media Konvensional, Digital, dan Luar Ruang.",
  keywords: [
    "Event Management", 
    "Media Planning", 
    "Space Iklan", 
    "Iklan Digital", 
    "Media Luar Ruang", 
    "Strategi Pemasaran", 
    "Branding Perusahaan"
  ],
  authors: [{ name: "Media TjiptaParagon", url: "https://mediatajiptaparagon.com" }],
  generator: "Next.js",
  applicationName: "MTP",
  creator: "Media TjiptaParagon",
  publisher: "Media TjiptaParagon",
  metadataBase: new URL("https://mediatajiptaparagon.com"),

  // Open Graph untuk Media Sosial
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mediatajiptaparagon.com",
    title: "MTP - Media That Penetrates",
    description: "Solusi terbaik untuk kebutuhan Event Management dan Perencanaan Media Anda.",
    siteName: "Media TjiptaParagon",
    images: [
      {
        url: "https://mediatajiptaparagon.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Media TjiptaParagon",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MTP - Media That Penetrates",
    description: "Kami hadir sebagai solusi terpercaya dalam Event Management dan Perencanaan Media.",
    creator: "@mtp_agency",
    images: ["https://mediatajiptaparagon.com/images/twitter-card.jpg"],
  },

  // SEO Tambahan
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  category: "Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="relative overflow-hidden bg-gray-750 font-montserrat">
          <Navbar />
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  );
}
