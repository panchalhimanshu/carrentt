import React, { useContext, useEffect, useState } from 'react';
import "./ListingGrid.css"
import NavBarPart from '../navbar/NavBarPart';
import ListingcomonCom from './ListingcomonCom';
import { Link, useNavigate } from 'react-router-dom';
import {CarsApi} from '../Cardata/CarsApi';
import { Carsdata } from '../App';
import Footer from '../Footer/Footer';
import {CiHeart} from 'react-icons/ci'
import {FaStar} from 'react-icons/fa'

function LsitingGrid({Handleaddcart}) {
  const [griddata,setgriddata] = useState(CarsApi)
  const {carssetdetailes} = useContext(Carsdata)
  const [minprice,setminprice] = useState(0)
  const [maxprice,setmaxprice] = useState(1000)
const Navigate = useNavigate()



useEffect(()=>{
  window.scrollTo({top:0,left:0})
})

 
    
 
// Rangefilter

const handlerange = (e)=>{
  setmaxprice(e.target.value)
}
 const filteratedata = griddata.filter((item) =>item.price >= minprice && item.price <= maxprice)
 
// Rangefilter'



  return (
    <div>
      <NavBarPart/>
    <div className='Listinggrid_container'>
 
 <ListingcomonCom/>
    
 

 <div className='Listinggrid_Price'> 
  ${minprice} - ${maxprice} <br />
  <input type="range" min={'0'} max={'1000'} value={maxprice} onChange={handlerange}/>
 </div>


     
     

 <div className='cards'>
{ 
filteratedata &&
filteratedata.map((cars,carsid)=>(

   <div className='card' key={carsid}>
   <div className='Car_img'>
    <div className='Car_main_img' onClick={()=>{carssetdetailes(cars) ; Navigate('/listing/listingdetails')}}> <img src={cars.url} alt="" /> </div>
     <div className='Img_icons'><CiHeart/></div>
     <div className='model_name'>{cars.modelname}</div>
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
     <button className='Rent_btn'> <Link to={'/addcart'} className='Link_tag'  onClick={()=>{Handleaddcart(cars) }}> <i className='bx bxs-calendar-alt'></i>Rent Now </Link></button>
     {/* <a onClick={(e)=>{carssetdetailes(Car) }} className='Listinglist_Rent' target='_blank' href='/listing/listingdetails'>Rent Now</a> */}
   </div>
</div>
 ))


}
</div>









    </div>

   <Footer/>
    </div>
  );
}

export default LsitingGrid;
