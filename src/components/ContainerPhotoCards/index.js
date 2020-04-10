import React from 'react';
import { H2, DivContainerPhotoCards } from './styles';
import { SocialButton } from '../SocialButton';

export const ContainerPhotoCards = ({ children, titleList }) => (
  <DivContainerPhotoCards className='ContainerPhotoCards'>
    <H2>{titleList}</H2>
    {/* <SocialButton /> */}
    {children}
  </DivContainerPhotoCards>
);
