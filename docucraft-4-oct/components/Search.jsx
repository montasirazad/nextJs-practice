import Image from "next/image";

const Search = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
      <div className="flex gap-4">
        <div className="contents lg:hidden">
          <button
            type="button"
            className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
            aria-label="Find something..."
          >
            <Image
              src="/search.svg"
              alt="Search"
              width={20}
              height={20}
              // className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
