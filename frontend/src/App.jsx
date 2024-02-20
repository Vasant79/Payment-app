import { Link, Route, Router } from "react-router-dom";
import Button from "./components/reusableComp/Button";

function App() {
  return (
    <div>
      <Link to={"/signin"}>Signin</Link>
      <br />
      <Link to={"/signup"}>Signup</Link>
      <br />
    </div>
  );
}

export default App;
