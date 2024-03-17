import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import Person from "./Person";

/**
 *
 * @returns password & refresh token in response fix it
 */

export default function SearchUser() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState([]);

  async function getUser() {
    try {
      let user = await axios.get("/v1/user/bulk", {
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
              key={user._id}
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

  //   <form onSubmit={handleFormSubmit}>
  //   <label>Search user</label>
  //   <input value={name} onChange={(e) => setName(e.target.value)} />
  //   <Button type="submit">Search</Button>
  // </form>

  // {renderSearchList}

  return (
    <div>
      <div className="max-w-md mt-10 mx-auto overflow-hidden rounded-lg shadow-lg border-l-8 border-pink-500">
        <div className="p-6">
          <h2 className="text-gray-800 text-2xl font-semibold mb-2">Pay</h2>
          <p className="text-gray-600 text-sm">
            Transfer money using person's name.
          </p>
          <form onSubmit={handleFormSubmit}>
            <label className="text-gray-800 text-xl font-semibold mb-2">
              Search user
            </label>
            <br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button
              type="submit"
              className="mt-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out"
            >
              Search
            </Button>
          </form>
        </div>
      </div>

      {renderSearchList}
    </div>
  );
}
