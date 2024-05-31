import User from "./User";
import { FaGithub } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiHome } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/home");
  }
  function handleTwitter() {
    navigate("/https://twitter.com/VasantNegi");
  }
  function handleGithub() {
    navigate("/https://github.com/Vasant79");
  }
  function handleUser() {
    navigate("/userdetail");
  }

  return (
    <nav className="mt-10 w-full flex justify-center items-center font-inter font-light text-md  bg-gray-200 rounded-full">
      <span
        className="m-2 p-2  bg-gray-100 border rounded-xl hover:shadow-xl"
        onClick={handleHome}
      >
        <TiHome className="h-6 w-6 mx-2 text-gray-500 hover:text-black" />
      </span>
      <span
        className="m-2 p-2  bg-gray-100 border rounded-xl hover:shadow-xl "
        onClick={handleTwitter}
      >
        <TiSocialTwitter className="h-6 w-6 mx-2 text-gray-500 hover:text-black" />
      </span>
      <span
        className="m-2 p-2  bg-gray-100 border rounded-xl hover:shadow-xl "
        onClick={handleGithub}
      >
        <FaGithub className="h-6 w-6 mx-2 text-gray-500 hover:text-black" />
      </span>
      <span
        className="m-2 p-2  bg-gray-100 border rounded-xl hover:shadow-xl"
        onClick={handleUser}
      >
        <User />
      </span>
    </nav>
  );
}

export default Navbar;
