import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from '@/components/Nav'
import Premium from "@/components/Premium";
import Advantages from "@/components/Advantages";
import Customize from "@/components/Customize";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Prefooter from "@/components/Prefooter";
import Footer from "@/components/Footer";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uifry",
  description: "Empower Your Finances, Elevate Your Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav/>
        {children}
        <Premium/>
        <Advantages/>
        <Customize/>
        <Testimonials/>
        <Faq/>
        <Prefooter/>
        <Footer/>
      </body>
    </html>
  );
}
