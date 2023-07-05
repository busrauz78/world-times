import Link from 'next/link';
import React from 'react';

type BookCardProps = {
  title: string;
  description: string;
  author: string;
  imageUrl?: string;
  rank?: number;
  buyLink?: string;
  weeksOnList?: number;
};

const BookCard = ({
  title,
  description,
  author,
  imageUrl,
  rank,
  buyLink,
  weeksOnList,
}: BookCardProps) => {
  return (
    <div className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      {rank && <div className="absolute right-0 md:top-0 p-4 border-l border-gray-500 rounded-bl-full bg-gray-500 md:bg-inherit">
        <p className="mb-2 text-xl md:text-gray-200 md:dark:text-gray-400 md:opacity-50 text-white">
          {rank}
        </p>
      </div>}
      {imageUrl && <img
        className="object-fit w-full md:h-full md:w-48"
        src={imageUrl}
        alt="WorldTimes"
      />}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {weeksOnList && (
          <p className="mb-2 text-xs text-gray-200 dark:text-gray-400 opacity-50">
            {weeksOnList} WEEKS ON THE LIST
          </p>
        )}
        <p className="mb-3 text-base text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
          By {author}
        </p>
        {buyLink && (
          <Link
            href={buyLink}
            target="_blank"
            className="w-min inline-flex items-center px-5 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy
          </Link>
        )}
      </div>
    </div>
  );
};

export default BookCard;
