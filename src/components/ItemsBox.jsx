import React, { useContext, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { ShopContext } from "../context/shop-context";
import { BASE_TEST } from "../../config";
import jwt_decode from 'jwt-decode';

const ItemsBox = (props) => {
  // Assuming `addToCart` function is defined in your context
  const [isAdded, setisAdded] = useState(false);
  const [errorAdding, setErrorAdding] = useState(false);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const { email } = jwt_decode(token);
      const response = await fetch(`${BASE_TEST}/addToCart/${props.id}/${email}`, {
        method: 'POST',
      });
      const resp2 = await response.json();
      if (resp2.status === 200) {
        setisAdded(true);
      } else {
        setErrorAdding(true);
      }
    } catch (error) {
      console.error(error);
      setErrorAdding(true);
    }
  };

  return (
    <article className="flex flex-col justify-center items-center border border-gray-300 rounded shadow-lg m-4 max-w-lg">
      {/* Image Section */}
      <div className="w-full h-48 rounded-md bg-white pt-10">
        <img
          src={`${BASE_TEST}/${props.img.replace(/\\/g, '/')}`}
          alt={`Image for ${props.caption}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-1 bg-white rounded-b w-full">
        {/* Title */}
        <p className="text-lg font-semibold mb-2">{props.caption}</p>

        {/* Price */}
        <p className="text-sm font-bold mb-2">{props.price.toLocaleString()}</p>

        {/* Description */}
        <p className="text-sm mb-2">{props.description || "No description available"}</p>

        {/* Ratings (Assuming a 5-star system) */}
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-gray-400">☆</span>
          <span className="text-gray-400">☆</span>
        </div>

        {/* Add to Cart Button */}
        {!isAdded ? (
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        ) : (
          <p className="text-green-500">Item added to cart!</p>
        )}

        {errorAdding && <p className="text-red-500">Error adding item to cart. Please try again.</p>}
      </div>

      {/* Favorite Button */}
      <button onClick={() => handleAddToCart()} className="absolute top-4 right-4 text-gray-600">
        <HiOutlineHeart className="cursor-pointer" />
      </button>
    </article>
  );
};

export default ItemsBox;
