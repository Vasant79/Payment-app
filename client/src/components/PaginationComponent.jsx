import React from "react";
import usePagination from "../hooks/usepagination";

// this component will give < page no with dot >
const PaginationComponent = ({
  totalCount,
  current,
  sibling,
  pageSize,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    totalCount,
    current,
    sibling,
    pageSize,
  });

  const totalPage = Math.ceil(totalCount / 10);
  console.log("total page : ", Math.ceil(totalCount / 10));
  console.log("Pagination range : ", paginationRange);

  const onPrevious = () => {
    if (current != 1) {
      onPageChange(current - 1);
    }
  };

  const onNext = () => {
    if (current < totalPage) {
      onPageChange(current + 1);
    }
  };
  // task -- disable left & right icons
  return (
    <>
      <ul className="flex w-full h-20 p-4 justify-around items-center">
        <li
          onClick={onPrevious}
          className={`${
            current === 1
              ? "pointer-events-none text-gray-400"
              : "cursor-pointer"
          }`}
        >
          Previous
        </li>

        {/* rendering paginationRange */}
        {paginationRange?.map((pageNumber) => {
          if (pageNumber == "Dot") {
            return <li>&#8230;</li>;
          }
          return (
            <li
              className={`${
                pageNumber === current
                  ? "w-6 h-6 text-center bg-gray-200 rounded-full text-red-400"
                  : "text-black"
              }`}
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}

        <li
          className={`${
            current === 10
              ? "pointer-events-none text-gray-400"
              : "cursor-pointer"
          }`}
          onClick={onNext}
        >
          Next
        </li>
      </ul>
    </>
  );
};

export default React.memo(PaginationComponent);
