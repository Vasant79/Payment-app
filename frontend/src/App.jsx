import { Link, Route, Router } from "react-router-dom";
import Button from "./components/reusableComp/Button";

function App() {
  return (
    <div>
      <Link to={"/signin"}>Signin</Link>
      <br />
      <Link to={"/signup"}>Signup</Link>
      <br />
      <Link to={"/dashboard"}>DashBoard</Link>
      <br />
      <Link to={"/send"}>Send</Link>

      <Button>Testing</Button>
    </div>
  );
}

export default App;
