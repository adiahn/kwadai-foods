import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NotificationsNoneOutlined as NotificationsIcon, ShoppingCartOutlined as ShoppingCartIcon, RestaurantMenuOutlined as MenuIcon,} from '@mui/icons-material';
import Icon from '../../../Logo/Icon.png';

const BodyHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="bodyHeader">
      <div className="handBurger">
        <MenuIcon />
      </div>
      <div className="searchBar">
        <input type="search" className="search" placeholder="Search" value={searchValue} onChange={handleSearchChange}/>
        <ShoppingCartIcon />
        <NotificationsIcon />
      </div>
      <div className="buttons">
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>
      </div>
      <div className="logo">
        <img src={Icon} alt="Logo" />
      </div>
    </div>
  );
}

export default BodyHeader;
