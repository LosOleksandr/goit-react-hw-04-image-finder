import { Image } from './Image';

export interface FetchImagesRes {
  total: number;
  totalHits: number;
  hits: Image[];
}
