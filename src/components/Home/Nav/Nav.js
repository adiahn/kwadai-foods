import React from 'react'
import './Nav.css'
import TopNav from './TopNav';
import BotNav from './BotNav';

const Nav = () => {
  return (
    <div className='nav'>
        <TopNav />
        <BotNav />
    </div>
  )
}

export default Nav
