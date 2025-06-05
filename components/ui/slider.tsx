'use client'
import Slider from 'react-slick';
import Image from "next/image";
import {useMediaQuery} from 'react-responsive';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SliderOne = () => {

  const isMediumScreen = useMediaQuery({query: '(min-width: 768, max-width: 1024px)'});
     const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

     const settings = {
         arrows : false,
         infinite: true,
         slidesToShow:3,
         autoplay:true,
         speed:4000,
         autoplaySpeed:1000,
         className: "w-full mx-auto cursor-pointer center-mode",
     }
        if (isMediumScreen) {
         settings.slidesToShow = 1.67
        } else if (isSmallScreen) {
           settings.slidesToShow = 1
        }
        

     return (
        <div>
         <Slider {...settings}>
            <>
             <div className='rounded-md px-2 md:p-10'>
               <Image
               priority
               src="/it.jpg"
               alt='logo'
               width={1000}
               height={1000}
               className="rounded-2xl"
               />
             </div>
            </>

              <>
             <div className='rounded-md px-2 md:p-10'>
               <Image
               priority
               src="/support.jpg"
               alt='logo'
               width={1000}
               height={1000}
               className="rounded-2xl"
               />
             </div>
            </>

               <>
             <div className='rounded-md px-2 md:p-10'>
               <Image
               priority
               src="/sales.jpg"
               alt='logo'
               width={1000}
               height={1000}
               className="rounded-2xl"
               />
             </div>
            </> 
              <>
             <div className='rounded-md px-2 md:p-10'>
               <Image
               priority
               src="/sales.jpg"
               alt='logo'
               width={1000}
               height={1000}
               className="rounded-2xl"
               />
             </div>
            </> 
              <>
             <div className='rounded-md px-2 md:p-10'>
               <Image
               priority
               src="/support.jpg"
               alt='logo'
               width={1000}
               height={1000}
               className="rounded-2xl"
               />
             </div>
            </>

            </Slider>
        </div>
            
     );
}

export default SliderOne;