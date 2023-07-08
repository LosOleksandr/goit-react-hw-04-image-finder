import Modal from 'components/Modal/Modal';
import { Image } from 'interfaces/Image';
import React, { useState } from 'react';

interface ImageGalleryItemProps {
  image: Image;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ image }) => {
  const { tags, webformatURL, largeImageURL } = image;
  const [isModalShowm, setIsModalShowm] = useState(false);

  const onImageClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setIsModalShowm(true);
  };

  return (
    <>
      <li>
        <a href={largeImageURL} onClick={onImageClick}>
          <img src={webformatURL} alt={tags} />
        </a>
      </li>
      {isModalShowm && (
        <Modal handleModal={setIsModalShowm}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;
