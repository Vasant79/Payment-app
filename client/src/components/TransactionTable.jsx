function TransactionTable({ reccord }) {
  return (
    <div className="h-full flex items-center">
      <table className=" w-full border  shadow-md">
        <thead>
          <tr className=" font-Loto text-2xl  border  border-gray-300 ">
            <th className="py-4  border font-light ">Date </th>
            <th className="border font-light">Name</th>
            <th className="border font-light">Amount</th>
          </tr>
        </thead>

        <tbody>
          {reccord.map((eachData, index) => {
            return (
              <tr className="text-center " key={eachData.id}>
                <td className="py-2 border">{eachData.date}</td>
                <td className="border">{eachData.first_name}</td>
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
