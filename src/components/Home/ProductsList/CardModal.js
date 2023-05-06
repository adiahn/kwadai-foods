import React from 'react';
import { Link } from 'react-router-dom';
import { Grade } from '@mui/icons-material';
import './CardModal.css';
import garri from '../../../Products/garri.jpg';


const CardModal = () => {
  const MyProducts = [
    { id: 1, title: 'Garri', price: 10.99},
    { id: 2, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99},
    { id: 3, title: 'Garri', price: 10.99}
  ];
  return (
    <div className="card-modal">
      
      <div className="image-holder">
        <img src={garri} alt='Product Image' />
      </div>
      <div className="product-description">
        <h1>Garri</h1>
        <p>Lorem ipsum dolor sit amet consectetur lobit conse tutes rotan</p>
        <Link to="#">Kwadai Foods</Link>
        <div className="ratings">
          <Grade className='Grade' />
          <Grade className='Grade' />
          <Grade className='Grade' />
          <Grade className='Grade' />
          <Grade className='Grade' />
        </div>
        <div className="card-buttons">
          <button>To cart</button>
          <button>Buy now</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
