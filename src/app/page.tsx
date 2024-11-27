"use client"

import { Poppins } from "next/font/google"

import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Career from "@/components/Career/Career";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";
import AboutUs from "@/components/AboutUs/AboutUs";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Text2 from "@/components/Common/Text2/Text2";
import Navbar from "@/components/Common/Navbar/Navbar";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300','400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function Home() {
  return (
    <html>
      <body className={poppins.className}>
        {/* <Header/> */}
        <Navbar/>
        <Banner/> 
        <Services/>
        <AboutUs/>
        <Portfolio/>
        <GetInTouch/>
        <Career/>
        <Footer/> 
      </body>
    </html>
  );
}




