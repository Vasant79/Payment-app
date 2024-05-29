import { useMemo, useState } from "react";
import Logout from "./Logout";
import { FaGithub } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiHome } from "react-icons/ti";

function Navbar() {
  const [name, setName] = useState("");

  return (
    <nav className="mt-10 w-full flex justify-center items-center font-inter font-light text-md  bg-gray-200 rounded-full">
      <span className="m-2 p-2  bg-gray-100 border rounded-xl hover:shadow-xl">
        <TiHome className="h-6 w-6 mx-2 text-gray-500 hover:text-black" />
      </span>
      <span className="m-2 p-2  bg-gray-100 border rounded-xl hover:shadow-xl">
        <TiSocialTwitter className="h-6 w-6 mx-2 text-gray-500 hover:text-black" />
      </span>
      <span className="m-2 p-2  bg-gray-100 border rounded-xl hover:shadow-xl ">
        <FaGithub className="h-6 w-6 mx-2 text-gray-500 hover:text-black" />
      </span>
      <span className="m-2 p-2  bg-gray-100 border rounded-xl hover:shadow-xl">
        <Logout />
      </span>
    </nav>
  );
}

export default Navbar;
