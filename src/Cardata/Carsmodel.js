import React, { useContext, useEffect, useMemo, useState } from 'react';
import './Cars.css'
import mazdasy from './CarsImgs/car-icon-01.svg';
import audisy from './CarsImgs/car-icon-02.svg';
import hondasy from './CarsImgs/car-icon-03.svg';
import toyotasy from './CarsImgs/car-icon-04.svg';
import acurasy from './CarsImgs/car-icon-05.svg';
import teslasy from './CarsImgs/car-icon-06.svg';
import {CarsApi} from './CarsApi';
import { Link, useNavigate } from 'react-router-dom';
import {  Addcar, Carsdata } from '../App';
import {CiHeart} from 'react-icons/ci'
import {FaStar} from 'react-icons/fa'



// import {motion} from 'framer-motion'
// import { FFadeIn } from '../Animations';





function Carsmodel({Handleaddcart}) {

  
const [Apidata,setApidata] = useState(CarsApi)
// const [rentdata,showrentdata] = useState(null)
const {carssetdetailes} = useContext(Carsdata) 
const {cartdata}= useContext(Addcar)
const {setcartdata}= useContext(Addcar)


const Navigate = useNavigate()


useEffect(()=>{
   const Apidcr = CarsApi.filter((currentele)=> {return currentele.carcompany === "mazda"})
  // console.log(Apidcr)
   setApidata(Apidcr)
},[])



const handlefilter = (company)=>{
  const Apidcr =  CarsApi.filter((currentele)=> {return currentele.carcompany === company})
  // console.log(Apidcr)
  setApidata(Apidcr)
 }








  return (

   <div className='main-card'>


    <div className='most-popular-cars'>
      <h1>Explore Most Popular Cars</h1>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>

    <div className='Cars_company'>
      <button onClick={()=> handlefilter('mazda')} className={(Apidata[0].carcompany === 'mazda') ? "Color" : "white"} > <img src={mazdasy} alt=""  className='copany_symbol'/>Mazda</button>
      <button onClick={()=> handlefilter('audi')} className={(Apidata[0].carcompany === 'audi') ? "Color" : "white"} > <img src={audisy} alt="" className='copany_symbol'/>Audi</button>
      <button onClick={()=> handlefilter('honda')}  className={(Apidata[0].carcompany === 'honda') ? "Color" : "white"}> <img src={hondasy} alt="" className='copany_symbol'/>Honda</button>
      <button onClick={()=> handlefilter('toyota')} className={(Apidata[0].carcompany === 'toyota') ? "Color" : "white"}> <img src={toyotasy} alt="" className='copany_symbol' />Toyota</button>
      <button onClick={()=> handlefilter('acura')} className={(Apidata[0].carcompany === 'acura') ? "Color" : "white"}> <img src={acurasy} alt=""  className='copany_symbol'/>Acura</button>
      <button onClick={()=> handlefilter('tesla')}  className={(Apidata[0].carcompany === 'tesla') ? "Color" : "white"}> <img src={teslasy} alt=""  className='copany_symbol'/>Tesla</button>
    </div>




    <div className='cards'>

{ 
Apidata &&
Apidata.map((cars,idd)=>(
   <div
   

   className='card' key={idd}>
   <div className='Car_img'>
    <div className='Car_main_img' onClick={()=>{carssetdetailes(cars)  ; Navigate('/listing/listingdetails')}}> <img src={cars.url} alt="" /> </div>
     <div className='Img_icons'><CiHeart/></div>
     <div className='model_name' >{cars.modelname}</div>
   </div>
   <div>
     <h3 className='car_name'>{cars.name}</h3>
     <div className='car_review'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> (5.0)</div>
     <div className='car_info'>
       <div>{cars.gear}</div>
       <div>{cars.Speed}</div>
       <div><i className='bx bx-gas-pump'></i>{cars.engine}</div>
       <div>{cars.stearing}</div>
       <div>{cars.model}</div>
       <div>{cars.sit}</div>
     </div>
     <div className='country_rent'>
       <div className='country'> <i className='bx bx-location-plus'></i>{cars.country}</div>
       <div> <span style={{color : 'red',fontWeight:"700",fontSize:"22px"}}>${cars.price}</span> /Day  </div>
     </div>
     <Link className='Link_tag'>  <button className='Rent_btn' onClick={()=>{Handleaddcart(cars) }}> <i className='bx bxs-calendar-alt'></i>Rent Now </button> </Link>
     {/* <a onClick={(e)=>{carssetdetailes(Car) }} className='Listinglist_Rent' target='_blank' href='/listing/listingdetails'>Rent Now</a> */}
   </div>
</div>
 ))
}

  </div>
   </div>
  
  );

}

export default Carsmodel;
