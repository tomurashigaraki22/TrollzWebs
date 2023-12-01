import React from 'react'
import ItemsBox from "./ItemsBox";
import { PRODUCTS } from "./product";

const FeaturedCarousel = () => {
  return (
    <div className="flex gap-5 pl-[90px] items-center overflow-x-auto">



        {PRODUCTS.map((product) => (
          <ItemsBox data={product}/>
        ))}

    </div>
  )
}

export default FeaturedCarousel