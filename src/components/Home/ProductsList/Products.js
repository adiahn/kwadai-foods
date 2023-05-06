import React, { useState } from 'react';
import FoodCard from './FoodCard';
import CardModal from './CardModal';


const Products = () => {
  const MyProducts = [
    { id: 1, title: 'Garri', price: 10.99},
    { id: 2, title: 'Pounded Yam', price: 15.99},
    { id: 3, title: 'Egusi Soup', price: 12.99},
    { id: 4, title: 'Jollof Rice', price: 9.99},
    { id: 5, title: 'Chicken', price: 8.99},
    { id: 6, title: 'Beef Stew', price: 13.99},
    { id: 7, title: 'Fried Rice', price: 11.99},
    { id: 8, title: 'Fufu', price: 16.99},
    { id: 9, title: 'Pounded Yam and Egusi Soup', price: 17.99},
    { id: 10, title: 'Beans and Plantain', price: 7.99},
    { id: 11, title: 'Suya', price: 6.99},
    { id: 12, title: 'Efo Riro', price: 14.99},
    { id: 13, title: 'Akara', price: 5.99},
    { id: 14, title: 'Moi Moi', price: 4.99},
    { id: 15, title: 'Fried Chicken', price: 9.99},
    { id: 16, title: 'Okra Soup', price: 12.99},
    { id: 17, title: 'Amala', price: 14.99},
    { id: 18, title: 'Banga Soup', price: 15.99},
    { id: 19, title: 'Edikang Ikong Soup', price: 16.99},
    { id: 20, title: 'Fisherman Soup', price: 19.99}
  ];
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  
  return (
    <div className="products">
      {MyProducts.map((product) => (
        <FoodCard key={product.id} title={product.title} price={product.price} onClick={handleCardClick}/>
      ))}
      {selectedProduct && (
        <CardModal

          product={selectedProduct}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Products;
