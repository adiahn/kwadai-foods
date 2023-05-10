import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grade } from '@mui/icons-material';
import './CardModal.css';
import garri from '../../../Products/garri.jpg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import CancelIcon from '@mui/icons-material/Cancel';

const CardModal = ({ onCloseModal, title, price }) => {
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = () => {
    setIsAdded(!isAdded);
    alert(isAdded ? "Item is removed from cart" : "Added to cart")
  };
  
  return (
    <div className='card-modal-container'>
      <div className="card-modal">
        <div className="image-holder">
          <img src={garri} alt='Product Image' />
        </div>
        <div className="product-description">
          <h1>{title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur lobit conse tutes rotan</p>
          <Link to="#">N{price}</Link>
          <div className="ratings">
            <Grade className='Grade' />
            <Grade className='Grade' />
            <Grade className='Grade' />
            <Grade className='Grade' />
            <Grade className='Grade' />
          </div>
          <div className="card-buttons">
            <button onClick={handleAddToCart}>
              {isAdded ? <ShoppingCartIcon/> : <ShoppingCartOutlinedIcon />}
            </button>
            <button><PaymentIcon /></button>
            <button onClick={onCloseModal}>< CancelIcon /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
