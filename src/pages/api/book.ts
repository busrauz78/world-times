import { APP_CONFIG } from '@/config';

export async function getBooks() {
  const URL = `${APP_CONFIG.BEST_SELLERS_BOOKS}?api-key=${APP_CONFIG.API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
};

export async function searchBooks(search: string) {
  const URL = `${APP_CONFIG.BEST_SELLERS_BOOKS_SEARCH}?title=${search}&api-key=${APP_CONFIG.API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
};
