import React from 'react'
import HeroImg from '../images/Heroimg.png'
import {motion} from 'framer-motion'

const HomeHero = () => {
  return (
    <div className='flex bg-[#fef4eb] h-[300px] max-sm:h-[400px] justify-between py-5 px-[90px] items-center max-sm:px-[40px]  '>
    
        <div className='w-[400px] flex flex-col gap-3 max-sm:flex max-sm:justify-center max-sm:items-center'>
        {/* Text */}
        {/* Text */}
            <motion.h1
            initial={{x:-1000,}}
            animate={{x: 0}}
            transition={{delay:0.1, duration:1.5}}
             className='text-4xl font-bold max-sm:text-xl'>Trollz Store</motion.h1>
            <p className='text-ml'>Get the Latest collection of <span className='font-bold'>Mens Sneakers</span> on a one-time discount <br />
            of 30% for a limited time offer. Purchase now!</p>
        {/* button */}
        {/* button */}
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.4, duration:1.2}}
            className='flex gap-5 text-sm mt-5'> 
            <button className='bg-black text-white hover:text-black hover:bg-transparent border-black border-[1px] transition-all px-2 py-2'>PURCHASE NOW</button>
        </motion.div>

        </div>

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity: 1 }}
        transition={{delay:0.5, duration:2}}
        className='max-sm:hidden'>
          <img src={HeroImg} alt="shoe" className='w-[400px]'/>
        </motion.div>

       
        
    </div>
  )
}

export default HomeHero