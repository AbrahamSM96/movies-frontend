import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 24px;
  margin: 10px 0px 10px 0px;
  color: #ffffff;
`;

export const Input = styled.input`
  width: 165px;
  height: 34px;
  padding-left: 8px;
  color: #ffffff;
  background-color: #aaaaaa;
  border: 2px solid #ffffff;
  border-radius: 50px;
  outline: none;
  caret-color: #ffffff;
  ::placeholder {
    color: rgba(247, 247, 247, 0.5);
  }
`;
