import React, { useState } from 'react';
import FoodCard from './FoodCard';
import CardModal from './CardModal';


const Products = () => {
  const MyProducts = [
    { id: 1, title: 'Garri', price: 10.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 2, title: 'Pounded Yam', price: 15.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 3, title: 'Egusi Soup', price: 12.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 4, title: 'Jollof Rice', price: 9.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 5, title: 'Chicken', price: 8.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 6, title: 'Beef Stew', price: 13.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 7, title: 'Fried Rice', price: 11.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 8, title: 'Fufu', price: 16.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 9, title: 'Pounded Yam and Egusi Soup', price: 17.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 10, title: 'Beans and Plantain', price: 7.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 11, title: 'Suya', price: 6.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 12, title: 'Efo Riro', price: 14.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 13, title: 'Akara', price: 5.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 14, title: 'Moi Moi', price: 4.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 15, title: 'Fried Chicken', price: 9.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 16, title: 'Okra Soup', price: 12.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 17, title: 'Amala', price: 14.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 18, title: 'Banga Soup', price: 15.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 19, title: 'Edikang Ikong Soup', price: 16.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'},
    { id: 20, title: 'Fisherman Soup', price: 19.99, ProductAbout: 'Lorem Ipsum Dolor sit amet consectetur'}
  ];
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAdded, setShowAdded] = useState(null);
  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  const handleShowAdded = () => {
    setShowAdded(true)
  }
  
  return (
    <div className="products">
      {MyProducts.map((product) => (
        <FoodCard key={product.id} title={product.title} price={product.price} onClick={handleCardClick}/>
      ))}
      {selectedProduct && (
        <CardModal product={selectedProduct} onCloseModal={handleCloseModal}/>
      )}
    </div>
  );
};

export default Products;