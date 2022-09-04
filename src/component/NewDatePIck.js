import { addDays, format, subDays } from "date-fns";
import { formatDistance } from 'date-fns'
import { eachDayOfInterval, isWeekend } from 'date-fns'
// import zhCN from 'date-fns/locale/zh-CN';
import React from "react";
import { useState } from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file






const NewDatePick = (props) => {
  // const [eachDay, setEachDay] = useState([])

  // const [totoalprice, setTotoalPrice] = useState(0)
  // const [holiday, setHoliday] = useState(0)
  // const [nomalday, setNomalday] = useState(0)
  // const [totoalday, setTotoalday] = useState(0)
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 1),
  //     key: 'selection'
  //   }
  // ]);
  const { setState, state } = props




  const foMateBookingDayTOIso = () => {
    let fomate = [];
    props.bookingDay.forEach(day => {
      fomate.push(new Date(day))
    })
    return fomate
  }
  return (
    <DateRange
      editableDateInputs={true}
      onChange={item => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      months={2}
      minDate={new Date()}
      direction="horizontal"
      showMonthAndYearPickers={false}
      rangeColors={[`#38470B`]}
      // color='#38470B'

      disabledDates={props.bookingDay !== null ? foMateBookingDayTOIso() : []}
    />)




}

export default NewDatePick;
