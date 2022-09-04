import React from 'react'
import axios from 'axios';
import { addDays } from "date-fns";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swipt from './Swipt'
import Amenities from './Amenities';
import CountNight from './CountNitght';
import NewDatePick from './NewDatePIck';
// import CalendarPicker from './DatePicker';
// import CalendarPickerii from './Datepickeii'
import BookingNow from './PopupBooking'

const Authorization = 'Bearer wBaeszD7xY40wcaUWDWvROq8HfaQOBeR2YaUo8XrpgEULOKO44j553I2EMM2'


const RoomInfo = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection'
    }
  ]);
  const [Room, setRoom] = useState([]);
  const [RoomImg, setRoomImg] = useState([]);
  const [descriptionShort, setDescriptionShort] = useState([]);
  const [amenities, setamenities] = useState([]);
  const [checkInAndOut, setcheckInAndOut] = useState([]);
  const { id } = useParams();
  const [description, setdescription] = useState('');
  const { name, normalDayPrice, holidayPrice } = Room;
  const { GuestMax, Bed } = descriptionShort;
  const [popupState, setPopupState] = useState(false)
  const [popupBooknowState, setPopupBooknowState] = useState(false)
  const [bookingDay, setBookingDay] = useState([])

  const renderdescription = () => {
    let splitdescription = description.split('.')
    return splitdescription.map(item => {
      return item !== '' ? <li>{item}</li> : null

    })
  }
  // console.log(bookingDay)

  const getRoom = async () => {
    return await axios
      .get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`,
        { headers: { Authorization: Authorization } })
      .then(res => {
        setRoom(...res.data.room);
        setRoomImg(res.data.room[0].imageUrl);
        setDescriptionShort(res.data.room[0].descriptionShort);
        setamenities(res.data.room[0].amenities);
        setcheckInAndOut(res.data.room[0].checkInAndOut);
        setdescription(res.data.room[0].description)
        setBookingDay(res.data.booking.map(item => { return item.date }))
      })
  }
  useEffect(() => {
    getRoom()
  }, []);

  return (
    <>
      <div className='m_RoomInfo'>
        <div className='Swipt'>
          <Swipt
            imageUrl={RoomImg}
            toggleChange={setPopupState}
            popupState={popupState}
          />
          <CountNight
            state={state}
            normalPrice={normalDayPrice}
            holiPrice={holidayPrice}
            bookingDay={bookingDay} />

          <div className="booknoww" onClick={() => { setPopupBooknowState(!popupBooknowState) }}>Booking now</div>
          <div className="backtohome">
            <Link to={'/'}>
              {`< 返回其他房型`}
            </Link></div>
          {/* <CalendarPicker
            state={state}
            setState={setState}
            bookingDay={bookingDay} />
          <CalendarPickerii
            state={state}
            setState={setState}
            bookingDay={bookingDay} /> */}
        </div>

        <div className='Info'>

          <div className='RoomTitle df jcsb'>
            <h1 className='h1'>{name}</h1>
            <span className='h7'>{
              `${GuestMax}人・
            ${Bed}・
            ${amenities.Breakfast ? "附早餐" : "有早餐"}・
            ${descriptionShort['Private-Bath']}間浴室・
            ${descriptionShort.Footage}平方公尺
            `}</span>
          </div>
          <ul className='checkTime'>
            <li>{`平日（一～四）價格：${normalDayPrice} / 假日（五〜日）價格：${holidayPrice} `} </li>
            <li>{`入住時間：${checkInAndOut.checkInEarly}（最早）/ ${checkInAndOut.checkInLate}（最晚`}</li>
            <li>{`退房時間：${checkInAndOut.checkOut}`}</li>
          </ul>
          <ul className='description'>
            {renderdescription()}
          </ul>
          <div className='amenities'>
            <Amenities amenitie={amenities} />
          </div>
          <NewDatePick
            state={state}
            setState={setState}
            normalPrice={normalDayPrice}
            holiPrice={holidayPrice}
            bookingDay={bookingDay}

          />

        </div>
        {popupBooknowState === true ?
          <BookingNow
            amenitie={amenities}
            GuestMax={GuestMax}
            name={name}
            Bed={Bed}
            descriptionShort={descriptionShort}
            normalDayPrice={normalDayPrice}
            holidayPrice={holidayPrice}
            checkInAndOut={checkInAndOut}
            state={state}
            setState={setState}
            bookingDay={bookingDay}
            setPopupBooknowState={setPopupBooknowState}

          />
          : null}
        {popupState === true ?
          <div className="popupImage">
            <Swipt
              imageUrl={RoomImg}
              toggleChange={setPopupState}
              popupState={popupState}
            /></div> : null
        }


      </div>

    </>
  )
}
export default RoomInfo;