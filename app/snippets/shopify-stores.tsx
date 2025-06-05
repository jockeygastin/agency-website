'use client'
import { div } from "framer-motion/client";
import Image from "next/image";

const stores = [
    {
        name: "Smith adam",
        image: "/image2.png",
        quote : "From custom components to complete website tailored to your needs. Simple pricing, no hidden fees.",
    },
    {
        name: "mike smith",
        image: "/shop-2.jpeg",
        quote : "From custom components to complete website tailored to your needs. Simple pricing, no hidden fees.",
    },
    {
        name: "jodan joe",
        image: "/s-2.webp",
        quote : "From custom components to complete website tailored to your needs. Simple pricing, no hidden fees.",
    },
]


const  ShopifyStores = () => {
    return (


      <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl" 

      >
        <div className="p-4 mx-auto relative z-10 w-full">
            <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to bg-neutral-400 bg-opacity-50">
                Shopify Stores <br />
            </div>
             <p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
                We create stunning Shopify stores that are designed to convert.
             </p>
              <div className="md:flex items-center justify-center px-10">
                {stores.map((store, i) => (
                    <div key={i}
                     className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto">
                        <Image src={store.image} alt="shopify store" width={400} height={400}  className="rouned-lg mx-auto"/>
                     <p className="text-neutral-800 font-bold text-lg mt-4 text-center">&quot;{store.quote}&quot; </p>
                      <p className="text-neutral-800 font-bold text-lg mt-4"> - {store.name}</p>
                      </div>
                ))}
        </div>
        </div>
         </section>
       
      );
}
 
export default ShopifyStores ;