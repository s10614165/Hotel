
import { addDays, format, subDays, isSameDay, isFriday, isAfter } from "date-fns";
import { formatDistanceStrict } from 'date-fns'
import { eachDayOfInterval, isWeekend } from 'date-fns'
import { el } from "date-fns/locale";
// import zhCN from 'date-fns/locale/zh-CN';
import React from "react";
import { useState } from 'react'

const CountNight = (props) => {
  const { state, normalPrice, holiPrice } = props
  //  const { holiday, nomalday, totoalday, eachDays, totoalprice } =props
  let eachDays = []
  let holiday = 0;
  let nomalday = 0;
  let totoalday;
  let totoalprice = 0
  let BookingDay = []
  const foMateBookingDayTOIso = () => {
    let fomate = [];
    props.bookingDay.forEach(day => {
      fomate.push(new Date(day))
    })
    return fomate
  }
  BookingDay.push(foMateBookingDayTOIso())
  // console.log(BookingDay)
  if (!isSameDay(state[0].endDate, state[0].startDate)) {


    totoalday = formatDistanceStrict(state[0].startDate, state[0].endDate, {
      unit: 'day'
    }).split(' ')
    holiday = 0
    nomalday = 0


    if (eachDays !== undefined && !BookingDay.includes(state[0].endDate)) {

      if (isAfter(new Date(state[0].endDate), new Date(state[0].startDate))) {

        if (isSameDay(new Date(state[0].startDate), new Date(subDays(state[0].endDate, 1)))) {
          eachDays = [new Date(state[0].startDate)]
          eachDays.forEach(day => {
            isWeekend(day) || isFriday(day) ? holiday++ : nomalday++
          })
        } else {
          eachDays = eachDayOfInterval({ start: state[0].startDate, end: subDays(state[0].endDate, 1) });
          eachDays.forEach(day => {
            isWeekend(day) || isFriday(day) ? holiday++ : nomalday++
          })
        }


      } else {
        eachDays = [];
      }

    }

    // console.log(holiPrice, normalPrice)
    totoalprice = holiday * Number(holiPrice) + nomalday * Number(normalPrice)
    // console.log(eachDays)

    // console.log(totoalday)
  }

  // console.log(holiday, holiPrice)
  // console.log(nomalday, normalPrice)
  // console.log(totoalprice)
  // console.log(totoalday)
  //   // console.log(state[0].startDate, state[0].endDate)
  //   // console.log(result.totoalday[0])
  //   // console.log(result.eachDay[0])
  //   console.log(`假日${holiday}天,平日${nomalday}天`)
  // }
  console.log(totoalday)
  return (
    <span className="h1 countNight">
      {`$${totoalprice}`}
      <span className="h4">{`/${totoalday !== undefined ? totoalday[0] : 0}晚`}</span>

    </span>
  )

}

export default CountNight