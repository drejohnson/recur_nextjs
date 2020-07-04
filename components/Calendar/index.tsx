import React, { useState, useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import dayjs, { OpUnitType } from "dayjs";
import Month from "components/Month";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDay = dayjs();

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(currentDay);
  const calendarRef = useRef(null);

  const currentYear = date.year();
  // gets current month by index
  const currentMonth = date.month();
  const daysInMonth = date.daysInMonth();
  const firstDayOfMonth = dayjs(`${currentYear}-${currentMonth + 1}-1`);
  const lastDayOfMonth = dayjs(
    `${currentYear}-${currentMonth + 1}-${daysInMonth}`
  );
  const weekDayOfFirstDay = firstDayOfMonth.day();
  const weekDayOfLastDay = lastDayOfMonth.day();

  const handlePrev = (value: OpUnitType = "month") => {
    setDate(date.subtract(1, value));
  };

  const handleNext = (value: OpUnitType = "month") => {
    setDate(date.add(1, value));
  };

  const intersection = useIntersection(calendarRef, {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  // intersection && intersection.intersectionRatio < 0.25
  //   ? handlePrev()
  //   : handleNext()

  // useEffect(() => {
  //   console.log(firstDayOfMonth)
  //   console.log('weekDayOfFirstDay', weekDayOfFirstDay)
  // }, [firstDayOfMonth, weekDayOfFirstDay])
  return (
    <div className="calendarView" ref={calendarRef}>
      <div className="header">
        <button type="button" className="prev" onClick={() => handlePrev()}>
          &lt;
        </button>
        <h3 className="heading">{date.format("MMM DD YYYY")}</h3>
        <button type="button" className="next" onClick={() => handleNext()}>
          &gt;
        </button>
      </div>
      <Month date={date} />
    </div>
  );
}
