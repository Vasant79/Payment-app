import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { GiMoneyStack } from "react-icons/gi";
import { FcCurrencyExchange } from "react-icons/fc";

function Transfer() {
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState("");

  function handleReceiver(event) {
    let name = event.target.value;
    setReceiver(name);
  }
  function handleAmount(event) {
    let money = event.target.value;
    setAmount(money);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //send amount & reciever to server
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <FcCurrencyExchange className="inline-block h-8 w-8 " />
          <span className="font-Loto text-xl font-semibold">
            Money Transfer
          </span>
        </div>
        <div className="relative">
          <span className="absolute top-8">
            <GoArrowUpRight className="h-6 w-6 mx-3 text-gray-400" />
          </span>
          <input
            className="w-full py-3 px-11 mt-5 border rounded-lg focus:ring focus:outline-none focus:ring-blue-400"
            placeholder="Pay to .."
            onChange={handleReceiver}
          />
        </div>

        <div className="relative">
          <span className="absolute top-8 ">
            <GiMoneyStack className="h-6 w-6 mx-3 text-gray-400" />
          </span>
          <input
            className="w-full py-3 px-11 mt-5 border rounded-lg focus:ring focus:outline-none focus:ring-blue-400"
            placeholder="Amount"
            autoComplete="false"
            onChange={handleAmount}
          />
        </div>
        <button
          className=" w-full mt-5 py-2.5 rounded-lg text-white bg-blue-500 hover:bg-blue-700"
          type="submit"
        >
          Pay
        </button>
      </form>
    </div>
  );
}

export default Transfer;
