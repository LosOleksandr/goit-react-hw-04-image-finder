import styled from '@emotion/styled';

export const GalleryListImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 280px;
  border-radius: 15px;
  :hover {
    box-shadow: 0px 10px 40px -7px rgba(0, 0, 0, 0.75);
  }
`;

export const ModalImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;
