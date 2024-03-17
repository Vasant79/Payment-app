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
        url: "/v1/account/transfer",
        data: {
          name: person,
          amount: amount,
        },
        headers: {
          Authorization: null,
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

  // <h1>Send Money Page</h1>
  // <form>
  //   <label>Transfer Money To : {person}</label>
  //   <br />
  //   <input
  //     value={amount}
  //     onChange={(e) => setAmount(e.target.value)}
  //     required
  //   ></input>

  //   <Button type="submit" onClick={handleTransfer}>
  //     Transfer
  //   </Button>
  // </form>

  // {
  //   display ? "Money Tranfered " : null;
  // }

  return (
    <div>
      <div className="max-w-md mt-10 mx-auto overflow-hidden rounded-lg shadow-lg border-l-8 border-pink-500">
        <div className="p-6">
          <form>
            <label className="text-gray-800 text-2xl font-semibold mb-2">
              Transfer Money To : {person}
            </label>
            <br />

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="m-2 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></input>
            <Button type="submit" onClick={handleTransfer}>
              Transfer
            </Button>
          </form>
        </div>
      </div>

      {display ? (
        <div className="max-w-md mt-10 mx-auto bg-green-100 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded-md shadow-md">
          <div className="flex">
            <div className="py-1">
              <svg
                className="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-2">
              <p className="font-semibold">Success</p>
              <p>Money transfered...</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
