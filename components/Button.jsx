"use client";

export default function Button({ id, children }) {
  const handleClick = (id) => {
    console.log(`Clicked on ${id}`);
    alert(`Tricked to Click of ID : ${id}`);
  };
  return (
    <button
      onClick={() => {
        handleClick(id);
      }}
      className={`px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md m-4 bg-green-600`}
    >
      {children}
    </button>
  );
}
