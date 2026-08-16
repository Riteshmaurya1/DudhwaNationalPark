import type { Metadata } from "next";
import { Manrope, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dudhwa National Park & Tiger Reserve | Official Terai Sanctuary Portal",
  description:
    "Explore Dudhwa National Park in Lakhimpur Kheri, Uttar Pradesh. Home to Royal Bengal Tigers, Barasingha (Swamp Deer), Great One-Horned Rhinoceros, Asian Elephants, and 450+ bird species across the pristine Terai Arc Landscape.",
  keywords: [
    "Dudhwa National Park",
    "Dudhwa Tiger Reserve",
    "Lakhimpur Kheri",
    "Terai Arc Landscape",
    "Barasingha",
    "Swamp Deer",
    "One-Horned Rhino",
    "Billy Arjan Singh",
    "Safari Booking",
    "Kishanpur Wildlife Sanctuary",
    "Katarniaghat",
    "Uttar Pradesh Ecotourism",
  ],
  authors: [{ name: "Dudhwa Eco-Tourism Desk" }],
  openGraph: {
    title: "Dudhwa National Park & Tiger Reserve",
    description:
      "A living, breathing landscape of ancient Sal canopies, marshy grassland phantas, nominate Barasingha herds, and the landmark 1984 One-Horned Rhinoceros sanctuary.",
    siteName: "Dudhwa National Park",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${bricolage.variable} scroll-smooth dark`}>
      <body className="bg-[#F9F8F6] text-[#1C2421] dark:bg-[#090B0A] dark:text-[#F4F2EC] font-sans antialiased selection:bg-orange-500 selection:text-white transition-colors duration-500 min-h-screen">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
