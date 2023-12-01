import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { Dots } from 'react-activity';
import 'react-activity/dist/Dots.css';
import { BASE_TEST } from "../../config";
import Navbar from "../components/Navbar";

const LatestGadgets = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { email } = jwt_decode(token);
        const formdata = new FormData();
        formdata.append('email', email);

        const response = await fetch(`${BASE_TEST}/getItemses/PhonesAndAccessories`, {
          method: "POST",
          body: formdata,
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.status === 200) {
          setItems(data.posts);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchData();
  }, [category]);

  return (
    <div>
        <Navbar/>
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Latest Gadgets</h2>
      {loading ? (
        <Dots />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div onClick={() => navigate('/product/'+item.id)} style={{cursor: "pointer"}} key={item.id} className="border p-4 rounded-md">
              <img
                src={`${BASE_TEST}/${item.img.replace(/\\/g, '/')}`}
                alt={`Item ${item.id}`}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-bold">{item.caption}</h3>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-gray-800 mt-2">NGN{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default LatestGadgets;
