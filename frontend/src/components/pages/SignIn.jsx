import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../reusableComp/Button";

/**
 * problem statement --
 * 1. make correction in sign up -- take email also
 * 2. in sign in -- instead of username take email
 */

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function signIn() {
    const signIn = await axios({
      method: "post",
      url: "http://localhost:3001/api/v1/user/signin",
      data: {
        email: email,
        password: password,
      },
    });

    console.log(signIn.data);
    return signIn.data;
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log("submitting form");

    if (signIn()) {
      navigate("/dashboard");
    } else {
      console.log("sign in error");
    }
  }

  return (
    <div>
      <h1> This is sign in page</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}
