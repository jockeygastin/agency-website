import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'

const page = () => {
  return (

    <>
          <Navbar />
        <div className="w-full h-screen md:items-center pt-32 md:justify-center bg-black/[0.96] antialiased by-grid-white/[0.2] relative overflow-hidden">
        <h1 className='text-4xl md:text-5xl text-center text-white'>Digitally empowering the businesses.</h1>
        <br />
        <p className='text-lg font-normal text-neutral-300 max-w-[50%] mx-auto'>We're a multi-cultural team from around the nation! We come from diverse backgrounds, 
            bringing different personalities, experiences and skills to the job. This is what makes our team so special.</p>
             <div className='flex items-center justify-center gap-2 mt-6 flex-col md:flex-col text-white'>
            <img src="/jack.png" alt="team" style={{height: '400px', width: '370px', objectFit: 'cover'}} />

            <h1>Jockey gastin</h1>
            <p>Fullstack Developer</p>
     </div>
     </div>

    </>
  )
}

export default page

