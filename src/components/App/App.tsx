import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState, useCallback } from 'react';
import { Image } from 'interfaces/Image';
import fetchImages from 'api/finder-api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMore from 'components/LoadMore/LoadMore';
import Loader from 'components/Loader/Loader';
import { Container, Header, Result, ErrorTitle } from './App.styled';

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
        throw new Error(`No results for ${value}`);
      }
      setImages(prevImages =>
        page === 1 ? [...hits] : [...prevImages, ...hits]
      );
      setisLoadmoreShown(total / page > 12);
      setError(null);
    } catch (err: any) {
      setError(err);
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
      <Header>
        <Container>
          <SearchForm
            setValue={setValue}
            setPage={setPage}
            setImages={setImages}
            value={value}
          />
        </Container>
      </Header>

      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '3rem',
        }}
      >
        <Container>
          {images.length !== 0 && (
            <>
              <Result>
                Results for <span>{value}</span>
              </Result>
              <ImageGallery images={images} />
            </>
          )}
          {error && (
            <ErrorTitle>
              No results for <span>{value}</span>
            </ErrorTitle>
          )}
          {isLoadmoreShown && <LoadMore setPage={setPage} />}
        </Container>
      </section>
    </main>
  );
}
