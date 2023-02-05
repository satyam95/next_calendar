export default function DeleteEventModal({ onDelete, eventText, onClose }) {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-stone-200 rounded-lg p-8 w-11/12 max-w-xl">
        <h2 className="text-3xl text-black font-semibold">Event</h2>
        <p className="text-2xl text-black font-semibold mt-10 mb-4">
          {eventText}
        </p>
        <div className="flex">
          <button
            onClick={onDelete}
            className="font-bold rounded-[10px] bg-red-800 text-white py-3 px-3.5 text-base leading-[18px] min-w-[150px] mr-2.5"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="font-bold rounded-[10px] bg-black	text-white py-3 px-3.5 text-base leading-[18px] min-w-[150px] mr-2.5"
          >
            Cancle
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen z-10 bg-black opacity-80"></div>
    </>
  );
}
