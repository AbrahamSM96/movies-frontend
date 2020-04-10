import React from 'react';
import { ImgWrapper, Img } from './styles';

const NOTFOUND_POSTER = 'https://dummyimage.com/190x265.png?text=Not+Found';

export const PhotoCard = ({ title, poster, id }) => {
  return (
    <ImgWrapper>
      {poster === 'N/A' ? (
        <Img src={NOTFOUND_POSTER} alt={title} />
      ) : (
        <Img src={poster} alt={title} />
      )}
      <Img src={NOTFOUND_POSTER} alt={title} />
    </ImgWrapper>
  );
};
