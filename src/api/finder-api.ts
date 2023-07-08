import { FetchImagesRes } from '../interfaces/FetchImagesRes';

const API_KEY = '36500157-b7cca980640d9acdd8232fab9';

const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesRes> => {
  const url = new URL('https://pixabay.com/api/');
  const params = new URLSearchParams({
    q: query,
    page: page.toString(),
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  });
  url.search = params.toString();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching images');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchImages;
