import Navbar from "../components/Navbar";
import DetailSection from "../components/DetailSection";

function Dashboard() {
  return (
    <div className="h-screen ">
      <div className=" w-full flex justify-center">
        <div className="max-w-md w-full">
          <Navbar />
        </div>
      </div>
      <div>
        <DetailSection />
      </div>
      {/* <div>
        <TransactionSection />
      </div> */}
    </div>
  );
}

export default Dashboard;
