import { APP_CONFIG } from '@/config';

export async function getMovies() {
  const URL = `${APP_CONFIG.MOVIE_REVIEWS}?api-key=${APP_CONFIG.API_KEY}`
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
};

export async function searchMovies(search: string) {
  const URL = `${APP_CONFIG.MOVIE_REVIEWS_SEARCH}?query=${search}&api-key=${APP_CONFIG.API_KEY}`
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
};
