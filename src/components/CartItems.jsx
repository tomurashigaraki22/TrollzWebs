import React, { useEffect, useState } from "react";
import { BASE_TEST } from '../../config';
import jwt_decode from 'jwt-decode';

const CartItems = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const [emails, setEmail] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    const {email} = jwt_decode(token)
    setEmail(email)
  }, [])

  // Replace backslashes with forward slashes in the image path
  const imagePath = props.img.replace(/\\/g, '/');
  console.log('ID: ', props.id);
  console.log('Quantity:', props.quantity)

  const handleRemoveFromCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const { email } = jwt_decode(token);
      const response = await fetch(`${BASE_TEST}/deleteFromCart/${props.id}/${emails}`, {
        method: 'POST',
      });

      if (response.ok) {
        // Handle successful removal from the cart, e.g., update state or UI
        const resp2 = await response.json()
        if (resp2.status === 200){
          console.log('Item removed from the cart');
          window.location.reload();
        }
        else{
          console.log('Wy6')
        }
      } else {
        // Handle errors if needed
        console.error('Error removing item from the cart');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncrement = async () => {
    try {
      setQuantity(quantity+1)
      const response = await fetch(`${BASE_TEST}/incQuantity/${props.id}/${emails}`, {
        method: 'POST'
      })
      if (!response.ok){
        console.log('Response was not ok')
  
      }
      else{
        const resp2 = await response.json()
        if (resp2.status === 200){
          window.location.reload();
          console.log('Success')
        }
        else{
          setQuantity(quantity-1)
          console.log('Error somewhere sss')
        }
      }
    } catch (error) {
      setQuantity(quantity-1)
      console.error('Error: ', error)
    }
    
    // Add logic for updating the quantity in the cart
  };

  const handleDecrement = async () => {
    if (quantity > 1) {
      try {
        setQuantity(quantity-1)
        const response = await fetch(`${BASE_TEST}/decQuantity/${props.id}/${emails}`, {
          method: 'POST'
        });
  
        if (!response.ok) {
          console.log('Response was not ok');
        } else {
          const resp2 = await response.json();
  
          if (resp2.status === 200) {
            console.log('Success');
            window.location.reload();
          } else {
            setQuantity(quantity+1)
            console.log('Error somewhere');
          }
        }
      } catch (error) {
        setQuantity(quantity+1)
        console.error('Error: ', error);
      }
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
        <div className="flex items-center justify-center">
          <button className="drop-shadow-md w-10 bg-white rounded-xl" onClick={handleDecrement}>-</button>
          <input className="w-[50px] h-[40px] drop-shadow-lg text-center" value={quantity} readOnly />
          <button className="drop-shadow-md w-10 bg-white rounded-xl" onClick={handleIncrement}>+</button>
        </div>
        {/* Remove from Cart Button */}
        <button className="drop-shadow-md w-20 bg-red-500 text-white rounded-xl" onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItems;
