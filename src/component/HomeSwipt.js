import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import home1 from '../img/home1.png'
import home2 from '../img/home2.png'
import home3 from '../img/home3.png'
import home4 from '../img/home4.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App(props) {


  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="homeSwiper"
      >
        <SwiperSlide><img src={home1} alt="home1" /></SwiperSlide>
        <SwiperSlide><img src={home2} alt="home2" /></SwiperSlide>
        <SwiperSlide><img src={home3} alt="home3" /></SwiperSlide>
        <SwiperSlide><img src={home4} alt="home4" /></SwiperSlide>
      </Swiper>
    </>
  );
}
