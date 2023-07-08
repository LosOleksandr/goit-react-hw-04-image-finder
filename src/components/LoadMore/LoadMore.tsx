import React from 'react';
import { LoadMoreBtn } from './LoadMore.styled';

interface LoadMoreProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const LoadMore: React.FC<LoadMoreProps> = ({ setPage }) => {
  const onClick = () => {
    setPage(page => page + 1);
  };
  return <LoadMoreBtn onClick={onClick}>Load More</LoadMoreBtn>;
};

export default LoadMore;
