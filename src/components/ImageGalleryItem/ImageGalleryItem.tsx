import Modal from 'components/Modal/Modal';
import { Image } from 'interfaces/Image';
import React, { useState } from 'react';
import { GalleryListImage, ModalImage } from './ImageGalletyItem.styled';

interface ImageGalleryItemProps {
  image: Image;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ image }) => {
  const { tags, webformatURL, largeImageURL } = image;
  const [isModalShowm, setIsModalShowm] = useState(false);

  if (isModalShowm) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  const onImageClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setIsModalShowm(true);
  };

  return (
    <>
      <li>
        <a href={largeImageURL} onClick={onImageClick}>
          <GalleryListImage src={webformatURL} alt={tags} />
        </a>
      </li>
      {isModalShowm && (
        <Modal handleModal={setIsModalShowm}>
          <ModalImage src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;
