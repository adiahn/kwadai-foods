import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <ul className='foodCategories'>
        <li><Link to='/Home/Categories/All'>All</Link></li>
        <li><Link to='/Home/Categories/Fastfoods'>Fast Foods</Link></li>
        <li><Link to='/Home/Categories/Grains'>Grains</Link></li>
        <li><Link to='/Home/Categories/Flours'>Spices</Link></li>
        <li><Link to='/Home/Categories/Baverages'>Baverages</Link></li>
        <li><Link to='/Home/Categories/Fruits'>Fruits</Link></li>
      </ul>
    </div>
  )
}

export default Categories
