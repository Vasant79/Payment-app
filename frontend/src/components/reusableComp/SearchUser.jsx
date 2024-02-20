import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import Person from "./Person";

export default function SearchUser() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState([]);

  //token for user vasant
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6IjY1ZDQ4NDA5ZGE5ODQzN2Y2YTkyZjkxYyJ9LCJpYXQiOjE3MDg0MjYyNDl9.s_G-erj2Hn5ho2afVVwcfX9md3KE2GkrLwny2k9b0cM";

  async function getUser() {
    try {
      let user = await axios.get("http://localhost:3001/api/v1/user/bulk", {
        headers: {
          Authorization: `${token}`,
        },
        params: {
          name: name,
        },
      });

      console.log("user info ", user.data.user);
      let userInfo = user.data.user;
      setSearch((prevSearch) => [...prevSearch, userInfo]); //had a slight err here
    } catch (err) {
      console.log("error in searching user ", err);
    }
  }
  let renderSearchList =
    search.length > 0
      ? search.map((user) => {
          return (
            <Person
              keys={user._id}
              firstname={user.firstName}
              lastname={user.lastName}
            />
          );
        })
      : null;

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("submitting");
    //make req to server to get the user for money transfer
    getUser();
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Search user</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <Button type="submit">Search</Button>
      </form>

      {renderSearchList}
    </div>
  );
}
