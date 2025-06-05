import { div, image, sub } from "framer-motion/client";
import React from "react";
import { Lora } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";


const font = Lora ({
    subsets: ["latin"],
    weight: ["400"],
    
});

const logos = [
    {
        image: "/logo.png",
    
    },
       {
        image: "/log3.png",
    
    },
   {
        image: "/log1.png",
    
    },
   {
        image: "/log2.png",
    
    },
   {
        image: "/log4.png",
    
    },
     {
        image: "/log5.png",
    
    }
];


const Brands = () => {
    return (  
     
        <div>
            <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
                <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent
                   bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
                    The Best Brands <br /> choose us
                  </div>

                  <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
                    From small business to large corporations, we have helped many brands elevate their business.
                  </p>

                  <div className="grid grid-cols-3 items-center justify-center mx-auto md:w-3/5 cursor-pointer">
                   {logos.map((logo, i) =>(
                    <div key={i} className="p-4 md:p-20">
                        <Image 
                          priority
                          src={logo.image}
                          alt="logo"
                          width={200}
                          height={200}
                          className="w-full h-auto max-w-full rounded-lg"
                          />
                    </div>
                   ))}

                  </div>
                      <div 
                      className={cn(
                      "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4 px-8 text-center text-white ",
                      font.className
                      )}
                      >

                      &quot; We are a team of creatives who are excited to help you grow your business. &quot;
                      </div>
                      <div className="items-center flex justify-center flex-col text-white">
                        <Image
                           src="/logo.png"
                           alt="logo"
                           width={1000}
                           height={1000}
                           className="pt-2 xl:pt-0 w-10 xl:w-14" />

                           <div className="text-center">
                            <div className="text-md font-semibold pt-4">Jockey gasting</div>
                            <div className="text-lg">Full-stack developer</div>

                            </div>
                           </div>                      
                      </div>

            </div>
   

    );
}
 
export default Brands;