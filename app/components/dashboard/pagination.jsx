import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between mt-6 px-2">
      <button
        className={`btn text-gray-400 bg-[var(--deactive)] cursor-not-allowed`}
      >
        &#8592; Prev
      </button>
      <button className={`btn text-gray-700 bg-[var(--active)]`}>
        Next &#8594;
      </button>
    </div>
  );
};

export default Pagination;
