import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TransactionTable from "../components/TransactionTable";
import reccord from "../utils/TransactionRecord";

function TransactionPage() {
  return (
    <div className="h-screen">
      <div className="max-w-md mx-auto">
        <Navbar />
      </div>

      <div className="mt-20 mb-10 font-Loto text-4xl font-semibold text-center">
        <span>
          <span className="text-blue-500">Transfer</span> History
        </span>
      </div>
      <div className=" mb-40 w-full max-w-md mx-auto">
        <TransactionTable />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default TransactionPage;
