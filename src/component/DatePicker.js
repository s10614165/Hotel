import { Calendar } from 'react-date-range';
import { isAfter } from "date-fns";
import { subDays, addDays } from 'date-fns'

import { useState } from 'react'

const CalendarPicker = (props) => {
  const [date, setDate] = useState(null);
  const { setState, state } = props
  console.log()

  const foMateBookingDayTOIso = () => {
    let fomate = [];
    props.bookingDay.forEach(day => {
      fomate.push(new Date(day))
    })
    return fomate
  }


  return (


    <Calendar
      onChange={item => {
        if (item > state[0].endDate) {
          alert('不可選擇晚於Checkout日期')
          return setState((p) => {
            return [
              {
                startDate: subDays(p[0].endDate, 1),
                endDate: p[0].endDate,
                key: 'selection'
              }
            ]
          })
        } else {
          return setState((p) => {
            return [
              {
                startDate: item,
                endDate: p[0].endDate,
                key: 'selection'
              }
            ]
          })
        }

      }


      }
      date={props.state[0].startDate}
      minDate={new Date()}
      showMonthAndYearPickers={false}

      disabledDates={props.bookingDay !== null ? foMateBookingDayTOIso() : []}

    />
  )
}


export default CalendarPicker