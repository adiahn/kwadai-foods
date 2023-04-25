import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const FoodCard = () => {
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const price = 0;

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
      <div className='card-bg'>
        <img src='' />
      </div>
      <div className='card-about'>
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
      </div>
    </div>
  );
};

export default FoodCard;
