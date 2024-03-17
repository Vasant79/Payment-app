import { Link, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-r from-white to-purple-400  h-screen flex justify-center items-center">
      <div className="shadow-md rounded-md py-2 m-2 px-6  bg-white hover:bg-blue-100 transition duration-300">
        <Link
          to={"/signin"}
          className="text-blue-600  font-semibold hover:text-blue-800"
        >
          Sign in
        </Link>
      </div>
      <div className="shadow-md rounded-md py-2  m-2 px-6  bg-white hover:bg-blue-100 transition duration-300">
        <Link
          to={"/signup"}
          className="text-blue-600    font-semibold hover:text-blue-800"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default App;
