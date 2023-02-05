export default function Header({ onNext, onBack, dateDisplay }) {
  return (
    <div className="flex justify-between items-center">
      <button onClick={onBack} className="text-base font-medium">
        Back
      </button>
      <div className="text-2xl font-semibold">{dateDisplay}</div>
      <button onClick={onNext} className="text-base font-medium">
        Next
      </button>
    </div>
  );
}
