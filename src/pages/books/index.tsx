import BookCard from '@/components/Card/BookCard';
import { APP_CONFIG } from '@/config';

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
  return (
    <div className="flex flex-wrap flex-col">
      {results.lists.map(({ display_name, books }) => (
        <div
          key={display_name}
          className="flex flex-wrap gap-3 my-3 items-center justify-center"
        >
          <h5 className="text-2xl w-full text-center">{display_name}</h5>
          {books.map(
            ({
              title,
              description,
              author,
              amazon_product_url,
              rank,
              book_image,
              weeks_on_list,
            }) => (
              <BookCard
                key={title}
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
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    APP_CONFIG.BEST_SELLERS_BOOKS + APP_CONFIG.API_KEY
  );
  const data = await response.json();
  return {
    props: { results: data.results },
  };
}
