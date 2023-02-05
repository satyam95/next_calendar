export default function Day({ day, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-1 text-sm uppercase border border-black relative"
    >
      {day.value === "padding" ? "" : day.value}
      {day.event && <div className="event">{day.event.title}</div>}
    </div>
  );
}
