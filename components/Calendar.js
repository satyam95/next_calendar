import { useDate } from "@/hooks/useDate";
import { useEffect, useState } from "react";
import Day from "./Day";
import DeleteEventModal from "./DeleteEventModal";
import Header from "./Header";
import NewEventModal from "./NewEventModal";
import Weekday from "./Weekday";

export default function Calendar() {
  const [monthPointer, setMonthPointer] = useState(0);
  const [clicked, setClicked] = useState();

  const [events, setEvents] = useState();

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    storedEvents !== "undefined" ? setEvents(JSON.parse(storedEvents)) : [];
  }, []);

  const eventForDate = (date) => events?.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, monthPointer);

  return (
    <>
      <div className="h-screen p-2 container mx-auto">
        <div className="h-[98vh]">
          <div className="h-[15vh] flex flex-col justify-evenly">
            <Header
              dateDisplay={dateDisplay}
              onNext={() => setMonthPointer(monthPointer + 1)}
              onBack={() => setMonthPointer(monthPointer - 1)}
            />
            <Weekday />
          </div>
          <div className="grid h-[83vh] grid-cols-7 text-center gap-2 auto-rows-[minmax(0,_16.6vh)]">
            {days.map((day, index) => (
              <Day
                key={index}
                day={day}
                onClick={() => {
                  if (day.value !== "padding") {
                    setClicked(day.date);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {clicked && !eventForDate(clicked) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setEvents([...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      )}
      {clicked && eventForDate(clicked) && (
        <DeleteEventModal
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter((e) => e.date !== clicked));
            setClicked(null);
          }}
        />
      )}
    </>
  );
}
