import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const ImgWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 265px;
  width: 190px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Img = styled.img`
  height: 265px;
  object-fit: cover;
  width: 190px;

  ${fadeIn({ time: '2s' })}
`;
