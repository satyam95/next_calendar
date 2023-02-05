import { useState } from "react";

export default function NewEventModal({ onSave, onClose }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-stone-200 rounded-lg p-8 w-11/12 max-w-xl">
        <h2 className="text-3xl text-black font-semibold">Add Event</h2>
        <input
          className="block bg-stone-100 w-full border-none rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-none focus:ring-none mt-10 mb-4"
          placeholder="Add a new event..."
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {error ? "error" : ""}
        <div className="flex">
          <button
            onClick={() => {
              if (title) {
                setError(false);
                onSave(title);
              } else {
                setError(true);
              }
            }}
            className="font-bold rounded-[10px] bg-green-400 text-white py-3 px-3.5 text-base leading-[18px] min-w-[150px] mr-2.5"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="font-bold rounded-[10px] bg-red-600	text-white py-3 px-3.5 text-base leading-[18px] min-w-[150px] mr-2.5"
          >
            Cancle
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen z-10 bg-black opacity-80"></div>
    </>
  );
}
