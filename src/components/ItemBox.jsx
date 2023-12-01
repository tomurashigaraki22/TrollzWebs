// ItemBox.jsx
import React from "react";
import { BASE_TEST } from "../../config";

export const ItemBox = ({ id, img, caption, price, currency, onClick }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md" onClick={() => onClick(id)}>
      <img
        className="w-20 h-20 object-cover rounded mb-4"
        src={`${BASE_TEST}/${img.replace(/\\/g, '/')}`}
        alt={`${caption}`}
      />
      <div className="text-center">
        <p className="text-sm font-semibold">{caption}</p>
        <p className="text-base font-bold">
          {currency}
          {price}
        </p>
      </div>
    </div>
  );
};
