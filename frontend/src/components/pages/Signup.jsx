import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../reusableComp/Button";

export default function Signup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function reqToServer() {
    const call = await axios({
      method: "post",
      url: "http://localhost:3001/api/v1/user/signup",
      data: {
        firstName: FirstName,
        lastName: LastName,
        email: email,
        password: password,
      },
    });
    console.log("sign up ", call.data);
    return call.data;
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    // console.log(FirstName, LastName, email, password);
    // console.log("form submitted");

    /**
     * problem statement -- sign up the user make a req to server & get response
     *
     * core :
     * use axios and make a post req
     */
    if (reqToServer()) {
      console.log("user added");
      navigate("/dashboard");
    } else {
      console.log("Error in sign up");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>FirstName : </label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>

        <label>LastName : </label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        ></input>

        <label>Email : </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>

        <label>Password : </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
