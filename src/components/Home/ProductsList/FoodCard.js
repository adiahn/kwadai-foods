import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const FoodCard = () => {
    const price = 0;
    const likesCount = 200;
    const liker = document.getElementsByClassName('liker');

    // liker.addEventListener('click', function(){
    //     likesCount++
    //     return
    // })
  return (
    <div className='card'>
        <div className='card-bg'>
            <img src='' />
        </div>
        <div className='card-about'>
            <section className='price'>N{price}</section>
            <section className='likes-count'>
                <FavoriteBorderOutlinedIcon className='liker'/>
                <p>{likesCount}</p>
            </section>
        </div>

    </div>
  )
}

export default FoodCard
