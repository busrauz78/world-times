import SearchNotFound from '@/components/SearchNotFound';
import dynamic from 'next/dynamic';
import React from 'react';
import { searchMovies } from '../api/movie';

const MovieCard = dynamic(() => import('@/components/Card/MovieCard'))

type MoviesSearchProps = {
  results: {
    display_title: string;
    summary_short: string;
    publication_date: string;
    byline: string;
    link: {
      url: string;
    };
    multimedia: {
      src: string;
    };
  }[];
};

export default function MoviesSearch({ results }: MoviesSearchProps) {
  return (
    <div className="flex flex-col flex-wrap gap-5">
      <h1 className="text-3xl font-bold border-b max-w-xl">Search Results</h1>
      {results && results.length ? (
        results.map(
          (
            {
              display_title,
              summary_short,
              byline,
              publication_date,
              link,
              multimedia,
            },
            index: number
          ) =>
            display_title && (
              <MovieCard
                key={index}
                title={display_title}
                description={summary_short}
                author={byline}
                publishedDate={publication_date}
                url={link.url}
                imageUrl={multimedia?.src}
              />
            )
        )
      ) : (
        <SearchNotFound />
      )}
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const { search } = params;
  return {
    props: { results: await searchMovies(search) },
  };
}
