import { useMemo } from "react";

// range will renter array formed using parameter provided
function range(start, end) {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

function usePagination({ totalCount, current, sibling = 1, pageSize }) {
  const paginationRange = useMemo(() => {
    const pages = Math.ceil(totalCount / pageSize);
    const defaultDisplay = 3 + 2 * sibling;
    const startingPage = 1;

    const endingPage = pages;

    const leftSibiling = Math.max(current - 1, 1);
    const rigthSibiling = Math.min(current + 1, endingPage);

    const showLeftDot = leftSibiling > 2;
    const showRightDot = rigthSibiling < endingPage - 2;

    // case 1 weher pages smaller than default display
    if (pages <= defaultDisplay) {
      return range(startingPage, endingPage);
    }

    //case 2 where only leftdot to show
    if (showLeftDot && !showRightDot) {
      let rightPortion = range(leftSibiling, endingPage);
      return [startingPage, "Dot", ...rightPortion];
    }

    //case 3 where only right dot to be shown
    if (!showLeftDot && showRightDot) {
      let leftPortion = range(startingPage, rigthSibiling);
      return [...leftPortion, "Dot", endingPage];
    }

    //case 4 where both left & right dot to be shown
    if (showLeftDot && showRightDot) {
      let middlePortion = range(leftSibiling, rigthSibiling);
      return [startingPage, "Dot", ...middlePortion, "Dot", endingPage];
    }
  }, [totalCount, current, sibling, pageSize]);

  return paginationRange;
}

export default usePagination;
