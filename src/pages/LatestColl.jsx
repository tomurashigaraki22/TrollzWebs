import React, { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
import { BASE_TEST } from "../../config";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LatestCollection = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { email } = jwt_decode(token);
        const formdata = new FormData();
        formdata.append('email', email);

        const response = await fetch(`${BASE_TEST}/getItems`, {
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
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#fde7d9] to-[#fee5d7]">
      <Navbar />
      <div className="bg-blue-500 container mx-auto mt-10 min-h-screen!">
        <h2 className="text-3xl font-bold mb-6">Latest Collection</h2>
        {loading ? (
          <Dots />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-blue-500">
            {items.map((item) => (
              <div
                onClick={() => navigate('/product/' + item.id)}
                key={item.id}
                className="border p-6 rounded-lg bg-white" // Add bg-white for the white background
              >
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

export default LatestCollection;
