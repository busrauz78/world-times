import { APP_CONFIG } from '@/config';

export async function getTopStories() {
  const URL = `${APP_CONFIG.TOP_STORIES}?api-key=${APP_CONFIG.API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
};
