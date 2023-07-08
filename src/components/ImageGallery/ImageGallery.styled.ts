import styled from '@emotion/styled';

export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }

  column-gap: 10px;
  row-gap: 20px;
  transition: transform 0.3s ease;
`;


