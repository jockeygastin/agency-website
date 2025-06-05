import Image from "next/image";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import SliderOne from "@/components/ui/slider";
import Graphic from "./graphic";
import Websitedesign from "./websitedesign";
import ShopifyStores from "./snippets/shopify-stores";
import Brands from "./brands";
import Services from "./services";
import Faq from "./faq";


export default function Home() {
  return (
    <div className="w-full h-full md:items-center md:justify-center bg-black/[0.96] antialiased by-grid-white/[0.2] relative overflow-hidden">
      <Navbar />
      <Spotlight
        className="hidden md:flex left-80 "
        fill="white"
      />

      <div className="p-4 mx-auto relative z-10 w-full pt-24 md:pt-32 px-2">
        <div
          className="text-4xl pb-6 md:text-7xl px-4 text-center bg-clip-text text-transparent
       bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50"
        >
          Create, grow, and <br /> Scale your Business
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          {" "}
          Custom tailored solutions for your business. We are a team of
          creatives who are excited to help you grow your business.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            href="https://portfolio-iota-wine-60.vercel.app/" target="_blank"
            className="cursor-pointer flex items-center justify-center border
                   rounded-full w-54  p-2 text-white"
          >
            View Portfolio
          </Link>


          <Link
            href="https://wa.me/9945043832" target="_blank"
            className="cursor-pointer flex items-center justify-center border
                         border-blue-700
                   rounded-full w-54  p-0 md:p-2 text-black bg-neutral-100"
          >
            <FaWhatsapp size={20} />&nbsp;Chat on whatsApp
          </Link>

        </div>    
          <div className="w-full pt-20">
               <SliderOne />
               <Services />        
               <Graphic />
               <Websitedesign />
               <ShopifyStores />  
               <Brands />
               <Faq />
          </div>
      </div>
    </div>
  );
}
