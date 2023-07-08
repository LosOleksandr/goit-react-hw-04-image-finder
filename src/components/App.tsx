import SearchForm from './SearchForm/SearchForm';
import { useEffect, useState, useCallback } from 'react';
import { Image } from 'interfaces/Image';
import fetchImages from 'api/finder-api';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMore from './LoadMore/LoadMore';
import Loader from './Loader/Loader';

export default function App() {
  const [value, setValue] = useState('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLoadmoreShown, setisLoadmoreShown] = useState(false);
  const [error, setError] = useState(null);

  const getImages = useCallback(async () => {
    try {
      setLoading(true);
      const { hits, total } = await fetchImages(value, page);
      if (!hits.length) {
        throw new Error('No matches!');
      }
      setImages(prevImages =>
        page === 1 ? [...hits] : [...prevImages, ...hits]
      );
      setisLoadmoreShown(total / page > 12);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page, value]);

  useEffect(() => {
    if (!value) return;
    setisLoadmoreShown(false);
    getImages();
  }, [value, page, getImages]);

  

  return (
    <main>
      {loading && <Loader />}
      <SearchForm setValue={setValue} setPage={setPage} setImages={setImages} />
      {images.length !== 0 && (
        <>
          <p>Result for {value}</p>
          <ImageGallery images={images} />
        </>
      )}
      {error && <h2>{error}</h2>}
      {isLoadmoreShown && <LoadMore setPage={setPage} />}
    </main>
  );
}
