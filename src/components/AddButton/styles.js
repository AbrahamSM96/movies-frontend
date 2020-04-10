import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cecece;
  font-size: 14px;
  padding-top: 1px;
  width: 100%;
  padding: 10px 10px 10px 17px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  :focus {
    outline: 0;
  }

  & svg {
    margin-right: 8px;
    color: #d1d1d1;
    width: 23px;
  }
`;

// export const Modal = styled(ModalContainer)`
//   background-color: #323232 ;
//   color: #cecece;
// `;
