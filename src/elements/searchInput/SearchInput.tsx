function SearchInput({ searchQuery, commitInputChanges }) {
  return (
    <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
      <div className=" relative ">
        <input
          type="text"
          value={searchQuery}
          onChange={commitInputChanges}
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
          placeholder="Поиск..."
        />
      </div>
    </form>
  );
}
export default SearchInput;
