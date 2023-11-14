import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex gap-1 items-center w-60 bg-[var(--bgHover)] rounded-lg px-3 py-2">
      <MdSearch size={18} />
      <input type="text" placeholder={placeholder} className="" />
    </div>
  );
};

export default Search;
