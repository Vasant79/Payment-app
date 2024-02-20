import { useEffect, useState } from "react";
import axios from "axios";
import SearchUser from "../reusableComp/SearchUser";

export default function DashBoard() {
  const [balance, setBalance] = useState(0);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6IjY1ZDQ4NDA5ZGE5ODQzN2Y2YTkyZjkxYyJ9LCJpYXQiOjE3MDg0MjYyNDl9.s_G-erj2Hn5ho2afVVwcfX9md3KE2GkrLwny2k9b0cM";

  useEffect(() => {
    async function fetchBalance() {
      try {
        const balanceInfo = await axios.get(
          "http://localhost:3001/api/v1/account/balance",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        console.log(balanceInfo.data.balance);
        setBalance(balanceInfo.data.balance);
      } catch (err) {
        console.log("error in dashboard ", err);
      }
    }

    fetchBalance();
    /**
     * one more depenency will be there that updates balance if some transaction occurs
     */
  }, [token]);

  return (
    <div>
      DashBoard Balance {balance}
      <SearchUser />
    </div>
  );
}
