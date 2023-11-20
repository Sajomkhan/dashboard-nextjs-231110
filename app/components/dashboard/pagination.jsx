"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const disable = "btn text-gray-400 bg-[var(--deactive)] cursor-not-allowed";
const anabale = "btn text-gray-700 bg-[var(--active)]";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-between mt-6 px-2">
      <button
        className={`${!hasPrev ? disable : anabale}`}
        onClick={() => handleChangePage("prev")}
      >
        &#8592; Prev
      </button>
      <button
        className={`${!hasNext ? disable : anabale}`}
        onClick={() => handleChangePage("next")}
      >
        Next &#8594;
      </button>
    </div>
  );
};

export default Pagination;
