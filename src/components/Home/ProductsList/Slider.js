import React from 'react'
import Carousel from './Carousal'
import CoverBg from '../../../Logo/CoverBg.png'
import './Slider.css'


const Slider = () => {
  const images = [
    CoverBg,
    CoverBg,
    CoverBg
  ];

  return (
    <div className='Slider'>
      <Carousel images={images} />
    </div>
  )
}

export default Slider
