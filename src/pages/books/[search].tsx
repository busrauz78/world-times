import BookCard from '@/components/Card/BookCard';
import SearchNotFound from '@/components/SearchNotFound';
import React from 'react';
import { searchBooks } from '../api/book';

type BooksSearchProps = {
  results: {
    title: string;
    description: string;
    author: string;
  }[]
}


export default function BooksSearch({ results }: BooksSearchProps) {
  return (
    <div className="flex flex-col flex-wrap gap-5">
      <h1 className="text-3xl font-bold border-b max-w-xl">Search Results</h1>
      {results.length ? (
        results.map(
          ({ title, description, author: byline }, index: number) => (
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
