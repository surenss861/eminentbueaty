import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import StickyBookingCTA from "@/components/StickyBookingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eminent Beauty Centre | Toronto's Premier Aesthetic Spa",
  description: "Advanced aesthetic services in Toronto. Facial treatments, fat freezing, laser hair removal, LED light therapy, and more. Canadian Certified Aesthetician. Book your consultation today.",
  keywords: "aesthetic spa Toronto, facial treatments, fat freezing, laser hair removal, HydraFacial, chemical peel, LED light therapy, Danforth Avenue spa",
  authors: [{ name: "Eminent Beauty Centre" }],
  openGraph: {
    title: "Eminent Beauty Centre | Toronto's Premier Aesthetic Spa",
    description: "Advanced aesthetic services in Toronto. Book your consultation today.",
    type: "website",
    locale: "en_CA",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://eminentbeautycentre.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LocalBusinessSchema />
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <StickyBookingCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}

