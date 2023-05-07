import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grade } from '@mui/icons-material';
import './CardModal.css';
import garri from '../../../Products/garri.jpg';

const CardModal = ({ onCloseModal, product }) => {
  const { title, price } = product;
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = () => {
    setIsAdded(true)
  }
  
  return (
    <div className='card-modal-container'>
      <div className="card-modal">
        <div className="image-holder">
          <img src={garri} alt='Product Image' />
        </div>
        <div className="product-description">
          <h1>{title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur lobit conse tutes rotan</p>
          <Link to="#">{price}</Link>
          <div className="ratings">
            <Grade className='Grade' />
            <Grade className='Grade' />
            <Grade className='Grade' />
            <Grade className='Grade' />
            <Grade className='Grade' />
          </div>
          <div className="card-buttons">
            <button onClick={handleAddToCart}>
              {isAdded ? 'Added' : 'To Cart'}
            </button>
            <button>
              Buy now</button>
            <button onClick={onCloseModal}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
