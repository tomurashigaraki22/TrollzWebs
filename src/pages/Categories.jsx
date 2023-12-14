import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css'; // Import the styles
import { BASE_TEST } from '../../config';
import Navbar from '../components/Navbar';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate()
  const [categoryItems, setCategoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const categ = localStorage.getItem('cate')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cate = localStorage.getItem('cate');
        console.log('Cate: ', cate);
        const response = await fetch(`${BASE_TEST}/getItemses/${cate}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setCategoryItems(data.posts);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="text-center">
        <Dots />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (categoryItems.length === 0) {
    return <p>No items found for this category.</p>;
  }

  return (
    <div className='bg-gradient-to-r from-[#fde7d9] to-[#fee5d7]'>
        <Navbar/>
        <div className="container mx-auto mt-8">
            
        <h1 className="text-2xl font-bold mb-4">{categ}</h1>
        {/* Render your categoryItems here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryItems.map((item) => (
            <div onClick={() => navigate('/product/' + item.id)} style={{cursor: "pointer"}} key={item.id} className="p-4 border border-gray-300 rounded">
                {/* Display item information as needed */}
                <p className="text-lg font-semibold mb-2">{item.caption}</p>
                <img src={`${BASE_TEST}/${item.img.replace(/\\/g, '/')}`} alt={item.caption} className="w-full h-48 object-cover mb-2" />
                <p className="text-lg font-bold">{item.currency} {item.price}</p>
                {/* Add other item details as needed */}
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default CategoryPage;
