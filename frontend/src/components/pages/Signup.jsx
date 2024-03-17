import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../reusableComp/Button";
import Input from "../reusableComp/Input";
import Heading from "../reusableComp/Heading";

export default function Signup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // url: "http://localhost:3001/v1/user/signup",
  async function reqToServer() {
    const call = await axios({
      method: "post",
      url: "/v1/user/signup",
      data: {
        firstName: FirstName,
        lastName: LastName,
        email: email,
        password: password,
      },
    });
    console.log("sign up ", call.data);
    // return call.data;
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    //console.log(FirstName, LastName, email, password);
    // console.log("form submitted");

    /**
     * problem statement -- sign up the user make a req to server & get response
     *
     * core :
     * use axios and make a post req
     */
    if (reqToServer()) {
      console.log("user added");
      navigate("/signin");
    } else {
      console.log("Error in sign up");
    }
  }

  return (
    <div className="bg-gradient-to-r from-white to-purple-400  h-screen flex justify-center items-center">
      <div className="max-w-md mt-10 mx-auto overflow-hidden bg-white rounded-lg shadow-lg border-l-8 border-pink-500">
        <div className=" p-4">
          <Heading label="Sign Up" />
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className="flex flex-col justify-center">
            <div>
              <Input
                label="FirstName"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              ></Input>
            </div>

            <div>
              <Input
                label="LastName"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              ></Input>
            </div>
            <div>
              <Input
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </div>

            <div>
              <Input
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
            </div>

            <div className="mx-auto">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
