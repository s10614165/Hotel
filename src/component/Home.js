import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Swiper from 'swiper';
import HomeSwipt from './HomeSwipt'
const Authorization = 'Bearer wBaeszD7xY40wcaUWDWvROq8HfaQOBeR2YaUo8XrpgEULOKO44j553I2EMM2'




const Home = () => {
  const [Rooms, setRooms] = useState([])
  const [RoomImg, setRoomImg] = useState([])
  const getAllRooms = async () => {
    return await axios
      .get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
        { headers: { Authorization: Authorization } })
      .then(res => { setRooms(res.data.items); })
  }


  const RenderImg = () => {
    return Rooms.map((roomsInfo, index) => {
      return (
        <Link to={`/${roomsInfo.id}`}>
          <li className='homeImgLi' key={index}>

            <img style={{ width: '275px', height: '275px' }} src={roomsInfo.imageUrl} alt={roomsInfo.name} />
            <span className='Roomname' >{roomsInfo.name}</span>
          </li></Link>
      )
    })
  }
  console.log(RoomImg)
  useEffect(() => {
    getAllRooms()
  }, []);
  return (
    <>
      <div className='m_homepage'>
        <div className='HomeLogo'>

          <img src="https://hsuchihting.github.io/Hotel_booking/img/logo.svg" alt="" className='MainLogo' />
          <span>好室旅店。HOUSE HOTEL <p>花蓮縣花蓮市國聯一路1號</p> <p>03-8321155</p>HOUSE@HOTEL.COM</span>
        </div>
        <div className='Homepage'>

          <ul className='HomepageRoomImg'>
            <RenderImg />
          </ul>
        </div>

      </div>
      <div className='m_Swipt'>
        <HomeSwipt />
      </div>
    </>
  )
}


export default Home