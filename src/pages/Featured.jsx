import React from 'react'
import Navbar from '../components/Navbar'
import ImageTile from '../components/ImageTile'
import FeaturedCarousel from '../components/FeaturedCarousel'
import Footer from '../components/Footer'
const Featured = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
     <div className="header w-[100vw] flex flex-col items-center mt-5">
     <div className='text flex flex-col items-center'>
      <h1 className='font-bold text-2xl'>
        Campaign Caption Here
      </h1>
      <p className='text-xs mt-5' style={{textAlign: "center"}}>Get the lastest Collection of <strong>Sneaker</strong> on a one-time discountof 65%  <br />for a limitedime offer.Save your Slot now</p>
     </div>
      <div className='images w-[100vw] h-[250px] bg-gray-200 mt-2 ' />
     </div> 

     {/* second Section */}
     <section className="second--section w-[100vw] items-center px-[50px] flex gap-5 mt-10 justify-center overflow-x-auto overflow-y-auto ">
      <ImageTile ProductName= 'Shirts'/>
      <ImageTile ProductName= 'Trousers'/>
      <ImageTile ProductName= 'Shoes'/>
      <ImageTile ProductName= 'Accessories'/>
      <ImageTile ProductName= 'Caps and Hat'/>
      <ImageTile ProductName= 'Belts'/>
     </section>

     {/* Third Section */}
     <section className="third--section flex flex-col gap-5 px-[50px] mt-[3rem]">
      <h1 className='text-xl font-bold'>Men Clothing and Apparel</h1>
      <FeaturedCarousel />
     </section>

       {/* fourth Section */}
       <section className="fourth--section flex flex-col gap-5 px-[50px] mt-[3rem]">
      <h1 className='text-xl font-bold'>Men Shoes</h1>
      <FeaturedCarousel />
     </section>

       {/* fifth Section */}
       <section className="fifth-section flex flex-col gap-5 px-[50px] mt-[3rem]">
      <h1 className='text-xl font-bold'>Men Accessories</h1>
      <FeaturedCarousel />
     </section>
     <Footer />
      </div>
  )
}

export default Featured