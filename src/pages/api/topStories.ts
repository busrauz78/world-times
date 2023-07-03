import { APP_CONFIG } from '@/config';

export async function getTopStories() {
  const response = await fetch(
    APP_CONFIG.TOP_STORIES + APP_CONFIG.API_KEY
  );
  const data = await response.json();
  return data.results;
}
