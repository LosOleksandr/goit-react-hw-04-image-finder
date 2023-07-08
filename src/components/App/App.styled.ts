import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1rem 0 2rem 0;
  position: fixed;
  background-color: rgba(140, 192, 222, 0.9);
  top: 0;
  left: 0;
`;

export const Result = styled.p`
  text-align: center;
  font-size: 32px;
  margin-bottom: 2rem;
  span {
    text-transform: capitalize;
    color: #fff;
    font-size: 36px;
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const ErrorTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  span {
    text-transform: capitalize;
    color: #fff;
    font-size: 36px;
    font-weight: 600;
    text-decoration: underline;
  }
`;
