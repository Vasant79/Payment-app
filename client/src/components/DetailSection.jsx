import UserInfo from "./UserInfo";
import SendMoney from "./SendMoney";

function DetailSection() {
  return (
    <div className="max-w-lg mt-20 bg-white flex flex-col justify-around items-center rounded-lg ">
      <div className="max-w-sm w-full m-10">
        <UserInfo />
      </div>

      <div className="max-w-sm w-full m-5">
        <SendMoney />
      </div>
    </div>
  );
}

export default DetailSection;
