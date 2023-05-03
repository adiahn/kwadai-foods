import React from 'react';
import FoodCard from './FoodCard';


const Products = () => {
  const MyProducts = [
    { id: 1, title: 'Garri', price: 10.99},
    { id: 2, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 4, title: 'Garri', price: 10.99}
  ];
  return (
    <div className="products">
      {MyProducts.map((product) => (
        <FoodCard key={product.id} title={product.title} price={product.price}/>
      ))}
    </div>
  );
};

export default Products;
