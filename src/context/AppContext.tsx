import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Image } from '../interfaces/Image';

interface AppContextState {
  query: string;
  page: number;
  images: Image[];
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
}

const AppContext = createContext<AppContextState>({
  query: '',
  page: 1,
  images: [],
  setQuery: () => {},
  setPage: () => {},
  setImages: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const appContext = useAppContext();
  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};

const useAppContext = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState<Image[]>([]);

  return {
    query,
    page,
    images,
    setQuery,
    setPage,
    setImages,
  };
};
