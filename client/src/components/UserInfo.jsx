import { MdOutlineCurrencyRupee } from "react-icons/md";

function UserInfo() {
  let rupees = 50000000;

  return (
    <div className="mt-10 py-10 w-full flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
      <div className="mx-5 mb-2">
        <span className="text-xl  ">User : </span>
        <span className="text-xl "> Vasant Sing Negi</span>
      </div>

      <div className="relative mx-5">
        <span className="text-xl">Balance : </span>
        <MdOutlineCurrencyRupee className="inline relative bottom-1 left-1  mt-1 mx-1 h-5 w-5 " />
        <span className="text-xl">{rupees.toLocaleString("en-IN")} </span>
      </div>
    </div>
  );
}

export default UserInfo;
