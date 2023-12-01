import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriesBox = (props) => {
  const navigate = useNavigate();

    localStorage.setItem('cate', props.title.replace(/\s/g, ''));

  return (
    <div onClick={() => {
      localStorage.setItem('cate', props.title.replace(/\s/g, ''));
      navigate('/categories')}} className="mt-5">
      <div className="w-[300px] h-[200px] relative overflow-hidden bg-gray-300 rounded-md shadow-md">
        <img
          src={props.image}
          alt={`Category: ${props.title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="mt-2 text-sm font-semibold text-center">{props.title}</h1>
    </div>
  );
};

export default CategoriesBox;
