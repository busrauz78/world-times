import MovieCard from "@/components/Card/MovieCard";
import { getMovies } from "../api/movie";

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
    }
  }[]
};

export default function Movies({results}: MoviesProps) {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {results.map(({display_title, summary_short, byline ,publication_date, link, multimedia}, index: number) => (
        display_title && <MovieCard key={index} title={display_title} description={summary_short} author={byline} publishedDate={publication_date} url={link.url} imageUrl={multimedia.src} />
      ))}
    </div>
  )
};

export async function getStaticProps() {
  return {
    props: { results: await getMovies() },
  };
};
