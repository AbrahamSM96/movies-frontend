import styled from "styled-components";

export const Article = styled.article`
  overflow: scroll;
  overflow-y: hidden;
  position: relative;
  width: 100%;
  margin: 10px 0 0 0;
  min-width: 300px;
  white-space: nowrap;
  ::-webkit-scrollbar {
    height: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #ff1e56;
  }
`;
