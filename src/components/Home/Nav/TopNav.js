import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import InventoryIcon from '@mui/icons-material/Inventory';
import GradeIcon from '@mui/icons-material/Grade';
import CallIcon from '@mui/icons-material/Call';
import Icon from '../../../Logo/Icon.png'


const TopNav = () => {
  return (
    <div className='top-nav'>
        <section className='img-section'>
            <img src={Icon} alt='kwadai Foods' className='img'/>
            <h2>KWADAI FOODS</h2>
        </section>
        <ul className='nav-links'>
          <li><section ><DashboardIcon />Dashboard</section></li>
          <li><section ><SystemSecurityUpdateGoodIcon/>Orders</section></li>
          <li><section ><InventoryIcon/>Our Products</section></li>
          <li><section ><GradeIcon/>Healthy Specials</section></li>
          <li><section ><CallIcon/>Contact Us</section></li>
        </ul>
    </div>
  )
}

export default TopNav
