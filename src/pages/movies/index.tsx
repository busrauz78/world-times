import MovieCard from '@/components/Card/MovieCard';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getMovies } from '../api/movie';

type MoviesProps = {
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

export default function Movies({ results }: MoviesProps) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleOnChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    if (search.length) {
      router.push(`/movies/${search}`);
    }
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleOnSubmit} className="max-w-sm mb-4">
        <input
          onChange={handleOnChange}
          type="text"
          id="search"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </form>
      <div className="flex flex-wrap ">
        {results.map(
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
                imageUrl={multimedia.src}
              />
            )
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { results: await getMovies() },
  };
}
