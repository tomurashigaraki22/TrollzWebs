import React from "react";
import { useNavigate } from "react-router-dom";

const LastSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#fde7d9] to-[#fee5d7] pl-[90px] max-md:pl-[20px] flex gap-10 items-center justify-center h-[400px] max-md:flex-col max-md:items-center mt-30">
      {/* Left Part */}
      <div className="bg-white w-[400px] h-[350px] max-md:w-full max-md:h-auto rounded-md shadow-lg flex flex-col gap-4 p-6 max-md:mb-6 mt-10max-md:text-center">
        <h1 className="font-bold text-xl max-md:text-lg">Clothing Options for Everyone's Tastes</h1>
        <p className="text-sm max-md:text-xs">
          Browse through your preferred clothing options and find the best fit for you.
        </p>
        <button
          onClick={() => navigate('/latestcoll')}
          className="bg-black text-white w-[100px] h-[30px] rounded-full"
        >
          Shop Now
        </button>
      </div>

      {/* Right Part */}
      <div className="bg-white w-[400px] h-[350px] max-md:w-full max-md:h-auto rounded-md shadow-lg flex flex-col gap-4 p-6 max-md:mb-6 max-md:text-center">
        <h1 className="font-bold text-xl max-md:text-lg">Gadgets Of All Varieties</h1>
        <p className="text-sm max-md:text-xs">
          A variety of phones, laptops, and so much more to suit each individual's preference.
        </p>
        <button
          onClick={() => navigate('/latestgadgets')}
          className="bg-black text-white w-[70px] h-[30px] rounded-full"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default LastSection;
