import React from 'react';
import CategoriesBox from './CategoriesBox';

const HomeCategories = () => {
  return (
    <div className='mt-10 mb-10 pl-[40px] overflow-x-auto'>
      <h1 className='font-bold text-2xl text-gray-800 mb-6'>Top Categories</h1>
      <div className="flex gap-6 pl-[60px] max-sm:pl-0">
        <CategoriesBox
          title="Men's Accessories"
          image="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <CategoriesBox
          title="Phones and Accessories"
          image="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default HomeCategories;
