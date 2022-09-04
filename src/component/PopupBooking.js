import Amenities from "./Amenities"
import bookw from "../img/bookw.svg"
import mesegge from "../img/mesegge.svg"
import card from "../img/card.svg"
import CalendarPicker from './DatePicker';
import nextimg from '../img/neset.svg'
import CalendarPickerii from './Datepickeii'
import { useState } from "react"
import { format, eachDayOfInterval, isWeekend, isFriday, subDays, isSameDay, formatDistance, isAfter } from 'date-fns'
import axios from 'axios';
import React from "react";
import { useParams } from 'react-router-dom';
import PostState from '../component/PostState'
import closeimg from '../img/close.svg'
const Authorization = 'Bearer wBaeszD7xY40wcaUWDWvROq8HfaQOBeR2YaUo8XrpgEULOKO44j553I2EMM2'

const BookingNow = (props) => {
  const { id } = useParams();
  const [firstpopup, setFirstpopup] = useState(false)
  const [secondpopup, setSecondpopup] = useState(false)
  const [postpPopupState, setPostPopupState] = useState(false)
  const [postresState, setPostresState] = useState(false)
  const {
    amenitie, GuestMax, name, Bed, descriptionShort,
    normalDayPrice, holidayPrice, checkInAndOut, setState, state, bookingDay, setPopupBooknowState, normalPrice, holiPrice } = props
  const handleCleanderPopup = (e) => {
    e.preventDefault()
    const { name } = e.target
    if (name === 'firstcleander') {
      setFirstpopup(p => { return !p })
      return
    }
    setSecondpopup(p => { return !p })

  };
  const [fullinput, setinput] = useState({
    Name: "",
    phone: ""
  });
  const phoneregEx = /^09[0-9]{8}$/;
  function handleChange(e) {
    const { value, name } = e.target;
    setinput((preValue) => {
      if (name === "phone") {
        return {
          Name: preValue.Name,
          phone: value
        };
      } else if (name === "name") {
        return {
          Name: value,
          phone: preValue.phone
        };
      }
    });
  }
  const checkphone = () => {
    let result = phoneregEx.test(fullinput.phone)

    return result
  }
  // console.log(fullinput)
  let eachDays = []
  let holiday = 0;
  let nomalday = 0;
  let totoalday;
  let totoalprice = 0
  let BookingDay = []
  let restultt = [];
  let formateeachday = []
  let resultforEachBookingDay = []
  const foMateBookingDayTOIso = () => {
    let fomate = [];
    props.bookingDay.forEach(day => {
      fomate.push(new Date(day))
    })
    return fomate
  }
  BookingDay.push(foMateBookingDayTOIso())
  if (!isSameDay(state[0].endDate, state[0].startDate)) {


    totoalday = formatDistance(state[0].startDate, state[0].endDate).split(' ')
    holiday = 0
    nomalday = 0

    // console.log(BookingDay)


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
  } else {
    totoalday = [1]
  }
  eachDays.forEach(day => {
    formateeachday.push(format(day, 'yyyy-MM-dd'))
  })
  const postbooking = (e) => {
    console.log(e.target)
    if (fullinput.Name !== '' && !resultforEachBookingDay.includes(true)) {
      axios.post(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`

        , {
          "name": fullinput.Name,
          "tel": fullinput.phone,
          "date": formateeachday
        }, { headers: { Authorization: Authorization } }).then(res => {
          setPostPopupState(true)
          setPostresState(true)
        }).catch((err) => {
          setPostPopupState(true)
          setPostresState(false)
        })

    } else (alert('請填寫完整'))
  }

  BookingDay[0].forEach(day => {
    restultt.push(
      isSameDay(new Date(day), new Date(state[0].startDate))

    )
    restultt.push(
      isSameDay(new Date(day), new Date(state[0].endDate))

    )
    eachDays.forEach(theeachday => {
      if (isSameDay(new Date(theeachday), new Date(day))) {
        resultforEachBookingDay.push(true)
      }
    })
  })
  return (

    <div className="Bookingpopup df ">
      <div className="bookingInfo">
        <div className="bookingFrom df jcc aic">

          <div className="inputarea">
            <h6 className="h6">姓名</h6>
            <input name="name" type="text" placeholder="姓名" onChange={handleChange} />
            {fullinput.Name !== '' ? '' : <div className="WorringRepeat">姓名不能為空</div>}
            <h6 className="h6">手機號碼</h6>
            <input name="phone" type="tel" placeholder="電話" onChange={handleChange} />
            {checkphone() !== false ? '' : <div className="WorringRepeat">手機必須為10個號碼，且為09開頭</div>}
            <h6 className="h6">入住日期</h6>
            <input name="firstcleander" type="text" className="firstdate" onClick={handleCleanderPopup} value={format(state[0].startDate, 'yyyy-MM-dd')} />
            {firstpopup ? <CalendarPicker
              state={state}
              setState={setState}
              maxDate={state[0].endDate}
              bookingDay={bookingDay} /> : null}


            <h6 className="h6">退房日期</h6>
            <input name="secondcleander" type="text" className="secondate" value={format(state[0].endDate, 'yyyy-MM-dd')} onClick={handleCleanderPopup} />
            {secondpopup ? <CalendarPickerii
              state={state}
              setState={setState}
              minDate={state[0].startDate}
              bookingDay={bookingDay} /> : null}
            <span className="counttottal">
              {isSameDay(state[0].startDate, state[0].endDate) ? '' : `${Number(totoalday[0]) === 1 ? 1 : Number(totoalday[0]) + 1}天${nomalday !== 0 ? `，${nomalday}晚平日` : ''}${holiday !== 0 ? `，${holiday}晚假日` : ''}`}
            </span>
            <div className="decerotline"></div>
            {phoneregEx.test(fullinput.phone)
              ? isSameDay(state[0].startDate, state[0].endDate)
                ? <div className="WorringRepeat">入住日期與退房日期不能相同</div>
                : !restultt.includes(true) && resultforEachBookingDay.length > 0
                  ? <div className="WorringRepeat">預約期間已有訂房</div>
                  : <div className="postinfo" onClick={postbooking}>確認送出</div>
              : <sapn className='WorringRepeat'>電話未填寫正確</sapn>}

          </div>

        </div>

        <div className="Roominfo">
          <div className='RoomTitle df jcsb'>
            <div className="titleforbooking">
              <h1 className='h3'>{name}</h1>
              <div className="Notice_hairline__2vVyh"></div>
            </div>

          </div>

          <ul className='checkTime h6'>
            <li>{
              `${GuestMax}人・
            ${Bed}・
            ${amenitie.Breakfast ? "附早餐" : "有早餐"}・
            ${descriptionShort['Private-Bath']} 間浴室・
           ${descriptionShort.Footage} 平方公尺
            `}</li>
            <li className="h6">{`平日（一～四）價格：${normalDayPrice} / 假日（五〜日）價格：${holidayPrice} `} </li>
          </ul>
          <div className='amenities'>
            <Amenities amenitie={amenitie} />
          </div>
          <div className="titleforbooking">
            <h6 className="h6 infotitle">訂房資訊</h6>
            <div className="Notice_hairline__2vVyh"></div>
          </div>


          <ul className="infocontent">
            <li>{`入住時間：最早${checkInAndOut.checkInEarly}，最晚${checkInAndOut.checkInLate};退房時間：${checkInAndOut.checkOut}，請自行確認行程安排`}</li>
            <li>平日定義週一至週四；假日定義週五至週日及國定假日。</li>
            <li>好室旅店全面禁止吸菸。</li>
            <li>若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。</li>
          </ul>
          <div className="titleforbooking">
            <h6 className="h6 infotitle">預約流程</h6>
            <div className="Notice_hairline__2vVyh"></div>
          </div>

          <div className="bookingprosses df jcsb aic">
            <div className="prosse">
              <div className="prossesimg df jcc aic"><img src={bookw} alt="" /></div>
              <div className="prossestext df jcc aic">送出線上預約單</div>
            </div>
            <img src={nextimg} alt="" />
            <div className="prosse">
              <div className="prossesimg df jcc aic"><img src={mesegge} alt="" /></div>
              <div className="prossestext df jcc aic">系統立即回覆是否預訂成功 並以簡訊發送訂房通知 (若未收到簡訊請來電確認)</div>
            </div>
            <img src={nextimg} alt="" />
            <div className="prosse">
              <div className="prossesimg df jcc aic"><img src={card} alt="" /></div>

              <div className="prossestext df jcc aic">入住當日憑訂房通知 以現金或刷卡付款即可 (僅接受VISA.JCB.銀聯卡)</div>
            </div>


          </div>
          <img className="close" src={closeimg} alt="" onClick={() => { setPopupBooknowState(false) }} />
        </div>


      </div>
      {postpPopupState === true ? <PostState poststate={postresState} setPostPopupState={setPostPopupState} /> : ''}


    </div>


  )
}


export default BookingNow