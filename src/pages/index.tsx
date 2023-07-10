import React from 'react';
import { getTopStories } from './api/topStories';
import dynamic from 'next/dynamic';

const TopStoryCard = dynamic(() => import('@/components/Card/TopStoryCard'));

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
      {results.map(
        ({ title, abstract, byline, url }, index: number) =>
          title && (
            <TopStoryCard
              key={index}
              title={title}
              description={abstract}
              url={url}
              byline={byline}
            />
          )
      )}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { results: await getTopStories() },
  };
}
