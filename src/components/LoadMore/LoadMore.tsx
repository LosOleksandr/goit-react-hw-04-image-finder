import React from 'react';

interface LoadMoreProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const LoadMore: React.FC<LoadMoreProps> = ({ setPage }) => {
  const onClick = () => {
    setPage(page => page + 1);
  };
  return <button onClick={onClick}>Load More</button>;
};

export default LoadMore;
