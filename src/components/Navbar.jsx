import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiSearch, HiShoppingCart } from 'react-icons/hi';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Perform search logic with searchQuery
    console.log(`Searching for: ${searchQuery}`);

    // Navigate to the search page with the query as a parameter
    localStorage.setItem('searchQ', searchQuery);
    navigate(`/search/${searchQuery}`);

    // Close the search input
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800">
      {/* Top Part */}
      <div className="flex gap-5 justify-end bg-gray-200 px-6 py-2 text-black text-sm">
        <Link to="/contact" className="text-black">
          Contact us
        </Link>
        <p>|</p>
        <Link to="/login" className="text-black">
          Sign in
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between py-6 px-[30px] text-2xl font-bold">
        {/* logo */}
        <Link to='/' className="text-black">Trollz</Link>

        {/* Navigations */}
        <ul className="flex gap-4 center text-sm max-sm:hidden">
          <Link to='/featured'>Featured Products</Link>
          <Link to='/latestcoll'>Latest Collections</Link>
        </ul>

        {/* Search */}
        <div className="relative">
          <HiSearch onClick={handleSearchToggle} className="cursor-pointer" />
          {isSearchOpen && (
            <div className="absolute top-0 right-0 flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 border border-gray-300"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyPress={handleKeyPress}
              />
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={handleSearchSubmit}
              >
                Search
              </button>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex gap-5">
          <Link to='/wishlist'>
            <HiShoppingCart className="text-3xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
