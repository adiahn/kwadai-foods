import React from 'react'
import ListCategories from './ListCategories'

const Categories = () => {
  const foodCategories = [
    { name: 'All', path: '/Home/Categories/All' },
    { name: 'Fast Foods', path: '/Home/Categories/Fastfoods' },
    { name: 'Grains', path: '/Home/Categories/Grains' },
    { name: 'Spices', path: '/Home/Categories/Flours' },
    { name: 'Beverages', path: '/Home/Categories/Baverages' },
    { name: 'Fruits', path: '/Home/Categories/Fruits' },
  ];

  return (
    <div className="categories">
      <ListCategories foodCategories={foodCategories}/>
    </div>
  );
}

export default Categories;
