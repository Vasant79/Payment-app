import { useEffect, useState } from "react";
import axios from "axios";
import SearchUser from "../reusableComp/SearchUser";

export default function DashBoard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      try {
        const balanceInfo = await axios.get("/v1/account/balance");

        console.log(balanceInfo.data);
        setBalance(balanceInfo.data.balance);
      } catch (err) {
        console.log("error in dashboard ", err);
      }
    }

    fetchBalance();
    /**
     * one more depenency will be there that updates balance if some transaction occurs
     */
  }, []);

  //   <div>
  //   DashBoard Balance {balance}
  //   <SearchUser />
  // </div>

  return (
    <div>
      <div className="max-w-md mt-10 mx-auto overflow-hidden rounded-lg shadow-lg border-l-8 border-pink-500">
        <div className="p-6">
          <h2 className="text-gray-800 text-2xl font-semibold mb-2">
            Balance :
            <br />
            {balance}
          </h2>
        </div>
      </div>
      <SearchUser />
    </div>
  );
}
