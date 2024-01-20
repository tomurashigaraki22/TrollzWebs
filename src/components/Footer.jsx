import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="border-t-[0.5px] border-black flex flex-col gap-10 pl-[100px] pt-10 bg-gradient-to-r from-[#fde7d9] to-[#fee5d7]">
      <div className="flex gap-[90px] max-md:flex-col">
        <div className="flex justify-start items-start flex-col gap-2">
          Trollz
        </div>
        <div className="flex justify-start items-start flex-col gap-2 text-xs">
          <Link to='/featured'>
            <h4 className="text-sm font-bold">Categories</h4>
          </Link>
          <p>Mens Accessories</p>
          <p>Phones And Accessories</p>

        </div>
        <div className="flex justify-start items-start flex-col gap-2 text-xs">
          <h4 className="text-sm font-bold">Help & Contact</h4>
          <p>Contact</p>
          <p>Terms of sale</p>
          <p onClick={() => navigate('/privacypolicy')} style={{ cursor: 'pointer'}}>Privacy Policy</p>
        </div>
      </div>
      <div className="text-xs mb-5 flex justify-center mt-5">
        <p>Copyright 2023. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
