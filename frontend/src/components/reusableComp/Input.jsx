export default function Input({ label, type, value, onChange }) {
  return (
    <div className="mt-4 ml-4  ">
      <label className="m-2 mr-4 font-semibold">{label}</label>
      <br />
      <input
        type={type}
        value={value}
        onChange={onChange}
        className=" mt-2 mr-10 ml-4 px-4 py-2 border rounded-full shadow-md focus:outline-none focus:border-blue-500"
      ></input>
    </div>
  );
}
