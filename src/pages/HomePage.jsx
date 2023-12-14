import React from 'react'
import HomeHero from '../components/HomeHero'
import Navbar from '../components/Navbar'
import HomeCarousel from '../components/HomeCarousel'
import HomeCategories from '../components/HomeCategories'
// import lastHomeSection from '../components/lastHomeSection'
import LastSection from '../components/LastSection'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div style={{overflow: "hidden"}} className='bg-gradient-to-r from-[#fde7d9] to-[#fee5d7]'>
        <Navbar />
      <HomeHero />
      <HomeCarousel />
      <HomeCategories />
     <LastSection/>
     <Footer />
      </div>

  )
}

export default HomePage