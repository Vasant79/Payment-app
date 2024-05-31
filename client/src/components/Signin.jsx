import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import CircleLoader from "./loaders/CircleLoader";
import logo from "../assets/bitcoin.png";

import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { addData } from "../redux/slices/authSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth?.user);
  console.log("data came from for rtk --> ", userData);
  const navigate = useNavigate();

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setLoadingText("Proccessing");

    let formData = {};
    formData.email = email;
    formData.password = password;

    const message = setTimeout(() => {
      setLoadingText("Taking longer than usual");
    }, 5000);

    //dispatch some acttion to store
    dispatch(addData(formData));
    setLoading(false);
    clearTimeout(message);
  }

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="flex  justify-center items-center ">
          <Link
            to="/Signin"
            className="w-1/3 pb-4  border-b-2  border-sky-500 text-center text-lg text-gray-700"
          >
            Sign In
          </Link>
          <Link
            to="/Signup"
            className="w-1/3  pb-4 border-b border-gray-500 text-center text-lg text-gray-500"
          >
            Sing Up
          </Link>
        </div>
        <div className="mt-6 relative flex items-center">
          <span className="absolute">
            <MdOutlineMail className="h-6 w-6 mx-3 text-gray-400" />
          </span>
          <input
            type="email"
            placeholder="Email address"
            autoComplete="false"
            onChange={handleEmail}
            className="w-full px-11 py-3 bg-white text-gray-700 rounded-lg border  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
          />
        </div>
        <div className="mt-4 relative flex items-center">
          <span className="absolute">
            <RiLockPasswordLine className="h-6 w-6 mx-3  text-gray-400" />
          </span>
          <input
            type="password"
            placeholder="Password"
            autoComplete="false"
            onChange={handlePassword}
            className="w-full px-11 py-3 bg-white rounded-lg border focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-4 py-3  bg-blue-500 text-white border rounded-lg  hover:bg-blue-600${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <div>
            {loading ? <CircleLoader loadingText={loadingText} /> : "Sign in"}
          </div>
        </button>
      </form>
    </div>
  );
};

export default Signin;
