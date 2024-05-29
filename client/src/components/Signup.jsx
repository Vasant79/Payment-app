import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [profiePic, setProfilePic] = useState([]);

  function handleUsername(event) {
    setUserName(event.target.value);
  }
  function handleProfilephoto(event) {
    setProfilePic(event.target.value[0]);
    console.log(profiePic);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="container mx-auto min-h-screen  flex justify-center items-center">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="text-center text-2xl mb-10  ">
          <Link
            className="w-1/2 px-4 pb-2 border-b border-gray-600 text-gray-500"
            to="/signin"
          >
            Sign In
          </Link>
          <Link
            className="w-1/3 px-4 pb-2  border-b border-blue-400  "
            to="/signup"
          >
            Sign Up
          </Link>
        </div>

        <div className="relative flex  items-center">
          <span className="absolute">
            <FaRegUser className="h-6 w-6 mx-3 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={handleUsername}
            className="w-full px-11 py-3 rounded-lg bg-white text-gray-700 border focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 "
          />
        </div>

        <label
          htmlFor="avatar"
          className="mx-auto mt-6 flex items-center  py-3 w-full rounded-lg bg-white text-gray-700 border-2  border-dashed cursor-pointer"
        >
          <span className="absolute">
            <LuUpload className="h-6 w-6 mx-3 text-gray-400" />
          </span>
          <h2 className="px-11 text-gray-400">Profile Photo</h2>
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onClick={handleProfilephoto}
            className="hidden"
          />
        </label>

        <div className="relative mt-6 flex items-center">
          <span className="absolute">
            <MdOutlineMail className="h-6 w-6 mx-3 text-gray-400" />
          </span>
          <input
            className="w-full px-11 py-3 border rounded-lg focus:ring focus:outline-none focus:ring-blue-400 focus:ring-opacity-40"
            type="text"
            placeholder="Email address"
          />
        </div>
        <div className="relative mt-6 flex items-center">
          <span className="absolute">
            <RiLockPasswordLine className="h-6 w-6 mx-3  text-gray-400" />
          </span>
          <input
            className="w-full px-11 py-3 border rounded-lg focus:ring focus:outline-none focus:ring-blue-400 focus:ring-opacity-40"
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          className="w-full py-3 mt-6 text-center text-white bg-blue-500 hover:bg-blue-700 rounded-lg"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
