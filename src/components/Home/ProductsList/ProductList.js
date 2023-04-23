import React from 'react'
import './ProductList.css'
import BodyHeader from './BodyHeader';
import Slider from './Slider'
import Categories from './Categories';
import Products from './Products'

const ProductList = () => {
  return (
    <div className='ProductList'>
      <BodyHeader />
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default ProductList
