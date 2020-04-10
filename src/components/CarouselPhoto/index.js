import React from 'react';
import { ImgWrapper, Img } from './styles';

export const CarouselPhoto = ({ poster }) => {
  return <Img src={poster} alt={poster} />;
};
