import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, subDays, addDays, getDay, closestTo } from 'date-fns'


const DatePick = () => {
  const BookDate = [new Date('2022-09-15'), new Date('2022-10-15')]
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    console.log(dates)
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

  };
  const limitMaxDay = () => {
    let result = closestTo(new Date(startDate), BookDate);
    console.log(result)
    return result
  }
  // console.log(limitMaxDay())
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
  console.log(startDate, endDate)
  return (
    <DatePicker
      // selected={startDate}
      onChange={onChange}

      startDate={startDate}
      endDate={endDate}
      minDate={new Date()}
      maxDate={addDays(new Date(), 90)}
      dateFormatCalendar='yyyy/MM/dd'
      dateFormat="yyyy-MM-dd"
      // filterDate={isWeekday}
      includeDateIntervals={[{ start: new Date(startDate), end: new Date(2022, 8, 27) },
      ]}
      excludeDates={[new Date('2022-09-19'), new Date('2022-09-15')]}
      selectsRange={true}
      selectsDisabledDaysInRange={false}
      inline
    />
  );
}

export default DatePick