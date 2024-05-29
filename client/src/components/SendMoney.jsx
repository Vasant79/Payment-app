import { useState, useMemo } from "react";
import { debounce } from "lodash";

function SendMoney() {
  const [name, setName] = useState("");

  const debouncedReq = useMemo(() => {
    return debounce((value) => {
      console.log("req to get person to pay money");
    }, 2000);
  }, []);

  function handleSearch(event) {
    let value = event.target.value;
    setName(value);

    debouncedReq(value);
  }

  return (
    <div className="w-full">
      <input
        className="w-full max-w-md px-4 py-2 mx-2 rounded-full border focus:border-blue-400  focus:outline-none shadow"
        type="text"
        placeholder="Search ...."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SendMoney;
