import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../reusableComp/Button";
import Heading from "../reusableComp/Heading";
import Input from "../reusableComp/Input";

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
      url: "/v1/user/signin",
      data: {
        email: email,
        password: password,
      },
    });

    console.log(signIn.data);
    return signIn.data;
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    console.log("submitting form");

    const signInResponse = await signIn();
    console.log("sign in response ---> ", signInResponse);

    if (signInResponse.msg == "loged in") {
      navigate("/dashboard");
    } else {
      console.log("sign in error");
    }
  }

  return (
    <div className="bg-gradient-to-r from-white to-purple-400  h-screen flex justify-center items-center">
      <div className="max-w-md mt-10 mx-auto overflow-hidden bg-white rounded-xl shadow-lg border-l-8 border-pink-500">
        <div className="mx-auto p-4">
          <Heading label="Sign In" />
        </div>
        <form
          className=" flex flex-col justify-center"
          onSubmit={handleFormSubmit}
        >
          <div>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </div>

          <div className="mx-auto">
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
