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
  const [payod, setpayod] = useState(false)
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorAfterPay, setErrorAfterPay] = useState(false);
  const [billingAddress, setBillingAddress] = useState({
    streetAddress: '',
    city: '',
    state: '',
    postalCode: ''
  });
  const [cartClear, setCartClear] = useState(false);
  const [problem, setProblem] = useState(false);

  const navigate = useNavigate();
  const publicKey = 'pk_live_660789901375b5024e07ba3e95ff1a043949ee77';
  const secretKey = 'sk_live_85fa61d5f727b18ceed683d3fdbf94c17776a4b2';

  const onSuccessDo = () => {
    alert("Make sure you enter and submit your address at the bottom of the cart page");
    setShowModal(true); // Show billing address modal
  };

  const handleBillingAddressSubmit = () => {
    // Validate the entered billing address (you may add more complex validation)
    if (
      billingAddress.streetAddress &&
      billingAddress.city &&
      billingAddress.state &&
      billingAddress.postalCode
    ) {
      // Store the billing address in local storage
      const savedAddresses = JSON.parse(localStorage.getItem('billingAddresses')) || [];
      savedAddresses.push(billingAddress);
      localStorage.setItem('billingAddresses', JSON.stringify(savedAddresses));

      // Close the modal
      setShowModal(false);

      // Clear the cart
      try {
        const formdata = new FormData();
        // Convert cartItems to JSON string and append to formdata
        formdata.append('cart', JSON.stringify(cartItems));
        formdata.append('address', JSON.parse(localStorage.getItem('billingAddresses')))
        fetch(`${BASE_TEST}/clearCart/${email}`, {
          method: 'POST',
          body: formdata
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 200) {
              setCartClear(true);
              alert('Order Completed Successfully')
            } else {
              setProblem(true);
            }
          })
      } catch (error) {
        console.error(error);
        setErrorAfterPay(true);
      }
    } else {
      alert("Please fill in all fields.");
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
  }, [cartItems]);

  const handlePayOnDelivery = () => {
    // Implement the logic for pay on delivery
    onSuccessDo();
  };

  const afteronpayd = () => {
    if (localStorage.getItem('billingAddresses') !== null && email) {
      try {
        const formdata = new FormData();
        // Convert cartItems to JSON string and append to formdata
        formdata.append('cart', JSON.stringify(cartItems));
        formdata.append('address', JSON.parse(localStorage.getItem('billingAddresses')));
  
        fetch(`${BASE_TEST}/clearCart/${email}`, {
          method: 'POST',
          body: formdata
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 200) {
              setCartClear(true);
              alert('Order Completed Successfully')
            } else {
              setProblem(true);
            }
          });
      } catch (error) {
        console.error(error);
        setErrorAfterPay(true);
      }
    }
  };

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
        console.log("IndividualQuantity: ", responseData.cart_items[2].quantity)
        setCartItems(responseData.cart_items);
      } catch (error) {
        console.error(error);
      }
    }

    getCartItems();
  }, [email]);

  const handlePayOnDeliverys = () => {
    try {
      if (localStorage.getItem('billingAddresses') !== null && email) {
        const formdata = new FormData();
        // Convert cartItems to JSON string and append to formdata
        formdata.append('items', JSON.stringify(cartItems));
        formdata.append('address', JSON.stringify(billingAddress));
        formdata.append('email', email);
        formdata.append('amount', amount);
  
        fetch(`${BASE_TEST}/payondelivery`, {
          method: 'POST',
          body: formdata,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 200) {
              setCartClear(true);
              afteronpayd();
              alert('Order Completed Successfully');
            } else {
              setProblem(true);
            }
          });
      }
    } catch (error) {
      console.error(error);
      setErrorAfterPay(true);
    }
  };
  

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

      {cartItems.length !== 0 ? (
        <div className="pl-10">
          {/* Display Cart Items */}
          <div className="cart">
            <div>
              <h1 className="font-bold text-xl mb-3">Your Cart Items</h1>
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
            <p className="text-lg font-bold mr-3">Total: NGN{amount / 100}.00</p>
            <div className="flex space-x-3">
              <PaystackButton {...componentProps} className="bg-blue-500 text-white p-2 rounded" />

              {amount >= 200000 && (
                <button onClick={handlePayOnDelivery} className="bg-green-500 text-white p-2 rounded">
                  Pay On Delivery
                </button>
              )}
            </div>
          </div>

          {/* Billing Address Modal */}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h2>Enter Billing Address</h2>
                <label className="block mb-4">
                  Street Address:
                  <input
                    type="text"
                    value={billingAddress.streetAddress}
                    onChange={(e) => setBillingAddress({ ...billingAddress, streetAddress: e.target.value })}
                    className="w-3/5 p-2 border border-gray-300"
                  />
                </label>
                <label className="block mb-4">
                  City:
                  <input
                    type="text"
                    value={billingAddress.city}
                    onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
                    className="w-3/5 p-2 border border-gray-300"
                  />
                </label>
                <label className="block mb-4">
                  State:
                  <input
                    type="text"
                    value={billingAddress.state}
                    onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
                    className="w-3/5 p-2 border border-gray-300"
                  />
                </label>
                <label className="block mb-4">
                  Postal Code:
                  <input
                    type="text"
                    value={billingAddress.postalCode}
                    onChange={(e) => setBillingAddress({ ...billingAddress, postalCode: e.target.value })}
                    className="w-3/5 p-2 border border-gray-300"
                  />
                </label>
                <button
                  onClick={payod ? handleBillingAddressSubmit : handlePayOnDeliverys}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
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
