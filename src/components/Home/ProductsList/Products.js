import React from 'react';
import FoodCard from './FoodCard';
import garri from '../../../Products/garri.jpg';

const MyProducts = [
  { id: 1, title: 'Garri', price: 10.99, image: garri },
  { id: 2, title: 'Garri', price: 10.99, image: garri },
  { id: 3, title: 'Garri', price: 10.99, image: garri },
  { id: 4, title: 'Garri', price: 10.99, image: garri }
];

const Products = () => {
  return (
    <div className="products">
      {MyProducts.map((product) => (
        <FoodCard key={product.id} title={product.title} price={product.price} image={product.image} />
      ))}
    </div>
  );
};

export default Products;
