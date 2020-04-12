import styled from 'styled-components';
import { Carousel as CarouselDiv } from 'react-responsive-carousel';

export const CarouselDivContainer = styled.div`
  margin-top: 20px;
`;

export const Carousel = styled(CarouselDiv)`
  width: 34%;
  .carousel-slider {
    position: relative;
    margin: 0;
    overflow: initial;
  }
  .slider-wrapper {
    overflow: initial;
    margin: auto;
    width: 100%;
  }
  .control-dots {
    position: absolute;
    bottom: 0;
    margin: 10px 0;
    text-align: center;
    width: 180%;
    left: 80px;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
`;
