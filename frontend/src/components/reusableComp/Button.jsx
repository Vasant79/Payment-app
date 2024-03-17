export default function Button({ children, type, onClick, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className="m-4  bg-pink-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
}
