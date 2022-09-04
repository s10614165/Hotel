import React from "react";

import wifi from '../img/Wi-Fi.svg'
import airconditioner from '../img/Air-Conditioner.svg'
import breakfast from '../img/Breakfast.svg'
import childfriendly from '../img/Child-Friendly.svg'
import greatview from '../img/Great-View.svg'
import minibar from '../img/Mini-Bar.svg'
import petfriendly from '../img/Pet-Friendly.svg'
import refrigerator from '../img/Refrigerator.svg'
import roomservice from '../img/Room-Service.svg'
import smokefree from '../img/Smoke-Free.svg'
import sofa from '../img/Sofa.svg'
import television from '../img/Television.svg'
import imgtrue from '../img/true.svg'
import imgfalse from '../img/false.svg'

const Amenities = (props) => {
  const WIFI = {
    src: wifi,
    name: 'Wi-fi',
  }

  const { amenitie } = props
  let ary = [];
  Object.entries(amenitie).forEach(item => {
    ary.push({ [`${item[0]}`]: item[1] })
  })
  return (
    <>

      <div className={`amenitieStatus ${amenitie['Wi-Fi'] == true ? "" : 'statusfalse'}`}>
        <img src={wifi} alt="" />
        {amenitie['Wi-Fi'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>

      <div className={`amenitieStatus ${amenitie['Air-Conditioner'] == true ? "" : 'statusfalse'}`}>
        <img src={airconditioner} alt="" />
        {amenitie['Air-Conditioner'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>



      <div className={`amenitieStatus ${amenitie['Breakfast'] == true ? "" : 'statusfalse'}`}>
        <img src={breakfast} alt="" />
        {amenitie['Breakfast'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>



      <div className={`amenitieStatus ${amenitie['Child-Friendly'] == true ? "" : 'statusfalse'}`}>
        <img src={childfriendly} alt="" />
        {amenitie['Child-Friendly'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>



      <div className={`amenitieStatus ${amenitie['Great-View'] == true ? "" : 'statusfalse'}`}>
        <img src={greatview} alt="" />
        {amenitie['Great-View'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>


      <div className={`amenitieStatus ${amenitie['Mini-Bar'] == true ? "" : 'statusfalse'}`}>
        <img src={minibar} alt="" />
        {amenitie['Mini-Bar'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>


      <div className={`amenitieStatus ${amenitie['Pet-Friendly'] == true ? "" : 'statusfalse'}`}>
        <img src={petfriendly} alt="" />
        {amenitie['Pet-Friendly'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>


      <div className={`amenitieStatus ${amenitie['Refrigerator'] == true ? "" : 'statusfalse'}`}>
        <img src={refrigerator} alt="" />
        {amenitie['Refrigerator'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>



      <div className={`amenitieStatus ${amenitie['Room-Service'] == true ? "" : 'statusfalse'}`}>
        <img src={roomservice} alt="" />
        {amenitie['Room-Service'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>



      <div className={`amenitieStatus ${amenitie['Smoke-Free'] == true ? "" : 'statusfalse'}`}>
        <img src={smokefree} alt="" />
        {amenitie['Smoke-Free'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>

      <div className={`amenitieStatus ${amenitie['Sofa'] == true ? "" : 'statusfalse'}`}>
        <img src={sofa} alt="" />
        {amenitie['Sofa'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>

      <div className={`amenitieStatus ${amenitie['Television'] == true ? "" : 'statusfalse'}`}>
        <img src={television} alt="" />
        {amenitie['Television'] == true ? <img src={imgtrue} /> : <img src={imgfalse} />}
      </div>



    </>

  )
}

export default Amenities

