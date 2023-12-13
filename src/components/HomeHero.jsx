import React from 'react';
import HeroImg from '../images/Heroimg.png';
import { motion } from 'framer-motion';

const HomeHero = () => {
  return (
    <div className='flex bg-[#fef4eb] h-[300px] max-sm:h-[400px] justify-between py-5 px-[40px] items-center max-sm:px-[40px]'>
      <div className='w-full max-sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col justify-center items-start'>
        {/* Text */}
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 1.5 }}
          className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight max-sm:text-2xl'
        >
          Trollz Store
        </motion.h1>
        <p className='text-base md:text-l lg:text-l text-gray-500 mt-4 max-sm:mt-2'>
          Get the Latest collection of <span className='font-bold'>Mens Sneakers</span> on a one-time discount
          <br /> of 30% for a limited time offer. Purchase now!
        </p>
        {/* button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className='flex gap-5 mt-6'
        >
          <button className='bg-black text-white hover:text-black hover:bg-transparent border-black border-[1px] transition-all px-4 py-2 rounded-full'>
            PURCHASE NOW
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className='hidden md:block'
      >
        <img src={HeroImg} alt='shoe' className='w-full max-h-full object-cover rounded-lg shadow-md' />
      </motion.div>
    </div>
  );
};

export default HomeHero;
