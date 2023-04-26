import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };
  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt="carousel image" />
      <button className='crsl-btns' onClick={handlePrev}>Previous</button>
      <button className='crsl-btns' onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
