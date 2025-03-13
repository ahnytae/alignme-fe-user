import { SearchBarProps } from '@/types';
import * as React from 'react';

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, handleSubmit, onSearch }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex w-[350px] max-w-full items-center gap-2 rounded-xl border border-solid border-zinc-200 bg-white px-3 py-2 text-sm font-medium leading-none text-zinc-400"
    >
      <input
        type="search"
        className="my-auto flex-1 shrink basis-0 self-stretch bg-transparent outline-none"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search lesson centers"
      />
      <button type="submit">
        <img
          loading="lazy"
          src="/assets/search.svg"
          alt="search"
          className="my-auto aspect-square w-6 shrink-0 self-stretch object-contain"
        />
      </button>
    </form>
  );
};

export default SearchBar;
