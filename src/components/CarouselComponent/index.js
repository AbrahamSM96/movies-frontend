import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { CarouselDivContainer, Carousel } from './styles';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

export const CarouselComponent = ({ children }) => {
  return (
    <CarouselDivContainer>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {children}
      </Carousel>
    </CarouselDivContainer>
  );
};
