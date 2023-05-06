import React from 'react'
import {Link} from 'react-router-dom'
import "./Home.css"
import Nav from './Nav/Nav'
import ProductList from './ProductsList/ProductList'
import CardModal from './ProductsList/CardModal'



const Home = () => {
  return (
    <div className='home'>
        <Nav />
        <ProductList />
    </div>
  )
}

export default Home