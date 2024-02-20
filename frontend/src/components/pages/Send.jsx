import { useRecoilValue } from "recoil";
import { personAtom } from "../../store/atom";
import { useState } from "react";
import Button from "../reusableComp/Button";
import axios from "axios";

/**
 * Problem statement --
 * 1. make send money page
 *
 * my sol -- mentain a state user in a atom and 2nd atom for peron to whom money will be transfered
 * get here the person to whom money will be sent from atom
 * & ask for the amount & on click poll server
 */

export default function Send() {
  const [amount, setAmount] = useState(0);
  const [display, setDisplay] = useState(false);
  let person = useRecoilValue(personAtom);

  async function sendMoney() {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/api/v1/account/transfer",
        data: {
          name: person,
          amount: amount,
        },
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6IjY1ZDQ4NDA5ZGE5ODQzN2Y2YTkyZjkxYyJ9LCJpYXQiOjE3MDg0MjYyNDl9.s_G-erj2Hn5ho2afVVwcfX9md3KE2GkrLwny2k9b0cM",
        },
      });

      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log("error at sending money ", err);
    }
  }

  function handleTransfer(event) {
    event.preventDefault();
    console.log("transfering money to ", person);

    //hit endpoint -- provide name and amount
    if (sendMoney()) {
      console.log("Amount transfered ");
      setAmount(0);
      setDisplay(true);
    }
  }

  return (
    <div>
      <h1>Send Money Page</h1>
      <form>
        <label>Transfer Money To : {person}</label>
        <br />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        ></input>

        <Button type="submit" onClick={handleTransfer}>
          Transfer
        </Button>
      </form>

      {display ? "Money Tranfered " : null}
    </div>
  );
}
