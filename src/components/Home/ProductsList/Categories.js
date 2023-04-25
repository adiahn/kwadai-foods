import React from 'react'
import { Link } from 'react-router-dom'

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
      <ul className="foodCategories">
        {foodCategories.map((category) => (
          <li key={category.path}>
            <Link to={category.path}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
