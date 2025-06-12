'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {motion} from 'framer-motion';
import {AlignJustify, X} from 'lucide-react';
import DropDownMenu from "./drop-down-menu";

const Navbar = () => {
     
           const [isDropDownVisible, setIsDropDownVisible] = useState(false);

           const toggleDropDown = () => {
            setIsDropDownVisible(!isDropDownVisible);
           }

           const closeDropDown = () => {
            setIsDropDownVisible(false);
           }
   
  return (
    <div>
      <div className="p-6 md:p-6 flex items-center justify-between z-50 w-full fixed  ">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>

        <div
          className="cursor-pointer hidden 
          md:flex space-x-10 items-center
          text-center text-white
          "
        >
          <div className="hover:text-gray-300 ">Website Design</div>
           <div className="hover:text-gray-300">Graphic Design</div>
          <Link href="/about" className="hover:text-gray-300">About US</Link>
           <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display and x icon when the drop is visible
              
            <div 
            onClick={toggleDropDown}
            className="w-8 h-8 text-slate-300 cursor-pointer">
              <X/>
              <DropDownMenu onClose={closeDropDown}/>
            </div>
          ) : (
             <AlignJustify
             onClick={toggleDropDown}
             className="w-8 h-8 text-slate-300 cursor-pointer"
             />
          )}

        </div>
     
         <div className="hidden md:flex">
             <Link href="/contact" className=" mr-10
             inline-flex h-12 animate-shimmer items-center justify-center
             rounded-md border border-white bg-transparent bg-[length:200%_100%] 
             px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-white">Contact</Link>
             

         </div>
       


      </div>
    </div>
  );
};

export default Navbar;
