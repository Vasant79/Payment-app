import { useDispatch, useSelector } from "react-redux";
import { getTransactionData } from "../redux/slices/transactionSlice";
import PaginationComponent from "./PaginationComponent";
import { useMemo, useState } from "react";

// task now render this data to table and add pagination -- issue suddenly current page becomes 10

function TransactionTable() {
  let [current, setCurrent] = useState(1);
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.transaction);

  let reccord = transaction.transactions;

  if (transaction.status == "idle") {
    dispatch(getTransactionData());
  }

  let pageSize = 10;
  console.log("currentPage : ", current);
  console.log("reccord ", reccord);

  const currentData = useMemo(() => {
    let start = current - 1 + pageSize;
    let end = start + pageSize;
    return reccord?.slice(start, end);
  }, [current, pageSize, reccord]);

  console.log("current data to be displayed : ", currentData);

  const handlePageUpdation = (page) => {
    setCurrent(page);
  };
  return (
    <div className=" flex  flex-col items-center">
      <PaginationComponent
        totalCount={reccord?.length}
        current={current}
        pageSize={10}
        onPageChange={handlePageUpdation}
      />

      <table className="w-full border  shadow-md">
        <thead>
          <tr className=" font-Loto text-2xl  border  border-gray-300 ">
            <th className="py-4  border font-light ">Date </th>
            <th className="border font-light">Name</th>
            <th className="border font-light">Amount</th>
          </tr>
        </thead>

        <tbody className=" bg-gray-200">
          {currentData &&
            currentData.map((eachData) => {
              return (
                <tr className="text-center " key={eachData.id}>
                  <td className="py-2 border">
                    {eachData.date
                      ? new Date(eachData.date * 1000).toLocaleDateString()
                      : null}
                  </td>
                  <td className="border">{eachData.name}</td>
                  <td className="border">{eachData.amount}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
