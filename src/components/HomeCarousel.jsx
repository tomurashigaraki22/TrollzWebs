// HomeCarousel.jsx
import React, { useEffect, useState } from "react";
import { ItemBox } from "./ItemBox";
import jwt_decode from "jwt-decode";
import { BASE_TEST } from "../../config";
import { useNavigate } from "react-router-dom";

const HomeCarousel = () => {
  const [items, setitems] = useState([]);
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
        console.log("test2");

        if (resp2.status === 200) {
          setitems(resp2.posts);
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
    <div className="flex gap-5 pl-[90px] items-center overflow-x-auto">
      <div className="flex justify-center items-start flex-col w-[200px] h-[250px]  gap-4">
        <h1 className="font-bold text-xl ">Explore the Latest Arrival</h1>
        <p className="text-sm">
          We offer only the best of the best, <br /> at affordable prices
        </p>
        <button className="w-[150px] h-[30px] bg-black text-xs uppercase text-white flex items-center justify-center ">
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
          onClick={() => navigate('/product/'+product.id)}
        />
      ))}
    </div>
  );
};

export default HomeCarousel;
