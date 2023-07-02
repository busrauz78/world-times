import { APP_CONFIG } from '@/config';
import React from 'react';
import TopStoryCard from '@/components/Card/TopStoryCard';

type HomeProps = {
  results: {
    title: string;
    abstract: string;
    byline: string;
    url: string;
  }[];
};

export default function Home({ results }: HomeProps) {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {results.map(({ title, abstract, byline, url }) => (
        <TopStoryCard
          key={url}
          title={title}
          description={abstract}
          url={url}
          byline={byline}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(APP_CONFIG.TOP_STORIES + APP_CONFIG.API_KEY);
  const data = await response.json();
  return {
    props: { results: data.results },
  };
}
