import { Link, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="shadow-md rounded-md p-3  px-6 mb-4 bg-white hover:bg-blue-100 transition duration-300">
        <Link
          to={"/signin"}
          className="text-blue-600 font-semibold hover:text-blue-800"
        >
          Sign in
        </Link>
      </div>
      <div className="shadow-md rounded-md p-3  px-6 mb-4 bg-white hover:bg-blue-100 transition duration-300">
        <Link
          to={"/signup"}
          className="text-blue-600 font-semibold hover:text-blue-800"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default App;
