import UserInfo from "../components/UserInfo";
import Transfer from "../components/Transfer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function UserDetails() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/transaction-history");
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-2 max-w-md w-full">
        <Navbar />
      </div>
      <div className="p-2 max-w-md w-full">
        <UserInfo />
      </div>
      <div className="mt-20 p-2 max-w-md w-full">
        <Transfer />

        <button
          className="max-w-md w-full py-2.5 mt-2 bg-gray-400 text-white rounded-lg  hover:bg-black"
          onClick={handleClick}
        >
          Show transaction
        </button>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default UserDetails;
