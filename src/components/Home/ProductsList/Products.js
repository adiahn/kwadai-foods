import React from 'react';
import FoodCard from './FoodCard';

const MyProducts = [
  { id: 1, title: 'Product 1', price: 10.99 },
  { id: 2, title: 'Product 2', price: 12.99 },
  { id: 3, title: 'Product 3', price: 15.99 },
  { id: 4, title: 'Product 4', price: 8.99 },
  { id: 5, title: 'Product 5', price: 9.99 },
];

const Products = () => {
  return (
    <div className="products">
      {MyProducts.map((product) => (
        <FoodCard key={product.id} title={product.title} price={product.price} />
      ))}
    </div>
  );
};

export default Products;
