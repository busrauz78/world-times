import Link from 'next/link';
import React from 'react';

type MovieCardProps = {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  url: string;
  publishedDate: string;
};

export default function MovieCard({
  title,
  description,
  author,
  imageUrl,
  url,
  publishedDate,
}: MovieCardProps) {
  return (
    <div className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="text-xs text-gray-700 dark:text-gray-400 opacity-50">{publishedDate}</p>

        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 text-base text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
          By {author}
        </p>
          <Link
            href={url}
            target="_blank"
            className="w-max inline-flex items-center px-5 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read Reviews
          </Link>
      
      </div>
      <img
        className="object-cover w-full md:h-full md:w-48"
        src={imageUrl}
        alt="WorldTimes"
      />
    </div>
  );
}
