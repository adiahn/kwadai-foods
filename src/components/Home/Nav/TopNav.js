import React from 'react';
import Icon from '../../../Logo/Icon.png'


const TopNav = () => {
  return (
    <div className='top-nav'>
        <section className='img-section'>
            <img src={Icon} alt='kwadai Foods' className='img'/>
            <h2>KWADAI FOODS</h2>
        </section>
        <ul className='nav-links'>
          <li>Dashboard</li>
          <li>Orders</li>
          <li>Our Products</li>
          <li>Healthy Specials</li>
          <li>Orders</li>
        </ul>
    </div>
  )
}

export default TopNav
