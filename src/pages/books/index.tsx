import BookCard from '@/components/Card/BookCard';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getBooks } from '../api/book';

type BooksProps = {
  results: {
    lists: {
      display_name: string;
      books: {
        title: string;
        description: string;
        author: string;
        amazon_product_url: string;
        rank: number;
        book_image: string;
        weeks_on_list: number;
      }[];
    }[];
  };
};

export default function Books({ results }: BooksProps) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleOnChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    if (search.length) {
      router.push(`/books/${search}`)
    }
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          type="text"
          id="search"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </form>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {results.lists.map(({ display_name, books }, index: number) => (
          <li key={index} className="mb-10 ml-4 flex flex-wrap gap-5">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-2.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h5 className="font-semibold text-2xl w-full">{display_name}</h5>
            {books.map(
              ({
                title,
                description,
                author,
                amazon_product_url,
                rank,
                book_image,
                weeks_on_list,
              }, index: number) =>
                title && (
                  <BookCard
                    key={index + results.lists.length}
                    title={title}
                    description={description}
                    author={author}
                    imageUrl={book_image}
                    rank={rank}
                    buyLink={amazon_product_url}
                    weeksOnList={weeks_on_list}
                  />
                )
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { results: await getBooks() },
  };
}
