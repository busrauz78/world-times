import { APP_CONFIG } from '@/config';

export async function getBooks() {
  const response = await fetch(
    APP_CONFIG.BEST_SELLERS_BOOKS + APP_CONFIG.API_KEY
  );
  const data = await response.json();
  return data.results;
}
