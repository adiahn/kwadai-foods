import React from 'react'
import { Link } from 'react-router-dom'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import Icon from '../../../Logo/Icon.png'

const BodyHeader = () => {
  return (
    <div className='bodyHeader'>
        <div className='handBugger'>
          <RestaurantMenuOutlinedIcon />
        </div>        
        <div className='searchBar'>
          <input type='search' className='search' placeholder='Search' />  
          <ShoppingCartOutlinedIcon/>
          <NotificationsNoneOutlinedIcon/>
        </div>        
        <div className='buttons'>
          <Link to='/Login'>Login</Link>
          <Link to='/Signup'>Signup</Link>
        </div>        
        <div className='logo'>
          <img src={Icon} />
        </div>        
    </div>
  )
}

export default BodyHeader
