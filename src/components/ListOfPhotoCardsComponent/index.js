import React from 'react';
import { Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';

export const CarrouselListPhotocards = ({ children }) => {
  const [show, element] = useNearScreen();
  return (
    <Article ref={element} className='ListOfPhotoCardsComponent'>
      {show && <div>{children}</div>}
    </Article>
  );
};

export const ListOfPhotoCardsComponent = React.memo(CarrouselListPhotocards);
