import React from 'react';
// import Link
import { Link } from "react-router-dom";
// import image
import HomeImg from '../img/woman_hero.png'

const Home = () => {
  return (
    <section className='bg-orange-200 h-[800px]   py-24'>
      <div className='container h-full mx-auto flex justify-around'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[3px] bg-orange-500 mr-3'></div>
            New Trend
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mx-2'>CLOTHES SALE STYLISH  <br/>
            <span className='font-semibold'>WOMEN AND MEN</span>
          </h1>
          <Link to={'/'} className='uppercase font-semibold self-start border-b-2 border-primary mt-4'> 
            See More
          </Link>
          
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={HomeImg} alt=''/>
        </div>

      </div>



    </section>
  )
}

export default Home 