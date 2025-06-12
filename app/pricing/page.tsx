'use client'
import { div } from "framer-motion/m";
import { useState } from "react";
import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import Navbar from "@/components/navbar";
import { desc, i, style } from "framer-motion/client";
import { features } from "process";


const plans = [
    
   {
    index: 0,
    name: "Basic",
    price: 9999,
    features: [
        "Fully Responsive on all Screens",
        "Design + Development",
        "Private Chat Support",
        "Unlimited Revisions",
    ],
    style:
        "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",

    description:
        "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
        button: "Buy Now",
   },

   {
      index: 1,
      name: "Pro",
      price: 19999,
      features: [
          "Fully Responsive on all Screens",
          "Design + Development",
          "Private Chat Support",
          "Unlimited Revisions",
      ],
      style:
          "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
  
      description:
          "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
          button: "Buy Now",

   },

   {
      index: 2,
      name: "Premium",
      feature: "Contact Us",
      price: 29999,
      features: [
          "Fully Responsive on all Screens",
          "Design + Development",
          "Private Chat Support",
          "Unlimited Revisions",
          "24-hour support response time",
          "Priority service",
          "Access to all features",
      ],
      style:
          "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
  
      description:
          "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
          button: "Contact us",
   },

];


const Pricing =  () => {
    return (  

        <div className="w-full md:items-center md:justify-center bg-white/[0.96] antialiased by-grid-white/[0.2] relative overflow-hidden">

         <Navbar />
           <div className="flex items-center justify-center flex-col">
                  <div className="text-4xl md:text-5xl pb-10 md:pb-20 px-6 pt-26 text-center bg-clip-text text-transparent bg-gradient-to-b from-black to bg-neutral-900 bg-opacity-50">
                           Simple Pricing <br />Choose your plan
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
                   {plans.map((plan, i) => (

                    <div key={plan.name} 
                     className="h-full flex flex-col justify-between border rounded-3xl px-6"
                     >
                        <div className={plan.style}>
                            <div className="text-4xl flex items-center font-medium text-black">
                                {plan.name}
                            {/* render features tag only for enterprise tab */}
                            {plan.feature === "Contact Us" && (
                                <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-3 items-center">
                                    Contact Us
                                </div>
                            )}
                            </div>

                            <div className="text-3xl pt-6 text-black">{plan.price}</div>
                            <div className="py-6 text-black">{plan.description}</div>

                            <ul>
                                {plan.features.map((feature) => (
                                 <li
                                     key={feature}
                                     className="text-lg py-2 flex space-x-2 items-center text-black"
                                     >
                                        {/* render checkmark only for enterprise tab */}
                                        {plan.feature === "Contact Us" ? (
                                            <PiCheckCircleFill  className="text-blue-400 mr-2 text-xl"/>
                                        ) : (
                                            <PiCheckCircleFill  className="text-green-600 mr-2 text-xl"/>

                                        )
                                        }

                                        {feature}
                                     </li>                                   
                                ))}
                            </ul>                       
                        </div>

                        <div className={plan.button}>
                            {i === 0 && (
                                <Link href="https://buy.stripe.com/6oEg1WdsibFr1EYbIk"
                                className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center justify-center flex bg-gradient-to-b from-black to-neutral-900"
                                >
                                    Buy Now
                                </Link>
                            )} 

                            {i === 1 && (
                                <Link 
                                      href="https://buy.stripe.com/6oEg1WdsibFr1EYbIk"
                                      className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center justify-center flex bg-gradient-to-b from-black to-neutral-900"
                                >
                                    Buy Now
                                </Link>
                            )}

                            {i === 2 && (
                                <Link href="/contact"
                                className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center justify-center flex bg-gradient-to-b from-black to-neutral-900"
                                >
                                    Contact Us
                                </Link>
                            )}

                        </div>
                      </div>                      
                   ))}
                 </div>
               </div>
                
        </div>
    )
};
 
export default  Pricing;