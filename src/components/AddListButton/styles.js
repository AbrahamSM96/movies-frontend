import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cecece;
  font-size: 16px;
  width: 35%;
  padding: 6px 0px 5px 5px;
  margin-top: -3px;

  :focus {
    outline: 0;
  }

  & svg {
    margin-right: 8px;
    color: #d1d1d1;
    width: 23px;
  }
`;
