"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex gap-1 items-center w-60 bg-[var(--bgHover)] rounded-lg px-3 py-2">
      <MdSearch size={18} />
      <input
        type="text"
        placeholder={placeholder}
        className=""
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
