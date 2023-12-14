import React from 'react';
import { motion } from 'framer-motion';
import hero_image from '../images/hero_image.png';

const HomeHero = () => {
  return (
    <div className='flex bg-gradient-to-r from-[#fde7d9] to-[#fee5d7] h-[400px] max-sm:h-[570px] md:h-[100px] lg:h-[300px] md:mb-10 lg:mb-40 md:mt-5 lg-mt-20 justify-between py-8 px-16 items-center'>
      <div className='w-full max-w-[800px] flex flex-col justify-center items-start'>
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 1.5 }}
          className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight max-sm:text-2xl mb-4'
        >
          Discover Exclusive Sneakers
        </motion.h1>
        <p className='text-base md:text-lg lg:text-lg text-gray-600 max-sm:mt-2 mb-6'>
          Elevate your style with the latest collection of <span className='font-bold text-blue-500'>Female Sneakers</span> at Trollz Store.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className='hidden md:block max-w-[50%] rounded-lg overflow-hidden shadow-md'>
        <img src={hero_image} alt='Product' className='object-cover h-full w-full md:h-[350px] lg:h-[470px]' />
      </motion.div>
    </div>
  );
};

export default HomeHero;
