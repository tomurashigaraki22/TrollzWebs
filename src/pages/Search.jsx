import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Dots } from 'react-activity';
import 'react-activity/dist/Dots.css';  // Import the styles
import { BASE_TEST } from '../../config';

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = localStorage.getItem('searchQ');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function handleSearch() {
      try {
        const response = await fetch(`${BASE_TEST}/search/${searchQuery}`, {
          method: 'POST',
        });

        if (!response.ok) {
          console.error('Error in search query');
          return;
        }

        const resp2 = await response.json();
        const searchResults = resp2.feedback;

        // Update the state with the search results
        setSearchResults(searchResults);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    }

    handleSearch();
  }, [searchQuery]);

  return (
    <div className='bg-gradient-to-r from-[#fde7d9] to-[#fee5d7] overflow-hidden'>
      <Navbar />
      <div className="container mx-auto mt-10 px-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Searching for: {searchQuery}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {loading ? (
            <Dots />
          ) : searchResults.length === 0 ? (
            <p className='text-xl text-gray font-bold' style={{ textAlign: 'center'}}>No items found</p>
          ) : (
            searchResults.map((item) => (
              <div key={item.caption} onClick={() => navigate('/product/' + item.id)} className="pl-3 mb-8 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg">
                <img src={`${BASE_TEST}/${item.img}`} alt={item.caption} className="w-full h-64 object-contain" />
                <h2 className="text-xl font-bold mt-2">{item.caption}</h2>
                <p className="text-gray-600">{item.category}</p>
                <p className="text-lg font-bold mt-2">
                  {item.currency} {item.price}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
