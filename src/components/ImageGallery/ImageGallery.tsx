import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Image } from 'interfaces/Image';
import React from 'react';

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => (
  <ul>
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} />
    ))}
  </ul>
);

export default ImageGallery;
