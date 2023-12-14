// HomeCarousel.jsx
import React, { useEffect, useState } from "react";
import { ItemBox } from "./ItemBox";
import jwt_decode from "jwt-decode";
import { BASE_TEST } from "../../config";
import { useNavigate } from "react-router-dom";

const HomeCarousel = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getItems() {
      try {
        const formdata = new FormData();
        const token = localStorage.getItem("token");
        const { email } = jwt_decode(token);
        formdata.append("email", email);
        const response = await fetch(`${BASE_TEST}/getItems4`);
        const resp2 = await response.json();

        if (resp2.status === 200) {
          setItems(resp2.posts);
        } else {
          console.log("Something happened");
        }
      } catch (error) {
        console.error(error);
      }
    }
    getItems();
  }, []);

  const handleItemClick = (itemId) => {
    // Do something when an item is clicked
    console.log(`Item with ID ${itemId} clicked`);
  };

  return (
    <div className="flex bg-gradient-to-r from-[#fde7d9] to-[#fee5d7] gap-5 pl-[40px] items-center overflow-x-auto">
      <div className="flex flex-col justify-center items-start w-[200px] h-[250px] gap-4">
        <h1 className="font-bold text-2xl text-gray-800 leading-tight">Explore the Latest Arrivals</h1>
        <p className="text-base text-gray-600">
          We offer only the best of the best, <br /> at affordable prices
        </p>
        <button className="w-[150px] h-[40px] bg-black text-sm uppercase text-white flex items-center justify-center rounded-full shadow-md">
          Set New Arrival
        </button>
      </div>

      {items.map((product) => (
        <ItemBox
          key={product.id}
          id={product.id}
          img={product.img}
          caption={product.caption}
          price={product.price}
          currency={product.currency}
          onClick={() => navigate(`/product/${product.id}`)}
        />
      ))}
    </div>
  );
};

export default HomeCarousel;
