import { APP_CONFIG } from '@/config';

export async function getBooks() {
  const response = await fetch(
    APP_CONFIG.BEST_SELLERS_BOOKS + APP_CONFIG.API_KEY
  );
  const data = await response.json();
  return data.results;
}

export async function searchBooks(search: string) {
  const response = await fetch(
    `${APP_CONFIG.BEST_SELLERS_BOOKS_SEARCH}?title=${search}&api-key=GsFc4D6vBpbb3JnswNEj4GknPADdV6hK`
  );
  const data = await response.json();
  return data.results;
}