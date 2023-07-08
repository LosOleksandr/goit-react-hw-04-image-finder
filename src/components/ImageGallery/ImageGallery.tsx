import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Image } from 'interfaces/Image';
import React from 'react';
import { GalleryList } from './ImageGallery.styled';

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => (
  <GalleryList>
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} />
    ))}
  </GalleryList>
);

export default ImageGallery;
