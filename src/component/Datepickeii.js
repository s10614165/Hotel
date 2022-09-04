import { Calendar } from 'react-date-range';
import { subDays, addDays } from 'date-fns'
import { useState } from 'react'

const CalendarPickerii = (props) => {
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
        if (item < state[0].startDate) {
          alert('不可選擇小於CheckIn日期')
          return setState((p) => {
            return [
              {
                startDate: p[0].startDate,
                endDate: addDays(p[0].startDate, 1),
                key: 'selection'
              }
            ]
          })
        } else {
          return setState((p) => {
            return [
              {
                startDate: p[0].startDate,
                endDate: item,
                key: 'selection'
              }
            ]
          })
        }




      }}
      date={props.state[0].endDate}
      minDate={new Date()}
      showMonthAndYearPickers={false}

      disabledDates={props.bookingDay !== null ? foMateBookingDayTOIso() : []}

    />
  )
}


export default CalendarPickerii