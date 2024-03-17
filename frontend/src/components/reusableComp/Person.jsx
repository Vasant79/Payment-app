import SendMoney from "./SendMoney";

export default function Person({ firstname, lastname }) {
  // <span className="font-base font-semibold">{`${firstname} ${lastname}`}</span>
  // <SendMoney firstname={firstname} lastname={lastname} />
  return (
    <div>
      <div className="max-w-md mt-10 mx-auto overflow-hidden rounded-lg shadow-lg border-l-8 border-purple-500">
        <div className="p-6">
          <h2 className="text-gray-800 text-xl font-medium mb-2">
            <div className=" flex justify-around">
              <span className="pt-6 font-base font-semibold">{`${firstname} ${lastname}`}</span>
              <SendMoney firstname={firstname} lastname={lastname} />
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
