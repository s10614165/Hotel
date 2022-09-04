
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Swipt = (props) => {
  const imageUrl = props.imageUrl
  const renderImg = () => {
    return imageUrl.map(Img => {

      return <SwiperSlide onClick={() => { props.toggleChange(!props.popupState) }}><img src={Img} alt="" /></SwiperSlide>
    })
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={5000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {renderImg()}
      </Swiper>

    </>
  );
}

export default Swipt