import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import jwt_decode from 'jwt-decode';
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { BASE_TEST } from "../../config";

const Wishlist = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [errorAfterPay, setErrorAfterPay] = useState(false);
  const [cartClear, setCartClear] = useState(false);
  const [problem, setProblem] = useState(false);

  const navigate = useNavigate();
  const publicKey = 'pk_live_660789901375b5024e07ba3e95ff1a043949ee77';
  const secretKey = 'sk_live_85fa61d5f727b18ceed683d3fdbf94c17776a4b2';

  const onSuccessDo = () => {
    handleBillingAddressSubmit(); // Automatically submit the address
  };

  const handleBillingAddressSubmit = () => {
    // Clear the cart
    try {
      const formdata = new FormData();
      const token = localStorage.getItem('token')
      const {address} = jwt_decode(token)
      // Convert cartItems to JSON string and append to formdata
      formdata.append('cart', JSON.stringify(cartItems));
      formdata.append('address', address)
      fetch(`${BASE_TEST}/clearCart/${email}`, {
        method: 'POST',
        body: formdata
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setCartClear(true);
            alert('Order Completed Successfully');
          } else {
            setProblem(true);
          }
        })
    } catch (error) {
      console.error(error);
      setErrorAfterPay(true);
    }
  };

  const componentProps = {
    email,
    amount,
    publicKey,
    secretKey,
    text: "Pay Now",
    onSuccess: onSuccessDo,
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  useEffect(() => {
    // Calculate the total price based on quantity for each item in cartItems
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setAmount(totalPrice.toFixed(2) * 100);
  }, [cartItems !== undefined && cartItems.length > 0]);

  useEffect(() => {
    async function getCartItems() {
      try {
        const token = localStorage.getItem('token');
        const { email } = jwt_decode(token);
        setEmail(email);
        const response = await fetch(`${BASE_TEST}/getCartItems/${email}`, {
          method: 'POST',
        });

        if (!response.ok) {
          console.error('Error fetching cart items');
          return;
        }

        const responseData = await response.json();
        setCartItems(responseData.cart_items);
      } catch (error) {
        console.error(error);
      }
    }

    getCartItems();
  }, [email]);

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div>
      <Navbar />

      {/* ... (existing code) */}

      {cartItems !== undefined && cartItems.length > 0 ? (
        <div className="pl-10">
          {/* Display Cart Items */}
          <div className="cart">
            <div>
              <h1 className="font-bold text-3xl mb-3">Your Cart</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cartItems.map((product) => (
              <CartItems
                key={product.id}
                caption={product.caption}
                img={product.img}
                currency={product.currency}
                id={product.id}
                price={product.price}
                quantity={product.quantity}
                onQuantityChange={(newQuantity) => handleQuantityChange(product.id, newQuantity)}
              />
            ))}
          </div>

          {/* Display total price and checkout buttons */}
          <div className="flex justify-end items-center mt-5 pl-40">
            <p className="text-lg font-bold mr-3">Total: NGN{Number(amount / 100).toLocaleString()}.00</p>
            <div className="flex space-x-3">
              <PaystackButton {...componentProps} className="bg-blue-500 text-white p-2 rounded" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100vw] h-[80vh] flex justify-center items-center">
          <div className="w-[90vw] h-[400px] bg-transparent border-[1px] border-black flex flex-col gap-5 items-center justify-center">
            <div className="bg-gray-400 w-[200px] h-[100px]" />
            <h1 className="font-bold text-lg">Your Cart is Empty</h1>
            <p className="text-sm">Add your favorites to your Wishlist</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Wishlist;
