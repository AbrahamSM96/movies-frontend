import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Div = styled.div`
  overflow: hidden;
  position: relative;
  display: inline-block;

  :hover button {
    display: flex;
    margin: 0px auto;
    padding: 0px;
    position: relative;
    color: #ff1e56;

  }
  ::-webkit-scrollbar {
    height: 7px;    
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #ff1e56;
    }
`;

export const Button = styled.button`
  display: none;
  :focus {
    outline: none;
  }
`;

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 2% 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  height: 250px;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  :hover button {
    display: block;
  }
`;

export const Grid = styled.div`
  padding: 32px 10px;

`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`;
