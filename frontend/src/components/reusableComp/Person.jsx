import SendMoney from "./SendMoney";

export default function Person({ firstname, lastname }) {
  return (
    <div>
      {`${firstname} ${lastname}`}
      <SendMoney firstname={firstname} lastname={lastname} />
    </div>
  );
}
