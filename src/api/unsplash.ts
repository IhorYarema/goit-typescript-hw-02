import axios from 'axios';

const ACCESS_KEY = 'R7gqvAPcyvddQAyXG-aik_CGa4YAAvOrT0OAc1mTh3Y';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export interface UnsplashUser {
  name: string;
}

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  description: string | null;
  user: UnsplashUser;
  likes: number;
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

export const searchImages = async (
  query: string,
  page: number = 1
): Promise<UnsplashSearchResponse> => {
  const response = await instance.get<UnsplashSearchResponse>(
    '/search/photos',
    {
      params: {
        query,
        page,
        per_page: 12,
      },
    }
  );

  return response.data;
};
