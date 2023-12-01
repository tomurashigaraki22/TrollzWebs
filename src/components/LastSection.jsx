import React from "react";
import { useNavigate } from "react-router-dom";

const LastSection = () => {
  const navigate = useNavigate()

  return (
    <div className="pl-[90px] max-md:pl-[20px] flex gap-[50px] items-center justify-center h-[400px]">
      {/* Left Part */}
      {/* Left Part */}
      <div className="bg-gray-200 w-[400px] h-[350px] max-md:w-[300px]  max-md:h-[300px] rounded-md drop-shadow-lg flex flex-col gap-5 pt-[20px] items-start pl-[20px]">
        <h1 className="font-bold text-lg">Clothing Options for <br /> Everyone's tastes</h1>
        <p className="text-xs" style={{ textAlign: 'left'}}>Browse through your prefered clothing <br /> options and find the best fit from you</p>
        <button onClick={() => navigate('/latestcoll')} className="bg-transparent w-[100px] h-[30px] border-[1px] border-black text-black font-sans">Shop Now</button>
      </div>

      {/* Right Part */}
      {/* Right Part */}
      <div className="bg-gray-200 w-[400px] h-[350px] max-md:w-[300px]  max-md:h-[300px] rounded-md drop-shadow-lg flex flex-col pt-[20px] gap-5 items-center justify-start">
        <h1 className="font-bold text-lg">Gadgets Of All Varieties</h1>
        <p className="text-xs" style={{textAlign: "left"}}> A variety of designs, styles<br /> to choose from for any individual </p>
        <button onClick={() => navigate('/latestgadgets')} className="bg-transparent w-[70px] h-[30px] border-[1px] border-black text-black">Explore</button>
      </div>
    </div>
  );
};

export default LastSection;
