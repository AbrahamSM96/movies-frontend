import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background-color: #000000;
  color: #ffffff;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100%;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: #ff1e56;

    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 30px;
    }
  }
`;
