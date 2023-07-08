import styled from '@emotion/styled/macro';

export const LoadMoreBtn = styled.button`
  display: block;
  font-family: inherit;
  color: #fff;
  text-transform: uppercase;
  margin: 0 auto;
  margin-top: 2rem;
  width: 100%;
  max-width: 180px;
  padding: 10px 0;
  background-color: #10487b;
  border: 1px transparent solid;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  :hover {
    background-color: rgb(140, 192, 222);
    color: #000;
    border: 1px #10487b solid;
  }
`;
