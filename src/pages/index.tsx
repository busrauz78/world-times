import React from 'react';
import TopStoryCard from '@/components/Card/TopStoryCard';
import { getTopStories } from './api/topStories';

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
      {results.map(({ title, abstract, byline, url }, index: number) => (
        title &&
        <TopStoryCard
          key={index}
          title={title}
          description={abstract}
          url={url}
          byline={byline}
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { results: await getTopStories() },
  };
}
