import { APP_CONFIG } from '@/config';

export async function getMovies() {
  const response = await fetch(
    APP_CONFIG.MOVIE_REVIEWS + APP_CONFIG.API_KEY
  );
  const data = await response.json();
  return data.results;
}
