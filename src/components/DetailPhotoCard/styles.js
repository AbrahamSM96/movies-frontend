import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
  flex-direction: column;
`;

export const Details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-items: center;
  flex-direction: column;
  width: 100%;
  height: 35vh;
  padding: 0px 20px 0px 20px;
  margin: 15px 0px 0px 0px;
  margin: 15px 0px 0px 0px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 340px;
  width: 230px;
  border-radius: 20px;
`;

export const Img = styled.img`
  height: 340px;
  width: 230px;
  object-fit: cover;
`;

export const H2 = styled.h2`
  color: white;
  font-size: 20px;
  padding: 15px 15px 0px;
`;

export const H3 = styled.h3`
  font-size: 16px;
  color: #cecece;
  padding: 5px 20px;
`;

export const Strong = styled.strong`
  color: #ffac41;
`;
