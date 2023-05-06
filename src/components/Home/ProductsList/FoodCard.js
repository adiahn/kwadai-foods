import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import garri from '../../../Products/garri.jpg';

const FoodCard = ({ title, price, id, onClick }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };
  
  return (
    <div className='card'>
      <div className='card-bg' onClick={onClick}>
        <img src={garri} alt='Image' />
      </div>
      <div className='card-about'>
        <h3 className='product-name'>{title}</h3>
        <section className='card-details'>
          <section className='price'>N{price}</section>
          <section className='likes-count'>
            {isLiked ? (
              <FavoriteOutlinedIcon className='liker' onClick={handleLikeClick} />
            ) : (
              <FavoriteBorderOutlinedIcon
                className='liker'
                onClick={handleLikeClick}
              />
            )}
            <p>{likesCount}</p>
          </section>

        </section>
      </div>
    </div>
  );
};

export default FoodCard;
