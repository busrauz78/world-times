import BookCard from '@/components/Card/BookCard';
import SearchNotFound from '@/components/SearchNotFound';
import React from 'react';
import { searchBooks } from '../api/book';

export default function BooksSearch({ results }: any) {
  return (
    <div className="flex flex-col flex-wrap gap-5">
      <h1 className="text-3xl font-bold border-b max-w-xl">Search Results</h1>
      {results.length ? (
        results.map(
          ({ title, description, author: byline }: any, index: number) => (
            <BookCard
              key={index}
              title={title}
              description={description}
              author={byline}
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
    props: { results: await searchBooks(search) },
  };
}
