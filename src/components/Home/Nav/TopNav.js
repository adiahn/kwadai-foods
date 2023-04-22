import React from 'react';
import Icon from '../../../Logo/Icon.png'


const TopNav = () => {
  return (
    <div>
      <img src={Icon} alt='kwadai Foods' />
        <ul>
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
