import bitcoin from "../assets/bitcoin.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      {/* Logo */}
      <div className="mb-7">
        <img className="h-80 w-80" src={bitcoin} alt="logo" />
      </div>
      {/* moto line */}
      <div className="mb-10 text-4xl font-semibold text-center">
        <h1>FastPay </h1>
      </div>

      {/* Prject Decription */}
      <div className="mb-10 text-2xl text-balance text-center text-gray-500">
        <h4>
          "Project imitates how a payment application works in real-time,
          allowing users to log in, sign up, and transfer money with peers. The
          tech stack used is MERN."
        </h4>
      </div>

      <div className="text-md  text-center">
        <Link
          className="mx-2 px-5 py-2 text-white border bg-blue-500 hover:bg-blue-700 rounded-lg shadow-md"
          to="/signin"
        >
          Login
        </Link>
        or
        <Link
          className="mx-2 px-5 py-2 border text-white bg-blue-500 hover:bg-blue-700 rounded-lg shadow-md"
          to="/signup"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
