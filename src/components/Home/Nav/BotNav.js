import React from 'react';
import { Link } from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const BottomNavigation = () => (
  <div className='bottom-navigation'>
    <ul className='settings-navigation'>
      <li className='settings-navigation__item'>
        <Link to='/settings'>
          <div className='icons-clicker'>
            <SettingsOutlinedIcon /> 
            <span>Settings</span>
          </div>
        </Link>
      </li>
    </ul>
  </div>
);

export default BottomNavigation;
