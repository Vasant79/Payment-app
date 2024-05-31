import TransactionTable from "../components/TransactionTable";
function TransactionPage() {
  return (
    <div>
      <div>
        <span>Transfer History</span>
      </div>
      <TransactionTable />
    </div>
  );
}

export default TransactionPage;
