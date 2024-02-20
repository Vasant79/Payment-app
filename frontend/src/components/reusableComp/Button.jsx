export default function Button({ children, type, ...props }) {
  return (
    <div>
      <button
        type={type}
        {...props}
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </button>
    </div>
  );
}
