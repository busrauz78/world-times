const SearchNotFound = () => {
  return (
    <div className="flex items-center max-w-xl p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
      <div className="ml-3 text-sm font-normal text-white">
        Sorry we could not find any matches. Please try to search with another
        term.
      </div>
    </div>
  );
};

export default SearchNotFound;
