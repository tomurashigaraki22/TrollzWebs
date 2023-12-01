import React from 'react';
import CategoriesBox from './CategoriesBox';

const HomeCategories = () => {
  return (
    <div className='mt-10 mb-10 pl-[80px] overflow-x-auto '>
      <h1 className='font-bold text-lg'>Top Categories</h1>
      <div className="flex gap-6 pl-10">
        <CategoriesBox
          title="Mens Accessories"
          image="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <CategoriesBox
          title="Phones And Accessories"
          image="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default HomeCategories;
