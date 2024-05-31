import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mx-10  p-5 flex justify-between bg-gray-100 rounded-xl">
      <div className="ml-16 text-left">
        {/* company logo */}
        <span className="italic"> FastPay</span>
        <div className="max-w-sm  mt-2 text-xs text-gray-700 text-balance">
          FastPay is the only payments solution in India that allows businesses
          to accept, process and disburse payments with its product suite. It
          gives you access to all payment modes including credit card, debit
          card, netbanking, UPI and popular wallets including JioMoney,
          Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp
        </div>
      </div>

      <div>{/* some main content */}</div>

      <div className="flex mx-20">
        <div className="mr-80">
          <span className="block font-semibold">DEVELOPER</span>
          <span className=" block text-blue-700">
            Docs
            <br />
            Integration
          </span>

          <div className="mt-10 text-xs text-center">
            © FastPay 2024 All Rights Reserved
          </div>
        </div>
        <div className="">
          <div>
            <span className="block font-semibold">HELP & SUPPORT</span>
            <span className="text-blue-700">
              Support
              <br />
              Knowledge
            </span>
          </div>
          <div className="mt-5">
            <span className="block font-semibold">FIND US ONLINE</span>
            {/* insta twitter github logo */}
            <span className="flex">
              <FaSquareInstagram className="h-6 w-6 mx-1 text-pink-600" />
              <FaTwitter className="h-6 w-6 mx-1 text-blue-600" />
              <FaSquareGithub className="h-6 w-6 mx-1 text-black" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
