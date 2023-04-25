import React from 'react';
import { Dashboard, SystemSecurityUpdateGood, Inventory, Grade, Call } from '@mui/icons-material';
import Icon from '../../../Logo/Icon.png';

const TopNav = () => {
  return (
    <div className="top-nav">
      <section className="img-section">
        <img src={Icon} alt="kwadai Foods" className="img" />
        <h2>KWADAI FOODS</h2>
      </section>
      <ul className="nav-links">
        <li>
          <section>
            <Dashboard />
            <span>Dashboard</span>
          </section>
        </li>
        <li>
          <section>
            <SystemSecurityUpdateGood />
            <span>Orders</span>
          </section>
        </li>
        <li>
          <section>
            <Inventory />
            <span>Our Products</span>
          </section>
        </li>
        <li>
          <section>
            <Grade />
            <span>Healthy Specials</span>
          </section>
        </li>
        <li>
          <section>
            <Call />
            <span>Contact Us</span>
          </section>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
