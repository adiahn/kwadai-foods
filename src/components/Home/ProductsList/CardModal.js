import React from 'react';
import './ProductList.css';
import './CardModal.css'

const CardModal = ({ product }) => {
  return (
    <div className='card-modal'>
        <section className='product-image'>
            <img className='' src={product.image} alt={product.title} />
        </section>
        <section className='product-about'>
            <p className='product-title'>{product.title}</p>
            <p className='product-description'>lorem ipsum dolor sit amet consectetur</p>
            <p className='is-kwadai-product'></p>
            <p className='product-ratings'></p>
            <section className='modal-buttons'>
                <button className='buy-now-button' >Buy Now</button>
                <button className='add-to-cart-button' >Add to cart</button>
                <button className='cancel-button' >Cancel</button>
            </section>
        </section>
    </div>
  );
};

export default CardModal;
