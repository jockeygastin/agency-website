'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Graphic = () => {
    return (  
         
         <div className="text-white">
          <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
            <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to bg-sky-300 bg-opacity-50"> Website Design <br /> that Works

            </div>
            <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                create your business website with us. We are a team of creatives who are excited
                 to help you grow your business.
            </p>
                
          </div>     
           
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
      <div className="grid gap-4">
        <div>
            <Image
             priority
             width={500}
             height={500}
             className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="image" />
        </div>
        <div>
            <Image
             priority
             width={500}
             height={500}
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="image" />
        </div>
        <div>
            <Image
             priority
             width={500}
             height={500}
             className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="image" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
            <Image
             priority
             width={500}
             height={500}
                 className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="image" />
         </div>
         <div>
            <Image
             priority
             width={500}
             height={500}
                 className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="image" />
         </div>
         <div>
            <Image
             priority
             width={500}
             height={500}
                 className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="image" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
            <Image
             priority
             width={500}
             height={500}
                 className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="image" />
        </div>
        <div>
            <Image
             priority
             width={500}
             height={500}
                 className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="image" />
        </div>
        <div>
            <Image
             priority
             width={500}
             height={500}
                 className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="image" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
             priority
             width={500}
             height={500}
                 className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="image" />
        </div>
        <div>
            <Image
             priority
             width={500}
             height={500}
                 className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="image" />
        </div>
        <div>
            <Image
             priority
             width={500}
             height={500}
             className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="image" />
        </div>
    </div>
    </div>
    </div>

    );
}
 
export default Graphic;