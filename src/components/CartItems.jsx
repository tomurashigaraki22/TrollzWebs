import React from "react";
import { BASE_TEST } from '../../config';
import jwt_decode from 'jwt-decode'

const CartItems = (props) => {
  // Replace backslashes with forward slashes in the image path
  const imagePath = props.img.replace(/\\/g, '/');
  console.log('ID: ', props.id)
  

  const handleRemoveFromCart = async () => {
    try {
      const token = localStorage.getItem('token')
      const {email} = jwt_decode(token)
      const response = await fetch(`${BASE_TEST}/deleteFromCart/${props.id}/${email}`, {
        method: 'POST',
      });

      if (response.ok) {
        // Handle successful removal from the cart, e.g., update state or UI
        console.log('Item removed from the cart');
      } else {
        // Handle errors if needed
        console.error('Error removing item from the cart');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[200px] mt-10">
      <div className="w-[200px] h-[200px] p-3 flex bg-gray-200 items-start justify-end rounded-lg drop-shadow-lg">
        <img src={`${BASE_TEST}/${imagePath}`} alt={props.caption} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex gap-10 mt-1 justify-between">
        <p className="text-xs">{props.caption}</p>
        <p className="text-sm font-bold">NGN{props.price}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <button className="drop-shadow-md w-10 bg-white rounded-xl" onClick={() => console.log("Decrement logic")}>-</button>
        <input className="w-[100px] h-[40px] drop-shadow-lg flex items-center justify-center" value={'No addition'} readOnly />
        <button className="drop-shadow-md w-10 bg-white rounded-xl" onClick={() => console.log("Increment logic")}>+</button>
        {/* Remove from Cart Button */}
        <button className="drop-shadow-md w-20 bg-red-500 text-white rounded-xl" onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItems;
